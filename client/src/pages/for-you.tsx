import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/authContext";


import "../styles/for-you-page.css";
import "../styles/navbar.css";

type CityInfo = {
  lat: number;
  lon: number;
  temp: number;
  description: string;
  details: string;
  forecast: [string, number][];
  alerts: [string, string][];
};

type Story = [category: string, city: string | null, title: string, summary: string, time: string];
type Role = 'All' | 'Student' | 'Lawyer' | 'Software engineer' | 'Doctor' | 'Teacher' | 'Business professional';

const CITIES: Record<string, CityInfo> = {
  'New Delhi': {
    lat: 28.61, lon: 77.21, temp: 31, description: 'Hazy sun',
    details: 'Humidity 38%, wind 9 km/h',
    forecast: [['Sun', 32], ['Mon', 33], ['Tue', 30], ['Wed', 29]],
    alerts: [['Air quality is poor near Anand Vihar', 'Avoid long outdoor exercise'], ['Metro Blue Line runs every 6 minutes', 'Signal check at Dwarka']],
  },
  Mumbai: {
    lat: 19.07, lon: 72.88, temp: 32, description: 'Humid, partly cloudy',
    details: 'Humidity 70%, wind 14 km/h',
    forecast: [['Sun', 32], ['Mon', 31], ['Tue', 31], ['Wed', 30]],
    alerts: [['Western line delays of 10 minutes', 'Track maintenance at Bandra'], ['High tide at 4:12 pm', 'Stay clear of Marine Drive']],
  },
  Bengaluru: {
    lat: 12.97, lon: 77.59, temp: 26, description: 'Light showers',
    details: 'Humidity 74%, wind 11 km/h',
    forecast: [['Sun', 25], ['Mon', 27], ['Tue', 26], ['Wed', 26]],
    alerts: [['Slow traffic on Outer Ring Road', 'Silk Board junction works'], ['Water supply cut in HSR Layout', 'Restored by 6 pm']],
  },
  Chennai: {
    lat: 13.08, lon: 80.27, temp: 29, description: 'Overcast',
    details: 'Humidity 80%, wind 16 km/h',
    forecast: [['Sun', 29], ['Mon', 28], ['Tue', 28], ['Wed', 29]],
    alerts: [['Heavy rain expected tonight', 'Low-lying areas on alert'], ['Metro Phase 2 trial run', 'Poonamallee stretch']],
  },
  Kolkata: {
    lat: 22.57, lon: 88.36, temp: 28, description: 'Clear skies',
    details: 'Humidity 60%, wind 8 km/h',
    forecast: [['Sun', 28], ['Mon', 29], ['Tue', 29], ['Wed', 27]],
    alerts: [['Tram service changes on Esplanade route', 'Until Monday'], ['Book fair crowds expected', 'Extra metro trips']],
  },
};

const TOPICS = ['Technology', 'Business', 'Sports', 'Health', 'Science', 'Entertainment', 'Environment', 'Education', 'Law'];

const GRADIENTS: Record<string, [string, string]> = {
  Technology: ['#3b5bdb', '#15aabf'],
  Business: ['#2b8a3e', '#94d82d'],
  Sports: ['#e8590c', '#fcc419'],
  Health: ['#c2255c', '#ff8787'],
  Science: ['#5f3dc4', '#9775fa'],
  Entertainment: ['#a61e4d', '#f06595'],
  Environment: ['#087f5b', '#38d9a9'],
  Education: ['#1864ab', '#74c0fc'],
  Law: ['#6b3f1d', '#c9a227'],
  Local: ['#364fc7', '#e8742a'],
};

const STORIES: Story[] = [
  ['Technology', null, 'Chip makers announce new design centres across India', 'Three firms commit to hiring thousands of engineers over the next two years.', '2 h ago'],
  ['Business', null, 'RBI holds repo rate steady, signals cautious outlook', 'Economists expect borrowing costs to stay flat through the festive quarter.', '3 h ago'],
  ['Sports', null, 'Young batters lead India to a series-levelling win', 'A fearless chase in the final overs turned the match around.', '4 h ago'],
  ['Health', null, 'New study links daily walking to lower blood pressure', 'Researchers followed 12,000 adults across six cities for five years.', '5 h ago'],
  ['Science', null, 'ISRO schedules next lunar orbiter test for January', 'Engineers finished thermal trials ahead of the planned launch window.', '6 h ago'],
  ['Entertainment', null, 'Regional cinema takes the top awards at the national film festival', 'Four of the six major prizes went to non-Hindi films this year.', '7 h ago'],
  ['Environment', null, 'Solar capacity crosses a new national milestone', 'Rooftop installations grew fastest, led by households in the south and west.', '8 h ago'],
  ['Education', null, 'Board exam dates released for the coming term', 'Students can download the full schedule from their school portal.', '9 h ago'],
  ['Law', null, 'Supreme Court issues new guidelines on bail hearings', 'Courts must record reasons for every bail order within seven days.', '2 h ago'],
  ['Law', null, 'Data protection rules: what law firms must update by March', 'A checklist for client records, consent and breach notices.', '5 h ago'],
  ['Technology', 'Bengaluru', 'Bengaluru startups open a shared AI lab in Whitefield', 'The lab gives small teams access to affordable computing.', '1 h ago'],
  ['Local', 'Bengaluru', 'Namma Metro adds trains on the Purple Line from Monday', 'Peak waiting time drops to under four minutes.', '2 h ago'],
  ['Law', 'Bengaluru', 'Karnataka bar council opens free legal aid desks', 'Volunteer lawyers will sit at district courts every weekend.', '6 h ago'],
  ['Business', 'Mumbai', 'Mumbai port reports record container volumes', 'Faster customs checks are cited as the main reason.', '2 h ago'],
  ['Local', 'Mumbai', 'Coastal road tunnel to open to buses next week', 'Commuters between the suburbs and south Mumbai will save about 20 minutes.', '3 h ago'],
  ['Law', 'Mumbai', 'Bombay High Court extends e-filing to all commercial matters', 'Advocates can file and track cases online from Monday.', '4 h ago'],
  ['Sports', 'Mumbai', 'Mumbai marathon opens registrations with a new coastal route', 'Early-bird slots close at the end of the month.', '5 h ago'],
  ['Education', 'Mumbai', 'Mumbai University releases the revised exam timetable', 'Final-year papers move to the first week of December.', '6 h ago'],
  ['Environment', 'New Delhi', 'Delhi expands electric bus fleet by 500 vehicles', 'New routes connect outer districts to metro stations.', '1 h ago'],
  ['Health', 'New Delhi', 'Delhi hospitals add respiratory clinics ahead of winter', 'Walk-in slots open at 12 government hospitals.', '4 h ago'],
  ['Local', 'New Delhi', 'Delhi Metro extends late-night service on weekends', 'Trains on the Yellow and Blue lines run until 1 am.', '2 h ago'],
  ['Law', 'New Delhi', 'Delhi High Court fast-tracks tenancy disputes', 'A dedicated bench will hear rent cases from next month.', '3 h ago'],
  ['Education', 'New Delhi', 'Delhi University opens the admissions portal for the next intake', 'Applicants can upload documents until the end of the month.', '5 h ago'],
  ['Technology', 'New Delhi', 'Delhi hosts the national hackathon for college teams', 'Finalists from 40 institutes will present on Sunday.', '6 h ago'],
  ['Sports', 'Chennai', 'Chennai hosts the national junior tennis finals', 'Entry is free for school students on the final weekend.', '3 h ago'],
  ['Local', 'Chennai', 'Northeast monsoon: what Chennai residents should prepare', 'The city has opened 40 relief centres.', '2 h ago'],
  ['Entertainment', 'Kolkata', 'Kolkata theatre festival returns with 30 new productions', 'Ticket prices start at ₹100 for students.', '5 h ago'],
  ['Local', 'Kolkata', 'Riverfront walkway reopens after a year of repairs', 'The new stretch includes shaded seating and cycle lanes.', '6 h ago'],
];

// const ROLE_CONFIG: Record<Role, { label: string; topics: string[] }> = {
//   All: { label: 'All roles', topics: [] },
//   Student: { label: 'Student hub', topics: ['Education', 'Science'] },
//   Lawyer: { label: 'Lawyer desk', topics: ['Law'] },
//   'Software engineer': { label: 'Developer desk', topics: ['Technology', 'Science'] },
//   Doctor: { label: 'Health desk', topics: ['Health', 'Science'] },
//   Teacher: { label: 'Classroom corner', topics: ['Education'] },
//   'Business professional': { label: 'Business brief', topics: ['Business'] },
// };

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "kn", label: "ಕನ್ನಡ" },
];

type RankedStory = { story: Story; score: number; index: number; reason: string };

const cap = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

function StoryThumb({ category }: { category: string }) {
  const [start, end] = GRADIENTS[category] ?? GRADIENTS.Local;
  return <div className="pv-thumb" style={{ '--pv-c1': start, '--pv-c2': end } as React.CSSProperties}><b>{category}</b></div>;
}

type ForYouPreferences = {
  city?: string;
  role?: Role;
  interests?: string[];
  sectors?: string[];
  followedSources?: string[];
};

type ForYouPageProps = {
  isAuthenticated?: boolean;
  preferences?: ForYouPreferences;
};

export default function ForYouPage({
  isAuthenticated = false,
  preferences,
}: ForYouPageProps) {
  const [city, setCity] = useState(preferences?.city || 'New Delhi');
  const [topics, setTopics] = useState<string[]>(
    preferences?.interests?.length
      ? preferences.interests
      : ['Technology', 'Business', 'Law']
  );
  // const [role, setRole] = useState<Role>(
  //   preferences?.role || 'All'
  // );
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || "en";
  const [locationMessage, setLocationMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  // Apply profile preferences when they become available.
  useEffect(() => {
    if (!preferences) return;

    if (preferences.city && CITIES[preferences.city]) {
      setCity(preferences.city);
    }

    // if (preferences.role && preferences.role in ROLE_CONFIG) {
    //   setRole(preferences.role);
    // }

    if (preferences.interests?.length) {
      setTopics(preferences.interests);
    }
  }, [preferences]);

  // Guest preferences are stored locally.
  useEffect(() => {
    if (isAuthenticated) return;

    try {
      const saved = JSON.parse(
        localStorage.getItem('pv') || 'null'
      ) as { city?: string; topics?: string[] } | null;

      if (saved?.city && CITIES[saved.city]) {
        setCity(preferences?.city || saved.city);
      }

      if (Array.isArray(saved?.topics) && !preferences?.interests?.length) {
        setTopics(saved.topics);
      }
    } catch {
      // Ignore invalid or unavailable local preferences.
    }
  }, [isAuthenticated, preferences]);

  useEffect(() => {
    if (isAuthenticated) return;

    try {
      localStorage.setItem('pv', JSON.stringify({ city, topics }));
    } catch {
      // Storage may be unavailable.all 
    }
  }, [city, topics, isAuthenticated]);

  // const roleTopics = ROLE_CONFIG[role].topics;
  //const roleActive = role !== 'All';

  // Change application language
  const handleLanguageChange = (languageCode: string) => {
    void i18n.changeLanguage(languageCode || "en");
  };

  const ranked = useMemo<RankedStory[]>(() => {
    return STORIES.reduce<RankedStory[]>((result, story, index) => {
      const [category, storyCity] = story;

      if (storyCity && storyCity !== city) return result;

      let score = 0;
      const reasons: string[] = [];

      if (storyCity === city) {
        score += 3;
        reasons.push(`near ${city}`);
      }

      // if (roleActive) {
      //   if (!roleTopics.includes(category)) return result;

      //   score += 2;
      //   reasons.push(ROLE_CONFIG[role].label);
      // } 
      if (topics.includes(category)) {
        score += 2;
        reasons.push(`your interest: ${category}`);
      } else if (category !== 'Local') {
        return result;
      }

      result.push({
        story,
        score,
        index,
        reason: cap(reasons.join(' · ')),
      });

      return result;
    }, []).sort((a, b) => b.score - a.score || a.index - b.index);
  }, [city, topics/*role, , roleActive, roleTopics*/]);

  const cityInfo = CITIES[city] || CITIES['New Delhi'];

  // Stories relevant to the selected city.
  const localStories = ranked.filter(
    (item) => item.story[1] === city
  );

  // Stories matching the selected profession.
  // const professionStories = roleActive
  //   ? ranked.filter((item) => roleTopics.includes(item.story[0]))
  //   : [];

  // Stories matching selected interests.
  const topicStories = ranked.filter(
    (item) => topics.includes(item.story[0])
  );

  // Broad stories not tied to a specific city.
  // These remain visible to guests and logged-in users.
  const majorDevelopments = STORIES
    .map((story, index) => ({ story, index }))
    .filter(({ story }) => story[1] === null)
    .slice(0, 5)
    .map(({ story, index }) => ({
      story,
      index,
      score: 1,
      reason: 'National & global coverage',
    }));

  // The current mock data has no publisher or sector metadata.
  const followedSources = preferences?.followedSources || [];
  const followedSectors = preferences?.sectors || [];

  const toggleTopic = (topic: string) => {
    setTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic]
    );
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage('Location is not supported by this browser.');
      return;
    }

    setLocationMessage('Locating…');

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const nearest = Object.entries(CITIES).reduce(
          (best, [name, info]) => {
            const distance =
              (info.lat - coords.latitude) ** 2 +
              (info.lon - coords.longitude) ** 2;

            return distance < best.distance
              ? { name, distance }
              : best;
          },
          { name: city, distance: Number.POSITIVE_INFINITY }
        );

        setCity(nearest.name);
        setLocationMessage(`Nearest: ${nearest.name}`);
      },
      () => setLocationMessage('Location access was blocked.'),
      { timeout: 8000 }
    );
  };

  const subscribe = () => {
    setSubscribeMessage(
      /^\S+@\S+\.\S+$/.test(email.trim())
        ? 'Subscribed. Check your inbox to confirm.'
        : 'Enter a valid email address.'
    );
  };

  const renderStoryLink = (
    item: RankedStory,
    className: string
  ) => (
    <a
      className={className}
      href="#"
      key={`${item.index}-${className}`}
    >
      <StoryThumb category={item.story[0]} />

      <div>
        {className === 'pv-pick' ? (
          <h3>{item.story[2]}</h3>
        ) : className === 'pv-lead' ? (
          <>
            <div className="pv-meta">
              <span className="pv-why">{item.reason}</span>
            </div>
            <h2>{item.story[2]}</h2>
            <p>{item.story[3]}</p>
            <div className="pv-meta">{item.story[4]}</div>
          </>
        ) : (
          <>
            <h3>{item.story[2]}</h3>
            <p>{item.story[3]}</p>
            <div className="pv-meta">
              <span className="pv-why">{item.reason}</span>
              {' · '}
              {item.story[4]}
            </div>
          </>
        )}

        {className === 'pv-pick' && (
          <div className="pv-meta">
            <span className="pv-why">{item.reason}</span>
            {' · '}
            {item.story[4]}
          </div>
        )}
      </div>
    </a>
  );

  const renderSection = (
    title: string,
    items: RankedStory[],
    subtitle?: string
  ) => (
    <section className="pv-content-section">
      <div className="pv-section">
        <h2>{title}</h2>
        <span>{subtitle || `${items.length} stories`}</span>
      </div>

      <div className="pv-picks">
        {items.slice(0, 4).map((item) =>
          renderStoryLink(item, 'pv-pick')
        )}

        {items.length === 0 && (
          <p className="pv-empty">
            No matching stories available yet.
          </p>
        )}
      </div>
    </section>
  );

   const getUserInitials = () => {
    const name = user?.name?.trim();

    if (!name) return "PV";

    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <header className="topnav">
        {/* Brand */}
        <Link
          className="brand"
          to="/"
          aria-label={t("common.homeAriaLabel")}
        >
          <div className="mark" aria-hidden="true">
            P
          </div>

          <div className="brand-copy">
            <span className="name">PulseVow</span>
            <span className="tag">
              {t("common.tagline")}
            </span>
          </div>
        </Link>

        {/* Right Navigation */}
        <div className="nav-right">
          {/* Language Selector */}
          <select
            className="lang"
            value={language}
            onChange={(event) =>
              handleLanguageChange(event.target.value)
            }
            name="language"
            aria-label={t("common.selectLanguage")}
          >
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>

          {/* Authentication */}
          {isAuthenticated || user ? (
            <button
              type="button"
              className="avatar"
              title={t("common.viewProfile")}
              aria-label={t("common.viewProfile")}
              onClick={() => navigate("/my-profile")}
            >
              {getUserInitials()}
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              {t("common.login")}
            </Link>
          )}
        </div>
      </header>

      <div className="pv-page">
        <main className="pv-wrap">
        <section className="pv-intro">
          <div>
            <h1>For you</h1>
            <p>
              {isAuthenticated
                ? `Your news briefing based on your interests, profession and location.`
                : `A news briefing covering the stories that matter across India, with local relevance.`}
            </p>
          </div>

          <div className="pv-location">
            <select
              aria-label="Your city"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
                setLocationMessage('');
              }}
            >
              {Object.keys(CITIES).map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>

            <button
              className="pv-button"
              type="button"
              onClick={detectLocation}
            >
              Use my location
            </button>

            {locationMessage && (
              <span className="pv-location-message" role="status">
                {locationMessage}
              </span>
            )}
          </div>
        </section>

        {/* 1. DAILY BRIEFING */}
        <section className="pv-content-section">
          <div className="pv-section">
            <h2>Your Daily Briefing</h2>
            <span>Start with what matters</span>
          </div>

          {ranked[0] ? (
            <div className="pv-picks">
              {renderStoryLink(ranked[0], 'pv-lead')}
              {ranked.slice(1, 4).map((item) =>
                renderStoryLink(item, 'pv-story-row')
              )}
            </div>
          ) : (
            <p className="pv-empty">
              Your briefing is being prepared.
            </p>
          )}
        </section>

        {/* 2. AROUND YOUR LOCATION */}
        {renderSection(
          `Around ${city}`,
          localStories,
          'Local developments'
        )}

        {/* 3. PROFESSION */}
        {/* <section className="pv-content-section">
          <div className="pv-section">
            <h2>
              {roleActive
                ? `Relevant to your profession`
                : 'Professional relevance'}
            </h2>
            <span>
              {roleActive ? ROLE_CONFIG[role].label : 'Choose a role'}
            </span>
          </div>

          {roleActive ? (
            <div className="pv-picks">
              {professionStories.slice(0, 4).map((item) =>
                renderStoryLink(item, 'pv-pick')
              )}

              {professionStories.length === 0 && (
                <p className="pv-empty">
                  No profession-related stories available yet.
                </p>
              )}
            </div>
          ) : (
            <p className="pv-empty">
              Select your profession above to see news relevant to
              your work and industry.
            </p>
          )}
        </section> */}

        {/* 4. TOPICS */}
        <section className="pv-content-section">
          <div className="pv-section">
            <h2>Your Topics</h2>
            <span>Choose what you want to follow</span>
          </div>

          <div className="pv-chips" role="group" aria-label="Your interests">
            {TOPICS.map((topic) => (
              <button
                className="pv-chip"
                type="button"
                key={topic}
                aria-pressed={topics.includes(topic)}
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="pv-picks">
            {topicStories.slice(0, 4).map((item) =>
              renderStoryLink(item, 'pv-pick')
            )}

            {topicStories.length === 0 && (
              <p className="pv-empty">
                Select a topic to build your news feed.
              </p>
            )}
          </div>
        </section>

        {/* 5. FOLLOWED FEEDS */}
        <section className="pv-content-section">
          <div className="pv-section">
            <h2>Feeds You Follow</h2>
            <span>
              {followedSources.length
                ? `${followedSources.length} sources`
                : 'Your selected publishers'}
            </span>
          </div>

          {followedSources.length > 0 ? (
            <div className="pv-box">
              <p>
                Your followed publishers will appear here when
                publisher-specific stories are connected to this feed.
              </p>
            </div>
          ) : (
            <div className="pv-box">
              <h3>Build your own news mix</h3>
              <p>
                Follow trusted publishers to see their latest coverage
                together in one place.
              </p>
              {!isAuthenticated && (
                <p>
                  Sign in to save the publishers you follow.
                </p>
              )}
            </div>
          )}
        </section>

        {/* 6. INDUSTRY & SECTOR WATCH */}
        <section className="pv-content-section">
          <div className="pv-section">
            <h2>Industry &amp; Sector Watch</h2>
            <span>Your professional landscape</span>
          </div>

          {followedSectors.length > 0 ? (
            <div className="pv-chips">
              {followedSectors.map((sector) => (
                <span className="pv-chip" key={sector}>
                  {sector}
                </span>
              ))}
            </div>
          ) : (
            <p className="pv-empty">
              {isAuthenticated
                ? 'Add sectors to your profile to follow developments affecting your industry.'
                : 'Sign in to select the industries and sectors you want to track.'}
            </p>
          )}
        </section>

        {/* 7. MAJOR DEVELOPMENTS */}
        {renderSection(
          'Major Developments',
          majorDevelopments,
          'Important stories beyond your interests'
        )}

        <div className="pv-layout">
          <section>
            <div className="pv-section">
              <h2>More for you</h2>
              <span>Based on your preferences</span>
            </div>

            {ranked.slice(4).map((item) =>
              renderStoryLink(item, 'pv-story-row')
            )}

            {ranked.length <= 4 && (
              <p className="pv-empty">
                More relevant stories will appear as new coverage arrives.
              </p>
            )}
          </section>

          <aside>
            <div className="pv-box" aria-live="polite">
              <h2>Weather in {city}</h2>

              <div className="pv-weather">
                <div className="pv-temperature">
                  {cityInfo.temp}°C
                </div>
                <div>
                  <b>{cityInfo.description}</b>
                  <small>{cityInfo.details}</small>
                </div>
              </div>

              <div className="pv-days">
                {cityInfo.forecast.map(([day, temp]) => (
                  <div key={day}>
                    {day}
                    <br />
                    <b>{temp}°</b>
                  </div>
                ))}
              </div>
            </div>

            <div className="pv-box">
              <h2>Near you</h2>
              {cityInfo.alerts.map(([headline, detail]) => (
                <div className="pv-alert" key={headline}>
                  {headline}
                  <small>{detail}</small>
                </div>
              ))}
            </div>

            <div className="pv-box">
              <h2>Trending in your topics</h2>
              <ol className="pv-trend">
                {topicStories.slice(0, 5).map((item, index) => (
                  <li key={item.index}>
                    <b>{index + 1}</b>
                    <span>{item.story[2]}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pv-box pv-newsletter">
              <h2>Daily briefing</h2>
              <label htmlFor="pv-email">
                Get your top five stories each morning.
              </label>
              <input
                id="pv-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                className="pv-button pv-primary"
                type="button"
                onClick={subscribe}
              >
                Subscribe
              </button>
              <p className="pv-success" role="status">
                {subscribeMessage}
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="pv-footer">
        <div className="pv-wrap">
          <div className="pv-footer-grid">
            <div>
              <div className="pv-logo">PulseVow</div>
              <p>
                Reporting that helps you understand the stories
                shaping your world.
              </p>
            </div>

            <div>
              <h4>Sections</h4>
              <a href="#">India</a>
              <a href="#">World</a>
              <a href="#">Business</a>
              <a href="#">Technology</a>
            </div>

            <div>
              <h4>Company</h4>
              <a href="#">About us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div>
              <h4>Your account</h4>
              <a href="#">Manage interests</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>

          <div className="pv-copyright">
            © 2026 PulseVow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

