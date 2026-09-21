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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setAuthUser] = useState<AuthUser | null>(
    () => getUser()
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
        const data = await authApi.getCurrentUser();

        if (data?.user) {
          setAuthUser(data.user);
          setUser(data.user);
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

  const loginUser = async (
    email: string,
    password: string,
  ) => {
    const data = await authApi.login(email, password);

    if (!data?.user) {
      return false;
    }

    setAuthUser(data.user);
    setUser(data.user);
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