import React, { createContext, useContext, useState } from "react";
import { useAuthApi } from "../api/authApi";
import {
  getToken,
  setToken,
  clearToken,
  setUserNameKey,
} from "../utils/tokenStorage";
import type { AuthContextType } from "./type";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [token, setAuthToken] = useState<string | null>(getToken());

  const authApi = useAuthApi();

  // useEffect(() => {
  //   if (token) {
  //     authApi.refreshToken().catch(() => logoutUser());
  //   }
  // }, [token]);

  const loginUser = async (email: string, password: string) => {
    const data = await authApi.login(email, password);

    if (!data) {
      return;
    }

    setUser(data.user);

    setToken(data.accessToken);
    setAuthToken(data.accessToken);

    setUserNameKey(data.user.id, data.user.username);
  };

  const logoutUser = () => {
    setUser(null);
    setAuthToken(null);
    clearToken();
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;