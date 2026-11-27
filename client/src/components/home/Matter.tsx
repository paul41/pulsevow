import { Block } from "../common/Block";
import "../../styles/matter.css";
import type { MattersNextProps } from "./types";
import { useTranslation } from "react-i18next";
export function MattersNext({
  summary,
  whatNext,
}: MattersNextProps) {
  const { t } = useTranslation();
  return (
    <Block id="brief" title={t("matter.impactAndOutlook")}>
      <div className="brief-card">

        {/* Why it matters */}
        <section className="matter-section">
          <div className="why-impact-header">
            <h3>{t("matter.whyItMatters")}</h3>
            <span className="public-badge">
              {t("matter.publicInsight")}
            </span>
          </div>

          <p>{summary}</p>
        </section>

        {/* What happens next */}
        <section className="matter-section next-section">
          <h3>{t("matter.whatNext")}</h3>

          <ul className="next-list">
            {whatNext.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

      </div>
    </Block>
  );
}
