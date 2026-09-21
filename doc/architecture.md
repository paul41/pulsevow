AI-powered news intelligence platform that ingests thousands of articles, deduplicates stories, generates embeddings and AI analysis, clusters related coverage, and delivers contextual intelligence to users.

    PulseVow

RSS/API/Scraper
       ↓
  Normalization
       ↓
  Deduplication
       ↓
 PostgreSQL
       ↓
    BullMQ
       ↓
 AI Workers
       ↓
ArticleAnalysis
       ↓
  Embeddings
       ↓
   pgvector
       ↓
 REST API
       ↓
   React

AI COMMUNITY FILTER()
Relevance       94
Toxicity         2
Spam             0
Factual risk    31
Duplicate       87

Add "Fact vs Opinion"

PulseVow 5

5 minutes. 5 important stories. Zero noise.

Example:

TODAY'S PULSEVOW 5

01  RBI rate cut
    1:05

02  New government policy
    0:58

03  Markets today
    0:47

04  Technology
    0:51

05  World
    1:10

                    ▶ PLAY 4:51

Then provide:

English ▾

हिन्दी

Eventually:

Bengali
Tamil
Telugu
Marathi
Kannada
Malayalam
Gujarati

For an Indian-focused product, regional-language intelligence could become a major moat.

This could be excellent for personalization.

Example:

Recommended for you

TCS announces major AI investment

Technology IT Services India

Then:

You follow Technology and Indian Markets.

This gives you a transparent recommendation engine.

And it ties directly into the embeddings work you're doing.


18. "Impact on me" could become premium

Eventually you could let users select interests:

My Pulse

☑ Technology
☑ Markets
☑ Startups
☑ Banking
☑ Real Estate

Then every story can show:

Why this matters to you

This may affect Indian IT hiring and technology spending.

That's a potential premium feature.


PulseVow Pro

Something like:

₹199–399/month

Potential features:

unlimited Ask PulseVow
deeper source comparison
historical event timelines
personalized intelligence feed
sector intelligence
advanced market/news analysis
unlimited audio briefings
saved research
"impact on me"
weekly intelligence report

***** 
Banking Pulse

Startup Pulse

IT Pulse

Automobile Pulse

Real Estate Pulse

Energy Pulse

This is where your Story + Embeddings + Entities + Industries architecture becomes extremely useful.

****

PULSEVOW

Today
India
Markets
Business
Technology
World

────────────────

Explore
  Trending
  Sectors
  Companies
  People
  Topics

────────────────

Intelligence
  Story Explorer
  Ask PulseVow
  PulseVow 5
  Monthly Verdict


*******
1,284 stories analyzed

Most important event
────────────────────
RBI policy shift

Biggest sector movement
────────────────────
Banking

Most discussed company
────────────────────
XYZ

Biggest emerging risk
────────────────────
...

Biggest positive development
────────────────────
...

PulseVow's verdict
────────────────────

"September was primarily defined by
falling inflation, monetary easing and..."

**********

              PULSEVOW
                 │
     ┌───────────┼───────────┐
     │           │           │
   SIGNAL      CONTEXT     CONSENSUS
     │           │           │
 Importance   Timeline    Sources
 Impact       History     Agreement
 Noise        What's next Differences
     │           │           │
     └───────────┼───────────┘
                 │
       ┌─────────┴─────────┐
       │                   │
     ASK                  PEOPLE
       │                   │
    AI Q&A             Community
    Explain            Questions
    Research           Answers
       │                   │
       └─────────┬─────────┘
                 │
              ACTION
                 │
        Why should I care?

Articles
    ↓
Story/Event clustering
    ↓
Story Intelligence
    ├── Signal Score
    ├── Source Consensus
    ├── Timeline
    ├── Stakeholders
    ├── Industries
    ├── AI Brief
    ├── Fact/Opinion
    ├── What's Next
    ├── Community Q&A
    └── Recommendations


----------------------------IMP-----------------------

RSS / API / Scraper
        ↓
Normalize article
        ↓
Deduplicate
        ↓
Save Article
        ↓
Generate Embedding
        ↓
Cluster / identify same event
        ↓
AI Article Analysis
        ↓
┌─────────────────────────────────────┐
│ Structured intelligence             │
│                                     │
│ facts                               │
│ what happened                       │
│ why it matters                      │
│ stakeholders                        │
│ sectors                             │
│ sentiment                            │
│ impact                               │
│ credibility                         │
│ bias                                │
│ sensationalism                      │
│ claims                              │
│ entities                            │
│ possible implications               │
└─────────────────────────────────────┘
        ↓
Group articles into Story/Event
        ↓
AI Story Synthesis
        ↓
PulseVow AI Brief
        ↓
Publish Story
        ↓
React UI



55. MVP1 vs Future Architecture
MVP1

Build:

Ingestion
Norm
alization
Deduplication
Tags
Embeddings
Story clustering
AI Brief
AI Analysis
Timeline
Source comparison
Pulse ranking
REST API
Auth
React integration
Later

Add:

Personalization
Public comments
AI moderation
Podcast generation
Monthly intelligence automation
Advanced sector intelligence
Notifications
Subscriptions/payments
Recommendation engine
Advanced analytics

Do not let these future features complicate the MVP1 domain model.

56. Key Design Principles
Principle 1 — Story first
NewsStory
   ↓
Articles

not:

Article
   ↓
everything else
Principle 2 — Async AI

AI processing must happen through queues.

Never:

HTTP request
 ↓
AI call
 ↓
wait 10 seconds

Use:

HTTP
 ↓
DB
 ↓
Queue
 ↓
Worker
Principle 3 — Services contain business logic
Controller
↓
Service
↓
Repository
Principle 4 — API contract first

React should depend on:

OpenAPI contract

not Prisma models.

Principle 5 — Internal scores remain internal

Pulse Score is a ranking mechanism, not a product metric exposed to users.

Principle 6 — Every worker is retryable

AI/API failures must not corrupt article/story state.

Principle 7 — Observability from day one

Every ingestion and AI job should have traceable IDs.

57. Final MVP1 Architecture
                         PULSEVOW
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
   DATA PIPELINE                           USER APPLICATION
        │                                       │
        ▼                                       ▼
 RSS / API / Scraper                         React
        │                                       │
        ▼                                       ▼
 Normalization                             API Client
        │                                       │
        ▼                                       ▼
 Enrichment                                REST API
        │                                       │
        ▼                                       │
 Deduplication                                  │
        │                                       │
        ▼                                       │
 PostgreSQL                                     │
        │                                       │
        ▼                                       │
      BullMQ ◄──────────────────────────────────┘
        │
   ┌────┼──────────────┐
   │    │              │
   ▼    ▼              ▼
Embedding AI       Story Engine
Worker   Worker         │
   │      │             │
   ▼      ▼             ▼
pgvector Analysis    NewsStory
                      │
          ┌───────────┼────────────┐
          ▼           ▼            ▼
       Timeline    Sources      Related
          │           │            │
          └───────────┼────────────┘
                      ▼
                Pulse Ranking
                      │
                      ▼
                 REST API
                      │
                      ▼
                    React
58. Recommended Implementation Order

For the current PulseVow codebase, implement the LLD in this order:

PHASE 1
Health + API foundation
        ↓
PHASE 2
Authentication
        ↓
PHASE 3
Article ingestion stabilization
        ↓
PHASE 4
Embedding worker
        ↓
PHASE 5
NewsStory + clustering
        ↓
PHASE 6
AI Brief + Analysis
        ↓
PHASE 7
Timeline + Source Comparison
        ↓
PHASE 8
Pulse ranking
        ↓
PHASE 9
Story REST APIs
        ↓
PHASE 10
React API integration
        ↓
PHASE 11
Testing + Docker + deployment

The most important architectural milestone is Phase 5. Once NewsStory and clustering are working, the rest of PulseVow becomes much easier because the product's fundamental unit is no longer an individual article—it is an intelligent story assembled from multiple sources.



LOGIN---------------------------------------

Login
  ↓
Backend validates email/password
  ↓
Create access JWT (15 min) ────────┐
Create refresh token (30 days)     │
  ↓                                │
Set HttpOnly cookies               │
  ↓                                │
Browser stores them                │
                                   │
API request ──→ access_token ──→ verify with PUBLIC KEY
                                   │
                         expired? ─┘
                              ↓
                    POST /auth/refresh
                              ↓
                    refresh_token cookie
                              ↓
                 validate refresh token
                              ↓
                 issue new access_token