import React from "react";
import type { NewsCardProps } from "./types";

export function NewsCard({ item, onClick, isSelected }:  NewsCardProps ) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
  };

  const formattedDate = item.publishedAt
    ? new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(item.publishedAt))
    : undefined;

  return (
    <div className={`pulse-card ${isSelected ? "selected" : ""}`} onClick={onClick} onKeyDown={handleKeyDown} role="button" tabIndex={0} aria-pressed={isSelected}>
      <div className="image-wrapper">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.title} className="pulse-main-image" loading="lazy" />
        ) : (
          <div className="pulse-main-image image-placeholder" role="img" aria-label="No article image available" />
        )}

        <a
          className="source-logo"
          href={item.url.split('/').slice(0, 3).join('/')}
          target="_blank"
          rel="noopener noreferrer"
          title={item.source.name}
          aria-label={`Visit ${item.source.name} website`}
          onClick={(e) => e.stopPropagation()}
        >
          {item.source.logo ? (
            <img src={item.source.logo} alt={item.source.name} />
          ) : (
            <span aria-hidden="true">
              {item.source.name.charAt(0)}
            </span>
          )}
        </a>
      </div>

      <div className="pulse-body">
        <div className="pulse-header">
          <span className="cat">{item?.category?.name}</span>
          {formattedDate && (
            <span className="updated">{formattedDate}</span>
          )}
        </div>

        <h3>{item.title}</h3>

        {/* <div className="pulse-meta">{item.source.name}</div> */}
      </div>
    </div>

  );
}
