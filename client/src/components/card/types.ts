import type { NewsArticle } from '../../api/type';
export interface NewsCardProps {
  item: NewsArticle;
  onClick?: () => void;
}