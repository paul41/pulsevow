import cron from "node-cron";
import { IngestionService } from "../modules/ingestion/ingestion.service.js";
import { EmbeddingService } from "../modules/embedding/embedding.service.js";

const ingestion = new IngestionService();
//const embeddingService = new EmbeddingService();

/**
 * 📰 Ingestion Job
 * Runs every 15 minutes to fetch and normalize new articles
 * from all active sources.
 */
//cron.schedule("*/15 * * * *", async () => {
  try {
    await ingestion.ingestAllSources();
    console.log(`[CRON] Ingestion completed at ${new Date().toISOString()}`);
  } catch (err) {
    console.error("[CRON] Ingestion failed:", err);
  }
//});

/**
 * 📦 Archival Job
 * Runs daily at midnight to archive expired articles
 * (e.g., those past retention policy).
 */
// cron.schedule("0 0 * * *", async () => {
//   try {
//     await articleService.archiveExpiredArticles();
//     console.log(`[CRON] Archival completed at ${new Date().toISOString()}`);
//   } catch (err) {
//     console.error("[CRON] Archival failed:", err);
//   }
// });
