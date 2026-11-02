import api from './api-client';
import type { NewsApiResponse } from './type';
import { mockNewsResponse } from '../components/event/data';

const USE_MOCK_DATA =
  import.meta.env.VITE_USE_MOCK_DATA === 'true';

export async function getTopStories(): Promise<NewsApiResponse> {
  if (USE_MOCK_DATA) {
    return mockNewsResponse;
  }

  return api.get<NewsApiResponse>('/articles').then((res) => res.data);
}

export async function getCountryStories(
  country: string | undefined,
  options?: {
    excludeCountry?: string;
    limit?: number;
  }
): Promise<NewsApiResponse> {
  if (USE_MOCK_DATA) {
    const excludeCountry =
      options?.excludeCountry?.trim().toLowerCase() ?? 'india';

    let articles = mockNewsResponse.data.filter(
      (article) =>
        article.source?.country?.trim().toLowerCase() !== excludeCountry
    );

    if (country?.trim()) {
      articles = articles.filter(
        (article) =>
          article.source?.country?.trim().toLowerCase() ===
          country.trim().toLowerCase()
      );
    }

    if (options?.limit !== undefined) {
      articles = articles.slice(0, options.limit);
    }

    return {
      ...mockNewsResponse,
      data: articles,
      pagination: {
        ...mockNewsResponse.pagination,
        total: articles.length,
        totalPages: options?.limit
          ? Math.ceil(articles.length / options.limit)
          : articles.length > 0 ? 1 : 0,
        hasNextPage: false,
      },
    };
  }

  const endpoint = country?.trim()
    ? `/articles/country/${encodeURIComponent(country.trim())}`
    : '/articles/country';

  return api
    .get<NewsApiResponse>(endpoint, {
      params: {
        ...(options?.excludeCountry
          ? { excludeCountry: options.excludeCountry }
          : {}),
        ...(options?.limit !== undefined
          ? { limit: options.limit }
          : {}),
      },
    })
    .then((res) => res.data);
}