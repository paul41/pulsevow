import { Block } from "../common/Block";
import { VERIFIED, INTERPRETATION } from "../../constants/facts-text.js";

interface FactsProps {
  confirmed: string[];
  interpretation: string[];
}

export function Facts({ confirmed, interpretation }: FactsProps) {
  return (
    <Block title="What we know">
      <div className="fact-grid">
        <div className="fact-box">
          <h3>{VERIFIED}</h3>
          <ul>
            {confirmed.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="fact-box interpretation">
          <h3>{INTERPRETATION}</h3>
          <ul>
            {interpretation.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </Block>
  );
}
