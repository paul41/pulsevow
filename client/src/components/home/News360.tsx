import { Block } from "../common/Block";
import "../../styles/news360.css";
interface News360 {
    image: string;
    tag: string;
    cat: string;
    time: string;
    title: string;
    text: string;
    tags: string[];
    cta: string;
}
export function News360() {
    const items: News360[] = [
        {
            image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
            tag: "For you",
            cat: "Markets",
            time: "32 min ago",
            title: "Indian banks and markets react to the RBI's latest policy move",
            text: "Here's how the policy decision is beginning to affect banks, investors and interest-sensitive sectors.",
            tags: ["Banking", "Markets", "Investors"],
            cta: "Understand this story",
        },
        {
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
            tag: "Related",
            cat: "Economy",
            time: "1 hr ago",
            title: "What falling inflation could mean for India's economy",
            text: "The latest inflation data provides important context behind the RBI’s policy decision.",
            tags: ["Inflation", "Economy", "RBI"],
            cta: "Explore the context",
        },
        {
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            tag: "Based on your interests",
            cat: "Real Estate",
            time: "2 hrs ago",
            title: "Home loan borrowers could see changes as banks reassess rates",
            text: "The policy change could have implications for borrowers, housing demand and financing costs.",
            tags: ["Home Loans", "Housing", "Borrowers"],
            cta: "See what changed",
        },
        {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            tag: "Worth knowing",
            cat: "Business",
            time: "3 hrs ago",
            title: "What businesses should watch as borrowing conditions change",
            text: "Changing financing conditions can influence investment, expansion and business confidence.",
            tags: ["Business", "Credit", "Growth"],
            cta: "See the impact",
        },
        {
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=180&h=130&fit=crop",
            tag: "Worth knowing",
            cat: "Business",
            time: "3 hrs ago",
            title: "What businesses should watch as borrowing conditions change",
            text: "Changing financing conditions can influence investment, expansion and business confidence.",
            tags: ["Business", "Credit", "Growth"],
            cta: "See the impact",
        },
        {
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=180&h=130&fit=crop",
            tag: "Worth knowing",
            cat: "Business",
            time: "3 hrs ago",
            title: "What businesses should watch as borrowing conditions change",
            text: "Changing financing conditions can influence investment, expansion and business confidence.",
            tags: ["Business", "Credit", "Growth"],
            cta: "See the impact",
        },
    ];
    return (
        <Block title="Pulse 360">
            {" "}
            <div className="pulse360-grid">
                {" "}
                {items.map((x) => (
                    <article className="pulse360-card" key={x.title}>
                        {" "}
                        <div className="pulse360-image">
                            {" "}
                            <img src={x.image} alt="" />{" "}
                            <span className="pulse360-badge">
                                ✦ {x.tag}
                            </span>{" "}
                        </div>{" "}
                        <div className="pulse360-content">
                            {" "}
                            <div className="pulse360-meta">
                                {" "}
                                <span>{x.cat}</span> <span>•</span>{" "}
                                <span>{x.time}</span>{" "}
                            </div>{" "}
                            <h3>{x.title}</h3> <p>{x.text}</p>{" "}
                            <div className="pulse360-tags">
                                {" "}
                                {x.tags.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}{" "}
                            </div>{" "}
                            <a href="#story" className="pulse360-link">
                                {" "}
                                {x.cta} →{" "}
                            </a>{" "}
                        </div>{" "}
                    </article>
                ))}{" "}
            </div>{" "}
        </Block>
    );
}
