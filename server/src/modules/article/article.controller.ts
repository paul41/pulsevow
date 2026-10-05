import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { ArticleService } from "./article.service.js";

export class ArticleController {
  private readonly articleService =
    new ArticleService();

  /**
   * GET /api/articles
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
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;

      const categorySlug =
        typeof req.query.category === "string"
          ? req.query.category
          : undefined;

      const result =
        await this.articleService.getArticles({
          page,
          limit,
          ...(categorySlug
            ? { categorySlug }
            : {})
        });

      const totalPages = Math.ceil(
        result.total / Math.min(limit, 50)
      );

      res.status(200).json({
        success: true,
        data: result.articles,
        pagination: {
          page: Math.max(1, page),
          limit: Math.min(
            Math.max(1, limit),
            50
          ),
          total: result.total,
          totalPages,
          hasNextPage:
            Math.max(1, page) < totalPages,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/articles/:slug
   */
//   async getArticleBySlug(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): Promise<void> {
//     try {
//       const { slug } = req.params;

//       if (!slug) {
//         res.status(400).json({
//           success: false,
//           message: "Article slug is required",
//         });

//         return;
//       }

//       const article =
//         await this.articleService.getArticleBySlug(
//           slug
//         );

//       if (!article) {
//         res.status(404).json({
//           success: false,
//           message: "Article not found",
//         });

//         return;
//       }

//       res.status(200).json({
//         success: true,
//         data: article,
//       });
//     } catch (error) {
//       next(error);
//     }
//   }

  /**
   * GET /api/articles/category/:categorySlug
   */
//   async getArticlesByCategory(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): Promise<void> {
//     try {
//       const { categorySlug } = req.params;

//       if (!categorySlug) {
//         res.status(400).json({
//           success: false,
//           message: "Category is required",
//         });

//         return;
//       }

//       const page =
//         Number(req.query.page) || 1;

//       const limit =
//         Number(req.query.limit) || 20;

//       const result =
//         await this.articleService.getArticlesByCategory(
//           categorySlug,
//           page,
//           limit
//         );

//       const safeLimit = Math.min(
//         Math.max(1, limit),
//         50
//       );

//       const totalPages = Math.ceil(
//         result.total / safeLimit
//       );

//       res.status(200).json({
//         success: true,
//         data: result.articles,
//         pagination: {
//           page: Math.max(1, page),
//           limit: safeLimit,
//           total: result.total,
//           totalPages,
//           hasNextPage:
//             Math.max(1, page) < totalPages,
//         },
//       });
//     } catch (error) {
//       next(error);
//     }
//   }
}