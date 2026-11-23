
import { useTranslation } from "react-i18next";
import { Block } from "../common/Block";
import type { TimelineItem, TimelineProps } from "./types";

const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    date: new Date(),
    content: "RBI announces a 25 basis point reduction and outlines its policy stance.",
  },
  {
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
    content: "Retail inflation eased further, remaining within the RBI's comfort range.",
  },
  {
    date: new Date(Date.now() - 42 * 24 * 60 * 60 * 1000),
    content: "RBI held rates steady while indicating that further easing could depend on inflation and growth.",
  },
  {
    date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
    content: "The central bank began the current easing cycle with its first rate reduction in nearly two years.",
  },
];

export function Timeline({ items }: TimelineProps) {
  const { t } = useTranslation();

  const timelineItems = items.length > 0 ? items : DEFAULT_TIMELINE;

  return (
    <Block
      id="timeline"
      title={t("timeline.title")}
      hint={t("timeline.hint")}
    >
      <div className="timeline">
        {timelineItems.map(({ date, content }, index) => (
          <div className="tl-item" key={`${date.toISOString()}-${index}`}>
            <div className="tl-date">
              {formatRelativeDate(date)}
            </div>
            <div className="tl-text">{content}</div>
          </div>
        ))}
      </div>
    </Block>
  );
}

function formatRelativeDate(date: Date): string {
  const days = Math.floor(
    (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (days <= 0) return "Today";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

