import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthApi } from "../api/authApi";
import {
  getUser,
  setUser,
  clearUser,
} from "../utils/tokenStorage";
import type { AuthContextType } from "./type";
import type { AuthUser } from "../api/type";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setAuthUser] = useState<AuthUser | null>(
    () => getUser(),
  );

  const [loading, setLoading] = useState(true);

  const authApi = useAuthApi();

  /**
   * Restore authentication state when the application starts.
   *
   * The browser automatically sends the HttpOnly
   * access_token / refresh_token cookies.
   */
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await authApi.getCurrentUser();

        const currentUser = response?.data?.user;

        if (currentUser) {
          setAuthUser(currentUser);
          setUser(currentUser);
        } else {
          clearUser();
          setAuthUser(null);
        }
      } catch {
        clearUser();
        setAuthUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const setAuthenticatedUser = (authenticatedUser: AuthUser) => {
    setAuthUser(authenticatedUser);
    setUser(authenticatedUser);
  };

  const loginUser = async (
    email: string,
    password: string,
  ) => {
    const response = await authApi.login(
      email,
      password,
    );

    const loggedInUser = response?.data?.user;

    if (!loggedInUser) {
      return false;
    }

    setAuthenticatedUser(loggedInUser);

    return true;
  };

  const logoutUser = async () => {
    try {
      await authApi.logout();
    } finally {
      clearUser();
      setAuthUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginUser,
        setAuthenticatedUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider",
    );
  }

  return context;
};