import { Block } from "../common/Block";
import { CONFIRMED, INTERPRETATION } from "../../constants/facts-text";

interface FactsProps {
  confirmed: string[];
  interpretation: string[];
}

export function Facts({ confirmed, interpretation }: FactsProps) {
  return (
    <Block title="What is confirmed" hint="Separate facts from interpretation">
      <div className="fact-grid">
        <div className="fact-box">
          <h3>{CONFIRMED}</h3>
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
