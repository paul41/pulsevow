import React from 'react';
import type { Props, State } from './types';

export class ErrorBoundary
    extends React.Component<Props, State> {

    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State {
        return {
            hasError: true,
        };
    }

    componentDidCatch(
        error: Error,
        info: React.ErrorInfo
    ) {
        console.error(
            'PulseVow React Error:',
            error
        );

        console.error(
            'Component Stack:',
            info.componentStack
        );
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {

        if (this.state.hasError) {
            return (
                <div className="error-page">
                    <div className="error-icon" aria-hidden="true">
                        !
                    </div>
                    <h1>Something went wrong</h1>

                    <p>
                        PulseVow encountered an unexpected
                        problem.
                    </p>

                    <button
                        type="button"
                        onClick={this.handleReload}
                    >
                        Reload PulseVow
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}