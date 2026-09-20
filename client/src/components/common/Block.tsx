
import type { ReactNode } from "react";

type BlockProps = {
  id?: string;
  title: string;
  hint?: string;
  children: ReactNode;
};

export function Block({ id, title, hint, children }: BlockProps) {
  return (
    <section className="block" id={id}>
      <div className="block-title">
        <h2>{title}</h2>
        {hint && <span>{hint}</span>}
      </div>
      {children}
    </section>
  );
}
