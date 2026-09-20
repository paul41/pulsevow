import express from "express";
import prisma from "./config/prisma.js";
import authRouter from "./modules/auth/index.js"
import { BASE_API_PATH } from "./constants/api.js";
import compression from "compression";

const app = express();

app.use(express.json());
app.use(compression());

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