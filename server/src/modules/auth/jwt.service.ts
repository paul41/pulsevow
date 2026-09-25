import fs from "node:fs";
import path from "node:path";
import {
  createPrivateKey,
  createPublicKey,
} from "node:crypto";

import {
  SignJWT,
  jwtVerify,
  type JWTPayload,
} from "jose";

const privateKey = createPrivateKey(
  fs.readFileSync(
    path.resolve(
      process.cwd(),
      "keys/jwt-private.pem",
    ),
  ),
);

const publicKey = createPublicKey(
  fs.readFileSync(
    path.resolve(
      process.cwd(),
      "keys/jwt-public.pem",
    ),
  ),
);

const ISSUER =
  process.env.JWT_ISSUER ?? "pulsevow-api";

const AUDIENCE =
  process.env.JWT_AUDIENCE ?? "pulsevow-web";

export type TokenType = "access" | "refresh";

export interface AuthTokenPayload {
  sub: string;
  email: string;
  type: TokenType;
}

const getExpiration = (
  type: TokenType,
) => {
  if (type === "access") {
    return (
      process.env.JWT_ACCESS_EXPIRES_IN ??
      "15m"
    );
  }

  return (
    process.env.JWT_REFRESH_EXPIRES_IN ??
    "7d"
  );
};

export async function signToken(
  payload: AuthTokenPayload,
): Promise<string> {
  return new SignJWT({
    email: payload.email,
    type: payload.type,
  })
    .setProtectedHeader({
      alg: "RS256",
      typ: "JWT",
    })
    .setSubject(payload.sub)
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(
      getExpiration(payload.type),
    )
    .sign(privateKey);
}

export async function verifyToken(
  token: string,
): Promise<JWTPayload> {
  const { payload } = await jwtVerify(
    token,
    publicKey,
    {
      algorithms: ["RS256"],
      issuer: ISSUER,
      audience: AUDIENCE,
    },
  );

  return payload;
}