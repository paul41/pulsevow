
import { useRef } from 'react';
import { NewsCard } from '../card/News';
import Arrow from '../common/Arrow';
import type { NewsArticle } from '../../api/type';

type PulseCarouselProps = {
  stories: NewsArticle[];
  onStorySelect: (story: NewsArticle) => void;
};

export function PulseCarousel({
  stories,
  onStorySelect,
}: PulseCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: ref.current.clientWidth * direction,
      behavior: 'smooth',
    });
  };

  return (
    <section id="today" className="pulse-shell">
      <div className="section-head">
        <div>
          <h2>Today's Pulse</h2>
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-btn"
            onClick={() => move(-1)}
            aria-label="Previous stories"
          >
            ‹
          </button>

          <button
            type="button"
            className="carousel-btn"
            onClick={() => move(1)}
            aria-label="Next stories"
          >
            ›
          </button>
        </div>
      </div>

      <div className="pulse-carousel" ref={ref}>
        {stories.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            onClick={() => onStorySelect(item)}
          />
        ))}
      </div>

      <Arrow />
    </section>
  );
}