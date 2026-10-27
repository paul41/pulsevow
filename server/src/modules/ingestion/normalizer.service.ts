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

  // cleanHtml = (html: string): string =>
  //   html
  //     .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  //     .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
  //     .replace(/<[^>]*>/g, " ")
  //     .replace(/&nbsp;/gi, " ")
  //     .replace(/&amp;/gi, "&")
  //     .replace(/&lt;/gi, "<")
  //     .replace(/&gt;/gi, ">")
  //     .replace(/&quot;/gi, '"')
  //     .replace(/&#39;|&apos;/gi, "'")
  //     .replace(/\s+/g, " ")
  //     .trim();


  private normalizeDescription(value: unknown): string | null {
    if (typeof value !== "string" || !value.trim()) {
      return null;
    }

    const html = value.trim();

    // Remove script and style content before extracting text.
    const text = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      // Preserve spacing between HTML elements.
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(?:p|div|li|h[1-6])\s*>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      // Decode common HTML entities.
      .replace(/&nbsp;|&#160;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;|&apos;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&#(\d+);/g, (_, code: string) =>
        String.fromCodePoint(Number(code))
      )
      .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
        String.fromCodePoint(parseInt(code, 16))
      )
      .replace(/\s+/g, " ")
      .trim();

    return text || null;
  }

  private normalizeAuthor(author: unknown, dcCreator: unknown): string | null {
    if (typeof author === "string") {
      return author.trim() || null;
    }

    if (author && typeof author === "object") {
      const record = author as Record<string, unknown>;

      const text = record["#text"] ?? record.name;

      if (typeof text === "string" && text.trim()) {
        return text.trim();
      }
    }

    return typeof dcCreator === "string"
      ? dcCreator.trim() || null
      : null;
  }
  normalize(feed: any): NormalizedArticle {

    const categoryName = Array.isArray(feed.raw.category)
      ? feed.raw.category[0] ?? "General"
      : typeof feed.raw.category === "string"
        ? feed.raw.category
        : "General";
    const rssDescription = this.normalizeDescription(
                              feed.raw.description
                            );
    //const encodedContent = feed.raw["content:encoded"]?.trim() || "";
    const description = [rssDescription, /*this.cleanHtml(encodedContent)*/]
      .filter(Boolean)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .join("\n\n") || null;

    const rawCategorySlug = slugify(categoryName, {
      lower: true,
      strict: true,
    });
    const categorySlug =
      CATEGORY_MAP[rawCategorySlug] ?? "general";

    return {
      sourceId: feed.sourceId,
      categorySlug,
      title: feed.raw.title ?? "",

      slug:
        feed.raw.slug ??
        slugify(feed.raw.title || feed.raw.link || "news-pulse", {
          lower: true,
          strict: true,
        }),

      description: description,

      url: feed.raw.link ?? feed.raw.url ?? "",

      imageUrl: this.imageExtractor.extract(feed.raw),

      author:
        this.normalizeAuthor(feed.raw.author, feed.raw["dc:creator"]) ?? undefined,

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