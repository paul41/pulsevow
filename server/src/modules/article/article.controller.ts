import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { ArticleService } from "./article.service.js";

export class ArticleController {
  private readonly articleService = new ArticleService();

  /**
   * GET /api/v1/articles
   *
   * Query params:
   * ?page=1
   * ?limit=20
   * ?category=business
   */
  async getArticles(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const page = Math.max(
        1,
        Number(req.query.page) || 1
      );

      const limit = Math.min(
        50,
        Math.max(1, Number(req.query.limit) || 20)
      );

      const categorySlug =
        typeof req.query.category === "string"
          ? req.query.category
          : undefined;

      const result = await this.articleService.getArticles({
        page,
        limit,
        ...(categorySlug ? { categorySlug } : {}),
      });

      const totalPages = Math.ceil(result.total / limit);

      res.status(200).json({
        success: true,
        data: result.articles,
        pagination: {
          page,
          limit,
          total: result.total,
          totalPages,
          hasNextPage: page < totalPages,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/articles/country/:country
   *
   * Query params:
   * ?excludeCountry=India
   * ?limit=20
   */
  async getArticlesByCountry(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const countryParam = req.params.country;
      console.log("TTTTTTTT",req.params);
      const country = Array.isArray(countryParam)
        ? countryParam[0]
        : countryParam;

      const normalizedCountry = country?.trim() || undefined;

      const excludeCountry =
        typeof req.query.excludeCountry === "string"
          ? req.query.excludeCountry.trim() || undefined
          : undefined;

      const limit = Math.min(
        50,
        Math.max(1, Number(req.query.limit) || 20)
      );

      const articles =
        await this.articleService.getArticlesByCountry(
          normalizedCountry,
          excludeCountry,
          limit
        );

      res.status(200).json({
        success: true,
        data: articles,
        count: articles.length,
      });
    } catch (error) {
      next(error);
    }
  }
}