import { Router } from "express";
import { ArticleController } from "./article.controller.js";

const router = Router();

const articleController = new ArticleController();

/**
 * GET /api/articles
 *
 * Examples:
 *
 * /api/articles
 * /api/articles?page=2
 * /api/articles?page=1&limit=20
 * /api/articles?category=business
 */
router.get(
  "/",
  articleController.getArticles.bind(
    articleController
  )
);

/**
 * GET /api/articles/category/:categorySlug
 */
// router.get(
//   "/category/:categorySlug",
//   articleController.getArticlesByCategory.bind(
//     articleController
//   )
// );

/**
 * GET /api/articles/:slug
 */
// router.get(
//   "/:slug",
//   articleController.getArticleBySlug.bind(
//     articleController
//   )
// );

export default router;