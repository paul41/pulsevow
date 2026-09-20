export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  phone?: string;
  occupation?: string;
  country?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}