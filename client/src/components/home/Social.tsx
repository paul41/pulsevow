import {FOLLOW_TEXT} from "../../constants/follow-text";

export function FollowUs() {
  const socials: { label: string; href: string }[] = [
    { label: "𝕏 / Twitter", href: "#top" },
    { label: "f / Facebook", href: "#top" },
    { label: "in / LinkedIn", href: "#top" },
    { label: "◎ / Instagram", href: "#top" },
    { label: "▶ / YouTube", href: "#top" },
  ];

  return (
    <div className="sidebar-card follow-card">
      <h3>Follow us</h3>
      <p className="sidebar-note">
        {FOLLOW_TEXT}
      </p>
      <div className="social-stack">
        {socials.map((s) => (
          <a href={s.href} key={s.label}>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
