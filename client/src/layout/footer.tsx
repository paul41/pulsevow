import '../styles/pulsevow.css';
export function Footer({ year }: { year: number }) {

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">PulseVow</div>

        <p className="footer-description">
          PulseVow is an AI-first news intelligence platform that transforms
          breaking news into actionable insights through AI-powered summaries,
          impact analysis, source comparison, timelines
          and personalized recommendations.
        </p>

        <div className="footer-grid">
          {/* Contact Section */}
          <div>
            <h5 className="footer-title">Get In Touch</h5>
            <p>✉ support@pulsevow.com</p>
            <p>◉ www.pulsevow.com</p>
            <p>◷ AI Monitoring News 24×7</p>

            <h6 className="footer-title footer-social-title">Follow Us</h6>
            <div className="footer-social">
              {["𝕏", "f", "in", "◎", "▶"].map((x) => (
                <a href="#top" key={x}>
                  {x}
                </a>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h5 className="footer-title">AI Features</h5>
            <div className="footer-links">
              {[
                "AI-Powered News Briefs & Insights",
                "Source Comparison",
                "Timeline & Event Tracking",
                "AI Community & Discussion",
                "Sector Intelligence & Market Analysis",
                "Personalized News Intelligence",
              ].map((x) => (
                <a href="#" key={x} onClick={(e) => e.preventDefault()}>
                  {x}
                </a>
              ))}
            </div>
          </div>

          {/* Topics Section */}
          <div>
            <h5 className="footer-title">Explore Topics</h5>
            <div className="footer-topics">
              {[
                "Politics",
                "Business",
                "Markets",
                "Technology",
                "AI",
                "Startups",
                "Economy",
                "Science",
                "Healthcare",
                "Climate",
                "Crypto",
                "World",
                "Sports",
                "Entertainment",
                "Lifestyle",
              ].map((x) => (
                <a className="footer-topic" href="#today" key={x}>
                  {x}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} <a href="#top">PulseVow</a>. All Rights Reserved. <span>|</span>{" "}
        AI-Powered News Intelligence platform.
      </div>
    </footer>
  );
}
