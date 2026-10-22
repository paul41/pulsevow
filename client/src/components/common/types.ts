import type { ReactNode } from "react";

export interface Props {
    children: React.ReactNode;
}

export interface State {
    hasError: boolean;
}

export interface ErrorStateProps {
    title?: string;
    message: string;
    onRetry?: () => void;
}

export interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export type LoaderProps = {
  message?: string;
  fullScreen?: boolean;
};

export interface TooltipProps {
  text: ReactNode;
  children: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  width?: string | number;
}