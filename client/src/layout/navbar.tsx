import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/navbar.css";

type Props = {
  language: string;
  onLanguageChange: (value: string) => void;
  onPodcastClick: () => void;
};

const categories = [
  { label: "Politics", value: "politics" },
  { label: "Economy", value: "economy" },
  { label: "Technology", value: "tech" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Sports", value: "sports" },
  { label: "Health", value: "health" },
];

export function Navbar({
  language,
  onLanguageChange,
  onPodcastClick,
}: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
        setCategoryOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
    closeSearch();
  };

  const getUserInitials = () => {
    const name = user?.name?.trim();

    if (!name) return "PV";

    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="topnav">
      <Link
        className="brand"
        to="/"
        aria-label="PulseVow home"
      >
        <div className="mark" aria-hidden="true">P</div>

        <div className="brand-copy">
          <span className="name">PulseVow</span>
          <span className="tag">Beyond News. Intel Insight.</span>
        </div>
      </Link>

      <nav className="sections" aria-label="Main navigation">
        <Link to="/?region=india" className="nav-item">
          India
        </Link>

        <a href="#world" className="nav-item">
          World
        </a>

        <Link to="/?feed=for-you" className="nav-item nav-for-you">
          <span aria-hidden="true">✦</span> For You
        </Link>

        <div
          className="dropdown-category nav-item"
          ref={categoryRef}
        >
          <button
            type="button"
            className="dropbtn"
            aria-expanded={categoryOpen}
            aria-haspopup="true"
            onClick={() => setCategoryOpen((open) => !open)}
          >
            Categories
            <span className="dropdown-chevron" aria-hidden="true">
              ▾
            </span>
          </button>

          {categoryOpen && (
            <div className="dropdown-content-category">
              {categories.map((category) => (
                <Link
                  key={category.value}
                  to={`/search?category=${encodeURIComponent(
                    category.value
                  )}`}
                  onClick={() => setCategoryOpen(false)}
                >
                  {category.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          className="nav-item nav-action"
          onClick={onPodcastClick}
        >
          <i className="fas fa-headphones" aria-hidden="true" />
          <span>Pulse 5</span>
        </button>

        <Link
          to="/sector-intelligence"
          className="nav-item nav-sectors"
        >
          Sectors <span className="pro-badge">PRO</span>
        </Link>
      </nav>

      <div className="nav-right">
        <div
          className={`search-wrapper ${
            searchOpen ? "search-open" : ""
          }`}
        >
          {searchOpen && (
            <form
              className="search-form"
              role="search"
              onSubmit={handleSearch}
            >
              <span className="search-icon" aria-hidden="true">
                ⌕
              </span>

              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search news..."
                aria-label="Search news"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear"
                  aria-label="Clear search"
                  onClick={() => {
                    setSearchQuery("");
                    searchInputRef.current?.focus();
                  }}
                >
                  ×
                </button>
              )}
            </form>
          )}

          <button
            type="button"
            className={`searchbtn ${
              searchOpen ? "active" : ""
            }`}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => {
              if (searchOpen) {
                closeSearch();
              } else {
                setSearchOpen(true);
              }
            }}
          >
            {searchOpen ? "×" : "⌕"}
          </button>
        </div>

        <select
          className="lang"
          value={language}
          onChange={(event) =>
            onLanguageChange(event.target.value)
          }
          name="language"
          aria-label="Select language"
        >
          <option value="English">English</option>
          <option value="हिन्दी">हिन्दी</option>
          <option value="বাংলা">বাংলা</option>
          <option value="தமிழ்">தமிழ்</option>
          <option value="తెలుగు">తెలుగు</option>
          <option value="मराठी">मराठी</option>
          <option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
        </select>

        {user ? (
          <button
            type="button"
            className="avatar"
            title="View profile"
            aria-label="View profile"
            onClick={() => navigate("/my-profile")}
          >
            {getUserInitials()}
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}