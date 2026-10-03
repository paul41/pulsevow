import { useState } from "react";
import api from "./api-client";
import type { LoginResponse, CurrentUserResponse, RegisterResponse } from "./type";
import {API_ROUTES} from "../../config/apiRoutes"

export const useAuthApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (
        email: string,
        password: string,
    ): Promise<LoginResponse | null> => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.post<LoginResponse>(
                API_ROUTES.LOGIN,
                {
                    email,
                    password,
                },
            );

            return response.data;
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Unable to login.";

            setError(message);

            return null;
        } finally {
            setLoading(false);
        }
    };

    const register = async (
        name: string,
        email: string,
        password: string,
    ): Promise<RegisterResponse | null> => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.post<RegisterResponse>(
                API_ROUTES.REGISTER,
                {
                    name,
                    email,
                    password,
                },
            );

            return response.data;
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Unable to create your account.";

            setError(message);

            return null;
        } finally {
            setLoading(false);
        }
    };

    const getCurrentUser = async (): Promise<CurrentUserResponse | null> => {
        try {
            setError(null);

            const response =
                await api.get<CurrentUserResponse>(API_ROUTES.PROFILE);

            return response.data;
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Unable to restore session.";

            setError(message);

            return null;
        }
    };

    const logout = async (): Promise<boolean> => {
        try {
            setLoading(true);
            setError(null);

            await api.post(API_ROUTES.LOGOUT);

            return true;
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Unable to logout.";

            setError(message);

            return false;
        } finally {
            setLoading(false);
        }
    };

    const refreshToken = async () => {
        try {
            setError(null);

            const response = await api.post(API_ROUTES.REFRESH_TOKEN);

            return response.data;
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Unable to refresh session.";

            setError(message);

            return null;
        }
    };

    return {
        login,
        register,
        getCurrentUser,
        logout,
        refreshToken,
        loading,
        error,
        setError,
    };
};