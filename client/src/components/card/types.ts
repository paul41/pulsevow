export interface NewsCardProps {
  item: {
    id: string | number;
    image: string;
    category: string;
    title: string;
    meta: string;
    updated?: string;
  };
  onClick?: () => void;
}