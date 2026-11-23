import Advertisement from "../common/Advertisement";
import { Timeline } from "../home/Timeline";
import { SourceComparison } from "../home/Sources";
import { AskPulseVow } from "../home/Community";
import { Newsletter } from "../home/Newsletter";
import { MattersNext } from "../home/Matter";
import { RelatedArticles } from "../home/Related";
import { Affected } from "../home/Affected";
import type { Props } from "./types";

export function StoryDetail({ story, onToast }: Props) {
  console.log("Fetched NEWS-story:", story);

  return (
    <div className="storygrid" id="story">
      <article>
        <header className="story-header">
          <h1 className="story-title headline-font">
            {story.title}
          </h1>
        </header>

        <div className="story-meta">
          <span>41 sources tracked</span>

          <span className="meta-updated">
            Updated:
            <span className="cell-value">
              <span className="live-dot" />
              12 min ago
            </span>
          </span>

          <span>
            Event confidence: <strong>High</strong>
          </span>
        </div>

        <div className="hero-content">
          <figure className="hero-figure">
            <img
              src={story.imageUrl}
              alt={story.source?.name}
            />

            <figcaption>
              <span className="image-caption">
                <span>Representative image</span>
                <span>
                  of{" "}
                  <strong>
                    <a
                      href={story.url.split("/").slice(0, 3).join("/")}
                      target="_blank"
                      rel="noreferrer"
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
              >
                Read Source ↗
              </a>
            </figcaption>
          </figure>

          <div className="brief-card">
            <div className="lbl">30-second brief</div>

            <p>
              The RBI lowered its policy rate to support growth. Banks may
              revise loan rates, but none is confirmed to pass on the full
              cut. Markets reacted, and inflation remains a concern.
              **Cheaper loans could be on the horizon!**
              The RBI has cut interest rates to give India's economy a
              growth boost. Home and auto loan borrowers may welcome
              lower EMIs if banks pass on the benefit. Markets are
              watching closely, but the big question remains: will
              cheaper credit fuel growth without pushing inflation higher?
            </p>
          </div>
        </div>

        <MattersNext
          summary="The RBI's rate cut could make borrowing cheaper, influence investment decisions and give businesses more room to expand. However, the actual impact depends on how banks and markets respond."
          whatNext={[
            "Banks may review lending rates, potentially reducing EMIs for borrowers.",
            "Investors will monitor bond yields and interest-sensitive stocks.",
            "Upcoming inflation data will indicate whether the RBI has room for further rate cuts."
          ]}
        />

        <Timeline items={story.timeline ?? []} />

        <SourceComparison sources={story.sources ?? []} />

        <a href="#ask" className="forum-cta">
          Have a question about this story?
          <span>Discuss it in forum →</span>
        </a>
      </article>

      <aside>
        <Affected
          affectedGroups={[
            {
              title: "Homebuyers & borrowers",
              description:
                "Potentially lower EMIs if banks pass on the rate cut.",
            },
            {
              title: "Investors & market watchers",
              description:
                "Interest-rate changes can influence stocks, bonds and market sentiment.",
            },
            {
              title: "Students & professionals",
              description:
                "A useful example of how monetary policy affects the economy, jobs and businesses.",
            },
          ]}
        />

        <AskPulseVow onToast={onToast} />

        <RelatedArticles />

        <Newsletter onToast={onToast} />

        <Advertisement />
      </aside>
    </div>
  );
}
