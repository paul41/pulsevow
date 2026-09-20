import OpenAI from "openai";

export class EmbeddingClient {
  private readonly client: OpenAI;
  private readonly model = "text-embedding-3-small";

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createEmbedding(text: string): Promise<number[]> {
    if (!text || !text.trim()) {
      throw new Error("Text is required to create an embedding");
    }

    const response = await this.client.embeddings.create({
      model: this.model,
      input: text.trim(),
    });

    const embedding = response.data[0]?.embedding;

    if (!embedding) {
      throw new Error("Embedding was not returned by OpenAI");
    }

    return embedding;
  }
}