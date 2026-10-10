import { Block } from "../common/Block";

type TimelineItem = [string, string];

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  console.log(items);
  
    const timelineItems = [
      ['Today', 'RBI announces a 25 basis point reduction and outlines its policy stance.'],
      ['3 weeks ago', "Retail inflation eased further, remaining within the RBI's comfort range."],
      ['6 weeks ago', 'RBI held rates steady while indicating that further easing could depend on inflation and growth.'],
      ['4 months ago', 'The central bank began the current easing cycle with its first rate reduction in nearly two years.'],
    ];
  return (
    <Block id="timeline" title="The story so far" hint="How we got here">
      <div className="timeline">
        {timelineItems.map(([date, text]) => (
          <div className="tl-item" key={date}>
            <div className="tl-date">{date}</div>
            <div className="tl-text">{text}</div>
          </div>
        ))}
      </div>
    </Block>
  );
}
