import { Block } from "../common/Block";
import type { NewsSource } from "../../api/type";
import { SOURCE_TEXT } from "../../constants/source-text.js";

interface SourceComparisonProps {
  sources: NewsSource[];
}

const defaultSources = [
  {
    name: "Economic Times",
    logo: "https://www.google.com/s2/favicons?domain=economictimes.indiatimes.com&sz=64",
    relation: "AGREES",
    headline: "RBI delivers another rate cut, leaving room for further easing",
    angle: "Focuses on borrowing costs, markets and economists' expectations.",
    url: "https://economictimes.indiatimes.com",
  },
  {
    name: "BQ Prime",
    logo: "https://www.google.com/s2/favicons?domain=bqprime.com&sz=64",
    relation: "ADDS CONTEXT",
    headline: "MPC cuts repo rate as inflation and growth forecasts shift",
    angle: "Concentrates on the policy mechanics and economic forecasts.",
    url: "https://www.bqprime.com",
  },
  {
    name: "NewsXpress",
    logo: "https://www.google.com/s2/favicons?domain=news.com&sz=64",
    relation: "DIFFERS",
    headline: "RBI stuns markets with a surprise rate cut",
    angle:
      "Uses a more dramatic framing; PulseVow flags that the rate cut had been widely anticipated.",
    url: undefined,
  },
];

export function SourceComparison({ sources }: SourceComparisonProps | any) {
  const displaySources = sources.length > 0 ? sources : defaultSources;

  return (
    <Block id="sources" title="How sources are covering it">
      <p className="compare-intro">{SOURCE_TEXT}</p>

      <div className="source-grid">
        {displaySources.map((s: any) => (
          <div className="sourcecard" key={s.name}>
            {s.logo && (
              <img className="src-logo" src={s.logo} alt={s.name} />
            )}

            <div>
              <span className="src-name">{s.name}</span>

              <span
                className={`relation ${
                  s?.relation === "ADDS CONTEXT"
                    ? "context"
                    : s?.relation === "DIFFERS"
                      ? "diff"
                      : ""
                }`}
              >
                {s.relation}
              </span>

              <div className="src-headline">{s.headline}</div>

              {s.angle && (
                <div className="src-summary">
                  <b>Coverage angle:</b> {s.angle}
                </div>
              )}
            </div>

            {s.url ? (
              <a
                className="src-link"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read source ↗
              </a>
            ) : (
              <span className="src-link">Link unavailable</span>
            )}
          </div>
        ))}
      </div>
    </Block>
  );
}