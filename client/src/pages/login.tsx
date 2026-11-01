import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/pulsevow.css";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Enter your email and password.");
      return;
    }

    try {
      await loginUser(
        email.trim().toLowerCase(),
        password,
      );

      navigate("/");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to sign in. Please check your credentials.",
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <Link className="auth-brand" to="/">
          <span className="auth-mark">P</span>

          <span>
            <strong>PulseVow</strong>
            <span className="tag">Beyond News. Intel Insight.</span>
          </span>
        </Link>

        <div className="auth-card">
          <div className="auth-heading">
            <span className="auth-kicker">
              WELCOME BACK
            </span>

            <p>
              Sign in to personalize your PulseVow
              intelligence feed.
            </p>
          </div>

          <form onSubmit={submit} className="auth-form">
            <label>
              Email address

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="you@example.com"
                autoComplete="email"
                disabled={loading}
              />
            </label>

            <label>
              Password

              <div className="password-field">
                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                />
              </div>
            </label>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <div className="auth-row">
              <label className="check">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                  disabled={loading}
                />

                Remember me
              </label>

              <button
                type="button"
                className="text-button"
                disabled={loading}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading
                ? "Signing in…"
                : "Sign in"}
            </button>
          </form>

          <div className="auth-divider">
            <span>or sign in with</span>
          </div>

          <div className="social-login-container">
            <button
              className="social-login"
              type="button"
              disabled={loading}
              aria-label="Continue with Google"
            >
              <span className="auth-choice-icon-login" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.1 3.66-5.2 3.66-9.12z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.28 21.43 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.25C.45 8.16 0 9.97 0 12c0 2.03.45 3.84 1.25 5.43l4.03-3.14z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.28 2.57 1.25 6.57l4.03 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
                  />
                </svg>
              </span>
            </button>

            <button
              className="social-login"
              type="button"
              disabled={loading}
              aria-label="Continue with Facebook"
            >
              <span className="auth-choice-icon-login" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
            </button>
          </div>

          <p className="auth-footer-text">
            New to PulseVow?{" "}
            <Link to="/register">
              Create your profile
            </Link>
          </p>
        </div>

        <p className="auth-legal">
          AI-powered summaries, credibility analysis,
          impact scoring and personalized recommendations.
        </p>
      </div>
    </div>
  );
}