import { useEffect, useMemo, useState } from 'react';
//import { mockNewsResponse } from '../components/event/data';
import { PodcastDock } from '../layout/PodcastDock';
import { Navbar } from '../layout/navbar';
import { Footer } from '../layout/footer';
import { PulseCarousel } from '../components/home/PulseCarousel';
import { StoryDetail } from '../components/event/StoryDetail';
import { Toast } from '../components/common/Toast';
import { News360 } from '../components/home/News360';
import { Recommendations } from '../components/home/Recommendation';
import { getTopStories } from '../api/newsApi';
import type { PulseStory } from '../api/type';

import '../styles/pulsevow.css';

export default function Home() {
  const [toast, setToast] = useState('');
  const [language, setLanguage] = useState('English');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPodcastOpen, setIsPodcastOpen] = useState(false);

  const [stories, setStories] = useState<PulseStory[]>([]);
  const [selectedStory, setSelectedStory] =
    useState<PulseStory | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchStories = async () => {
      try {
        const response = await getTopStories();
        //mockNewsResponse
        //await getTopStories();
        //mockNewsResponse;
        // Assumes getTopStories() returns { data: PulseStory[] }.
        const fetchedStories = response.data;

        if (!cancelled) {
          setStories(fetchedStories);
          setSelectedStory(fetchedStories[0] ?? null);
        }
      } catch (error) {
        console.error('Failed to fetch top stories:', error);

        if (!cancelled) {
          setToast('Unable to load stories. Please try again.');
        }
      }
    };

    void fetchStories();

    return () => {
      cancelled = true;
    };
  }, []);

  const worldNews = useMemo<PulseStory[]>(
    () =>
      stories.filter(
        (story) =>
          story.source.country?.trim().toLowerCase() !== 'india'
      ),
    [stories]
  );

  const showToast = (message: string) => {
    setToast(message);

    window.setTimeout(() => {
      setToast('');
    }, 2200);
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  const handlePodcastClick = () => {
    setIsPodcastOpen(true);
    setIsPlaying(true);
  };

  const handleStorySelect = (story: PulseStory) => {
    const matchingStory = stories.find(
      (item) => item.id === story.id
    );

    if (matchingStory) {
      setSelectedStory(matchingStory);
    } else {
      showToast(
        'Detailed intelligence for this story is not available yet.'
      );
    }
  };

  return (
    <div className="pulsevow-app">
      <Navbar
        language={language}
        onLanguageChange={(value) => {
          setLanguage(value);
          showToast(`Language preference changed to ${value}`);
        }}
        onPodcastClick={handlePodcastClick}
      />

      <main id="top" className="pv-main">
        <PulseCarousel
          stories={stories}
          onStorySelect={handleStorySelect}
        />

        <div id="story-detail">
          {selectedStory && (
            <StoryDetail
              story={selectedStory}
              onToast={showToast}
            />
          )}
        </div>

        <section className="news360-section" id="world">
          <News360 items={worldNews} />
        </section>
        <Recommendations />
      </main>

      <Footer year={year} />

      {isPodcastOpen && (
        <PodcastDock
          isPlaying={isPlaying}
          onToggle={() => setIsPlaying((value) => !value)}
          onClose={() => {
            setIsPodcastOpen(false);
            setIsPlaying(false);
          }}
        />
      )}

      <Toast message={toast} />
    </div>
  );
}