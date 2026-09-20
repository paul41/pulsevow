import slugify from "slugify";
import { ImageExtractorService } from "./image-extractor.service.js";
import type { NormalizedArticle } from "./types.js";

const CATEGORY_MAP: Record<string, string> = {
  // Politics
  politics: "politics",
  political: "politics",
  "political-news": "politics",
  opinion: "politics",

  // Business
  business: "business",
  economy: "business",
  markets: "business",
  finance: "business",

  // Technology
  technology: "technology",
  tech: "technology",
  gadgets: "technology",

  // Sports
  sports: "sports",
  sport: "sports",

  // Entertainment
  entertainment: "entertainment",
  movies: "entertainment",
  cinema: "entertainment",

  // World
  world: "world",
  international: "world",

  // Science
  science: "science",
  health: "science",

  // General
  india: "general",
  national: "general",
  general: "general",
};

export class NormalizerService {
  private readonly imageExtractor = new ImageExtractorService();

  normalize(feed: any): NormalizedArticle {
    
    const categoryName = Array.isArray(feed.raw.category)
      ? feed.raw.category[0] ?? "General"
      : typeof feed.raw.category === "string"
        ? feed.raw.category
        : "General";
    const rssDescription = feed.raw.description?.trim() || null;
    const rawCategorySlug = slugify(categoryName, {
      lower: true,
      strict: true,
    });
     const categorySlug =
      CATEGORY_MAP[rawCategorySlug] ?? "general";
      
    return {
      sourceId: feed.sourceId,
      //channelUrl: feed.metadata.link ?? Array.isArray(feed.sourceUrl) ? (feed.sourceUrl[0])?.href() : feed.sourceUrl?.href(),
      categorySlug,
      title: feed.raw.title ?? "",

      slug:
        feed.raw.slug ??
        slugify(feed.raw.title || feed.raw.link || "news-pulse", {
          lower: true,
          strict: true,
        }),

      description: rssDescription,

      url: feed.raw.link ?? feed.raw.url ?? "",

      imageUrl: this.imageExtractor.extract(feed.raw),

      author:
        feed.raw.author ??
        feed.raw["dc:creator"] ??
        null,

      publishedAt: feed.raw.pubDate
        ? new Date(feed.raw.pubDate)
        : new Date(),

      status: "DRAFT",

      tags: Array.isArray(feed.raw.category)
        ? feed.raw.category
        : typeof feed.raw.category === "string"
          ? [feed.raw.category]
          : ["general"],

      analysisId: feed.raw.analysisId ?? null,
    };
  }
}