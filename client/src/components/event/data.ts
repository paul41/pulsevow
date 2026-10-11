import type { NewsApiResponse } from "../../api/type";

/**
 * Local mock response matching the NewsApiResponse API contract.
 * Article URLs and source/category metadata are preserved from the latest sample.
 */
export const mockNewsResponse: NewsApiResponse = {
  success: true,
  data: [
    {
      "id": "cb3a3a6f-7707-436b-8703-d82ec43c9113",
      "title": "Abhijeet Dipke, Saurav Das, Ashutosh Ranka released a day after detention",
      "slug": "abhijeet-dipke-saurav-das-ashutosh-ranka-released-a-day-after-detention",
      "description": "Abhijeet Dipke, Saurav Das, Ashutosh Ranka released a day after detention",
      "url": "https://www.indiatvnews.com/news/india/abhijeet-dipke-saurav-das-ashutosh-ranka-released-a-day-after-detention-2026-10-11-1056665",
      "imageUrl": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/breaking-news-template-1-1667263372.webp",
      "author": null,
      "publishedAt": "2026-10-11T04:35:02.000Z",
      "source": {
        "id": "12c0f63d-ed61-4e9b-adba-ead97121e0fd",
        "name": "India TV",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "72721f54-e2a1-4cfc-9d2e-a97fa12f05e6",
      "title": "'They don't let us go near the aircraft': IAF Chief says US made no official offer to sell F-35 jets to India",
      "slug": "they-dont-let-us-go-near-the-aircraft-iaf-chief-says-us-made-no-official-offer-to-sell-f-35-jets-to-india",
      "description": "<a href=\"https://www.indiatvnews.com/news/india/from-just-4-aircraft-to-major-global-force-air-chief-marshal-ap-singh-highlights-iafs-94-years-of-service-2026-10-09-1056553\" target=\"_blank\">Indian Air Force Chief Air Chief Marshal A P Singh</a> has said the United States has not made any official offer to sell its fifth-generation F-35 fighter jets to India. He also clarified that no final decision has been taken on Russia's proposal for the Su-57 fighter aircraft, with its possible evaluation still pending.",
      "url": "https://www.indiatvnews.com/news/india/iaf-chief-says-no-official-us-offer-for-f-35-jets-decision-on-russia-su-57-pending-2026-10-11-1056664",
      "imageUrl": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2026/10/iaf-chief-says-no-official-us-offer-for-f-35-jets-1-1791692822.webp",
      "author": null,
      "publishedAt": "2026-10-11T04:31:45.000Z",
      "source": {
        "id": "12c0f63d-ed61-4e9b-adba-ead97121e0fd",
        "name": "India TV",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "d13d0e5f-1984-417f-99ed-0d885d8c96a8",
      "title": "PM Modi in Chennai LIVE | Inauguration of Chennai Metro Phase II stretch, to launch various projects",
      "slug": "pm-modi-in-chennai-live-or-inauguration-of-chennai-metro-phase-ii-stretch-to-launch-various-projects",
      "description": "The Greater Chennai Traffic Police have announced traffic diversions for commercial and heavy vehicles at several locations in the city on Sunday (October 11, 2026) in view of Prime Minister’s visit to Chennai.",
      "url": "https://www.thehindu.com/news/cities/chennai/chennai-metro-phase-two-inauguration-poonamallee-vadapalani-narendra-modi-visit-schedule-cm-vijay-meeting-live-updates/article71570613.ece",
      "imageUrl": null,
      "author": null,
      "publishedAt": "2026-10-11T04:24:46.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "e6a9daa8-3b57-430d-ab54-b5395a6869b1",
      "title": "India condemns 'dastardly' attacks on Riyadh airport that killed 12",
      "slug": "india-condemns-dastardly-attacks-on-riyadh-airport-that-killed-12",
      "description": "NEW DELHI: India on Sunday strongly condemned repeated attacks on Saudi Arabia’s King Khalid International Airport in Riyadh that killed 12 people and",
      "url": "https://timesofindia.indiatimes.com/india/india-condemns-dastardly-attacks-on-saudi-arabias-riyadh-airport-that-killed-12/articleshow/134864673.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-134864703,imgsize-447714.cms",
      "author": "ABHISHEK MISHRA",
      "publishedAt": "2026-10-11T04:08:22.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "dff3abb1-b586-48e2-921a-6ea5fc43ef89",
      "title": "Delhi Shutdown: 4 Pleas in Supreme Court Ahead of Special Hearing Over Crackdown",
      "slug": "delhi-shutdown-4-pleas-in-supreme-court-ahead-of-special-hearing-over-crackdown",
      "description": "<a href=\"https://www.indiatoday.in/india/video/delhi-shutdown-4-pleas-in-supreme-court-ahead-of-special-hearing-over-crackdown-ytvd-3014590-2026-10-11\"> <img align=\"left\" hspace=\"2\" height=\"180\" width=\"305\" alt=\"\" border=\"0\" src=\"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202610/delhishutdown4pleasinsupremecourt-s0-original-sixteen-to-nine.jpg?VersionId=vTCPWWVn4zVImS8Up2YUK3Rys_ZuihpL\"> </a> Delhi Shutdown: 4 Pleas in Supreme Court Ahead of Special Hearing Over Crackdown",
      "url": "https://www.indiatoday.in/india/video/delhi-shutdown-4-pleas-in-supreme-court-ahead-of-special-hearing-over-crackdown-ytvd-3014590-2026-10-11?utm_source=rss",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202610/delhishutdown4pleasinsupremecourt-s0-original-sixteen-to-nine.jpg?VersionId=vTCPWWVn4zVImS8Up2YUK3Rys_ZuihpL",
      "author": null,
      "publishedAt": "2026-10-11T04:07:25.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "7c18e8e3-5d10-4bd0-a69c-b22546f3bdf9",
      "title": "CJP announces protests across country, starting with Mumbai's Shivaji Park today",
      "slug": "cjp-announces-protests-across-country-starting-with-mumbais-shivaji-park-today",
      "description": "NEW DELHI: New CJP leader Ajinkya Shinde has announced a protest in Mumbai against the detention of leaders and protesters across Delhi and other parts of",
      "url": "https://timesofindia.indiatimes.com/india/every-indian-is-angry-cjps-ajinkya-shinde-announces-protests-across-country-starting-with-mumbais-shivaji-park-at-4pm-today/articleshow/134864557.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-134864582,imgsize-401388.cms",
      "author": "AADRITA HALDER",
      "publishedAt": "2026-10-11T03:47:18.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "5a940b54-ac2a-4b5b-a5fa-eeda58e45867",
      "title": "Live: 4 petitions filed over CJP protest curbs, mass detentions, metro shutdown in Delhi",
      "slug": "live-4-petitions-filed-over-cjp-protest-curbs-mass-detentions-metro-shutdown-in-delhi",
      "description": "<a href=\"https://www.indiatoday.in/india/law-news/story/supreme-court-special-hearing-live-updates-contempt-plea-delhi-metro-shutdown-illegal-detentions-cjp-protest-curbs-cec-gyanesh-kumar-3014585-2026-10-11\"> <img align=\"left\" hspace=\"2\" height=\"180\" width=\"305\" alt=\"\" border=\"0\" src=\"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202610/supreme-court-cjp-090333311-16x9.jpeg?VersionId=mzW0tR28WHsRjGMNmK3dfRGFPvdvK1Sk\"> </a> Live: 4 petitions filed over CJP protest curbs, mass detentions, metro shutdown in Delhi",
      "url": "https://www.indiatoday.in/india/law-news/story/supreme-court-special-hearing-live-updates-contempt-plea-delhi-metro-shutdown-illegal-detentions-cjp-protest-curbs-cec-gyanesh-kumar-3014585-2026-10-11?utm_source=rss",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202610/supreme-court-cjp-090333311-16x9.jpeg?VersionId=mzW0tR28WHsRjGMNmK3dfRGFPvdvK1Sk",
      "author": null,
      "publishedAt": "2026-10-11T03:46:57.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "f118c093-13c8-4389-9203-b1c7a9dc8e7e",
      "title": "YouTuber Dhruv Rathee released, warned against joining CJP protest again",
      "slug": "youtuber-dhruv-rathee-released-warned-against-joining-cjp-protest-again",
      "description": "YouTuber Dhruv Rathee released, warned against joining CJP protest again",
      "url": "https://www.indiatvnews.com/news/india/youtuber-dhruv-rathee-released-warned-against-joining-cjp-protest-again-2026-10-11-1056663",
      "imageUrl": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/breaking-news-template-1-1667263372.webp",
      "author": null,
      "publishedAt": "2026-10-11T03:44:10.000Z",
      "source": {
        "id": "12c0f63d-ed61-4e9b-adba-ead97121e0fd",
        "name": "India TV",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "0f2a407f-45d6-4a0b-b2ba-cc6346ce332a",
      "title": "Delhi Fortified, Mandi House Blocked, Heavy Security as AAP Calls for Protest",
      "slug": "delhi-fortified-mandi-house-blocked-heavy-security-as-aap-calls-for-protest",
      "description": "<a href=\"https://www.indiatoday.in/india/video/delhi-fortified-mandi-house-blocked-heavy-security-as-aap-calls-for-protest-ytvd-3014583-2026-10-11\"> <img align=\"left\" hspace=\"2\" height=\"180\" width=\"305\" alt=\"\" border=\"0\" src=\"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202610/mandihousefortifiedaheadofaapprotest-s0-original-sixteen-to-nine.jpg?VersionId=QfI.ZS2vAWKUOs0Ut2YUzSLxQj.l894s\"> </a> Delhi Fortified, Mandi House Blocked, Heavy Security as AAP Calls for Protest",
      "url": "https://www.indiatoday.in/india/video/delhi-fortified-mandi-house-blocked-heavy-security-as-aap-calls-for-protest-ytvd-3014583-2026-10-11?utm_source=rss",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202610/mandihousefortifiedaheadofaapprotest-s0-original-sixteen-to-nine.jpg?VersionId=QfI.ZS2vAWKUOs0Ut2YUzSLxQj.l894s",
      "author": null,
      "publishedAt": "2026-10-11T03:42:08.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "9daa1717-0867-4fd3-8222-b8d11858db4b",
      "title": "Meet Pakistan’s Gilchrist: Teen bears Oz legend’s name but idolises Sangakkara",
      "slug": "meet-pakistans-gilchrist-teen-bears-oz-legends-name-but-idolises-sangakkara",
      "description": "A Karachi teenager named Adam Gilchrist grabbed attention after smashing 117 off 108 balls in Pakistan’s Under-17 school cricket tournament, helping Kamran Public School win by 172 runs. His cricket-loving father named him after Australian legend Adam Gilchrist, but the young left-handed wicketkeeper-batter idolises Sri Lankan great Kumar Sangakkara and hopes to follow in his footsteps.",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/news/meet-pakistans-adam-gilchrist-karachi-teen-bears-australian-legends-name-but-idolises-kumar-sangakkara/articleshow/134864398.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-134864549,imgsize-115397.cms",
      "author": "JYOTIRMOY HALDER",
      "publishedAt": "2026-10-11T03:40:43.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "9256b0fc-955b-42c5-92d3-9ffe61cbcd95",
      "title": "Scotland's national animal doesn't actually exist. Here's why the country chose a unicorn",
      "slug": "scotlands-national-animal-doesnt-actually-exist-heres-why-the-country-chose-a-unicorn",
      "description": "Scotland chose a mythical creature as its national animal, with the unicorn representing power, independence and determination.",
      "url": "https://www.hindustantimes.com/trending/scotlands-national-animal-doesnt-actually-exist-heres-why-the-country-chose-a-unicorn-101791689163413.html",
      "imageUrl": "https://www.hindustantimes.com/ht-img/img/2026/10/11/1600x900/logo/White_Unicorn_Over_a_Highland_Castle_1791689646652_rNDc_1791689656436_0RvX_cbf369d7-7422-4f3f-8846-6895e0cc6cc7_SufH.png",
      "author": null,
      "publishedAt": "2026-10-11T03:40:27.000Z",
      "source": {
        "id": "7b920908-a505-4275-8a3d-288c4f91f07b",
        "name": "Hindustan Times",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "8504f7aa-3e22-42a9-8d70-32976894fdcf",
      "title": "A tale of two sisters",
      "slug": "a-tale-of-two-sisters",
      "description": "Seema and Neha, born two years apart, grew up together on the streets of Yamuna Bazar in Old Delhi, where they were pushed into a drug habit. In a childcare institution, one sister overcame addiction with education and support; the other slipped deeper into substance use disorder and depression. Shrimansi Kaushik speaks to them about their shared struggle for survival and the warmth they share as sisters",
      "url": "https://www.thehindu.com/news/cities/Delhi/a-tale-of-two-sisters/article71556984.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/myywip/article71567263.ece/alternates/LANDSCAPE_1200/SPOTLIGHT%20POOJA%20AARTI%2016.JPG",
      "author": null,
      "publishedAt": "2026-10-11T03:40:06.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "77a6655a-efc2-41d1-baa9-2fcc4d05ae13",
      "title": "Trump says Ukraine should get new President as he blames Zelenskyy for U.S. diesel prices",
      "slug": "trump-says-ukraine-should-get-new-president-as-he-blames-zelenskyy-for-us-diesel-prices",
      "description": "Donald Trump has also sought to blame record U.S. diesel prices on Ukraine rather than the U.S.-led war in Iran, which has elevated world energy prices",
      "url": "https://www.thehindu.com/news/international/trump-says-ukraine-should-get-new-president-as-he-blames-zelenskyy-for-us-diesel-prices/article71570543.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/jqq4hh/article71570583.ece/alternates/LANDSCAPE_1200/AP10_11_2026_000001A.jpg",
      "author": null,
      "publishedAt": "2026-10-11T03:38:07.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "215e22e0-89cb-4736-90ad-c9cc014ffb7b",
        "name": "World",
        "slug": "world"
      }
    },
    {
      "id": "27861c68-ac8b-4ec0-9a60-3b3a535d33db",
      "title": "Murray & Co and its Sunday auction: the famous ‘hammer’ of Madras nears the century mark",
      "slug": "murray-and-co-and-its-sunday-auction-the-famous-hammer-of-madras-nears-the-century-mark",
      "description": "Since February 10, 1927, the hammer at the auction house Murray & Co has not had a break except for two seasons: for a few weeks during a relocation to a new address and then during the pandemic. The operational space might have changed a few times, but its place in people’s mindspace has not. Hemant Srivatsa, partner, Murray & Co, on the long journey of the enterprise, beginning with real estate auctions and moving into retail auctions of household goods and furniture, followed by industrial auctions",
      "url": "https://www.thehindu.com/news/cities/chennai/murray-co-and-its-sunday-auction-the-famous-hammer-of-madras-nears-the-century-mark/article71212943.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/qqytp1/article71212955.ece/alternates/LANDSCAPE_1200/Murray%20and%20co%20_page-0001.jpg",
      "author": null,
      "publishedAt": "2026-10-11T03:36:00.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "cd9d1a23-fe33-42b0-ae12-5ab82370f74c",
      "title": "CJP leaders Dipke, Ranka and Das to be produced before magistrate in Delhi after nearly 24 hours in detention",
      "slug": "cjp-leaders-dipke-ranka-and-das-to-be-produced-before-magistrate-in-delhi-after-nearly-24-hours-in-detention",
      "description": "The three were detained from their aircraft seats on October 10 head of the anti-CEC protest called by the outfit; Police are scheduled to produce them before an executive magistrate at Delhi Cantonment police station at 9 a.m.",
      "url": "https://www.thehindu.com/news/cities/Delhi/cjp-leaders-abhijeet-dipke-ranka-and-das-detention-delhi-police-station/article71570589.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/sttbkg/article71570605.ece/alternates/LANDSCAPE_1200/PTI10_10_2026_000103B.jpg",
      "author": null,
      "publishedAt": "2026-10-11T03:35:17.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "b45c9aec-ff26-4bd7-97ff-bb71547e614c",
      "title": "Sidhu Moosewala Returns As Hologram In Historic Toronto Show; Brother Chhota Sidhu Joins Parents On Stage",
      "slug": "sidhu-moosewala-returns-as-hologram-in-historic-toronto-show-brother-chhota-sidhu-joins-parents-on-stage",
      "description": "Sidhu Moosewala Returns As Hologram In Historic Toronto Show; Brother Chhota Sidhu Joins Parents On Stage",
      "url": "https://news.abplive.com/entertainment/celebrities/sidhu-moosewala-makes-history-hologram-show-toronto-295-chhota-sidhu-1870820",
      "imageUrl": "https://feeds.abplive.com/onecms/images/uploaded-images/2026/10/11/d87d6de84897ee62d476b7704056ddba17916895055821090_original.png",
      "author": "  ",
      "publishedAt": "2026-10-11T03:33:44.000Z",
      "source": {
        "id": "83596fc8-609f-4cda-9b35-51a990682a9c",
        "name": "ABP News",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "6034f44f-6f08-4b2a-81a8-7ab5dbf13086",
      "title": "As Melinda French Gates invests $215 million, she makes a request on women's health",
      "slug": "as-melinda-french-gates-invests-dollar215-million-she-makes-a-request-on-womens-health",
      "description": "Melinda Gates has unveiled a significant new funding commitment aimed at enhancing women's healthcare and bridging long-standing gaps. She urged policymakers and governments to boost investments in women's research and healthcare. Women's health challenges, especially surrounding menopause, profoundly affect their lives and careers. Emphasizing the urgency for improved reproductive health and family planning, especially in developing nations, Gates noted that total philanthropic contributions for women's health have surpassed $600 million.",
      "url": "https://timesofindia.indiatimes.com/technology/tech-news/as-melinda-french-gates-invests-215-million-she-makes-a-request-on-womens-health-says-lets-come-back-in-4-5-years-to-measure-/articleshow/134864479.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-134864485,imgsize-1283738.cms",
      "author": "TOI TECH DESK",
      "publishedAt": "2026-10-11T03:33:03.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "34825902-ea00-4be8-a340-c7faa63c6a55",
      "title": "Phone running slow? Does restarting your smartphone really make it faster?",
      "slug": "phone-running-slow-does-restarting-your-smartphone-really-make-it-faster",
      "description": "We all depend on our handsets and smartphones, which go through a lot every day. Sometimes, apps on the mobile freeze up, the touchscreen ignores your taps, or everything just feels sluggish. When that happens, most people suggest a quick restart. But the real question remains the same: if you restart your handset repeatedly, does it really help the phone perform better?\nWell, the reality is that you can restart, and it could fix several glitches for a short span, but for the longer run, doing it again and again will not speed up your handset; rather, it would consume more battery.",
      "url": "https://www.indiatvnews.com/technology/news/phone-running-slow-does-restarting-your-smartphone-really-make-it-faster-2026-10-09-1056521",
      "imageUrl": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2026/10/smartphone-with-snail-magnific-1791532070.webp",
      "author": null,
      "publishedAt": "2026-10-11T03:30:01.000Z",
      "source": {
        "id": "12c0f63d-ed61-4e9b-adba-ead97121e0fd",
        "name": "India TV",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "fea362b7-b3ed-4a9c-b63b-3985f3128d55",
      "title": "Nail polish colours and styles that are in vogue",
      "slug": "nail-polish-colours-and-styles-that-are-in-vogue",
      "description": "As we welcome fall 2026, the latest nail polish trends reflect a rich transformation. The vibrant hues of summer make way for sophisticated chocolate browns and lush plums. Embrace the seasonal shift with transitional colors like dark teal and deep cherry red, while still enjoying some of your summer favorites.",
      "url": "https://timesofindia.indiatimes.com/life-style/beauty/top-nail-polish-trends-for-fall-2026-from-cherry-reds-to-chocolate-browns/articleshow/134849770.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-134850368,imgsize-881417.cms",
      "author": "TOI LIFESTYLE DESK",
      "publishedAt": "2026-10-11T03:30:00.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "aa60ba38-bd3f-4945-8494-925db0007832",
      "title": "YouTuber Dhruv Rathee Released From Detention, Warned Against Joining Jantar Mantar Protest",
      "slug": "youtuber-dhruv-rathee-released-from-detention-warned-against-joining-jantar-mantar-protest",
      "description": "YouTuber Dhruv Rathee Released From Detention, Warned Against Joining Jantar Mantar Protest",
      "url": "https://news.abplive.com/news/india/youtuber-dhruv-rathee-released-from-detention-warned-against-going-to-jantar-mantar-for-protests-cjp-1870825",
      "imageUrl": "https://feeds.abplive.com/onecms/images/uploaded-images/2026/10/11/103f7e5f527a2aa09d343632a85fe0611791689859847927_original.jpg",
      "author": "  ",
      "publishedAt": "2026-10-11T03:29:18.000Z",
      "source": {
        "id": "83596fc8-609f-4cda-9b35-51a990682a9c",
        "name": "ABP News",
        "country": "India",
        "logo": null
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    }
  ],
  pagination: {
    page: 1,
    limit: 20,
    total: 738,
    totalPages: 37,
    hasNextPage: true,
  },
};
