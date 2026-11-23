
import { useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "../styles/category.css";

type Story = {
  title: string;
  description?: string;
  time?: string;
  tag?: string;
};

const marketItems = [
  { name: "NIFTY 50", value: "26,104.25", change: "▲ 0.42%", positive: true, index: true },
  { name: "SENSEX", value: "85,712.30", change: "▲ 0.38%", positive: true, index: true },
  { name: "RELIANCE", value: "1,542.80", change: "▲ 1.24%", positive: true },
  { name: "TCS", value: "3,245.60", change: "▼ 0.62%", positive: false },
  { name: "HDFCBANK", value: "982.45", change: "▲ 0.85%", positive: true },
  { name: "INFY", value: "1,612.20", change: "▼ 0.31%", positive: false },
  { name: "ICICIBANK", value: "1,384.75", change: "▲ 0.56%", positive: true },
  { name: "GOLD", value: "1,24,850", change: "▲ 0.18%", positive: true },
];

const palettes = [
  ["#7a0a0a", "#ff6a3d"],
  ["#1d2936", "#7fb3df"],
  ["#0b3d2e", "#5fd39a"],
  ["#3b1f6b", "#c084fc"],
  ["#5a3b00", "#f2c14e"],
  ["#00394d", "#38bdf8"],
  ["#4a1030", "#fb7185"],
  ["#222222", "#888888"],
];

const railStories: Story[] = [
  { title: "Central bank signals patience on interest rates", description: "Placeholder text on the rate outlook.", time: "5 hrs ago", tag: "Economy" },
  { title: "Retailers brace for a busy shopping weekend", description: "Placeholder text on seasonal sales.", time: "Yesterday", tag: "Retail" },
  { title: "Energy bills forecast to rise from January", description: "Placeholder text on household costs.", time: "2 days ago", tag: "Energy" },
];

const rowStories: Story[] = [
  { title: "Employers asked to give interview feedback", description: "Placeholder text on hiring practices.", time: "16 hrs ago", tag: "Work" },
  { title: "Can an AI tool really find the best deal?", description: "Placeholder text on a consumer test.", time: "2 days ago", tag: "Technology" },
  { title: "Trade deal expected to lift growth modestly", description: "Placeholder text on trade policy.", time: "2 days ago", tag: "Economy" },
  { title: "Regulator opens inquiry into hidden fees", description: "Placeholder text on consumer protection.", time: "3 days ago", tag: "Business" },
];

const worldStories: Story[] = [
  { title: "Strangers are pooling money to buy a first home", description: "Placeholder text on shared home ownership." },
  { title: "Sign up to the World of Business newsletter", description: "Global insights in your inbox every week." },
  { title: "Empty offices are being turned into flats", description: "Placeholder text on conversions." },
];

const openingBell = [
  "Trade and security in focus on Asia trip",
  "Tech giants back a chief executive comeback",
  "Stocks fall after executive departure",
  "Inflation data keeps the Fed cautious",
  "Markets calmer after tech sell-off",
  "Wall Street rallies after election results",
  "Economy grew faster than expected",
  "Retail sales and inflation both rise",
];

const audioItems = [
  ["Business Daily", "Inheritance: how family firms survive"],
  ["World Business Report", "Has Wall Street fallen out of love with AI?"],
  ["Business Daily", "Power players: the business of blockbuster franchises"],
  ["World Business Report", "Shares fall after a record listing"],
  ["Business Daily", "Taking stock: chips, listings and games"],
  ["World Business Report", "Is the AI hype justified?"],
  ["Business Daily", "Founders: a European challenger takes on a giant"],
  ["World Business Report", "Will the biggest game launch live up to the hype?"],
];

const smallBusinessStories: Story[] = [
  { title: "Why sweet shops are multiplying in a weak economy", description: "Placeholder text on small retail growth.", tag: "Small business" },
  { title: "The farmer who wants everyone eating seaweed", description: "Placeholder text on a niche food business.", tag: "Small business" },
];

const moreStories: Story[] = [
  { title: "Energy boss concerned over soaring bills", description: "Placeholder description.", tag: "Business", time: "Today" },
  { title: "Record launch day for a video game", description: "Placeholder description.", tag: "Business", time: "Today" },
  { title: "Ban on overseas data centres floated", description: "Placeholder description.", tag: "Business", time: "Today" },
  { title: "Holiday rental rules change for hosts", description: "Placeholder description.", tag: "Business", time: "Yesterday" },
  { title: "Long-life food boosts retail sales", description: "Placeholder description.", tag: "Business", time: "Yesterday" },
  { title: "How much does the government borrow?", description: "Placeholder description.", tag: "Explainer", time: "Yesterday" },
];

const masterclasses = [
  "Share your idea and get honest feedback",
  "Owning your decisions",
  "Absorbing information",
  "Planning versus procrastination",
  "Navigating the attention economy",
  "Good and bad procrastination",
  "Why inbox zero backfires",
  "Time and its limits",
];

const latestStories = [
  "Desk lunches: the dos and don’ts",
  "A record stock market debut for an AI company",
  "Court allows discrimination claims against a restaurant chain",
  "Watchdog says ticket site may have broken pricing law",
  "Billionaire calls midterm spending ‘foolish’",
  "Investigators say crew unaware of risks",
  "The founders about to become very rich",
  "Energy bills to rise by hundreds of pounds",
];

const relativeTimes = [
  "2 hrs ago",
  "5 hrs ago",
  "Yesterday",
  "2 days ago",
  "3 days ago",
  "4 days ago",
];

const navigation = [
  "Home",
  "News",
  "Sport",
  "Business",
  "Technology",
  "Health",
  "Culture",
  "Travel",
  "Earth",
  "Audio",
  "Video",
  "Live",
];

function getGradient(index: number) {
  const palette = palettes[index % palettes.length];
  return `linear-gradient(135deg, ${palette[0]}, ${palette[1]})`;
}

function SectionHeading({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <div className="pvb-section-heading">
      <a href={href}>
        {children}
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M21.6 14.3 5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z" />
        </svg>
      </a>
    </div>
  );
}

function StoryImage({
  index,
  label,
  className = "",
  children,
}: {
  index: number;
  label?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`pvb-img ${className}`}>
      <i style={{ background: getGradient(index) }} />
      {label && <span>{label}</span>}
      {children}
    </div>
  );
}

function StoryMeta({ time, tag }: { time: string; tag: string }) {
  return (
    <div className="pvb-meta">
      <span>{time}</span>
      <i />
      <span>{tag}</span>
    </div>
  );
}

function StoryCard({
  story,
  index,
  noImage = false,
  noDescription = false,
}: {
  story: Story;
  index: number;
  noImage?: boolean;
  noDescription?: boolean;
}) {
  return (
    <article className="pvb-card">
      {!noImage && <StoryImage index={index} label={story.tag} />}
      <h2>{story.title}</h2>
      {!noDescription && story.description && <p>{story.description}</p>}
      {story.time && story.tag && <StoryMeta time={story.time} tag={story.tag} />}
    </article>
  );
}

function MarketTicker() {
  return (
    <div className="pvb-market-ticker" aria-label="Stock market listings">
      <div className="pvb-market-track">
        {[0, 1].map((copy) => (
          <div className="pvb-market-group" key={copy} aria-hidden={copy === 1}>
            {marketItems.map((item) => (
              <div
                className={`pvb-market-item ${item.index ? "index" : ""}`}
                key={item.name}
              >
                <span className="pvb-market-name">{item.name}</span>
                <strong>{item.value}</strong>
                <span className={`pvb-market-change ${item.positive ? "positive" : "negative"}`}>
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function BusinessHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <header className={`pvb-header ${dark ? "theme-dark" : ""}`}>
      <div className="pvb-wrap pvb-header-row">
        <button
          className="pvb-menu"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span aria-hidden="true">☰</span> Menu
        </button>

        <Link to="/" className="pvb-logo" aria-label="PulseVow Business home">
          <b>PV</b>Business
        </Link>

        <div className="pvb-header-actions">
          <button
            className="pvb-button"
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? "Light" : "Theme"}
          </button>
        </div>
      </div>

      <nav className={`pvb-main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        <ul>
          {navigation.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/search?category=${encodeURIComponent(item)}`}
                className={item === "Business" ? "on" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MarketTicker />
    </header>
  );
}

function OpeningBellSection() {
  return (
    <section className="pvb-section dark" id="bell">
      <div className="pvb-wrap">
        <SectionHeading>Opening Bell</SectionHeading>
        <div className="pvb-video-layout">
          <article className="pvb-video-main pvb-card">
            <div className="pvb-img">
              <i style={{ background: getGradient(5) }} />
              <span className="pvb-play" />
            </div>
            <h3>{openingBell[0]}</h3>
            <p className="pvb-video-description">
              Placeholder description of the lead video from the morning market briefing.
            </p>
            <div className="pvb-meta"><span>5 days ago</span></div>
          </article>

          <aside>
            <div className="pvb-subheading">Explore more</div>
            <div className="pvb-playlist">
              {openingBell.slice(1).map((title, index) => (
                <article className="pvb-playlist-item" key={title}>
                  <StoryImage index={index + 1} className="pvb-playlist-image">
                    {/* Intentionally empty: play icon is rendered separately below. */}
                  </StoryImage>
                  <span className="pvb-play small" />
                  <div>
                    <small>Opening Bell</small>
                    <h4>{title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function AudioSection() {
  return (
    <section className="pvb-section pvb-wrap">
      <SectionHeading>Latest Audio</SectionHeading>
      <div className="pvb-horizontal-scroll">
        {audioItems.map(([publisher, title], index) => (
          <article className="pvb-audio-card" key={title}>
            <StoryImage index={index} label="Audio" />
            <small>{publisher}</small>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Banner({
  title,
  description,
  tag,
  light = false,
  index = 0,
}: {
  title: string;
  description: string;
  tag?: string;
  light?: boolean;
  index?: number;
}) {
  return (
    <article className={`pvb-banner ${light ? "light" : ""}`}>
      <StoryImage index={index} />
      <div className="pvb-banner-copy">
        {tag && <span className="pvb-tag">{tag}</span>}
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#more" className="pvb-banner-link">See more</a>
      </div>
    </article>
  );
}

function LatestStories() {
  const [page, setPage] = useState(1);

  return (
    <section className="pvb-section pvb-wrap pvb-latest-section">
      <div className="pvb-section-heading">More Business</div>
      <div className="pvb-story-list">
        {latestStories.map((title, index) => (
          <article className="pvb-list-item" key={title}>
            <div className="pvb-date">{relativeTimes[index % relativeTimes.length]}</div>
            <div className="pvb-list-body">
              <div>
                <h2>{title}</h2>
                <p>Placeholder one-line summary for this story.</p>
              </div>
              <StoryImage index={index} />
            </div>
          </article>
        ))}
      </div>

      <nav className="pvb-pager" aria-label="Pagination">
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1}
        >
          ‹
        </button>
        {[1, 2, 3, 4, 5].map((number) => (
          <button
            type="button"
            key={number}
            className={page === number ? "on" : ""}
            aria-current={page === number ? "page" : undefined}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          type="button"
          aria-label="Next page"
          onClick={() => setPage((current) => Math.min(5, current + 1))}
          disabled={page === 5}
        >
          ›
        </button>
      </nav>
    </section>
  );
}

function BusinessFooter() {
  return (
    <footer className="pvb-footer">
      <div className="pvb-wrap">
        <Link to="/" className="pvb-logo pvb-footer-logo">
          <b>PV</b>Business
        </Link>
        <div className="pvb-footer-links">
          {navigation.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/search?category=${encodeURIComponent(item)}`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="pvb-legal-links">
          {["Terms of Use", "About", "Privacy Policy", "Cookies", "Accessibility Help", "Contact"].map((item) => (
            <a href="#" key={item}>{item}</a>
          ))}
        </div>
        <p>© 2026 PulseVow. Layout demo with placeholder content.</p>
      </div>
    </footer>
  );
}

export default function BusinessPage() {
  return (
    <div className="pvb-business-page">
      <BusinessHeader />

      <main>
        <h1 className="pvb-page-title">Business</h1>

        <section className="pvb-wrap">
          <div className="pvb-hero-grid">
            <div className="pvb-lead">
              <article className="pvb-card pvb-lead-card">
                <div>
                  <h2>Markets slide as tech stocks retreat from record highs</h2>
                  <p>
                    Placeholder summary: major indices fall as investors weigh valuations,
                    borrowing costs and the outlook for earnings.
                  </p>
                  <StoryMeta time="2 hrs ago" tag="Business" />
                </div>
                <StoryImage index={0} label="Business" />
              </article>
            </div>

            <div className="pvb-rail">
              {railStories.map((story, index) => (
                <StoryCard story={story} index={index + 1} key={story.title} />
              ))}
            </div>

            <div className="pvb-row-four">
              {rowStories.map((story, index) => (
                <StoryCard story={story} index={index + 4} key={story.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="pvb-section pvb-wrap" id="wob">
          <SectionHeading>World of Business</SectionHeading>
          <div className="pvb-grid-three">
            {worldStories.map((story, index) => (
              <StoryCard story={story} index={index + 2} key={story.title} />
            ))}
          </div>
        </section>

        <OpeningBellSection />
        <AudioSection />

        <section className="pvb-section pvb-wrap">
          <div className="pvb-section-heading">Africa Enterprise</div>
          <Banner
            tag="Sponsored"
            title="How subsea cables connect growing markets"
            description="Placeholder copy about the infrastructure powering regional digital trade."
            index={2}
          />
        </section>

        <section className="pvb-section pvb-wrap">
          <div className="pvb-section-heading">Small Business</div>
          <div className="pvb-grid-two">
            {smallBusinessStories.map((story, index) => (
              <StoryCard story={story} index={index + 2} key={story.title} />
            ))}
          </div>
        </section>

        <section className="pvb-section pvb-wrap" id="tob">
          <SectionHeading>Technology of Business</SectionHeading>
          <Banner
            light
            title="Should software decide who gets a loan?"
            description="Placeholder summary on automated credit decisions and fairness."
            index={3}
          />
        </section>

        <section className="pvb-section pvb-wrap" id="more">
          <div className="pvb-section-heading">More news</div>
          <div className="pvb-grid-six">
            {moreStories.map((story, index) => (
              <StoryCard story={story} index={index} key={story.title} />
            ))}
          </div>
        </section>

        <section className="pvb-section dark">
          <div className="pvb-wrap">
            <SectionHeading>Masterclass</SectionHeading>
            <div className="pvb-horizontal-scroll pvb-masterclass-scroll">
              {masterclasses.map((title, index) => (
                <article className="pvb-masterclass-card" key={title}>
                  <StoryImage index={index + 3}>
                    <span className="pvb-play" />
                  </StoryImage>
                  <h2>{title}</h2>
                  <p>Placeholder lesson description.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <LatestStories />
      </main>

      <BusinessFooter />
    </div>
  );
}
