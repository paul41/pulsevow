import bcrypt from "bcrypt";

import { AuthRepository } from "./auth.repository.js";

import type { LoginDto, RegisterDto } from "./auth.dto.js";

export class AuthService {
  private authRepository = new AuthRepository();

  /**
   * Register a new user
   */
  async register(dto: RegisterDto) {
    const existingUser = await this.authRepository.findByEmail(dto.email);

    if (existingUser) {
      throw new Error("Email already registered.");
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.authRepository.create({
      name: dto.name,
      email: dto.email,
      passwordHash,
    });

    // JWT generation will be added next
    const accessToken = "ACCESS_TOKEN";
    const refreshToken = "REFRESH_TOKEN";

    await this.authRepository.updateRefreshToken(
      user.id,
      refreshToken
    );

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
    const user = await this.authRepository.findByEmail(dto.email);

    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const isValidPassword = await bcrypt.compare(
      dto.password,
      user.passwordHash
    );

    if (!isValidPassword) {
      throw new Error("Invalid email or password.");
    }

    const accessToken = "ACCESS_TOKEN";
    const refreshToken = "REFRESH_TOKEN";

    await this.authRepository.updateRefreshToken(
      user.id,
      refreshToken
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
  async logout(userId: string) {
    await this.authRepository.updateRefreshToken(userId, null);
  }

  /**
   * Current logged in user
   */
  async getCurrentUser(userId: string) {
    const user = await this.authRepository.findById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }

  /**
   * Refresh access token
   */
  async refreshToken(token: string) {
    if (!token) {
      throw new Error("Refresh token missing.");
    }

    // JWT verification will be implemented later

    return {
      accessToken: "NEW_ACCESS_TOKEN",
    };
  }
}