import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthApi } from "../api/authApi";
import { useAuth } from "../context/authContext";
import "../styles/pulsevow.css";

export default function Register() {
  const navigate = useNavigate();

  const authApi = useAuthApi();
  const { loginUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedName = name.trim();

    try {
      const data = await authApi.register(
        normalizedName,
        normalizedEmail,
        password,
      );

      if (!data?.user) {
        setError(
          authApi.error ||
            "Unable to create your account. Please try again.",
        );
        return;
      }

      /*
       * If /auth/register creates the session and sets the
       * HttpOnly access_token + refresh_token cookies,
       * we can immediately store the authenticated user.
       */
      const success = await loginUser(
        normalizedEmail,
        password,
      );

      if (!success) {
        setError(
          "Account created successfully. Please sign in.",
        );
        navigate("/login");
        return;
      }

      navigate("/");
    } catch {
      setError(
        "Unable to create your account. Please try again.",
      );
    }
  };

  const loading = authApi.loading;

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
              JOIN PULSEVOW
            </span>

            <h1>
              Stay informed.
              <br />
              Understand what matters.
            </h1>

            <p>
              Create your profile and personalize your
              PulseVow intelligence feed.
            </p>
          </div>

          <form onSubmit={submit} className="auth-form">
            <label>
              Full name

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoComplete="name"
                disabled={loading}
              />
            </label>

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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  disabled={loading}
                />
              </div>
            </label>

            <label>
              Confirm password

              <div className="password-field">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  disabled={loading}
                />
              </div>
            </label>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading
                ? "Creating account…"
                : "Create account"}
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
            Already have a PulseVow account?{" "}
            <Link to="/login">Sign in</Link>
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