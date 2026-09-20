import { Prisma } from "@prisma/client";
import type { NormalizedArticle } from "../ingestion/types.js";
import { ArticleRepository } from "../article/article.repository.js";

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
    async archiveExpiredArticles(): Promise<void> { 
        const count = await this.articleRepository.archiveExpiredArticles();
        console.log(`${count} articles archived.`); 
    }
}