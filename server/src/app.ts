import express from "express";
import prisma from "./config/prisma.js";
import authRouter from "./modules/auth/index.js"
import { BASE_API_PATH } from "./constants/api.js";
import compression from "compression";
import corsMiddleware from "./config/cors.js";


const app = express();

app.use(express.json());
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
app.use(BASE_API_PATH, authRouter);
export default app;