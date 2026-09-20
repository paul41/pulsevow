// src/config/apiRoutes.ts
const BASE_URL = "http://localhost:5000/api/v1";

export const API_ROUTES = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  PROFILE: `${BASE_URL}/auth/profile`,
  UPDATE_PROFILE: `${BASE_URL}/auth/profile/update`,
  GET_INSIGHTS: `${BASE_URL}/insights`,
  GET_INSIGHT_BY_ID: (id: string) => `${BASE_URL}/insights/${id}`,
  GET_ARTICLES: `${BASE_URL}/articles`,
  GET_ARTICLE_BY_ID: (id: string) => `${BASE_URL}/articles/${id}`,
};
