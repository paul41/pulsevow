import { type FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/pulsevow.css";

const interests = [
  "Banking",
  "Technology",
  "Markets",
  "Economy",
  "Startups",
  "Real Estate",
  "Energy",
  "Policy",
];

const languages = [
  "English",
  "हिन्दी",
  "বাংলা",
  "தமிழ்",
  "తెలుగు",
  "मराठी",
  "ಕನ್ನಡ",
];

export default function Profile() {
  const navigate = useNavigate();

  const {
    user,
    loading: authLoading,
    logoutUser,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");
  const [selected, setSelected] = useState([
    "Technology",
    "Markets",
    "Economy",
  ]);
  const [newsletter, setNewsletter] = useState(true);
  const [saved, setSaved] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  /*
   * Populate profile fields from AuthProvider.
   */
  useEffect(() => {
    if (!user) {
      return;
    }

    setName(user.name ?? "");
    setEmail(user.email ?? "");
  }, [user]);

  /*
   * Generate initials from the authenticated user's name.
   *
   * Sourav Paul -> SP
   * Sourav -> SO
   */
  const getUserInitials = () => {
    if (!user?.name?.trim()) {
      return "PV";
    }

    const parts = user.name.trim().split(/\s+/);

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return parts
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const toggleInterest = (interest: string) => {
    setSelected((items) =>
      items.includes(interest)
        ? items.filter((item) => item !== interest)
        : [...items, interest],
    );
  };

  const save = (event: FormEvent) => {
    event.preventDefault();
    console.log("Preferences data:", {
      name,
      email,
      language,
      interests: selected,
      newsletter,
    });
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2200);
  };

  const handleLogout = async () => {
    if (loggingOut) {
      return;
    }

    try {
      setLoggingOut(true);

      await logoutUser();

      navigate("/login", { replace: true });
    } finally {
      setLoggingOut(false);
    }
  };

  if (authLoading) {
    return (
      <div className="pulsevow-app profile-page">
        <main className="profile-main">
          <div className="profile-intro">
            <h1>Loading your profile...</h1>
          </div>
        </main>
      </div>
    );
  }

  /*
   * If the user is not authenticated, don't render
   * the private profile page.
   */
  if (!user) {
    return null;
  }

  return (
    <div className="pulsevow-app profile-page">
      <header className="topnav">
        <Link className="brand" to="/">
          <div className="mark">P</div>

          <div>
            <span className="name">PulseVow</span>
            <span className="tag">
              Indian news intelligence
            </span>
          </div>
        </Link>

        <div className="nav-right">
          <Link
            className="profile-nav-home"
            to="/"
          >
            Back to PulseVow
          </Link>

          <div
            className="avatar"
            title={user.name}
            aria-label={`Profile for ${user.name}`}
          >
            {getUserInitials()}
          </div>
        </div>
      </header>

      <main className="profile-main">
        <div className="profile-intro">
          <span className="auth-kicker">
            YOUR PULSE
          </span>

          <h1>Your profile</h1>

          <p>
            Shape what PulseVow brings to you. Your
            interests influence personalized stories,
            sector intelligence and monthly briefs.
          </p>
        </div>

        <form
          className="profile-grid"
          onSubmit={save}
        >
          <section className="profile-card profile-card-wide">
            <div className="profile-card-head">
              <div>
                <h2>Personal information</h2>
                <p>Basic account details.</p>
              </div>

              <div className="profile-avatar-large">
                {getUserInitials()}
              </div>
            </div>

            <div className="profile-fields">
              <label>
                Full name

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
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
                  readOnly
                />
              </label>

              <label>
                Preferred language

                <select
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value)
                  }
                >
                  {languages.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section className="profile-card profile-card-wide">
            <div className="profile-card-head">
              <div>
                <h2>News interests</h2>

                <p>
                  Select the areas you want PulseVow
                  to prioritize.
                </p>
              </div>
            </div>

            <div className="interest-grid">
              {interests.map((interest) => {
                const isSelected =
                  selected.includes(interest);

                return (
                  <button
                    key={interest}
                    type="button"
                    className={`interest-chip ${isSelected ? "selected" : ""
                      }`}
                    onClick={() =>
                      toggleInterest(interest)
                    }
                  >
                    {isSelected ? "✓" : "+"}{" "}
                    {interest}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="profile-card">
            <h2>Personalized intelligence</h2>

            <p className="profile-description">
              Use your interests to tailor
              recommendations and sector-level
              intelligence.
            </p>

            <div className="setting-row">
              <div>
                <strong>
                  Personalized stories
                </strong>

                <span>
                  Show stories connected to your
                  interests.
                </span>
              </div>

              <span className="setting-on">
                ON
              </span>
            </div>

            <div className="setting-row">
              <div>
                <strong>Daily newsletter</strong>

                <span>
                  Receive a concise intelligence
                  briefing.
                </span>
              </div>

              <button
                type="button"
                className={`toggle ${newsletter ? "on" : ""
                  }`}
                onClick={() =>
                  setNewsletter(!newsletter)
                }
                aria-label={
                  newsletter
                    ? "Disable daily newsletter"
                    : "Enable daily newsletter"
                }
              >
                <span />
              </button>
            </div>
          </section>

          <section className="profile-card">
            <h2>Account</h2>

            <p className="profile-description">
              Manage your session and account access.
            </p>

            <button
              type="button"
              className="profile-action danger"
              onClick={handleLogout}
              disabled={loggingOut}
            >
              {loggingOut
                ? "Logging out..."
                : "Log out"}
            </button>

            <button
              type="button"
              className="profile-action"
            >
              Change password
            </button>
          </section>

          <div className="profile-save">
            <span>
              {saved
                ? "✓ Profile preferences saved"
                : "Your preferences are private to your PulseVow account."}
            </span>

            <button
              type="submit"
              className="auth-submit profile-submit"
            >
              Save preferences
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}