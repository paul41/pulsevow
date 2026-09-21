import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/pulsevow.css";

export default function Logout() {
  const { logoutUser } = useAuth();
  const [loggingOut, setLoggingOut] = useState(true);

  useEffect(() => {
    const logout = async () => {
      try {
        await logoutUser();
      } finally {
        setLoggingOut(false);
      }
    };

    logout();
  }, [logoutUser]);

  return (
    <div className="auth-page logout-page">
      <div className="logout-card">
        <div className="auth-mark">P</div>

        <span className="auth-kicker">
          {loggingOut ? "SIGNING OUT" : "SIGNED OUT"}
        </span>

        <h1>
          {loggingOut ? "Signing you out…" : "You’re logged out."}
        </h1>

        <p>
          {loggingOut
            ? "Ending your PulseVow session securely."
            : "Your PulseVow session has been ended. Come back whenever you want to catch up on the stories that matter."}
        </p>

        {!loggingOut && (
          <div className="logout-actions">
            <Link className="auth-submit" to="/login">
              Sign in again
            </Link>

            <Link className="profile-action" to="/">
              Return to PulseVow
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}