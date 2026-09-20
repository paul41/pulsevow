import type { Prisma, Tag, TagType } from "@prisma/client";
import prisma  from "../../config/prisma.js";

export class TagRepository {
  

  /**
   * Find multiple tags by slug
   */
  async findBySlugs(slugs: string[]): Promise<Tag[]> {
    if (slugs.length === 0) return [];

    return prisma.tag.findMany({
      where: {
        slug: {
          in: slugs,
        },
      },
    });
  }

  /**
   * Bulk create tags
   */
  async createMany(data: Prisma.TagCreateManyInput[]): Promise<void> {
    if (data.length === 0) return;

    await prisma.tag.createMany({
      data,
      skipDuplicates: true,
    });
  }

  /**
   * Fetch all tags of an article
   */
  async findByArticle(articleId: string): Promise<Tag[]> {
    const articleTags = await prisma.articleTag.findMany({
      where: {
        articleId,
      },
      include: {
        tag: true,
      },
    });

    return articleTags.map(at => at.tag);
  }

  /**
   * Remove all tags from an article
   */
  async removeByArticle(articleId: string): Promise<void> {
    await prisma.articleTag.deleteMany({
      where: {
        articleId,
      },
    });
  }

  /**
   * Upsert article tags in only 3 DB queries
   */
  async upsertArticleTags(
    articleId: string,
    tags: {
      name: string;
      slug: string;
      type: TagType;
    }[]
  ): Promise<void> {
    if (tags.length === 0) return;

    // Remove duplicate slugs
    const uniqueTags = Array.from(
      new Map(tags.map(tag => [tag.slug, tag])).values()
    );

    // Create missing tags
    await prisma.tag.createMany({
      data: uniqueTags,
      skipDuplicates: true,
    });

    // Fetch IDs
    const existingTags = await prisma.tag.findMany({
      where: {
        slug: {
          in: uniqueTags.map(t => t.slug),
        },
      },
      select: {
        id: true,
      },
    });

    // Create article-tag mappings
    await prisma.articleTag.createMany({
      data: existingTags.map(tag => ({
        articleId,
        tagId: tag.id,
      })),
      skipDuplicates: true,
    });
  }
}