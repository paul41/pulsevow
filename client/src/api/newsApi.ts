import api from './api-client';
import type { NewsApiResponse } from './type';

export async function getTopStories(): Promise<NewsApiResponse> {
  return api.get<NewsApiResponse>('/articles').then((res) => res.data);
}