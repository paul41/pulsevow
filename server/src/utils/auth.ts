import crypto from "node:crypto";

export function hashRefreshToken(
  token: string,
): string {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}