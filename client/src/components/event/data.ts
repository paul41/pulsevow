
import type { NewsApiResponse } from "../../api/type";

const BBC_ID = "7868e341-5e6e-4d0d-bdba-2b704b8dfaba";
const CNBC_ID = "82b6decf-84a9-4d76-9360-420bb6e469da";
const HINDU_ID = "82a62d74-dde6-4b38-9410-314bdc594451";
const TECHCRUNCH_ID = "f351d3b0-4015-4092-b7f0-fead63a95f31";
const TOI_ID = "6171e81b-5378-4c8d-93c8-5a43f5510e7e";
const GENERAL_ID = "20b57a0c-b56f-432a-9258-9071a009d6c6";

const source = (
  id: string,
  name: string,
  country: string,
) => ({ id, name, country, logo: null });

const category = {
  id: GENERAL_ID,
  name: "General",
  slug: "general",
};

export const mockNewsResponse: NewsApiResponse = {
  success: true,
  data: [
    {
      id: "7e8abf7e-1b64-4a83-b399-41cb7de71223",
      title: "Trump says 'threat' led US to pull bombers from RAF Fairford",
      slug: "trump-says-threat-led-us-to-pull-bombers-from-raf-fairford",
      description:
        "The Pentagon confirmed on Sunday it had removed the B1 bombers from the base in England back to their home stations in America.",
      imageUrl:
        "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/eab1/live/24eb2720-c0f4-11f1-bc2e-018d645d8d21.jpg",
      author: null,
      publishedAt: "2026-10-10T19:58:50.000Z",
      url: "",
      source: source(BBC_ID, "BBC News", "United Kingdom"),
      category,
    },
    {
      id: "6a070b18-8858-48e0-82d2-5bfe1a2cb03b",
      title: "US 'watching closely' after plague researcher dies in Russia, Rubio says",
      slug: "us-watching-closely-after-plague-researcher-dies-in-russia-rubio-says",
      description:
        "The US says it is monitoring the case of a lab technician who died at a plague research centre in Siberia.",
      imageUrl:
        "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b8d8/live/57b0b030-c0ef-11f1-b3d1-4f53c4a075ed.jpg",
      author: null,
      publishedAt: "2026-10-09T19:55:00.000Z",
      url: "",
      source: source(BBC_ID, "BBC News", "United Kingdom"),
      category,
    },
    {
      id: "05206dcd-cc40-4b4c-a37e-ecdad218fb74",
      title: "'We had a threat': Trump explains U.S moving long-range bombers from U.K.",
      slug: "we-had-a-threat-trump-explains-us-moving-long-range-bombers-from-uk",
      description:
        "The U.S. Air Force B-1 bombers removed from England have been used in strikes on Iran.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:49:51.000Z",
      url: "",
      source: source(CNBC_ID, "CNBC", "United States"),
      category,
    },
    {
      id: "999de935-efd5-450e-b39b-b465e3d323a6",
      title:
        "Construction of Vaduthala railway overbridge, Perandoor-Vaduthala bridge to begin on October 7",
      slug: "construction-of-vaduthala-railway-overbridge-perandoor-vaduthala-bridge-to-begin-on-october-7",
      description:
        "The new bridge, which is being constructed across the Perandoor Canal and will connect Vaduthala and Perandoor, will serve as a key transport link and enable people to travel quickly from Container Road via Vaduthala to Kaloor, thereby bypassing the congested National Highway.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:49:04.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "e775b0d3-5b2a-4b81-b851-c38295342778",
      title:
        "Two captive-bred Great Indian Bustards released into wild in Rajasthan under conservation efforts",
      slug: "two-captive-bred-great-indian-bustards-released-into-wild-in-rajasthan-under-conservation-efforts",
      description:
        "Bhupender Yadav said the milestone was the outcome of nearly a decade of unwavering dedication by scientists, researchers, and ground staff to help the critically endangered bird reclaim the deserts of Rajasthan.",
      imageUrl:
        "https://th-i.thgim.com/public/incoming/vh5dze/article71544043.ece/alternates/LANDSCAPE_1200/PTI10_04_2026_000032B.jpg",
      author: null,
      publishedAt: "2026-10-05T19:45:29.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "c0dad4a4-9251-4580-b6ef-d619872d9614",
      title:
        "AI researcher warns 'we are racing to build and grow our own adversary' in NYC hearing",
      slug: "ai-researcher-warns-we-are-racing-to-build-and-grow-our-own-adversary-in-nyc-hearing",
      description:
        "The leading AI labs facing intensifying scrutiny over their safety and security practices.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:45:15.000Z",
      url: "",
      source: source(CNBC_ID, "CNBC", "United States"),
      category,
    },
    {
      id: "3540d072-bf8b-4d93-b548-64241096b40f",
      title:
        "TNT Sports head Luis Silberwasser to depart Skydance as CBS Sports chief David Berson takes over combined global sports group",
      slug: "tnt-sports-head-luis-silberwasser-to-depart-skydance-as-cbs-sports-chief-david-berson-takes-over-combined-global-sports-group",
      description:
        "TNT Sports chief Luis Silberwasser will be leaving a combined Paramount Skydance-Warner Bros. Discovery company, sources tell CNBC.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:39:22.000Z",
      url: "",
      source: source(CNBC_ID, "CNBC", "United States"),
      category,
    },
    {
      id: "fc6b8151-672d-4929-ac43-0ff42cd5e0d2",
      title:
        "Chief Secy should ask District Collectors to instruct officials to follow Union Govt.’s guidelines on protocols: MP",
      slug: "chief-secy-should-ask-district-collectors-to-instruct-officials-to-follow-union-govts-guidelines-on-protocols-mp",
      description:
        "Mr. Ravikumar said that an order issued on January 12, 2026, states that MPs representing the area must be invited to public functions organised by a Government office.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:38:09.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "12d7e909-2703-4291-9d4f-0be739844236",
      title: "After Factory's public spat with Khosla, Menlo proudly invests",
      slug: "after-factoryand8217s-public-spat-with-khosla-menlo-proudly-invests",
      description:
        "Days after Vinod Khosla called Factory a struggling also-ran, Menlo has shown up with a check and a glowing blog post.",
      imageUrl: null,
      author: "Julie Bort",
      publishedAt: "2026-10-05T19:38:07.000Z",
      url: "",
      source: source(TECHCRUNCH_ID, "TechCrunch", "United States"),
      category,
    },
    {
      id: "44e98729-4318-4a31-bd06-62489d4bdceb",
      title:
        "Traffic police arrest 25 persons involved in bike racing in various parts of Chennai",
      slug: "traffic-police-arrest-25-persons-involved-in-bike-racing-in-various-parts-of-chennai",
      description:
        "Chennai traffic police crackdown on bike racing, arresting 25 suspects, seizing bikes, and warning of strict action against stunts.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:36:46.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "b462c1e7-aabc-449c-95f7-a330e2b14a99",
      title:
        "Two killed, Indian among injured after Russian drone hits Turkish cargo ship",
      slug: "two-killed-indian-among-injured-after-russian-drone-hits-turkish-cargo-ship",
      description:
        "A Russian drone struck the MV Royad Mammadov cargo vessel in the Black Sea, resulting in two fatalities. Among the crew were three Indian nationals, one of whom sustained injuries and received medical care. Ukrainian President Zelenskyy confirmed that the ship's captain was killed in the attack and expressed condolences. Romanian authorities responded by rescuing 11 crew members and recovering two deceased individuals.",
      imageUrl:
        "https://static.toiimg.com/photo/msid-134716545,imgsize-29158.cms",
      author: "YASHASVI VASISTHA",
      publishedAt: "2026-10-05T19:35:38.000Z",
      url: "",
      source: source(TOI_ID, "Times of India", "India"),
      category,
    },
    {
      id: "6413320e-c0b5-45d0-a046-f08ed3258062",
      title:
        "Wayanad township: Second-phase house construction to be completed by October 31",
      slug: "wayanad-township-second-phase-house-construction-to-be-completed-by-october-31",
      description:
        "Agriculture Minister T. Siddique said the draw of lots for allotting the houses to the beneficiaries would be held by November 1, 2026.",
      imageUrl:
        "https://th-i.thgim.com/public/news/national/kerala/ebe3j9/article71546847.ece/alternates/LANDSCAPE_1200/6tvkz1-%20wynd.jpg",
      author: null,
      publishedAt: "2026-10-05T19:34:33.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "cf73c9c0-8692-4173-ac4f-f1affbb23bc7",
      title:
        "Reflection debuts Beam, an open-weight AI model to rival Chinese models at lower compute cost",
      slug: "reflection-debuts-beam-an-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost",
      description:
        "Nvidia-backed Reflection AI unveils Beam, its first open-weight model, which it says rivals GLM-5.2 on reasoning with far less inference compute. Weights are due this month.",
      imageUrl: null,
      author: "Rebecca Bellan",
      publishedAt: "2026-10-05T19:33:53.000Z",
      url: "",
      source: source(TECHCRUNCH_ID, "TechCrunch", "United States"),
      category,
    },
    {
      id: "d1913f4d-79b0-426b-b912-6145fc88c91e",
      title: "Encroachment of land in Mumbai",
      slug: "encroachment-of-land-in-mumbai",
      description:
        "Converting public land for private luxury residences prioritises the luxury of a few over the lives of millions.",
      imageUrl:
        "https://th-i.thgim.com/public/incoming/39e4mc/article71548874.ece/alternates/LANDSCAPE_1200/6643_15-9-2020_16-51-10_1_3_BJPPROTESTOUTSIDESIONHOSPITAL.JPG",
      author: null,
      publishedAt: "2026-10-05T19:32:09.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "4ca5ddaf-6e4e-4887-b3f8-62701232160b",
      title: "Migrant worker electrocuted in Nanganallur",
      slug: "migrant-worker-electrocuted-in-nanganallur",
      description:
        "Migrant worker electrocuted, two injured, after iron rods struck a live wire at a Nanganallur construction site; police investigate.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:31:22.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "1a6cfa33-d9c0-4c0a-9e4b-80e706686383",
      title: "Spain PM pins hopes on housing crisis to help win snap election",
      slug: "spain-pm-pins-hopes-on-housing-crisis-to-help-win-snap-election",
      description:
        "Calling of a snap election was not a knee-jerk reaction from Pedro Sánchez but a carefully thought-out manoeuvre, Guy Hedgecoe reports from Madrid.",
      imageUrl:
        "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/da25/live/2b424680-c0ea-11f1-ac9b-4d871a6ff8ee.jpg",
      author: null,
      publishedAt: "2026-10-05T19:30:50.000Z",
      url: "",
      source: source(BBC_ID, "BBC News", "United Kingdom"),
      category,
    },
    {
      id: "da0181ed-304a-4b7f-a64c-bc1671cd80a1",
      title: "Jamia students link hostel evictions to protests over mess food",
      slug: "jamia-students-link-hostel-evictions-to-protests-over-mess-food",
      description:
        "At least five women receive eviction notices since mid-September; one moves the Delhi High Court; varsity cites merit criterion for evictions.",
      imageUrl:
        "https://th-i.thgim.com/public/incoming/zecvw/article71544683.ece/alternates/LANDSCAPE_1200/Jamia_GHDGITR31.1GCTGIVVVF.3.jpg",
      author: null,
      publishedAt: "2026-10-05T19:30:27.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "1c463bae-8c54-479d-925f-ff69928e24d1",
      title: "Eye-care camp held for students in Tambaram",
      slug: "eye-care-camp-held-for-students-in-tambaram",
      description:
        "Eye care camp for Vedic students in Tambaram provides free screening to protect long-study students’ eye health.",
      imageUrl:
        "https://th-i.thgim.com/public/news/national/1x7xjs/article71548519.ece/alternates/LANDSCAPE_1200/eye%20camp.jpg",
      author: null,
      publishedAt: "2026-10-05T19:28:42.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "28e74ee7-61a8-4f3b-a544-632c6d01c2d1",
      title: "Music event to raise awareness on Retinopathy of Prematurity",
      slug: "music-event-to-raise-awareness-on-retinopathy-of-prematurity",
      description:
        "Chennai’s Nethra ’26: A Night of Music and Hope raises awareness for Retinopathy of Prematurity with AGAM at The Music Academy.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:28:36.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
    {
      id: "addf8010-dafc-46b9-8ce2-b6eec7e126d1",
      title:
        "Revenue Inspector of Chitlapakkam caught red-handed while receiving bribe of ₹4,000",
      slug: "revenue-inspector-of-chitlapakkam-caught-red-handed-while-receiving-bribe-of-indian-rupee4000",
      description: "The accused was arrested and sent to judicial custody.",
      imageUrl: null,
      author: null,
      publishedAt: "2026-10-05T19:28:06.000Z",
      url: "",
      source: source(HINDU_ID, "The Hindu", "India"),
      category,
    },
  ],
  pagination: {
    page: 1,
    limit: 20,
    total: 738,
    totalPages: 37,
    hasNextPage: true,
  },
};