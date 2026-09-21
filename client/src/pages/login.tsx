import { type FormEvent, useState } from "react";
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
      await loginUser(email, password);

      navigate("/");
    } catch {
      setError(
        "Unable to sign in. Please check your credentials.",
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
            <small>Indian news intelligence</small>
          </span>
        </Link>

        <div className="auth-card">
          <div className="auth-heading">
            <span className="auth-kicker">
              WELCOME BACK
            </span>

            <h1>
              Understand the news, not just read it.
            </h1>

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
                onChange={(e) => setEmail(e.target.value)}
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
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <button
            className="social-login"
            type="button"
            disabled={loading}
          >
            Continue with Google
          </button>

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