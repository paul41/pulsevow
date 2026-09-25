import type { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";
import type { RegisterDto, LoginDto } from "./auth.types.js";

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
            const result = await this.authService.register(req.body);

            return res.status(201).json({
                success: true,
                message: "User registered successfully.",
                data: result,
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
            const result = await this.authService.login(req.body);

            return res.status(200).json({
                success: true,
                message: "Login successful.",
                data: result,
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
            const { refreshToken } = req.body;

            const result = await this.authService.refreshToken(refreshToken);

            return res.status(200).json({
                success: true,
                message: "Access token refreshed.",
                data: result,
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
                return res.status(400).json({
                    success: false,
                    message: "User ID is required to logout.",
                });
            }
            await this.authService.logout(userId);

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
            const user = await this.authService.getCurrentUser(req.user!.id);

            return res.status(200).json({
                success: true,
                data: user,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new AuthController();