import { env } from "./env.js";

type LogLevel = "info" | "warn" | "error" | "debug";

function formatMessage(
    level: LogLevel,
    message: string,
    meta?: Record<string, unknown>,
) {
    return JSON.stringify({
        timestamp: new Date().toISOString(),
        level,
        message,
        ...(meta ? { meta } : {}),
    });
}

export const logger = {
    info(message: string, meta?: Record<string, unknown>) {
        console.log(formatMessage("info", message, meta));
    },

    warn(message: string, meta?: Record<string, unknown>) {
        console.warn(formatMessage("warn", message, meta));
    },

    error(message: string, meta?: Record<string, unknown>) {
        console.error(formatMessage("error", message, meta));
    },

    debug(message: string, meta?: Record<string, unknown>) {
        if (
            env.NODE_ENV === "development" ||
            env.NODE_ENV === "staging" ||
            env.NODE_ENV === "production"
        ) {
            console.debug(formatMessage("debug", message, meta));
        }

    },
};
