import cron from "node-cron";
import { IngestionService } from "../modules/ingestion/ingestion.service.js";

const ingestion = new IngestionService();

/**
 * 📰 Ingestion Job
 * Runs every 15 minutes to fetch and normalize new articles
 * from all active sources.
 */
cron.schedule("*/15 * * * *", async () => {
  const startedAt = Date.now();

  console.log(
    `[CRON] RSS ingestion started at ${new Date().toISOString()}`,
  );

  try {
    await ingestion.ingestAllSources();

    console.log(
      `[CRON] RSS ingestion completed in ${
        Date.now() - startedAt
      }ms`,
    );
  } catch (err) {
    console.error("[CRON] RSS ingestion failed:", err);
  }
});