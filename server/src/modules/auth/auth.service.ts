import bcrypt from "bcrypt";

import { AuthRepository } from "./auth.repository.js";
import {
  signToken,
  verifyToken,
} from "./jwt.service.js";

import {
  hashRefreshToken,
} from "../../utils/auth.js";

import type {
  LoginDto,
  RegisterDto,
} from "./auth.types.js";

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
      throw new Error(
        "Email already registered.",
      );
    }

    const passwordHash =
      await bcrypt.hash(
        dto.password,
        12,
      );

    const user =
      await this.authRepository.create({
        name,
        email,
        passwordHash,
      });

    const accessToken =
      await signToken({
        sub: user.id,
        email: user.email,
        type: "access",
      });

    const refreshToken =
      await signToken({
        sub: user.id,
        email: user.email,
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
      throw new Error(
        "Invalid email or password.",
      );
    }

    const isValidPassword =
      await bcrypt.compare(
        dto.password,
        user.passwordHash,
      );

    if (!isValidPassword) {
      throw new Error(
        "Invalid email or password.",
      );
    }

    const accessToken =
      await signToken({
        sub: user.id,
        email: user.email,
        type: "access",
      });

    const refreshToken =
      await signToken({
        sub: user.id,
        email: user.email,
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
      throw new Error(
        "User not found.",
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
      throw new Error(
        "Refresh token missing.",
      );
    }

    const payload =
      await verifyToken(token);

    if (
      payload.type !== "refresh"
    ) {
      throw new Error(
        "Invalid refresh token.",
      );
    }

    if (!payload.sub) {
      throw new Error(
        "Invalid refresh token.",
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
      throw new Error(
        "Refresh token is invalid or revoked.",
      );
    }

    if (
      storedToken.revokedAt ||
      storedToken.expiresAt < new Date()
    ) {
      throw new Error(
        "Refresh token is expired or revoked.",
      );
    }

    const user =
      await this.authRepository.findById(
        payload.sub,
      );

    if (!user) {
      throw new Error(
        "User not found.",
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

    const accessToken =
      await signToken({
        sub: user.id,
        email: user.email,
        type: "access",
      });

    const refreshToken =
      await signToken({
        sub: user.id,
        email: user.email,
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