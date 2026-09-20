export type PulseStory = {
  // Card metadata
  id: string;
  image: string;
  category: string;
  title: string;
  meta: string;
  updated?: string;

  // Full story details
  dek?: string;
  heroImage?: string;
  heroAlt?: string;
  affected?: { label: string; type: 'stake' | 'sector' }[];
  brief?: [string, string][];
  timeline?: [string, string][];
  sources?: Source[];
  confirmed?: string[];
  interpretation?: string[];
};


export type Source = {
  name: string;
  favicon: string;
  relation: 'AGREES' | 'ADDS CONTEXT' | 'DIFFERS';
  headline: string;
  angle: string;
  url?: string;
};

export const pulseStories : PulseStory[]  = [
  {
    id: 'rbi',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&h=340&fit=crop',
    category: 'Banking · Markets',
    title: 'RBI cuts repo rate by 25 basis points, signals further easing ahead',
    meta: '41 sources · Developing story',
    updated: '2 hours ago',
    heroImage: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=650&fit=crop',
    heroAlt: 'Reserve Bank of India building in Mumbai',
    affected: [
      { label: 'RBI', type: 'stake' }, { label: 'Home loan borrowers', type: 'stake' },
      { label: 'Banks', type: 'stake' }, { label: 'NBFCs', type: 'stake' },
      { label: 'Banking', type: 'sector' }, { label: 'Real estate', type: 'sector' }, { label: 'Equity markets', type: 'sector' },
    ],
    brief: [
      ['What happened?', "The RBI's monetary policy committee lowered the repo rate by 25 basis points, citing easing inflation and the need to support economic activity."],
      ['Why does it matter?', 'The decision can influence the cost of credit, bank liquidity and interest-sensitive sectors, although the effect on consumers depends on how lenders pass through the change.'],
      ['Who is affected?', 'Borrowers and credit-sensitive businesses could benefit from easier financing, while banks, depositors and investors may see different effects.'],
      ['What happens next?', "Markets will watch bank lending-rate decisions, upcoming inflation data and the RBI's next policy communication."],
      ["summary", "The central bank's latest decision could influence borrowing costs, liquidity and interest-sensitive sectors across the Indian economy."]
    ],
    timeline: [
      ['Today', 'RBI announces a 25 basis point reduction and outlines its policy stance.'],
      ['3 weeks ago', "Retail inflation eased further, remaining within the RBI's comfort range."],
      ['6 weeks ago', 'RBI held rates steady while indicating that further easing could depend on inflation and growth.'],
      ['4 months ago', 'The central bank began the current easing cycle with its first rate reduction in nearly two years.'],
    ],
    sources: [
      { name: 'Economic Times', favicon: 'https://www.google.com/s2/favicons?domain=economictimes.indiatimes.com&sz=64', relation: 'AGREES', headline: 'RBI delivers another rate cut, leaving room for further easing', angle: "Focuses on borrowing costs, markets and economists' expectations.", url: 'https://economictimes.indiatimes.com' },
      { name: 'BQ Prime', favicon: 'https://www.google.com/s2/favicons?domain=bqprime.com&sz=64', relation: 'ADDS CONTEXT', headline: 'MPC cuts repo rate as inflation and growth forecasts shift', angle: 'Concentrates on the policy mechanics and economic forecasts.', url: 'https://www.bqprime.com' },
      { name: 'NewsXpress', favicon: 'https://www.google.com/s2/favicons?domain=news.com&sz=64', relation: 'DIFFERS', headline: 'RBI stuns markets with a surprise rate cut', angle: 'Uses a more dramatic framing; PulseVow flags that the rate cut had been widely anticipated.' },
    ] as Source[],
    confirmed: ['The RBI announced the rate decision.', 'The repo rate was reduced by 25 basis points.', 'Multiple publishers independently reported the announcement.'],
    interpretation: ['Borrowing costs may ease for some customers.', 'Interest-sensitive sectors could receive support.', 'Future cuts depend on subsequent data and policy guidance.'],
  },
  {
    id: 'tcs',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=340&fit=crop',
    category: 'Technology',
    title: 'TCS announces major AI infrastructure investment',
    meta: '28 sources · Technology',
    updated: '1 day ago',
    //dek: 'TCS unveiled a large-scale investment in AI infrastructure to support enterprise adoption.',
    heroImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=650&fit=crop',
    heroAlt: 'Technology infrastructure',
    affected: [
      { label: 'TCS', type: 'stake' }, { label: 'Enterprise clients', type: 'stake' },
      { label: 'AI sector', type: 'sector' },
    ],
    brief: [['What happened?', 'TCS announced new AI infrastructure investments.'],["summary", "The central bank's latest decision could influence borrowing costs, liquidity and interest-sensitive sectors across the Indian economy."]],
    timeline: [['Yesterday', 'Announcement made at press event.']],
    sources: [] as Source[],
    confirmed: ['TCS announced investment.'],
    interpretation: ['Signals India’s tech sector scaling AI adoption.'],
  },
  {
    id: 'energy',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=340&fit=crop',
    category: 'Energy · Policy',
    title: 'New renewable energy subsidy policy clears a key hurdle',
    meta: '19 sources · Government',
    updated: '3 days ago',
    //dek: 'Government subsidy policy for renewable energy passed a key stage.',
    heroImage: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=650&fit=crop',
    heroAlt: 'Solar panels in India',
    affected: [
      { label: 'Government', type: 'stake' }, { label: 'Renewable sector', type: 'stake' },
    ],
    brief: [['What happened?', 'Policy cleared hurdle in parliament.'],["summary", "The central bank's latest decision could influence borrowing costs, liquidity and interest-sensitive sectors across the Indian economy."]],
    timeline: [['This week', 'Policy advanced.']],
    sources: [] as Source[],
    confirmed: ['Policy cleared hurdle.'],
    interpretation: ['Boosts renewable energy adoption.'],
  },
  {
    id: 'markets',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=340&fit=crop',
    category: 'Markets',
    title: "Indian equities swing as global cues reshape today's trade",
    meta: '34 sources · Markets',
    updated: '1 hour ago',
    //dek: 'Indian equities fluctuated sharply due to global market signals.',
    heroImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=650&fit=crop',
    heroAlt: 'Stock market screens',
    affected: [
      { label: 'Investors', type: 'stake' }, { label: 'Markets', type: 'sector' },
    ],
    brief: [['What happened?', 'Equities swung on global cues.'],["summary", "Indian equities fluctuated sharply due to global market signals."]],
    timeline: [['Today', 'Markets reacted to global signals.']],
    sources: [] as Source[],
    confirmed: ['Equities fluctuated.'],
    interpretation: ['Global cues continue to drive volatility.'],
  },
  {
    id: 'trade',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=340&fit=crop',
    category: 'World · Trade',
    title: 'Trade talks resume between key export partners',
    meta: '22 sources · Developing story',
    updated: '5 hours ago',
    //dek: 'Trade talks resumed between major export partners after months of stalemate.',
    heroImage: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=650&fit=crop',
    heroAlt: 'Global trade containers',
    affected: [
      { label: 'Exporters', type: 'stake' }, { label: 'Governments', type: 'stake' },
    ],
    brief: [['What happened?', 'Talks resumed after stalemate.'],["summary", "Trade talks resumed between major export partners after months of stalemate."]],
    timeline: [['Today', 'Negotiations restarted.']],
    sources: [] as Source[],
    confirmed: ['Talks resumed.'],
    interpretation: ['Could ease trade tensions.'],
  },
];

