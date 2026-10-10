
export type NewsSource = {
  id: string;
  name: string;
  country: string;
  logo: string | null;
};

export type NewsCategory = {
  id: string;
  name: string;
  slug: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  slug?: string;
  url: string;
  description: string;
  imageUrl: string | null;
  author?: string | null;
  publishedAt: string;
  source: NewsSource;
  category?: NewsCategory;
};

export type NewsPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
};

export type NewsApiResponse = {
  success: boolean;
  data: NewsArticle[];
  pagination: NewsPagination;
};

// Keep this type for aggregated PulseVow intelligence stories.
export type PulseStory = NewsArticle & {
  heroImage?: string;
  heroAlt?: string;

  affected?: {
    label: string;
    type: "stake" | "sector";
  }[];

  brief?: [string, string][];
  timeline?: [string, string][];
  sources?: Source[];
  bias?: string;
  sentiment?: string;
};

export type Source = {
  name: string;
  favicon: string;
  relation: "AGREES" | "ADDS CONTEXT" | "DIFFERS";
  headline: string;
  angle: string;
  url?: string;
};

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string | null;
  isEmailVerified?: boolean;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
  };
}

export interface CurrentUserResponse {
  success: boolean;
  data: {
    user: AuthUser;
  };
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
  };
}