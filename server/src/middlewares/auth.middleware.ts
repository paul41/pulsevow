import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { verifyToken } from "../utils/jwt.js";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /**
     * Access token is stored in an
     * HTTP-only cookie.
     */
    const accessToken =
      req.cookies?.access_token;

    if (!accessToken) {
      res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
      return;
    }

    /**
     * Verify:
     * - RS256 signature
     * - issuer
     * - audience
     * - expiration
     */
    const payload =
      await verifyToken(accessToken);

    /**
     * Only access tokens can authenticate
     * normal API requests.
     */
    if (payload.type !== "access") {
      res.status(401).json({
        success: false,
        message: "Invalid access token.",
      });
      return;
    }

    if (!payload.sub || !payload.email) {
      res.status(401).json({
        success: false,
        message: "Invalid access token payload.",
      });
      return;
    }

    /**
     * Attach authenticated user
     * to Express request.
     */
    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (error) {
    /**
     * jose throws errors such as:
     * JWTExpired
     * JWTClaimValidationFailed
     * JWSSignatureVerificationFailed
     * etc.
     */
    res.status(401).json({
      success: false,
      message: "Invalid or expired access token.",
    });
  }
};