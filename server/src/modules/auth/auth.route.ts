import { Router } from "express";

import authController from "./auth.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  loginSchema,
  registerSchema,
} from "./auth.validator.js";

const router = Router();

/**
 * Authentication
 */

// Register
router.post(
  "/register",
  validate(registerSchema),
  authController.register
);

// Login
router.post(
  "/login",
  validate(loginSchema),
  authController.login
);

// Refresh Access Token
router.post(
  "/refresh",
  authController.refreshToken
);

// Logout
router.post(
  "/logout",
  authenticate,
  authController.logout
);

// Get Logged-in User
router.get(
  "/me",
  authenticate,
  authController.me
);

export default router;