import api from './api-client';
import type { NewsApiResponse } from './type';

export async function getTopStories(): Promise<NewsApiResponse> {
  return api.get<NewsApiResponse>('/articles').then((res) => res.data);
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
}
