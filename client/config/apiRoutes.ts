export const API_ROUTES = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  PROFILE: "/auth/me",
  UPDATE_PROFILE: "/auth/profile/update",
  REFRESH_TOKEN: "/auth/refresh",
  GET_INSIGHTS: "/insights",
  GET_INSIGHT_BY_ID: (id: string) => `/insights/${id}`,

  GET_ARTICLES: "/articles",
  GET_ARTICLE_BY_ID: (id: string) => `/articles/${id}`,
};