import { EmbeddingClient } from "../../lib/ai/embedding.client.js";
import { EmbeddingRepository } from "./embedding.repository.js";

export interface ArticleForEmbedding {
  id: string;
  title: string;
  description?: string | null;
  content?: string | null;
  category?: {
    name: string;
  } | null;
}

export class EmbeddingService {
  constructor(
    private readonly embeddingClient: EmbeddingClient,
    private readonly embeddingRepository: EmbeddingRepository
  ) { }

  async generateAndSaveEmbedding(
    article: ArticleForEmbedding
  ): Promise<void> {
    const text = this.buildEmbeddingText(article);

    const embedding =
      await this.embeddingClient.createEmbedding(text);

    await this.embeddingRepository.saveEmbedding(
      article.id,
      embedding,
      "text-embedding-3-small"
    );
  }

  private buildEmbeddingText(
    article: ArticleForEmbedding
  ): string {
    const content = article.content
      ?.replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return [
      `News headline: ${article.title}`,
      `News summary: ${article.description ?? ""}`,
      `Article content: ${content ?? ""}`,
      `Category: ${article.category?.name ?? ""}`,
    ]
      .filter(Boolean)
      .join("\n");
  }
}