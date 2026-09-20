# 📰 PulseVow

**AI-first News Intelligence Platform for understanding stories, not just headlines.**

![Build Status](https://img.shields.io/github/actions/workflow/status/paul41/pulsevow/ci.yml?branch=main)
![Contributors](https://img.shields.io/github/contributors/paul41/pulsevow)
![Stars](https://img.shields.io/github/stars/paul41/pulsevow?style=social)
![License](https://img.shields.io/github/license/paul41/pulsevow)

> **PulseVow transforms thousands of news articles into understandable stories, context, comparisons, and intelligence.**

PulseVow is an **AI-first News Intelligence Platform** designed to help readers understand what is happening across the news ecosystem rather than consuming isolated headlines.

It aggregates articles from multiple publishers, normalizes and deduplicates them, groups articles covering the same event into a unified **News Story**, and applies AI-powered analysis to understand:

* What happened
* Why it matters
* Who is affected
* How different publishers are reporting it
* How sensational or neutral the coverage is
* The credibility and impact of individual articles
* How a story is evolving over time
* Which industries and sectors may be affected
* Which related stories and sources provide additional context

PulseVow is built around a simple principle:

> **Don't just read the headline. Understand the story behind it.**

---

# 🧠 What Makes PulseVow Different?

Traditional news platforms primarily present articles individually.

PulseVow focuses on the **story as the central intelligence unit**.

The platform collects multiple articles covering the same event and transforms them into a unified intelligence layer:

```text
Publisher A ──┐
Publisher B ──┤
Publisher C ──┤
Publisher D ──┤
Publisher E ──┘
       │
       ▼
Normalization
       │
       ▼
Deduplication
       │
       ▼
AI Analysis
       │
       ▼
Story Clustering
       │
       ▼
     NEWS STORY
       │
 ┌─────┼─────────────┐
 ▼     ▼             ▼
Sources Timeline   Related
 │
 ▼
Pulse Ranking
 │
 ▼
REST API
 │
 ▼
React Application
```

This enables readers to compare coverage instead of relying on a single publisher's framing.

---

# 🏗️ Architecture

PulseVow is split into two major systems:

```text
                         PULSEVOW
                            │
          ┌─────────────────┴─────────────────┐
          │                                   │
          ▼                                   ▼
   DATA PIPELINE                        USER APPLICATION
          │                                   │
          │                                   ▼
          │                                React
          │                                   │
          │                                   ▼
          │                               API Client
          │                                   │
          ▼                                   ▼
    RSS / API / Scraper  ───────────────► REST API
          │
          ▼
    Normalization
          │
          ▼
     Enrichment
          │
          ▼
    Deduplication
          │
          ▼
      PostgreSQL
          │
          ▼
        BullMQ
          │
     ┌────┼───────────────┐
     │    │               │
     ▼    ▼               ▼
 Embedding AI         Story Engine
 Worker    Worker           │
     │    │                │
     ▼    ▼                ▼
 pgvector Analysis      NewsStory
                          │
              ┌───────────┼────────────┐
              ▼           ▼            ▼
          Timeline      Sources      Related
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
```

---

# 🔄 News Intelligence Pipeline

The core PulseVow pipeline follows:

```text
RSS / API / Scraper
        │
        ▼
Normalization
        │
        ▼
Enrichment
        │
        ▼
Deduplication
        │
        ▼
PostgreSQL
        │
        ▼
BullMQ
        │
        ├───────────────┐
        │               │
        ▼               ▼
  AI Analysis       Embeddings
        │               │
        ▼               ▼
ArticleAnalysis     pgvector
        │
        ▼
Story Clustering
        │
        ▼
NewsStory
        │
        ├── Sources
        ├── Timeline
        ├── Related Articles
        └── Industry Impact
                │
                ▼
          Pulse Ranking
                │
                ▼
             REST API
                │
                ▼
              React
```

---

# ✨ Core Features

## 📰 Multi-Source News Aggregation

PulseVow aggregates news from multiple publishers through:

* RSS feeds
* News APIs
* Web scrapers

Articles are normalized into a common structure before being stored.

---

## 🔗 Story Clustering

Instead of treating every article as an independent story, PulseVow groups articles covering the same event into a centralized `NewsStory`.

For example:

```text
The Hindu ───────────────┐
Indian Express ──────────┤
NDTV ────────────────────┤
Times of India ──────────┤
Reuters ─────────────────┤
                         ▼
              ┌────────────────────┐
              │      NewsStory     │
              │                    │
              │ RBI Rate Decision  │
              └────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       Sources        Timeline       Related
```

This allows PulseVow to provide context beyond an individual article.

---

## 🤖 AI Article Analysis

Each article can be analyzed using AI for:

* AI Brief / Summary
* Sentiment
* Impact
* Credibility
* Bias
* Confidence
* Sensationalism
* Neutrality

The resulting analysis is stored independently from the article itself.

---

## 📊 Multi-Outlet Comparison

PulseVow can compare how different publishers report the same story.

Coverage can be analyzed across dimensions such as:

* Tone
* Sentiment
* Sensationalism
* Neutrality
* Credibility
* Bias
* Context
* Key differences

Readers can therefore understand where publishers:

* **Agree**
* **Differ**
* **Add Context**

---

## 📈 Pulse Ranking

News stories are ranked using signals derived from the intelligence pipeline.

The ranking can incorporate factors such as:

* Story impact
* Coverage volume
* Recency
* Trend
* Source coverage
* AI analysis
* Industry relevance

The objective is to surface stories that matter rather than simply stories generating the most noise.

---

## 🕒 Story Timeline

Each `NewsStory` can contain a chronological timeline of important developments.

```text
Event
 │
 ├── Initial announcement
 │
 ├── Government response
 │
 ├── Market reaction
 │
 ├── Industry response
 │
 └── Latest development
```

This allows users to understand how an event evolved rather than reading disconnected updates.

---

## 🏭 Industry Intelligence

Stories can be associated with industries and assigned an impact score and confidence level.

Example:

```text
News Story
     │
     ├── Banking       → Impact: High
     ├── Technology    → Impact: Medium
     ├── Automotive    → Impact: Low
     └── Energy        → Impact: Medium
```

This forms the foundation for **Sector Intelligence** and professional news analysis.

---

## 🧠 Semantic Search

Article embeddings are stored using PostgreSQL + `pgvector`.

The embedding pipeline enables semantic retrieval based on meaning rather than exact keyword matches.

```text
Article
   │
   ▼
Embedding Worker
   │
   ▼
OpenAI / AI Embedding Model
   │
   ▼
pgvector
   │
   ▼
Semantic Search
```

---

## 🔥 Trending Stories

PulseVow maintains story-level trend information including:

* Trend score
* Number of mentions
* Search volume
* Social mentions

This allows trending intelligence to be generated at the **story level**, rather than simply counting individual articles.

---

## 👤 User Features

Authenticated users can have:

* Bookmarks
* Reading history
* Search history
* Comments
* Likes
* Notifications
* Personalized recommendations

Authentication is implemented using:

* JWT access tokens
* Refresh tokens
* Role-based access

Supported roles:

```text
USER
ADMIN
MODERATOR
```

---

# 📰 Supported News Sources

PulseVow is designed to support multiple trusted publishers and news providers.

Current/planned sources include:

* The Hindu
* Indian Express
* Hindustan Times
* Times of India
* NDTV
* India Today
* The Print
* Scroll.in
* Mint
* Economic Times
* Business Standard
* CNBC TV18
* Financial Express
* Moneycontrol
* Reuters India
* BBC News
* Gadgets360
* Analytics India Magazine
* YourStory
* TechCrunch
* Press Trust of India (PTI)
* Asian News International (ANI)
* United News of India
* Bloomberg
* The Quint

Additional publishers can be added through the source/feed ingestion layer.

> Publisher availability depends on supported RSS feeds, APIs, scraping permissions, licensing, and operational availability.

---

# 🧰 Technology Stack

| Layer                 | Technologies                |
| --------------------- | --------------------------- |
| Frontend              | React, TypeScript, Vite     |
| Backend               | Node.js, Express.js         |
| API                   | REST                        |
| Database              | PostgreSQL                  |
| Vector Search         | pgvector                    |
| ORM                   | Prisma                      |
| Queue                 | BullMQ                      |
| Cache / Queue Backend | Redis                       |
| Authentication        | JWT + Refresh Tokens        |
| AI                    | AI / LLM APIs               |
| Embeddings            | Vector Embeddings           |
| DevOps                | Docker, Docker Compose      |
| CI/CD                 | GitHub Actions              |
| Web Server            | Nginx                       |
| Deployment            | Docker-based VPS deployment |

---

# 🗄️ Data Model

The primary entities are:

```text
User
 │
 ├── Bookmarks
 ├── Comments
 ├── Likes
 ├── Notifications
 ├── Reading History
 ├── Search History
 └── Refresh Tokens


Source
 │
 ├── Source Feeds
 └── Articles


Category
 │
 └── Articles


NewsStory
 │
 ├── Articles
 ├── Timeline Events
 ├── Industry Impacts
 └── Trend


Article
 │
 ├── Source
 ├── Category
 ├── NewsStory
 ├── AI Analysis
 ├── Embedding
 ├── Tags
 ├── Bookmarks
 ├── Comments
 ├── Likes
 ├── Reading History
 └── Search History


Tag
 │
 └── ArticleTag


Industry
 │
 └── StoryIndustry
```

---

# 📂 Project Structure

The project is organized into frontend and backend applications.

```text
pulsevow/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── stores/
│   │   └── utils/
│   │
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── workers/
│   │   ├── queues/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

> Adjust the top-level folder names if your repositories are currently maintained separately.

---

# ⚙️ Local Development

## Prerequisites

Make sure the following are installed:

* Node.js 22+
* Docker
* Docker Compose
* PostgreSQL
* Redis
* Git

---

## Clone Repository

```bash
git clone https://github.com/yourusername/pulsevow.git
cd pulsevow
```

---

## Environment Variables

Configure environment variables for the backend.

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/pulsevow
REDIS_URL=redis://localhost:6379

JWT_SECRET=your_jwt_secret

JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

PORT=5000

OPENAI_API_KEY=your_api_key
```

Frontend environment:

```env
VITE_API_URL=http://localhost:5000/api
```

For production:

```env
VITE_API_URL=https://api.pulsevow.com/api
```

> Never commit real secrets, API keys, database credentials, or JWT secrets to Git.

---

# 🐳 Docker

PulseVow supports Docker-based development and deployment.

Build and start the application:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d --build
```

View logs:

```bash
docker compose logs -f
```

Stop services:

```bash
docker compose down
```

---

# 🗃️ Prisma

Generate the Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Deploy migrations in production:

```bash
npx prisma migrate deploy
```

Inspect the database:

```bash
npx prisma studio
```

---

# 🔐 Authentication

PulseVow uses JWT-based authentication with refresh-token support.

Authentication flow:

```text
React
 │
 ▼
POST /auth/login
 │
 ▼
Express API
 │
 ▼
Validate Credentials
 │
 ▼
Access Token + Refresh Token
 │
 ├──────────────► Access Token
 │
 └──────────────► Refresh Token
                       │
                       ▼
                  PostgreSQL
```

Core authentication endpoints:

```text
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
```

---

# 🔌 API Architecture

The frontend communicates with the backend through a REST API.

Production architecture:

```text
                     pulsevow.com
                          │
                          ▼
                       Nginx
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
        React Frontend             API Server
                                      │
                                      ▼
                                  PostgreSQL
                                      │
                                      ├── Redis
                                      │
                                      └── BullMQ
                                           │
                              ┌────────────┼────────────┐
                              ▼            ▼            ▼
                         AI Worker   Embedding     Story Engine
                                       Worker
```

---

# 🤖 AI Processing Architecture

AI processing is asynchronous and handled through background workers.

```text
Article
   │
   ▼
BullMQ
   │
   ├───────────────┐
   │               │
   ▼               ▼
AI Worker     Embedding Worker
   │               │
   ▼               ▼
Analysis        pgvector
   │
   ├── Summary
   ├── Sentiment
   ├── Impact
   ├── Credibility
   ├── Bias
   ├── Sensationalism
   ├── Neutrality
   └── Confidence
```

This keeps expensive AI processing out of the synchronous request path.

---

# 🧩 NewsStory Intelligence Model

`NewsStory` is the central entity for multi-source intelligence.

```text
                    NewsStory
                        │
       ┌────────────────┼────────────────┐
       │                │                │
       ▼                ▼                ▼
    Articles         Timeline        Industry
       │              Events           Impact
       │
       ├── Source A
       ├── Source B
       ├── Source C
       └── Source D
                        │
                        ▼
                      Trend
```

This structure allows PulseVow to answer questions such as:

> What happened?

> How are different publishers covering it?

> What changed over time?

> Which industries are affected?

> What related stories provide context?

---

# 📊 Article Intelligence

Each article may contain an `ArticleAnalysis` record:

```text
ArticleAnalysis

summary
sentiment
impactScore
credibilityScore
biasScore
confidence
sensationalismScore
neutralityScore
```

These signals are used throughout the intelligence and ranking layers.

---

# 🧠 Vector Search

PulseVow uses PostgreSQL with `pgvector` for semantic search.

Each article can have an embedding:

```text
Article
   │
   ▼
Title + Description + Category
   │
   ▼
Embedding Model
   │
   ▼
1536-dimensional Vector
   │
   ▼
PostgreSQL / pgvector
```

This enables future capabilities such as:

* Semantic article search
* Related stories
* Story clustering
* Similar article discovery
* Context retrieval
* Personalized recommendations

---

# 🚀 Roadmap

## Phase 1 — Core Intelligence

* [x] React frontend
* [x] Node.js API
* [x] PostgreSQL
* [x] Prisma
* [x] Redis
* [x] BullMQ
* [x] RSS ingestion
* [x] Article normalization
* [x] Deduplication
* [x] Source management
* [x] Category resolution
* [x] JWT authentication
* [x] Refresh token authentication
* [x] Article AI analysis foundation
* [x] NewsStory data model
* [x] Timeline data model
* [x] Industry impact model
* [x] pgvector setup

## Phase 2 — News Intelligence

* [ ] Production story clustering
* [ ] Embedding-powered similarity
* [ ] Related article engine
* [ ] Story timelines
* [ ] Multi-source comparison
* [ ] Credibility analysis
* [ ] Bias analysis
* [ ] Sensationalism analysis
* [ ] Impact scoring
* [ ] Pulse ranking
* [ ] Trend intelligence

## Phase 3 — Professional Intelligence

* [ ] Sector Intelligence
* [ ] Industry-specific news feeds
* [ ] Monthly Intelligence Briefs
* [ ] Daily 5-minute news podcast
* [ ] Personalized news intelligence
* [ ] Advanced semantic search
* [ ] Cross-story intelligence

## Phase 4 — Platform Expansion

* [ ] Multilingual news intelligence
* [ ] Real-time breaking news
* [ ] Push notifications
* [ ] Advanced fact-check integration
* [ ] PWA / offline reading
* [ ] Community discussions
* [ ] Polls
* [ ] Personalized recommendations
* [ ] Reading history
* [ ] Bookmarks

---

# 🌍 Supported Languages

The frontend is designed to support multilingual experiences including:

* English
* Hindi
* Bengali
* Tamil
* Telugu
* Marathi
* Kannada

Additional languages can be introduced as the multilingual intelligence pipeline evolves.

---

# 🔒 Security

PulseVow follows a layered security approach.

Current/planned protections include:

* JWT authentication
* Refresh-token rotation/storage
* Password hashing
* Role-based access control
* Environment-based secrets
* API authentication middleware
* Database constraints
* Input validation
* Docker isolation
* HTTPS through production reverse proxy

Production secrets should always be provided through environment variables or a dedicated secrets-management system.

---

# 📈 Scalability

PulseVow is designed around asynchronous processing so that ingestion and AI processing can scale independently.

```text
                    API
                     │
                     ▼
                 PostgreSQL
                     │
                     ▼
                   Redis
                     │
                 BullMQ
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Worker      Worker      Worker
       AI          Embed       Story
```

This architecture allows additional workers to be added as article volume increases without blocking the main API.

---

# 🧪 Development Philosophy

PulseVow is being developed around several principles:

### Intelligence over aggregation

The goal is not simply to collect more articles.

The goal is to extract more useful information from them.

### Story over article

An individual article is one perspective.

A `NewsStory` represents the broader event.

### Context over headlines

Readers should understand why a story matters, not simply what a headline says.

### Comparison over assumption

Multiple sources should be presented where possible so readers can understand differences in reporting.

### Async AI processing

Expensive AI operations should run asynchronously through workers rather than blocking API requests.

### Production-first architecture

The local development environment and production deployment should follow the same containerized architecture wherever practical.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Run tests and linting.
5. Commit your changes.

```bash
git commit -m "feat: add your feature"
```

6. Push your branch.

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

Please use clear commit messages and keep changes focused.

---

# 📜 License

This project is licensed under the **MIT License**.

---

# ⭐ Support PulseVow

If you find PulseVow interesting, consider giving the repository a ⭐ on GitHub.

PulseVow is being built to make news consumption more understandable, contextual, and intelligent.

> **PulseVow — Understand the story behind the headline.**