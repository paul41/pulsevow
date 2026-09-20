import axios, {
    AxiosError,
    type AxiosInstance,
} from "axios";

import { ApiError } from "./api-error";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || '/api';

const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => {
        return response;
    },

    (error: AxiosError<{ message?: string; code?: string }>) => {
        if (!error.response) {
            return Promise.reject(
                new ApiError(
                    "Unable to connect to PulseVow. Please check your internet connection.",
                    0,
                    "NETWORK_ERROR"
                )
            );
        }

        const status = error.response.status;

        const message =
            error.response.data?.message ||
            getDefaultErrorMessage(status);

        const code =
            error.response.data?.code ||
            getDefaultErrorCode(status);

        return Promise.reject(
            new ApiError(
                message,
                status,
                code
            )
        );
    }
);

function getDefaultErrorMessage(status: number): string {
    switch (status) {
        case 400:
            return "Invalid request.";

        case 401:
            return "Your session has expired. Please sign in again.";

        case 403:
            return "You do not have permission to perform this action.";

        case 404:
            return "The requested information was not found.";

        case 409:
            return "This information already exists.";

        case 429:
            return "Too many requests. Please try again later.";

        case 500:
            return "Something went wrong on our server.";

        case 503:
            return "PulseVow is temporarily unavailable.";

        default:
            return "Something went wrong. Please try again.";
    }
}

function getDefaultErrorCode(status: number): string {
    switch (status) {
        case 400:
            return "BAD_REQUEST";

        case 401:
            return "UNAUTHORIZED";

        case 403:
            return "FORBIDDEN";

        case 404:
            return "NOT_FOUND";

        case 409:
            return "CONFLICT";

        case 429:
            return "RATE_LIMITED";

        case 500:
            return "INTERNAL_ERROR";

        case 503:
            return "SERVICE_UNAVAILABLE";

        default:
            return "API_ERROR";
    }
}

export default api;