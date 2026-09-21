// components/common/Recommendations.tsx
import { Block } from "../common/Block";

interface RecommendationItem {
  image: string;
  tag: string;
  cat: string;
  time: string;
  title: string;
  text: string;
  tags: string[];
  cta: string;
}

export function Recommendations() {
  const items: RecommendationItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
      tag: "For you",
      cat: "Markets",
      time: "32 min ago",
      title:
        "Indian banks and markets react to the RBI's latest policy move",
      text:
        "Here's how the policy decision is beginning to affect banks, investors and interest-sensitive sectors.",
      tags: ["Banking", "Markets", "Investors"],
      cta: "Understand this story",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      tag: "Related",
      cat: "Economy",
      time: "1 hr ago",
      title: "What falling inflation could mean for India's economy",
      text:
        "The latest inflation data provides important context behind the RBI’s policy decision.",
      tags: ["Inflation", "Economy", "RBI"],
      cta: "Explore the context",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tag: "Based on your interests",
      cat: "Real Estate",
      time: "2 hrs ago",
      title:
        "Home loan borrowers could see changes as banks reassess rates",
      text:
        "The policy change could have implications for borrowers, housing demand and financing costs.",
      tags: ["Home Loans", "Housing", "Borrowers"],
      cta: "See what changed",
    },
  ];

  return (
    <Block
      title="You may also want to know"
    >
      <div className="recommended-grid">
        {items.map((x) => (
          <article className="recommended-card" key={x.title}>
            <div className="recommended-image">
              <img src={x.image} alt="" />
              <span className="match-badge">✦ {x.tag}</span>
            </div>
            <div className="recommended-content">
              <div className="story-meta">
                <span>{x.cat}</span>
                <span>•</span>
                <span>{x.time}</span>
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <div className="story-tags">
                {x.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href="#story" className="read-story">
                {x.cta} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Block>
  );
}