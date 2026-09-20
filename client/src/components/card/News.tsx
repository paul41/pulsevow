import React from "react";
import type { NewsCardProps } from "./types";

export function NewsCard({ item, onClick }: NewsCardProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className="pulse-card"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="image-wrapper">
        <img
          src={item.image}
          alt={item.category}
          className="pulse-main-image"
        />
        {/* News source logo */}
        <div className="source-logo">
          <img src="/source-logo.png" alt="News source" />
        </div>
      </div>

      <div className="pulse-body">
        <div className="pulse-header">
          <span className="cat">{item.category}</span>
          {item.updated && <span className="updated">{item.updated}</span>}
        </div>
        <h3>{item.title}</h3>
        <div className="pulse-meta">{item.meta}</div>
      </div>
    </div>
  );
}
