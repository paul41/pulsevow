
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { AskPulseVowProps } from "./types.js";

export function AskPulseVow({ onToast }: AskPulseVowProps) {
  const { t } = useTranslation();
  const [question, setQuestion] = useState("");

  const ask = () => {
    if (!question.trim()) {
      onToast(t("forum.toastEmpty"));
      return;
    }

    onToast(t("forum.toastSubmitted"));
    setQuestion("");
  };

  return (
    <div className="sidebar-card" id="ask">
      <h3>{t("forum.title")}</h3>

      <p className="sidebar-note">
        {t("forum.description")}
      </p>

      {/* Example QA items - preserve original story content */}
      <div className="qa-item">
        <span className="qa-tag tag-ai">
          {t("forum.tagAi")}
        </span>

        <div className="qa-q">
          Will this lower my existing home loan EMI automatically?
        </div>

        <div className="qa-a">
          Not necessarily. The effect depends on your loan type and how your
          lender passes the rate change through to customers.
        </div>

        <span className="helpful">
          {t("forum.aiMeta")}
        </span>
      </div>

      <div className="qa-item">
        <span className="qa-tag tag-community">
          {t("forum.tagCommunity")}
        </span>

        <div className="qa-q">
          Does this mean fixed deposit rates will fall too?
        </div>

        <div className="qa-a">
          They may change as banks adjust their pricing, but the timing and
          extent can vary between banks.
        </div>

        <span className="helpful">
          {t("forum.helpfulLabel")} · 18
        </span>
      </div>

      {/* Input box */}
      <div className="qa-input">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ask()}
          placeholder={t("forum.inputPlaceholder")}
        />

        <button onClick={ask}>
          {t("forum.askButton")}
        </button>
      </div>

      <div className="qa-note">
        {t("forum.moderationNote")}
      </div>
    </div>
  );
}
