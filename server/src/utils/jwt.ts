import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.js";
import type { UserRole } from "@prisma/client";

export interface JwtPayload {
  id: string;
  email: string;
  role: UserRole;
}

// const options = {
//   expiresIn: env.JWT_ACCESS_EXPIRES_IN,
// } satisfies SignOptions;

export const generateAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET);
};

// export const generateRefreshToken = (payload: JwtPayload): string => {
//   return jwt.sign(payload, env.JWT_SECRET,options);
// };

export const verifyAccessToken = (
  token: string
): JwtPayload => {
  return jwt.verify(
    token,
    env.JWT_SECRET
  ) as JwtPayload;
};

export const verifyRefreshToken = (
  token: string
): JwtPayload => {
  return jwt.verify(
    token,
    env.JWT_SECRET
  ) as JwtPayload;
};