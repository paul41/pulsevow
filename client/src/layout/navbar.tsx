import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/topbar.css";

type Props = {
    language: string;
    onLanguageChange: (value: string) => void;
    onPodcastClick: () => void;
};

export function Navbar({
    language,
    onLanguageChange,
    onPodcastClick,
}: Props) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    const { user } = useAuth();

    const searchInputRef = useRef<HTMLInputElement>(null);

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
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const query = searchQuery.trim();

        if (!query) {
            return;
        }

        console.log("Searching for:", query);

        // Later:
        // navigate(`/search?q=${encodeURIComponent(query)}`);
    };

    const closeSearch = () => {
        setSearchOpen(false);
        setSearchQuery("");
    };

    const getUserInitials = () => {
        if (!user) {
            return "PV";
        }

        const name = user.username?.trim();

        if (!name) {
            return "PV";
        }

        const parts = name.split(/\s+/);

        if (parts.length === 1) {
            return parts[0].slice(0, 2).toUpperCase();
        }

        return parts
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase();
    };

    return (
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

            <nav className="sections">
                <a href="#weather">
                    <i className="fas fa-cloud-sun"></i>
                    {" "}Bangalore 25.2°C
                </a>

                <div className="dropdown">
                    <button
                        type="button"
                        className="dropbtn"
                    >
                        India
                    </button>
                </div>

                <div className="dropdown">
                    <button
                        type="button"
                        className="dropbtn"
                    >
                        World
                    </button>
                </div>

                <div className="dropdown">
                    <button
                        type="button"
                        className="dropbtn"
                    >
                        Category
                    </button>

                    <div className="dropdown-content">
                        <a href="#politics">Politics</a>
                        <a href="#economy">Economy</a>
                        <a href="#tech">Technology</a>
                        <a href="#entertainment">
                            Entertainment
                        </a>
                        <a href="#sports">Sports</a>
                        <a href="#health">Health</a>
                    </div>
                </div>

                <a
                    href="#podcast"
                    onClick={onPodcastClick}
                >
                    <i className="fas fa-headphones"></i>
                    {" "}Pulse 5
                </a>

                <a href="#sectors">
                    Sectors{" "}
                    <span className="pro-badge">PRO</span>
                </a>
            </nav>

            <div className="nav-right">
                <div
                    className={`search-wrapper ${
                        searchOpen ? "search-open" : ""
                    }`}
                >
                    <form
                        className="search-form"
                        onSubmit={handleSearch}
                    >
                        <span className="search-icon">
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

                    <button
                        type="button"
                        className={`searchbtn ${
                            searchOpen ? "active" : ""
                        }`}
                        aria-label={
                            searchOpen
                                ? "Close search"
                                : "Open search"
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

                <select
                    className="lang"
                    value={language}
                    onChange={(event) =>
                        onLanguageChange(event.target.value)
                    }
                    aria-label="Select language"
                >
                    <option>English</option>
                    <option>हिन्दी</option>
                    <option>বাংলা</option>
                    <option>தமிழ்</option>
                    <option>తెలుగు</option>
                    <option>मराठी</option>
                    <option>ಕನ್ನಡ</option>
                </select>

                {user ? (
                    <button
                        type="button"
                        className="avatar"
                        title="View profile"
                        aria-label="View profile"
                        onClick={() =>
                            navigate("/my-profile")
                        }
                    >
                        {getUserInitials()}
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="login-btn"
                    >
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
}