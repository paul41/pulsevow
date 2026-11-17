import Advertisement from "../common/Advertisement";
import { AIBrief } from "../home/AIBrief";
import { Timeline } from "../home/Timeline";
import { SourceComparison } from "../home/Comparision";
// import { Recommendations } from '../home/Recommendation';
import { AskPulseVow } from "../home/Community";
import { Newsletter } from "../home/Newsletter";
import { FollowUs } from "../home/Social";
//import { Recent } from '../home/Recent';
import { RelatedArticles } from "../home/Related";
import type { Props } from "./types";
import { useTranslation } from "react-i18next";

export function StoryDetail({ story, onToast }: Props) {
  const { t } = useTranslation();
  console.log("Fetched NEWS-story:", story);
  return (
    <div className="storygrid" id="story">
      <article>
        <header className="story-header">
          {/* <h1 className="story-title headline-font">{story.title}</h1> */}
          <div className="story-actions">
            <a className="action primary" href="#brief">
              {t("detail.newsBriefAnchor")}
            </a>
            <a className="action" href="#timeline">
              {t("detail.storySoFarAnchor")}
            </a>
            <a className="action" href="#sources">
              {t("detail.compareSourcesAnchor")}
            </a>
          </div>
        </header>

        <figure className="hero-figure">
          <img src={story.imageUrl} alt={story.source?.name} />
          <figcaption>
            <span className="image-caption">
              <span>Representative image</span>
              <span>
                of &nbsp;
                <strong>
                  <a
                    href={story.url.split("/").slice(0, 3).join("/")}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: "0 1 auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {story.source?.name}
                  </a>
                </strong>
              </span>
            </span>
            <a
              href={story.url}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: "0 1 auto",
                whiteSpace: "nowrap",
              }}
            >
              Read Source ↗
            </a>
          </figcaption>
        </figure>

        {/* <Affected items={story.affected} /> */}
        <AIBrief item={story.description} />
        <Timeline items={story.timeline} />
        <SourceComparison sources={story.source} />
        {/* <Facts confirmed={story.confirmed} interpretation={story.interpretation} /> */}
        <a href="#ask" className="forum-cta">
          Have a question about this story?
          <span>Discuss it in forum →</span>
        </a>
      </article>

      <aside>
        <AskPulseVow onToast={onToast} />
        <RelatedArticles />
        {/* <Recent /> */}
        <Newsletter onToast={onToast} />
        <FollowUs />
        <Advertisement />
      </aside>
    </div>
  );
}
