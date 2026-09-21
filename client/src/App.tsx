
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/app-routes';
import { AuthProvider } from './context/authContext';
import { ErrorBoundary } from "./components/common/ErrorBoundary";

function App() {

    return (
        <>
            <AuthProvider>
                <Router>
                    <ErrorBoundary>
                        <AppRoutes />
                    </ErrorBoundary>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
