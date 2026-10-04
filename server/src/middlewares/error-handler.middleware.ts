import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { ApiError } from "../utils/api-error.js";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(error);

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      code: error.code,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong on the server.",
    code: "INTERNAL_ERROR",
  });
}