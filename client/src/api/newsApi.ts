import api from './api-client';
import type { NewsStory } from './type';

export async function getTopStories(): Promise<NewsStory[]> {
  return api.get<NewsStory[]>('/api/stories/top').then((res) => res.data);
}