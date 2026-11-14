
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAuth } from "../context/authContext";
import "../styles/navbar.css";
import type { Props } from "./type";

const categories = [
  { key: "politics", value: "politics" },
  { key: "economy", value: "economy" },
  { key: "technology", value: "tech" },
  { key: "entertainment", value: "entertainment" },
  { key: "sports", value: "sports" },
  { key: "health", value: "health" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "kn", label: "ಕನ್ನಡ" },
];

export function Navbar({ onPodcastClick }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage || "en";

  const searchInputRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  // Update document language
  useEffect(() => {
    document.documentElement.lang =
      i18n.resolvedLanguage || "en";
  }, [i18n.resolvedLanguage]);

  // Close dropdowns on Escape or outside click
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
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, []);

  // Close search
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Change application language
  const handleLanguageChange = (languageCode: string) => {
    void i18n.changeLanguage(languageCode || "en");
  };

  // Search submission
  const handleSearch = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
    closeSearch();
  };

  // Generate user initials
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
      {/* Brand */}
      <Link
        className="brand"
        to="/"
        aria-label="PulseVow home"
      >
        <div className="mark" aria-hidden="true">
          P
        </div>

        <div className="brand-copy">
          <span className="name">PulseVow</span>
          <span className="tag">
            Beyond News. Intel Insight.
          </span>
        </div>
      </Link>

      {/* Main Navigation */}
      <nav
        className="sections"
        aria-label={t("navigation.mainNavigation")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "nowrap",
          minWidth: 0,
          position: "relative",
        }}
      >
        {/* India */}
        <Link
          to="/?region=india"
          className="nav-item"
          style={{
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {t("common.india")}
        </Link>

        {/* World */}
        <a
          href="#world"
          className="nav-item"
          style={{
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {t("common.world")}
        </a>

        {/* For You */}
        <Link
          to="/for-you"
          className="nav-item nav-for-you"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            flexShrink: 0,
            whiteSpace: "nowrap",
            marginRight: "4px",
          }}
        >
          <span aria-hidden="true">✦</span>
          {t("navigation.forYou")}
        </Link>

        {/* Categories Dropdown */}
        <div
          className="dropdown-category nav-item"
          ref={categoryRef}
          style={{
            position: "relative",
            flexShrink: 0,
            whiteSpace: "nowrap",
            marginLeft: "2px",
          }}
        >
          <button
            type="button"
            className="dropbtn"
            aria-expanded={categoryOpen}
            aria-haspopup="true"
            onClick={() =>
              setCategoryOpen((open) => !open)
            }
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              whiteSpace: "nowrap",
            }}
          >
            {t("navigation.categories")}

            <span
              className="dropdown-chevron"
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {categoryOpen && (
            <div
              className="dropdown-content-category"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                zIndex: 1000,
                minWidth: "180px",
              }}
            >
              {categories.map((category) => (
                <Link
                  key={category.value}
                  to={`/search?category=${encodeURIComponent(
                    category.value
                  )}`}
                  onClick={() => setCategoryOpen(false)}
                >
                  {t(
                    `navigation.categoriesList.${category.key}`
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Podcast */}
        <button
          type="button"
          className="nav-item nav-action"
          onClick={onPodcastClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          <i
            className="fas fa-headphones"
            aria-hidden="true"
          />
          <span>{t("navigation.pulse5")}</span>
        </button>

        {/* Sector Intelligence */}
        <Link
          to="/sector-intelligence"
          className="nav-item nav-sectors"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {t("navigation.sectors")}
          <span className="pro-badge">PRO</span>
        </Link>
      </nav>

      {/* Right Navigation */}
      <div className="nav-right">
        {/* Search */}
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
              <span
                className="search-icon"
                aria-hidden="true"
              >
                ⌕
              </span>

              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder={t("common.searchNews")}
                aria-label={t("common.searchNews")}
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear"
                  aria-label={t("common.clearSearch")}
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
            aria-label={
              searchOpen
                ? t("common.closeSearch")
                : t("common.openSearch")
            }
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

        {/* Language Selector */}
        <select
          className="lang"
          value={language}
          onChange={(event) =>
            handleLanguageChange(event.target.value)
          }
          name="language"
          aria-label={t("common.selectLanguage")}
        >
          {languages.map((item) => (
            <option
              key={item.code}
              value={item.code}
            >
              {item.label}
            </option>
          ))}
        </select>

        {/* Authentication */}
        {user ? (
          <button
            type="button"
            className="avatar"
            title={t("common.viewProfile")}
            aria-label={t("common.viewProfile")}
            onClick={() => navigate("/my-profile")}
          >
            {getUserInitials()}
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            {t("common.login")}
          </Link>
        )}
      </div>
    </header>
  );
}
