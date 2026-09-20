import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pulsevow.css";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (event: FormEvent) => {
        event.preventDefault();
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            return setError("Please fill in all fields.");
        }

        if (password.length < 8) {
            return setError(
                "Password must be at least 8 characters long."
            );
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        setLoading(true);

        try {
            // Replace this block with your existing authApi.register() call.
            await new Promise((resolve) => setTimeout(resolve, 450));

            localStorage.setItem("pulsevow.authenticated", "true");
            localStorage.setItem("pulsevow.user.name", name);
            localStorage.setItem("pulsevow.user.email", email);

            navigate("/");
        } catch {
            setError(
                "Unable to create your account. Please try again."
            );
        } finally {
            setLoading(false);
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
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Your name"
                                autoComplete="name"
                            />
                        </label>

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
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm your password"
                                    autoComplete="new-password"
                                />
                            </div>
                        </label>

                        {error && (
                            <div className="auth-error">
                                {error}
                            </div>
                        )}

                        <button
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
