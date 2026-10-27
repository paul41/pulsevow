import { Block } from "../common/Block";
import { VERIFIED, INTERPRETATION } from "../../constants/facts-text.js";
import type { FactsProps } from "./types.js";

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
