import {
  hashPassword,
  verifyPassword,
} from "../../utils/password.js";

import { AuthRepository } from "./auth.repository.js";

import {
  signToken,
  verifyToken,
} from "../../utils/jwt.js";

import {
  hashRefreshToken,
} from "../../utils/auth.js";

import type {
  LoginDto,
  RegisterDto,
} from "./auth.types.js";

import { ApiError } from "../../utils/api-error.js";

export class AuthService {
  private authRepository =
    new AuthRepository();

  /**
   * Register a new user
   */
  async register(dto: RegisterDto) {
    const email =
      dto.email.trim().toLowerCase();

    const name =
      dto.name.trim();

    const existingUser =
      await this.authRepository.findByEmail(
        email,
      );

    if (existingUser) {
      throw new ApiError(
        "Email already registered.",
        409,
        "EMAIL_ALREADY_REGISTERED",
      );
    }

    const passwordHash =
      await hashPassword(dto.password);

    const user =
      await this.authRepository.create({
        name,
        email,
        passwordHash,
      });

    const accessToken = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      type: "access",
    });

    const refreshToken = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      type: "refresh",
    });

    await this.authRepository.createRefreshToken({
      userId: user.id,
      tokenHash:
        hashRefreshToken(refreshToken),
      expiresAt:
        this.getRefreshTokenExpiry(),
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Login
   */
  async login(dto: LoginDto) {
    const email =
      dto.email.trim().toLowerCase();

    const user =
      await this.authRepository.findByEmail(
        email,
      );

    if (!user) {
      throw new ApiError(
        "Invalid email or password.",
        401,
        "INVALID_CREDENTIALS",
      );
    }

    const isValidPassword =
      await verifyPassword(
        user.passwordHash,
        dto.password,
      );

    if (!isValidPassword) {
      throw new ApiError(
        "Invalid email or password.",
        401,
        "INVALID_CREDENTIALS",
      );
    }

    const accessToken = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      type: "access",
    });

    const refreshToken = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      type: "refresh",
    });

    await this.authRepository.createRefreshToken({
      userId: user.id,
      tokenHash:
        hashRefreshToken(refreshToken),
      expiresAt:
        this.getRefreshTokenExpiry(),
    });

    await this.authRepository.updateLastLogin(
      user.id,
    );

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Logout
   */
  async logout(
    userId: string,
    refreshToken?: string,
  ) {
    if (refreshToken) {
      await this.authRepository.revokeRefreshToken(
        userId,
        hashRefreshToken(refreshToken),
      );

      return;
    }

    await this.authRepository.revokeAllRefreshTokens(
      userId,
    );
  }

  /**
   * Current logged in user
   */
  async getCurrentUser(
    userId: string,
  ) {
    const user =
      await this.authRepository.findById(
        userId,
      );

    if (!user) {
      throw new ApiError(
        "User not found.",
        404,
        "USER_NOT_FOUND",
      );
    }

    return user;
  }

  /**
   * Refresh access token
   */
  async refreshToken(
    token: string,
  ) {
    if (!token) {
      throw new ApiError(
        "Refresh token missing.",
        401,
        "REFRESH_TOKEN_MISSING",
      );
    }

    const payload =
      await verifyToken(token);

    if (
      payload.type !== "refresh"
    ) {
      throw new ApiError(
        "Invalid refresh token.",
        401,
        "INVALID_REFRESH_TOKEN",
      );
    }

    if (!payload.sub) {
      throw new ApiError(
        "Invalid refresh token.",
        401,
        "INVALID_REFRESH_TOKEN",
      );
    }

    const tokenHash =
      hashRefreshToken(token);

    const storedToken =
      await this.authRepository.findRefreshToken(
        payload.sub,
        tokenHash,
      );

    if (!storedToken) {
      throw new ApiError(
        "Refresh token is invalid or revoked.",
        401,
        "INVALID_REFRESH_TOKEN",
      );
    }

    if (
      storedToken.revokedAt ||
      storedToken.expiresAt < new Date()
    ) {
      throw new ApiError(
        "Refresh token is expired or revoked.",
        401,
        "REFRESH_TOKEN_EXPIRED",
      );
    }

    const user =
      await this.authRepository.findById(
        payload.sub,
      );

    if (!user) {
      throw new ApiError(
        "User not found.",
        404,
        "USER_NOT_FOUND",
      );
    }

    /*
     * Refresh-token rotation.
     *
     * Revoke the old refresh token and
     * issue a completely new pair.
     */
    await this.authRepository.revokeRefreshToken(
      user.id,
      tokenHash,
    );

    const accessToken = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      type: "access",
    });

    const refreshToken = await signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      type: "refresh",
    });

    await this.authRepository.createRefreshToken({
      userId: user.id,
      tokenHash:
        hashRefreshToken(refreshToken),
      expiresAt:
        this.getRefreshTokenExpiry(),
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  private getRefreshTokenExpiry() {
    const expiresAt =
      new Date();

    expiresAt.setDate(
      expiresAt.getDate() + 7,
    );

    return expiresAt;
  }
}