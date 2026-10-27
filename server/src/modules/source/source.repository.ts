
import prisma from "../../config/prisma.js";
import type { Source } from "@prisma/client";

export class SourceRepository {
  async findByActiveBatch(
    isActive: boolean,
    limit: number,
    offset: number
  ): Promise<Source[]> {
    return prisma.source.findMany({
      where: { isActive },
      take: limit,
      skip: offset,
    });
  }

  async findByCountry(
    country: string | undefined,
    limit: number,
    offset: number,
    excludeCountry?: string
  ): Promise<string[]> {
    const now = new Date();
    const threeDaysAgo = new Date(
      now.getTime() - 3 * 24 * 60 * 60 * 1000
    );

    const sources = await prisma.source.findMany({
      where: {
        ...(country && {
          country: {
            equals: country,
            mode: "insensitive",
          },
        }),

        ...(excludeCountry && {
          NOT: {
            country: {
              equals: excludeCountry,
              mode: "insensitive",
            },
          },
        }),

        articles: {
          some: {
            publishedAt: {
              gte: threeDaysAgo,
              lte: now,
            },
          },
        },
      },
      select: {
        id: true,
      },
      take: limit,
      skip: offset,
      orderBy: [
        { country: "asc" },
        { name: "asc" },
      ],
    });

    return sources.map((source) => source.id);
  }
}
