import type { Request, Response, NextFunction } from "express";

import { AuthService } from "./auth.service.js";
import type {
  RegisterDto,
  LoginDto,
} from "./auth.types.js";

import {
  setAuthCookies,
  clearAuthCookies,
} from "./auth.cookies.js";

class AuthController {
  private authService = new AuthService();

  /**
   * POST /api/auth/register
   */
  register = async (
    req: Request<{}, {}, RegisterDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result =
        await this.authService.register(req.body);

      // Store tokens in HTTP-only cookies
      setAuthCookies(
        res,
        result.accessToken,
        result.refreshToken
      );

      return res.status(201).json({
        success: true,
        message: "User registered successfully.",
        data: {
          user: result.user,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /api/auth/login
   */
  login = async (
    req: Request<{}, {}, LoginDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result =
        await this.authService.login(req.body);

      // Store tokens in HTTP-only cookies
      setAuthCookies(
        res,
        result.accessToken,
        result.refreshToken
      );

      return res.status(200).json({
        success: true,
        message: "Login successful.",
        data: {
          user: result.user,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /api/auth/refresh
   */
  refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const refreshToken =
        req.cookies?.refresh_token;

      if (!refreshToken) {
        return res.status(401).json({
          success: false,
          message: "Refresh token missing.",
        });
      }

      const result =
        await this.authService.refreshToken(
          refreshToken
        );

      // Replace old cookies with rotated tokens
      setAuthCookies(
        res,
        result.accessToken,
        result.refreshToken
      );

      return res.status(200).json({
        success: true,
        message: "Access token refreshed.",
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /api/auth/logout
   */
  logout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Authentication required.",
        });
      }

      const refreshToken =
        req.cookies?.refresh_token;

      await this.authService.logout(
        userId,
        refreshToken
      );

      clearAuthCookies(res);

      return res.status(200).json({
        success: true,
        message: "Logged out successfully.",
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/auth/me
   */
  me = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Authentication required.",
        });
      }

      const user =
        await this.authService.getCurrentUser(
          userId
        );

      return res.status(200).json({
        success: true,
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthController();