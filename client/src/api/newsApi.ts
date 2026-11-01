
import api from './api-client';
import type { NewsApiResponse } from './type';
//import { mockNewsResponse } from '../components/event/data';

export async function getTopStories(): Promise<NewsApiResponse> {
  return api.get<NewsApiResponse>('/articles').then((res) => res.data);
  //return Promise.resolve(mockNewsResponse);
}

export async function getCountryStories(
  country: string | undefined,
  options?: {
    excludeCountry?: string;
    limit?: number;
  }
): Promise<NewsApiResponse> {
  console.log("Fetching country stories for:", country, "with options:", options);

  
  const endpoint = country?.trim()
    ? `/articles/country/${encodeURIComponent(country.trim())}`
    : "/articles/country";

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
  

  // const excludeCountry = options?.excludeCountry?.trim().toLowerCase() ?? "india";

  // let articles = mockNewsResponse.data.filter(
  //   (article) =>
  //     article.source?.country?.trim().toLowerCase() !== excludeCountry
  // );

  // if (country?.trim()) {
  //   articles = articles.filter(
  //     (article) =>
  //       article.source?.country?.trim().toLowerCase() ===
  //       country.trim().toLowerCase()
  //   );
  // }

  // if (options?.limit !== undefined) {
  //   articles = articles.slice(0, options.limit);
  // }

  // return Promise.resolve({
  //   ...mockNewsResponse,
  //   data: articles,
  //   pagination: {
  //     ...mockNewsResponse.pagination,
  //     total: articles.length,
  //     totalPages: options?.limit
  //       ? Math.ceil(articles.length / options.limit)
  //       : articles.length > 0 ? 1 : 0,
  //     hasNextPage: false,
  //   },
  // });
}
