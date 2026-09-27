import Advertisement from '../common/Advertisement';
import { AIBrief } from '../home/AIBrief';
import { Timeline } from '../home/Timeline';
import { SourceComparison } from '../home/Comparision';
import { Facts } from '../home/Facts';
import { Recommendations } from '../home/Recommendation';
import { AskPulseVow } from '../home/Community';
import { Newsletter } from '../home/Newsletter';
import { FollowUs } from '../home/Social';
import { Recent } from '../home/Recent';
import { News360 } from '../home/News360';

type Props = { story: any; onToast: (message: string) => void };

export function StoryDetail({ story, onToast }: Props) {
  console.log(story)
  return (
    <div className="storygrid" id="story">
      <article>
        <header className="story-header">
          <div className="eyebrow-row">
            <span className="impact-badge">High impact</span>
            <span className="meta">
              Banking · Markets · 41 sources tracked · updated 12 min ago
            </span>
          </div>
          <h1 className="story-title headline-font">{story.title}</h1>
          {/* <p className="story-dek">{story.dek}</p> */}
          <div className="story-actions">
            <a className="action primary" href="#brief">NEWS Brief</a>
            <a className="action" href="#timeline">Story so far</a>
            <a className="action" href="#sources">Compare sources</a>
          </div>
        </header>

        <figure className="hero-figure">
          <img src={story.heroImage} alt={story.heroAlt} />
          <figcaption>
            <span>Representative image of the Reserve Bank of India.</span>
            <a href="https://www.rbi.org.in" target="_blank" rel="noreferrer">
              Official RBI website ↗
            </a>
          </figcaption>
        </figure>

        {/* <Affected items={story.affected} /> */}
        <AIBrief items={story.brief} />
        <Timeline items={story.timeline} />
        <SourceComparison sources={story.sources} />
        <Facts confirmed={story.confirmed} interpretation={story.interpretation} />
        <a href="#ask" className='block-title' style={{backgroundColor:"#e387bd",cursor:"pointer"}}>
          <span><h3>Have a question about this story? Discuss it in forum.</h3></span>
        </a>
        
        <News360 />
        <Recommendations />
      </article>

      <aside>
        <AskPulseVow onToast={onToast} />
        <Recent />
        <Newsletter onToast={onToast} />
        <FollowUs />
        {/* <RelatedArticles /> */}
        <Advertisement />
      </aside>
    </div>
  );
}