import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/topbar.css";

type Props = {
    language: string;
    onLanguageChange: (value: string) => void;
    onPodcastClick: () => void;
};

export function Navbar({ language, onLanguageChange, onPodcastClick }: Props) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    let { user } = useAuth();
    //user = {name: "John Doe", email: "john.doe@example.com"};
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

        if (!query) return;

        console.log("Searching for:", query);
    };

    const closeSearch = () => {
        setSearchOpen(false);
        setSearchQuery("");
    };

    return (
        <header className="topnav">
            <a className="brand" href="#top">
                <div className="mark">P</div>
                <div>
                    <span className="name">PulseVow</span>
                    <span className="tag">
                        Indian news intelligence
                    </span>
                </div>
            </a>

            <nav className="sections">
                {/* Weather icon link */}
                <a href="#weather">
                    <i className="fas fa-cloud-sun"></i> Bangalore 25.2°C
                </a>
                <div className="dropdown">
                    <button className="dropbtn">India</button>
                    {/* <div className="dropdown-content">
                        <a href="#politics-india">Politics</a>
                        <a href="#economy-india">Economy</a>
                        <a href="#tech-india">Technology</a>
                        <a href="#sports-india">Sports</a>
                        <a href="#culture-india">Entertainment</a>
                        <a href="#health-india">Health</a>
                        <a href="#health-india">Culture</a>
                        <a href="#health-india">West Bengal</a>
                        <a href="#health-india">Maharashtra</a>
                        <a href="#health-india">Delhi</a>
                    </div> */}
                </div>

                <div className="dropdown">
                    <button className="dropbtn">World</button>
                    {/* <div className="dropdown-content">
                        <a href="#global-politics">Global Politics</a>
                        <a href="#global-economy">Global Economy</a>
                        <a href="#science">Science</a>
                        <a href="#climate">Climate</a>
                        <a href="#conflicts">Conflicts</a>
                        <a href="#sports-world">International Sports</a>
                        <a href="#health-india">US</a>
                        <a href="#health-india">UK</a>
                        <a href="#health-india">Middle East</a>
                    </div> */}
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Category</button>
                    <div className="dropdown-content">
                        <a href="#politics">Politics</a>
                        <a href="#economy">Economy</a>
                        <a href="#tech">Technology</a>
                        <a href="#sports">Entertainment</a>
                        <a href="#sports">Sports</a>
                        <a href="#sports">Health</a>
                    </div>
                </div>

                <a href="#podcast" onClick={onPodcastClick}>
                    <i className="fas fa-headphones"></i> Pulse 5
                </a>
                <a href="#sectors">
                    Sectors <span className="pro-badge">PRO</span>
                </a>
            </nav>
            <div className="nav-right">
                {/* Animated search */}
                <div
                    className={`search-wrapper ${searchOpen ? "search-open" : ""
                        }`}
                >
                    <form
                        className="search-form"
                        onSubmit={handleSearch}
                    >
                        <span className="search-icon">⌕</span>

                        <input
                            ref={searchInputRef}
                            type="search"
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
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
                        className={`searchbtn ${searchOpen ? "active" : ""
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
                    onChange={(e) =>
                        onLanguageChange(e.target.value)
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
                        onClick={() => navigate("/my-profile")}
                    >
                        {user.name
                            ? user.name
                                .split(" ")
                                .map((part: string) => part[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()
                            : "PV"}
                    </button>
                ) : (
                    <a href="/login" className="login-btn">
                        Login
                    </a>
                )}
            </div>
        </header>
    );
}