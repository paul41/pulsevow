import type {ErrorStateProps} from './types';

export function ErrorState({
    title = 'Unable to load content',
    message,
    onRetry,
}: ErrorStateProps) {
    return (
        <div className="error-state">
            <div className="error-icon" aria-hidden="true">
                !
            </div>
            <h2>{title}</h2>

            <p>{message}</p>

            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                >
                    Try Again
                </button>
            )}
        </div>
    );
}