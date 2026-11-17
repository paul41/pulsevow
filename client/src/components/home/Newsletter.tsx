// components/common/Newsletter.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { NewsletterProps } from "./types.js";

export function Newsletter({ onToast }: NewsletterProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!email.trim()) {
      onToast(t("newsletter.toastEmpty"));
      return;
    }
    onToast(t("newsletter.toastSuccess"));
    setEmail("");
  };

  return (
    <div className="sidebar-card newsletter-card">
      <h3>{t("newsletter.heading")}</h3>
      <p className="sidebar-note">
        {t("newsletter.description")}
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("newsletter.placeholder")}
        />
        <button onClick={submit}>{t("newsletter.subscribe")}</button>
      </div>

      <div className="sidebar-note newsletter-note">
        {t("newsletter.note")}
      </div>
    </div>
  );
}
