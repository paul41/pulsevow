import prisma  from "../../config/prisma.js";
import type { Prisma, User } from "@prisma/client";

export class AuthRepository {
  /**
   * Find user by email
   */
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  /**
   * Find user by id
   */
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * Create user
   */
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  /**
   * Update refresh token
   */
  async updateRefreshToken(
    userId: string,
    refreshToken: string | null
  ): Promise<User> {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        //refreshToken,
        lastLoginAt: new Date(),
      },
    });
  }

  /**
   * Clear refresh token
   */
  async clearRefreshToken(userId: string): Promise<User> {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        //refreshToken: null,
      },
    });
  }
}