
import { Block } from "../common/Block";
import "../../styles/matter.css";
import type { MattersNextProps } from "./types";

export function MattersNext({
  summary,
  whatNext,
}: MattersNextProps) {
  return (
    <Block id="brief" title="Impact & Outlook">
      <div className="brief-card">

        {/* Why it matters */}
        <section className="matter-section">
          <div className="why-impact-header">
            <h3>Why this matters</h3>
            <span className="public-badge">
              Public insight
            </span>
          </div>

          <p>{summary}</p>
        </section>

        {/* What happens next */}
        <section className="matter-section next-section">
          <h3>What happens next?</h3>

          <ul className="next-list">
            {whatNext.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

      </div>
    </Block>
  );
}
