import type { AuthUser } from "../api/type";

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;

  loginUser: (
    email: string,
    password: string,
  ) => Promise<boolean>;

  logoutUser: () => Promise<void>;
}