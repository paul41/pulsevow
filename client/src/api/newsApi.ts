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
  
  /** Filter out articles from the specified country from mock data. REVERT BEFORE PUBLISH TO PRODUCTION */
  // const excludeCountry = options?.excludeCountry?.trim().toLowerCase() ?? "india";
  // const newsResponse = mockNewsResponse.data.filter(
  //   (article) =>
  //     article.source?.country?.trim().toLowerCase() !== excludeCountry
  // );

  // return Promise.resolve({
  //   ...mockNewsResponse,
  //   data: newsResponse,
  // });
  /** ---------------------------------------------------------------------------- */

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
