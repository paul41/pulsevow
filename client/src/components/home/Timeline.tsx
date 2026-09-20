import { Block } from "../common/Block";

type TimelineItem = [string, string];

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <Block id="timeline" title="The story so far" hint="How we got here">
      <div className="timeline">
        {items.map(([date, text]) => (
          <div className="tl-item" key={date}>
            <div className="tl-date">{date}</div>
            <div className="tl-text">{text}</div>
          </div>
        ))}
      </div>
    </Block>
  );
}
