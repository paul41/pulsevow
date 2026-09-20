import { Queue, Worker, QueueEvents } from "bullmq";
import { Redis } from "ioredis";
import { env } from "../config/env.js";

export const connection = new Redis({
  host: env.REDIS_HOST,
  port: Number(env.REDIS_PORT),
  maxRetriesPerRequest: null
});

export function createQueue(name: string) {
  return new Queue(name, {
    connection,
    defaultJobOptions: {
      removeOnComplete: 1000,
      removeOnFail: 5000,
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    },
  });
}

export function createWorker(
  name: string,
  processor: ConstructorParameters<typeof Worker>[1]
) {
  return new Worker(name, processor, {
    connection,
    concurrency: 10,
  });
}

export function createQueueEvents(name: string) {
  return new QueueEvents(name, {
    connection,
  });
}