import { Prisma, ArticleStatus } from "@prisma/client";
import type { Article } from "@prisma/client";
import prisma from "../../config/prisma.js";

export class ArticleRepository {
  /**
   * Create a new article
   */
  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return prisma.article.create({
      data,
    });
  }

  /**
   * Find article by ID
   */
  async findById(id: string): Promise<Article | null> {
    return prisma.article.findUnique({
      where: { id },
      include: {
        source: true,
        category: true,
        analysis: true,
        // timeline: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  /**
   * Find article by slug
   */
  async findBySlug(slug: string): Promise<Article | null> {
    return prisma.article.findUnique({
      where: { slug },
      include: {
        source: true,
        category: true,
        analysis: true,
        timeline: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async findByContentHash(hash: string) {
    return prisma.article.findUnique({
      where: {
        contentHash: hash,
      },
    });
  }
  /**
   * Find article by original URL
   */
  async findByUrl(url: string): Promise<Article | null> {
    return prisma.article.findUnique({
      where: {
        url,
      },
    });
  }

  /**
   * Check whether article already exists
   */
  async existsByUrl(url: string): Promise<boolean> {
    const article = await prisma.article.findUnique({
      where: {
        url,
      },
      select: {
        id: true,
      },
    });

    return !!article;
  }

  /**
   * Latest published articles
   */
  async findLatest(limit = 20): Promise<Article[]> {
    return prisma.article.findMany({
      where: {
        status: ArticleStatus.PUBLISHED,
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: limit,
      include: {
        source: true,
        category: true,
      },
    });
  }

  async findForEmbedding(id: string) {
    return prisma.article.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }
  /**
   * Find articles by category
   */
  async findByPublishedCategory(categoryId: string, limit = 20): Promise<Article[]> {
    return prisma.article.findMany({
      where: {
        categoryId,
        status: ArticleStatus.PUBLISHED,
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: limit,
      include: {
        source: true,
      },
    });
  }

  async findByUrlsOrContentHashes(
    urls: string[],
    contentHashes: string[]
  ) {
    if (!urls.length && !contentHashes.length) {
      return [];
    }

    const conditions = [];

    if (urls.length) {
      conditions.push({
        url: {
          in: urls,
        },
      });
    }

    if (contentHashes.length) {
      conditions.push({
        contentHash: {
          in: contentHashes,
        },
      });
    }

    return prisma.article.findMany({
      where: {
        OR: conditions,
      },
      select: {
        id: true,
        url: true,
        contentHash: true,
      },
    });
  }

  /**
   * Update article
   */
  async update(
    id: string,
    data: Prisma.ArticleUpdateInput
  ): Promise<Article> {
    return prisma.article.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Delete article
   */
  async delete(id: string): Promise<Article> {
    return prisma.article.delete({
      where: {
        id,
      },
    });
  }

  /**
   * Count all articles
   */
  async count(): Promise<number> {
    return prisma.article.count();
  }

  async archiveExpiredArticles(months = 3): Promise<number> {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);

    const result = await prisma.article.updateMany({
      where: {
        status: { in: ["PUBLISHED", "DRAFT"] },
        publishedAt: {
          lt: cutoff,
        },
      },
      data: {
        status: "ARCHIVED",
      },
    });
    return result.count;
  }
}

export default new ArticleRepository();