const TOKEN_KEY = 'auth_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);
export const setUserNameKey = (token: string, userName : string) => localStorage.setItem(`username_${token}`,userName);
export const getUserName = () => localStorage.getItem (`username_${getToken()}`)