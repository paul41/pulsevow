import { Block } from "../common/Block";

type BriefItem = [string, string];

interface AIBriefProps {
  items: BriefItem[];
}


export function AIBrief({ items }: AIBriefProps) {
  return (
    <Block id="brief" title="Brief">
      <div className="brief-card">
        <div className="summary">
          <p>{items[4]?.[1]}</p>
        </div>
        <div className="brief-grid"> {items.slice(0, -1).map(([title, text]: BriefItem) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
        </div>
      </div>
    </Block>
  );
}

