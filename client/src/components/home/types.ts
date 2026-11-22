import type { NewsArticle, NewsSource } from "../../api/type";

export type MattersNextProps = {
  summary: string;
  whatNext: string[];
};

export interface AskPulseVowProps {
    onToast: (message: string) => void;
}

export interface SourceComparisonProps {
    sources: NewsSource[];
}

export type AffectedProps = {
  affectedGroups: {
    title: string;
    description: string;
  }[];
};

export interface News360Props {
    items: NewsArticle[];
}

export interface NewsletterProps {
    onToast: (message: string) => void;
}

export interface RecentNewsArticles {
    image: string;
    title: string;
    text: string;
}

export interface RecommendationItem {
    image: string;
    tag: string;
    cat: string;
    time: string;
    title: string;
    text: string;
    tags: string[];
    cta: string;
}

export interface RelatedArticle {
    image: string;
    title: string;
    text: string;
}

// Timeline Types
type TimelineItem = [string, string];

// Used by TimelineProps
export interface TimelineProps {
  items: TimelineItem[];
}