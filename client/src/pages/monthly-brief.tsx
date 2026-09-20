import { Link } from "react-router-dom";

type MonthlyBrief = {
    month: string;
    year: number;
    description: string;
    stories: number;
    sectors: number;
    podcastDuration: string;
    status: "Latest" | "Archive";
};

const monthlyBriefs: MonthlyBrief[] = [
    {
        month: "September",
        year: 2026,
        description:
            "The biggest developments across India's economy, markets, technology, policy and businesses so far this month.",
        stories: 284,
        sectors: 12,
        podcastDuration: "18 min",
        status: "Latest",
    },
    {
        month: "August",
        year: 2026,
        description:
            "A month shaped by monetary policy, technology investments, consumer demand and changing global trade conditions.",
        stories: 1_042,
        sectors: 14,
        podcastDuration: "24 min",
        status: "Archive",
    },
    {
        month: "July",
        year: 2026,
        description:
            "The key events, policy decisions and business developments that influenced India's July outlook.",
        stories: 968,
        sectors: 13,
        podcastDuration: "21 min",
        status: "Archive",
    },
    {
        month: "June",
        year: 2026,
        description:
            "A consolidated view of the major economic, political, business and technology developments.",
        stories: 1_124,
        sectors: 15,
        podcastDuration: "27 min",
        status: "Archive",
    },
    {
        month: "May",
        year: 2026,
        description:
            "What changed across Indian markets, businesses and policy during May.",
        stories: 1_087,
        sectors: 14,
        podcastDuration: "23 min",
        status: "Archive",
    },
    {
        month: "April",
        year: 2026,
        description:
            "The major stories and emerging trends that defined India's April news cycle.",
        stories: 934,
        sectors: 12,
        podcastDuration: "20 min",
        status: "Archive",
    },
];

export default function MonthlyBriefPage() {
    return (
        <main className="monthly-brief-page">
            <section className="monthly-hero">
                <div>
                    <Link to="/" className="back-link">
                        ← Back to PulseVow
                    </Link>

                    <p className="eyebrow">PULSEVOW INTELLIGENCE</p>

                    <h1>Monthly Brief</h1>

                    <p className="hero-description">
                        One place to understand the biggest stories, trends and
                        shifts that shaped each month.
                    </p>
                </div>

                <div className="brief-hero-stat">
                    <span>Latest edition</span>
                    <strong>September 2026</strong>
                </div>
            </section>

            <section className="latest-brief">
                <div className="latest-content">
                    <div className="latest-label">
                        <span>●</span> Latest Brief
                    </div>

                    <h2>September 2026</h2>

                    <p>
                        India's most important developments across business,
                        economy, technology, policy and markets — condensed
                        into one intelligent monthly view.
                    </p>

                    <div className="brief-tags">
                        <span>284 stories</span>
                        <span>12 sectors</span>
                        <span>AI analysed</span>
                    </div>

                    <div className="latest-actions">
                        <button className="primary-button">
                            Read September Brief →
                        </button>

                        <button className="secondary-button">
                            ▶ Listen to Podcast
                        </button>
                    </div>
                </div>

                <div className="podcast-card">
                    <div className="podcast-icon">▶</div>

                    <p>MONTHLY PODCAST</p>

                    <h3>The September Intelligence Brief</h3>

                    <span>18 min · AI-narrated</span>

                    <div className="audio-progress">
                        <span />
                    </div>

                    <button className="play-button">
                        ▶ Play Podcast
                    </button>
                </div>
            </section>

            <section className="brief-section-header">
                <div>
                    <h2>Previous editions</h2>
                    <p>
                        Explore PulseVow's intelligence archive month by month.
                    </p>
                </div>

                <select defaultValue="2026" aria-label="Filter by year">
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                </select>
            </section>

            <section className="brief-list">
                {monthlyBriefs.slice(1).map((brief) => (
                    <article className="brief-row" key={`${brief.month}-${brief.year}`}>
                        <div className="brief-date">
                            <span>{brief.month.slice(0, 3).toUpperCase()}</span>
                            <strong>{brief.year}</strong>
                        </div>

                        <div className="brief-main">
                            <div className="brief-title">
                                <h3>
                                    {brief.month} {brief.year}
                                </h3>

                                {brief.status === "Archive" && (
                                    <span className="archive-badge">
                                        Archive
                                    </span>
                                )}
                            </div>

                            <p>{brief.description}</p>

                            <div className="brief-metadata">
                                <span>{brief.stories} stories</span>
                                <span>{brief.sectors} sectors</span>
                                <span>AI analysed</span>
                            </div>
                        </div>

                        <div className="brief-podcast">
                            <span>Podcast</span>
                            <strong>▶ {brief.podcastDuration}</strong>
                        </div>

                        <div className="brief-actions">
                            <button>Read Brief</button>
                            <button>▶</button>
                        </div>
                    </article>
                ))}
            </section>

            <section className="monthly-insight">
                <div>
                    <p className="eyebrow">WHY MONTHLY BRIEFS?</p>

                    <h2>
                        Don't just follow the news.
                        <br />
                        Understand the month.
                    </h2>
                </div>

                <div className="insight-points">
                    <div>
                        <strong>01</strong>
                        <p>
                            Connect individual news stories into larger events
                            and trends.
                        </p>
                    </div>

                    <div>
                        <strong>02</strong>
                        <p>
                            See which sectors and stakeholders were most
                            affected.
                        </p>
                    </div>

                    <div>
                        <strong>03</strong>
                        <p>
                            Listen to the entire month's intelligence in a
                            short podcast.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}