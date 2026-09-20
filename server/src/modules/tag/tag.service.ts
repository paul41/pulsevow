import slugify from "slugify";
import { TagType } from "@prisma/client";

import type { TagInput } from "./type.js";
import { TagRepository } from "./tag.repository.js";
import type { NormalizedArticle } from "../ingestion/types.js";

export class TagService {
  constructor(
    private readonly tagRepository = new TagRepository()
  ) { }

  extractTags(article: NormalizedArticle): TagInput[] {
    const tags = new Map<string, TagInput>();

    const addTag = (
      name: string | undefined,
      type: TagType,
      slug?: string
    ): void => {
      if (!name?.trim()) return;

      const normalizedSlug =
        slug?.trim() ||
        slugify(name, {
          lower: true,
          strict: true,
        });

      tags.set(normalizedSlug, {
        name: name.trim(),
        slug: normalizedSlug,
        type,
      });
    };


    
    addTag(
      article.categorySlug,
      TagType.TOPIC,
      article.categorySlug
    );

    // Author
    addTag(article.author, TagType.PERSON);

    // Language
    addTag(article.language, TagType.TOPIC);

    // Normalized tags
    article.tags?.forEach(tag =>
      addTag(tag.toString(), TagType.TOPIC)
    );

    return [...tags.values()];
  }

  async saveArticleTags(
    articleId: string,
    article: NormalizedArticle
  ): Promise<void> {
    const tags = this.extractTags(article);

    if (tags.length === 0) {
      return;
    }

    await this.tagRepository.upsertArticleTags(articleId, tags);
  }
}

//use lazy loading in react routes