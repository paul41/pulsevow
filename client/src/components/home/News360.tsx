import { Block } from "../common/Block";
import type { NewsArticle } from "../../api/type";
import "../../styles/news360.css";

interface News360Props {
    items: NewsArticle[];
}

function getTimeAgo(publishedAt: string): string {
    const publishedTime = new Date(publishedAt).getTime();

    if (Number.isNaN(publishedTime)) return "Recently";

    const diffMs = Math.max(0, Date.now() - publishedTime);
    const minutes = Math.floor(diffMs / 60000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

    return new Date(publishedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export function News360({ items }: News360Props) {
    return (
        <Block title="Pulse 360">
            <div className="pulse360-grid">
                {items.map((article) => (
                    <article className="pulse360-card" key={article.id}>
                        <div className="pulse360-image">
                            {article.imageUrl ? (
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    loading="lazy"
                                />
                            )
                                :
                                (
                                    <div style={{position: "relative", width: "100%", height: "100%", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <span>No image available</span>
                                    </div>
                                )
                            }
                            <span className="pulse360-badge">
                                ✦ {article.source?.name}
                            </span>
                        </div>

                        <div className="pulse360-content">
                            <div className="pulse360-meta">
                                <span>{article.category?.name ?? "World News"}</span>
                                <span>•</span>
                                <span>{getTimeAgo(article.publishedAt)}</span>
                            </div>

                            <h3>{article.title}</h3>

                            <p>
                                {article.description?.trim() ||
                                    "Read the latest coverage and context around this developing story."}
                            </p>

                            <div className="pulse360-tags">
                                <span>{article.source.name}</span>
                                <span>{article.source.country}</span>
                            </div>

                            <a
                                href={article.url || "#"}
                                className="pulse360-link"
                                aria-label={`Understand this story: ${article.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Understand this story →
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            {items.length === 0 && (
                <p className="pulse360-empty">
                    No world news articles are available right now.
                </p>
            )}
        </Block>


    );
}
