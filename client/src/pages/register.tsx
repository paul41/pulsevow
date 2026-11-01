import { type FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthApi } from "../api/authApi";
import { useAuth } from "../context/authContext";
import "../styles/pulsevow.css";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isEmailFlow = searchParams.get("flow") === "email";

  const authApi = useAuthApi();
  const { setAuthenticatedUser } = useAuth();

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
      const response = await authApi.register(
        normalizedName,
        normalizedEmail,
        password,
      );
      const registeredUser = response?.data?.user;

      if (!registeredUser) {
        setError(
          "Unable to create your account. Please try again.",
        );
        return;
      }

      setAuthenticatedUser(registeredUser);

      navigate("/");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to create your account. Please try again.",
      );
    }
  };

  const loading = authApi.loading;

  return (
    <div className="auth-page">
      <div className={`auth-shell ${isEmailFlow ? "auth-shell-email" : ""}`}>
        <Link className="auth-brand" to="/">
          <span className="auth-mark">P</span>

          <span>
            <strong>PulseVow</strong>
            <span className="tag">Beyond News. Intel Insight.</span>
          </span>
        </Link>

        <div className={`auth-card ${isEmailFlow ? "auth-card-email" : ""}`}>
          {!isEmailFlow ? (
           
            <>
              <div className="auth-heading">
                <span className="auth-kicker">
                  GET STARTED
                </span>

                <h1>Create an account</h1>

                <p>
                  Choose an option to create your PulseVow
                  intelligence profile.
                </p>
              </div>

              <div className="auth-choices">
                <button
                  type="button"
                  className="auth-choice-btn"
                  onClick={() => {}}
                  aria-label="Continue with Facebook"
                >
                  <span className="auth-choice-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#1877F2"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  <span className="auth-choice-text">
                    Continue with Facebook
                  </span>
                </button>

                <button
                  type="button"
                  className="auth-choice-btn"
                  onClick={() => {}}
                  aria-label="Continue with Google"
                >
                  <span className="auth-choice-icon" aria-hidden="true">
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
                  <span className="auth-choice-text">
                    Continue with Google
                  </span>
                </button>

                <button
                  type="button"
                  className="auth-choice-btn"
                  onClick={() => navigate("/register?flow=email")}
                  aria-label="Continue with Email"
                >
                  <span className="auth-choice-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="auth-choice-text">
                    Continue with Email
                  </span>
                </button>
              </div>

              <p className="auth-footer-text">
                Already have a PulseVow account?{" "}
                <Link to="/login">Sign in</Link>
              </p>

              <p className="auth-terms">
                By creating an account, you agree to PulseVow&apos;s{" "}
                <a href="#terms" onClick={(e) => e.preventDefault()}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
                .
              </p>
            </>
          ) : (
            
            <>
              <button
                type="button"
                className="auth-back-link"
                onClick={() => navigate("/register")}
                aria-label="Back to all sign-up options"
              >
                ← Back to all options
              </button>

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

              <form onSubmit={submit} className="auth-form auth-form-email">
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

              <p className="auth-footer-text">
                Already have a PulseVow account?{" "}
                <Link to="/login">Sign in</Link>
              </p>
            </>
          )}
        </div>

        <p className="auth-legal">
          AI-powered summaries, credibility analysis,
          impact scoring and personalized recommendations.
        </p>
      </div>
    </div>
  );
}