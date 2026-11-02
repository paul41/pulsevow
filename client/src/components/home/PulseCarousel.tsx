import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // Tolerance of 2px for fractional sub-pixel scroll positions
    const atStart = el.scrollLeft <= 2;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    checkScroll();
    const rafId = requestAnimationFrame(checkScroll);

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        checkScroll();
      });
      observer.observe(el);
    }

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      if (observer) observer.disconnect();
    };
  }, [stories, checkScroll]);

  const move = (direction: number) => {
    const el = ref.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>('.pulse-card');
    const gap = 14;
    const cardStep = firstCard ? firstCard.offsetWidth + gap : 280;

    // Scroll 2 cards at a time on desktop (> 980px) or 1 card on smaller screens
    const cardsToScroll = el.clientWidth > 980 ? 2 : 1;
    const scrollAmount = cardStep * cardsToScroll * direction;

    el.scrollBy({
      left: scrollAmount,
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
            disabled={!canScrollLeft}
            aria-label="Previous stories"
          >
            <ChevronLeft size={16} strokeWidth={2.2} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="carousel-btn"
            onClick={() => move(1)}
            disabled={!canScrollRight}
            aria-label="Next stories"
          >
            <ChevronRight size={16} strokeWidth={2.2} aria-hidden="true" />
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