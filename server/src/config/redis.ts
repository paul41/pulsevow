import {Redis} from "ioredis";
import { env } from "./env.js";

export const redis = new Redis({
  host: env.REDIS_HOST,
  port: Number(env.REDIS_PORT),
  maxRetriesPerRequest: null,
  retryStrategy: (times:any) => Math.min(times * 100, 3000),
});

redis.on("connect", () => {
  console.log(`Redis connected: ${env.REDIS_HOST}:${env.REDIS_PORT}`);
});

redis.on("error", (error:Error) => {
  console.error("Redis error:", error);
});