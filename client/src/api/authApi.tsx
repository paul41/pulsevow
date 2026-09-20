import { useState } from "react";
import api from "./api-client";

interface LoginResponse {
    user: {
        id: string;
        username: string;
        email: string;
        role: string;
    };
    accessToken: string;
}

export const useAuthApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (
        email: string,
        password: string
    ): Promise<LoginResponse | null> => {

        try {
            setLoading(true);
            setError(null);

            const response = await api.post<LoginResponse>(
                "/auth/login",
                {
                    email,
                    password,
                }
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

    const logout = async () => {
        try {
            setLoading(true);
            setError(null);

            await api.post("/auth/logout");

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
            const response = await api.post(
                "/auth/refresh"
            );

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
        logout,
        refreshToken,
        loading,
        error,
        setError,
    };
};