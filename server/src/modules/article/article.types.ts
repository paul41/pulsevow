export interface GetArticlesOptions {
  page?: number;
  limit?: number;
  categorySlug?: string;
}

export interface ArticleListOptions {
  page: number;
  limit: number;
  categorySlug?: string;
}