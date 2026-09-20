import { Block } from "../common/Block";

type BriefItem = [string, string];

interface AIBriefProps {
    items: BriefItem[];
}


export function AIBrief({ items }: AIBriefProps) {
  return (
    <Block title="AI Brief" hint="Context, not just a rewrite">
      <div className="brief-card">
        <div className="brief-grid">
          {items.slice(0, -1).map(([title, text]: string[]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="summary">
          <span className="summary-label">Summary: </span>
          <p>{items[4]?.[1]}</p>
        </div>
      </div>
    </Block>
  );
}

