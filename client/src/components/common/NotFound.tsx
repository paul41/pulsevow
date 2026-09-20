import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>404</h1>

      <h2>Page not found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <button
        type="button"
        onClick={() => navigate('/')}
      >
        Go to PulseVow
      </button>
    </div>
  );
}