export interface NewsStory {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
}

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