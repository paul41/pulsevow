import { Prisma } from "@prisma/client";
import type { NormalizedArticle } from "../ingestion/types.js";
import { ArticleRepository } from "../article/article.repository.js";
import type { GetArticlesOptions } from "./article.types.js";

export class ArticleService {
    
    private readonly articleRepository = new ArticleRepository();
    articleMapper(
        article: NormalizedArticle
    ): Prisma.ArticleCreateInput  {
        return {
            title: article.title,
            slug: article.slug,
            description: article.description ?? null ,
            contentHash:article.contentHash ?? null,
            url: article.url,
            imageUrl: article.imageUrl ?? null,
            author: article.author ?? null,
            publishedAt: article.publishedAt,
            status: article.status ?? "DRAFT",
            source: {
                connect: {
                    id: article.sourceId,
                },
            },
            category: {
                connect: {
                    slug: article.categorySlug,
                },
            },
        };
    }

    async getArticles(options: GetArticlesOptions = {}) {
        const page = Math.max(
        1,
        Number(options.page) || 1
        );

        const limit = Math.min(
        50,
        Math.max(
            1,
            Number(options.limit) || 20
        )
        );

        return this.articleRepository.findPublishedArticles({
            page,
            limit,
           ...(options.categorySlug
            ? { categorySlug: options.categorySlug }
            : {})
        });
    }

    async getArticleBySlug(slug: string) {
        return this.articleRepository.findPublishedArticleBySlug(
        slug
        );
    }

    async getArticlesByCategory(
        categorySlug: string,
        page = 1,
        limit = 20
    ) {
        page = Math.max(1, Number(page) || 1);

        limit = Math.min(
        50,
        Math.max(1, Number(limit) || 20)
        );

        return this.articleRepository.findPublishedArticlesByCategory(
        categorySlug,
        page,
        limit
        );
    }


    async archiveExpiredArticles(): Promise<void> { 
        const count = await this.articleRepository.archiveExpiredArticles();
        console.log(`${count} articles archived.`); 
    }
}