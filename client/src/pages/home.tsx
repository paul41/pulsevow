import { useMemo, useState } from 'react';
import { PodcastDock } from '../layout/PodcastDock';
import { Navbar } from '../layout/navbar';
import { Footer } from '../layout/footer';
import { PulseCarousel } from '../components/home/PulseCarousel';
import { StoryDetail } from '../components/event/StoryDetail';
import { Toast } from '../components/common/Toast';
import { pulseStories, type PulseStory } from '../components/event/data';
import '../styles/pulsevow.css';

export default function Home() {
  const [toast, setToast] = useState('');
  const [language, setLanguage] = useState('English');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPodcastOpen, setIsPodcastOpen] = useState(false);

  const [selectedStory, setSelectedStory] = useState<PulseStory>(
    pulseStories[0]
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
    setSelectedStory(story);

    // Scroll ONLY because the user selected a story.
    // requestAnimationFrame(() => {
    //   requestAnimationFrame(() => {
    //     const el = document.getElementById('story-detail');

    //     if (!el) return;

    //     const y =
    //       el.getBoundingClientRect().top +
    //       window.scrollY -
    //       80;

    //     window.scrollTo({
    //       top: y,
    //       behavior: 'smooth',
    //     });
    //   });
    // });
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
          stories={pulseStories}
          onStorySelect={handleStorySelect}
        />

        <div id="story-detail">
          <StoryDetail
            story={selectedStory}
            onToast={showToast}
          />
        </div>
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