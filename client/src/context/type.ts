export interface AuthContextType{
    user: any;
    token: string | null;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => void;
}