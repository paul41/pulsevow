import express from "express";
import prisma from "./config/prisma.js";
import authRouter from "./modules/auth/index.js"
import { BASE_API_PATH } from "./constants/api.js";
import compression from "compression";
import corsMiddleware from "./config/cors.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(corsMiddleware);

app.get("/api/health", async (_, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.status(200).json({
    status: "OK",
    database: "Connected"
  });
});

/** App routes */
app.use(`${BASE_API_PATH}/auth`, authRouter);
app.use(errorHandler);

export default app;