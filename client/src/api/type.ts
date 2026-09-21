export interface NewsStory {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  user: AuthUser;
}

export interface CurrentUserResponse {
  user: AuthUser;
}

export interface RegisterResponse {
  user: AuthUser;
}