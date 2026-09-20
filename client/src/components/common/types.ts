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
