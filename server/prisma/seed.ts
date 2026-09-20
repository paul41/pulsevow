import { PrismaClient, SourceType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding PulseVow database...");

  // ==========================================
  // Categories
  // ==========================================

  const categories = [
    { name: "Politics", slug: "politics" },
    { name: "Business", slug: "business" },
    { name: "Technology", slug: "technology" },
    { name: "AI", slug: "ai" },
    { name: "Science", slug: "science" },
    { name: "Health", slug: "health" },
    { name: "Sports", slug: "sports" },
    { name: "Entertainment", slug: "entertainment" },
    { name: "Finance", slug: "finance" },
    { name: "Markets", slug: "markets" },
    { name: "Startups", slug: "startups" },
    { name: "Climate", slug: "climate" },
    { name: "Education", slug: "education" },
    { name: "World", slug: "world" },
    { name: "Lifestyle", slug: "lifestyle" },
    { name: "Travel", slug: "travel" },
    { name: "Food", slug: "food" },
    { name: "Culture", slug: "culture" },
    { name: "India", slug: "india" },
    { name: "Cities", slug: "cities" },
    { name: "General", slug: "general" },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: {
        name: category.name,
      },
      create: category,
    });
  }

  // ==========================================
  // News Sources
  // ==========================================

  const sources = [
    {
      name: "Times of India",
      siteUrl: "https://timesofindia.indiatimes.com/",
      feeds: [
        "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/2886704.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/913168846.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/66949542.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
        "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
      ],
      country: "India",
      language: "English",
      trustScore: 98,
    },

    // {
    //   name: "Reuters",
    //   siteUrl: "https://www.reuters.com",
    //   feeds: [
    //     "https://feeds.reuters.com/reuters/topNews",
    //   ],
    //   country: "Global",
    //   language: "English",
    //   trustScore: 98,
    // },

    {
      name: "BBC News",
      siteUrl: "https://www.bbc.com",
      feeds: [
        "https://feeds.bbci.co.uk/news/rss.xml",
      ],
      country: "United Kingdom",
      language: "English",
      trustScore: 97,
    },

    {
      name: "The Hindu",
      siteUrl: "https://www.thehindu.com",
      feeds: [
        "https://www.thehindu.com/news/feeder/default.rss",
      ],
      country: "India",
      language: "English",
      trustScore: 94,
    },

    {
      name: "Indian Express",
      siteUrl: "https://indianexpress.com",
      feeds: [
        "https://indianexpress.com/feed/",
      ],
      country: "India",
      language: "English",
      trustScore: 93,
    },

    {
      name: "NDTV",
      siteUrl: "https://www.ndtv.com/",
      feeds: [
        "https://feeds.feedburner.com/NDTV-LatestNews",
      ],
      country: "India",
      language: "English",
      trustScore: 93,
    },

    {
      name: "CNBC",
      siteUrl: "https://www.cnbc.com",
      feeds: [
        "https://www.cnbc.com/id/100003114/device/rss/rss.html",
      ],
      country: "United States",
      language: "English",
      trustScore: 95,
    },

    {
      name: "India Today",
      siteUrl: "https://www.indiatoday.in/",
      feeds: [
        "https://www.indiatoday.in/rss/1206578",
      ],
      country: "India",
      language: "English",
      trustScore: 93,
    },

    {
      name: "TechCrunch",
      siteUrl: "https://techcrunch.com",
      feeds: [
        "https://techcrunch.com/feed/",
      ],
      country: "United States",
      language: "English",
      trustScore: 93,
    },

    {
      name: "Hindustan Times",
      siteUrl: "https://www.hindustantimes.com/",
      feeds: [
        "https://www.hindustantimes.com/feeds/rss/trending/rssfeed.xml",
      ],
      country: "India",
      language: "English",
      trustScore: 91,
    },

    {
      name: "Economic Times",
      siteUrl: "https://economictimes.indiatimes.com/",
      feeds: [
        "https://economictimes.indiatimes.com/rssfeedsdefault.cms",
      ],
      country: "India",
      language: "English",
      trustScore: 91,
    },

    {
      name: "Moneycontrol",
      siteUrl: "https://www.moneycontrol.com",
      feeds: [
        "https://www.moneycontrol.com/rss/latestnews.xml",
      ],
      country: "India",
      language: "English",
      trustScore: 90,
    },

    {
      name: "Mint",
      siteUrl: "https://www.livemint.com",
      feeds: [
        "https://www.livemint.com/rss/news",
      ],
      country: "India",
      language: "English",
      trustScore: 92,
    },

    {
      name: "ABP News",
      siteUrl: "https://news.abplive.com/",
      feeds: [
        "https://news.abplive.com/home/feed",
      ],
      country: "India",
      language: "English",
      trustScore: 92,
    },

    {
      name: "India TV",
      siteUrl: "https://www.indiatvnews.com/",
      feeds: [
        "https://www.indiatvnews.com/rssnews/topstory.xml",
      ],
      country: "India",
      language: "English",
      trustScore: 92,
    },

    {
      name: "Scroll",
      siteUrl: "https://scroll.in/",
      feeds: [
        "https://feeds.feedburner.com/ScrollinArticles",
      ],
      country: "India",
      language: "English",
      trustScore: 92,
    },
  ];

  // ==========================================
  // Seed Sources
  // ==========================================

  for (const source of sources) {
    const dbSource = await prisma.source.upsert({
      where: {
        siteUrl: source.siteUrl,
      },

      update: {
        name: source.name,
        country: source.country,
        language: source.language,
        trustScore: source.trustScore,
        type: SourceType.RSS,
        isActive: true,
      },

      create: {
        name: source.name,
        siteUrl: source.siteUrl,
        country: source.country,
        language: source.language,
        trustScore: source.trustScore,
        type: SourceType.RSS,
        isActive: true,
      },
    });

    // ==========================================
    // Seed Source Feeds
    // ==========================================

    for (const feedUrl of source.feeds) {
      await prisma.sourceFeed.upsert({
        where: {
          url: feedUrl,
        },

        update: {
          sourceId: dbSource.id,
          isActive: true,
        },

        create: {
          sourceId: dbSource.id,
          url: feedUrl,
          isActive: true,
        },
      });
    }

    console.log(
      `   ✓ ${source.name} (${source.feeds.length} feed${
        source.feeds.length > 1 ? "s" : ""
      })`
    );
  }

  // ==========================================
  // Deactivate Feeds No Longer In Seed
  // ==========================================

  const activeFeedUrls = sources.flatMap(
    (source) => source.feeds
  );

  await prisma.sourceFeed.updateMany({
    where: {
      url: {
        notIn: activeFeedUrls,
      },
    },
    data: {
      isActive: false,
    },
  });

  // ==========================================
  // Summary
  // ==========================================

  const sourceCount = await prisma.source.count();

  const feedCount = await prisma.sourceFeed.count({
    where: {
      isActive: true,
    },
  });

  const categoryCount = await prisma.category.count();

  console.log("");
  console.log(`✅ Seeded ${categoryCount} categories`);
  console.log(`✅ Seeded ${sourceCount} news sources`);
  console.log(`✅ Seeded ${feedCount} active RSS feeds`);
  console.log("");
  console.log("🎉 PulseVow database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    //process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });