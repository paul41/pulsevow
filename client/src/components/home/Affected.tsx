import { Block } from "../common/Block.js";
import type { AffectedProps } from "./types.js";
import "../../styles/affect.css";

export function Affected({ affectedGroups }: AffectedProps) {
  return (
    <Block title={""}>
      <div className="who-it-affects">
        <div className="affected-section">
          <div className="affected-heading">
            <h3>Who should pay attention</h3>
          </div>

          <div className="affected-grid">
            {affectedGroups.map((group) => (
              <div className="affected-card" key={group.title}>
                <h4>{group.title}</h4>
                <p>{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}