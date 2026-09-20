// components/common/Newsletter.tsx
import { useState } from "react";
import { NEWSLETTER_HEADINGS, NEWSLETTER_DESCRIPTION, SIDEBAR_NOTE } from "../../constants/newsletter-text";

interface NewsletterProps {
  onToast: (message: string) => void;
}

export function Newsletter({ onToast }: NewsletterProps) {
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!email.trim()) {
      onToast("Enter your email address to subscribe.");
      return;
    }
    onToast("Thanks. Your PulseVow Brief subscription is ready.");
    setEmail("");
  };

  return (
    <div className="sidebar-card newsletter-card">
      <h3>{NEWSLETTER_HEADINGS}</h3>
      <p className="sidebar-note">
        {NEWSLETTER_DESCRIPTION}
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
        />
        <button onClick={submit}>Subscribe</button>
      </div>

      <div className="sidebar-note newsletter-note">
        {SIDEBAR_NOTE}
      </div>
    </div>
  );
}
