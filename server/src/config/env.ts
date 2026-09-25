import dotenv from "dotenv";

const envFile =
  process.env.NODE_ENV === "development"
    ? ".env.dev"
    : ".env";

dotenv.config({
  path: envFile,
});

console.log(`Loaded environment: ${envFile}`);

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing");
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  DATABASE_URL: process.env.DATABASE_URL!,

  REDIS_HOST: process.env.REDIS_HOST!,

  REDIS_PORT: process.env.REDIS_PORT!,

  JWT_SECRET: process.env.JWT_SECRET!,

  JWT_ACCESS_EXPIRES_IN:
    process.env.JWT_ACCESS_EXPIRES_IN ?? "15m",

  JWT_REFRESH_EXPIRES_IN:
    process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",

  PORT: Number(process.env.PORT || 5000),
};