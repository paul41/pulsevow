
import { useTranslation } from "react-i18next";
import { Block } from "../common/Block";
import type { TimelineProps } from "./types";

export function Timeline({ items }: TimelineProps) {
  const { t } = useTranslation();

  return (
    <Block
      id="timeline"
      title={t("timeline.title")}
      hint={t("timeline.hint")}
    >
      <div className="timeline">
        {items.map(([date, text], index) => (
          <div className="tl-item" key={`${date}-${index}`}>
            <div className="tl-date">{date}</div>
            <div className="tl-text">{text}</div>
          </div>
        ))}
      </div>
    </Block>
  );
}
