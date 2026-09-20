import type { TagType } from "@prisma/client";

export interface TagInput {
  name: string;
  slug: string;
  type: TagType;
  confidence?: number;
}

export interface ArticleTagInput {
  articleId: string;
  tagId: string;
}