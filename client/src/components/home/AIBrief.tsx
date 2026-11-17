import { useTranslation } from "react-i18next";
import { Block } from "../common/Block";
import type { AIBriefProps } from "./types";

export function AIBrief({ item }: AIBriefProps) {
  const { t } = useTranslation();

  const brief = [
    ['What happened?', item],
    ['Why does it matter?', 'The decision can influence the cost of credit, bank liquidity and interest-sensitive sectors, although the effect on consumers depends on how lenders pass through the change.'],
    ['Who is affected?', 'Borrowers and credit-sensitive businesses could benefit from easier financing, while banks, depositors and investors may see different effects.'],
    ['What happens next?', "Markets will watch bank lending-rate decisions, upcoming inflation data and the RBI's next policy communication."]
  ];

  console.log("AIBrief items:", item); // Debugging line to check the items prop
  return (
    <Block id="brief" title={t("aiBrief.title")}>
      <div className="brief-card">
        <div className="summary">
          <div className="summary-cell">
            <span className="cell-label">{t("aiBrief.impact")}</span>
            <div className="cell-value impact-value">
              <span className="impact-meter" aria-hidden="true">
                <i className="on" />
                <i className="on" />
                <i className="on" />
              </span>
              High
            </div>
          </div>

          <div className="summary-cell">
            <span className="cell-label">{t("aiBrief.coverage")}</span>
            <div className="chips">
              <span className="chip">Banking</span>
              <span className="chip">Markets</span>
            </div>
          </div>

          <div className="summary-cell">
            <span className="cell-label">{t("aiBrief.sources")}</span>
            <div className="cell-value">
              <strong>41</strong> tracked
            </div>
          </div>

          <div className="summary-cell">
            <span className="cell-label">{t("aiBrief.updated")}</span>
            <div className="cell-value">
              <span className="live-dot" />
              12 min ago
            </div>
          </div>
        </div>
        <div className="brief-grid"> {
          brief && Array.isArray(brief) ? brief.map(([title, text], index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          )) : <p>{t("aiBrief.comingSoon")}</p>
        }
        </div>
      </div>
    </Block>
  );
}
