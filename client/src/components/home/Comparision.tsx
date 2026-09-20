import { Block } from "../common/Block";
import type { Source } from "../event/data";
import { SOURCE_TEXT } from "../../constants/source-text";

interface SourceComparisonProps {
  sources: Source[];
}

export function SourceComparison({ sources }: SourceComparisonProps) {
  return (
    <Block
      id="sources"
      title="How sources are covering it"
    >
      <p className="compare-intro">
       {SOURCE_TEXT}
      </p>

      {sources.map((s) => (
        <div className="sourcecard" key={s.name}>
          <img className="src-logo" src={s.favicon} alt={s.name} />
          <div>
            <span className="src-name">{s.name}</span>
            <span
              className={`relation ${
                s.relation === "ADDS CONTEXT"
                  ? "context"
                  : s.relation === "DIFFERS"
                  ? "diff"
                  : ""
              }`}
            >
              {s.relation}
            </span>
            <div className="src-headline">{s.headline}</div>
            <div className="src-summary">
              <b>Coverage angle:</b> {s.angle}
            </div>
          </div>
          {s.url ? (
            <a
              className="src-link"
              href={s.url}
              target="_blank"
              rel="noreferrer"
            >
              Read source ↗
            </a>
          ) : (
            <span className="src-link">Read source ↗</span>
          )}
        </div>
      ))}
    </Block>
  );
}
