import type { NewsApiResponse } from "../../api/type";

/**
 * Local mock response matching the NewsApiResponse API contract.
 * Article URLs and source/category metadata are preserved from the latest sample.
 */
export const mockNewsResponse: NewsApiResponse = {
  "success": true,
  "data": [
    {
      "id": "07adb491-3dfe-41b8-a57e-74f0919fa22e",
      "title": "Cyclone Arnab: Andhra Pradesh evacuates 89,000 people as state prepares for landfall",
      "slug": "cyclone-arnab-andhra-pradesh-evacuates-89000-people-as-state-prepares-for-landfall",
      "description": "Cyclone Arnab is expected to make landfall in Andhra Pradesh early Wednesday, with winds reaching 140 kmph. At least 89,000 people have been evacuated, train services cancelled and over 2,000 shelters set up. Odisha plans to evacuate 48,000 people.",
      "url": "https://www.livemint.com/news/india/cyclone-arnab-andhra-pradesh-evacuates-89-000-people-as-state-prepares-for-landfall-11793124963156.html",
      "imageUrl": "https://www.livemint.com/lm-img/img/2026/10/27/1600x900/logo/cyclone_1793125375426_pez5_1793125383669_ULeC_dd0566bd-cc37-4a99-b1e3-19cac6e2a0b4_3Uuk.png",
      "author": null,
      "publishedAt": "2026-10-27T18:38:41.000Z",
      "source": {
        "id": "b3345da4-f37d-4706-8168-67aac4b387a4",
        "name": "Mint",
        "country": "India",
        "logo": "https://www.livemint.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "3340e4d6-0a2b-4569-8554-608f0f3d52ce",
      "title": "BRO's Project Arunank strengthens India's border connectivity along China frontier",
      "slug": "bros-project-arunank-strengthens-indias-border-connectivity-along-china-frontier",
      "description": "BRO's Project Arunank strengthens India's border connectivity along China frontier",
      "url": " https://www.indiatoday.in/india/story/project-arunank-arunachal-pradesh-border-roads-military-logistics-china-lac-3026535-2026-10-28?utm_source=rss ",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202610/bros-project-arunank-marks-19th-raising-day-273653506-16x9_0.png?VersionId=ZTp01GZ8SNFFfkdDele_k0yFWQ1owBTZ",
      "author": null,
      "publishedAt": "2026-10-27T18:37:12.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": "https://www.indiatoday.in/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "e3ba7f28-8cf8-44e3-ae3c-27f228ffd2e5",
      "title": "Man Utd stick with Carrick - inside a turbulent 48 hours at Old Trafford",
      "slug": "man-utd-stick-with-carrick-inside-a-turbulent-48-hours-at-old-trafford",
      "description": "BBC Sport looks at the 48 hours that led to Manchester United deciding to keep under-pressure Michael Carrick as their head coach for Saturday's trip to Chelsea.",
      "url": "https://www.bbc.co.uk/sport/football/articles/cwz0vgj35k7mo?at_medium=RSS&at_campaign=rss",
      "imageUrl": "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0191/live/aa944b90-d22e-11f1-a701-fddedf244c16.jpg",
      "author": null,
      "publishedAt": "2026-10-27T18:56:36.000Z",
      "source": {
        "id": "025fdea5-f6bf-48a0-b3f5-ee38a7f2b119",
        "name": "BBC News",
        "country": "United Kingdom",
        "logo": "https://www.bbc.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "cf79c57c-284c-4fd8-bbf8-f13c5bf5c56b",
      "title": "Who is Jagriti Mishra? Animal activist whose shelter demolition row led to MCD official suspension,  ₹5 lakh aid from CM",
      "slug": "who-is-jagriti-mishra-animal-activist-whose-shelter-demolition-row-led-to-mcd-official-suspension-indian-rupee5-lakh-aid-from-cm",
      "description": "Jagriti Mishra, an animal rights activist, shared several videos on Instagram showing her confronting officials whom she accused of demolishing her under-construction animal shelter without prior notice.",
      "url": "https://www.livemint.com/news/india/who-is-jagriti-mishra-animal-activist-whose-shelter-demolition-row-led-to-mcd-official-suspension-5-lakh-aid-from-cm-11793124640634.html",
      "imageUrl": "https://www.livemint.com/lm-img/img/2026/10/27/1600x900/logo/Untitled_design_-_2026-10-27T234959.902_1793125208538_OSx9_1793125216529_Wxfj_03018512-74ea-4ecb-8ded-d5344d83dc93_F28G.png",
      "author": null,
      "publishedAt": "2026-10-27T18:33:55.000Z",
      "source": {
        "id": "b3345da4-f37d-4706-8168-67aac4b387a4",
        "name": "Mint",
        "country": "India",
        "logo": "https://www.livemint.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "62f9c01f-e8b7-4990-8141-d219eb896a95",
      "title": "Brazil's Flavio Bolsonaro headed to U.S. after losing election, sources say",
      "slug": "brazils-flavio-bolsonaro-headed-to-us-after-losing-election-sources-say",
      "description": "U.S. President Donald Trump’s administration has previously alleged that Flavio Bolsonaro’s father, former President ‌Jair Bolsonaro, was a victim of judicial persecution in Brazil",
      "url": "https://www.thehindu.com/news/international/brazilsflavio-bolsonaro-headed-to-us-after-losing-election-sources-say/article71633165.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/4ilmtc/article71633176.ece/alternates/LANDSCAPE_1200/2026-10-26T021129Z_274404486_RC2PAOAD09NF_RTRMADP_3_BRAZIL-ELECTION.JPG",
      "author": null,
      "publishedAt": "2026-10-27T18:31:54.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": "https://www.thehindu.com/favicon.ico"
      },
      "category": {
        "id": "215e22e0-89cb-4736-90ad-c9cc014ffb7b",
        "name": "World",
        "slug": "world"
      }
    },
    {
      "id": "f9cb97ca-7811-4659-8ed5-c91e4351e43b",
      "title": "A Delhi event unveils fault lines in the Dalit-OBC formulation of SP politics",
      "slug": "a-delhi-event-unveils-fault-lines-in-the-dalit-obc-formulation-of-sp-politics",
      "description": "The brouhaha over Rajkumar Bhati reciting Ambedkar’s vows shows the limits of the SP’s revival of the Lohiate policy of numerical aggregation",
      "url": "https://www.thehindu.com/news/national/uttar-pradesh/a-delhi-event-unveils-fault-lines-in-the-dalit-obc-formulation-of-sp-politics/article71632477.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/tqvytl/article71632473.ece/alternates/LANDSCAPE_1200/20260414072L.jpg",
      "author": null,
      "publishedAt": "2026-10-27T18:31:40.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": "https://www.thehindu.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "f4aa07f4-0d88-4ab8-a1c9-f83d61469174",
      "title": "Japanese Words For Daily Life: Luke Coutinho shares 4 wellness ideas; readers gain everyday cues",
      "slug": "japanese-words-for-daily-life-luke-coutinho-shares-4-wellness-ideas-readers-gain-everyday-cues",
      "description": "Health expert Luke Coutinho explores four essential expressions from Japan to enhance personal well-being. Yutori encourages prioritizing oneself, while Rei underscores the significance of respecting others. Pin Pin Korori advocates for maintaining a high quality of life as we age, and Isogaba Maware advises against hurrying through life's processes. Coutinho's reflections inspire a deeper examination of our daily habits' influence on overall well-being.",
      "url": "https://timesofindia.indiatimes.com/etimes/trending/luke-coutinho-visits-japan-for-five-days-and-discovers-4-japanese-words-that-could-change-the-way-you-look-at-life/articleshow/135232190.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-135232258,imgsize-123809.cms",
      "author": null,
      "publishedAt": "2026-10-27T18:30:00.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": "https://timesofindia.indiatimes.com/icons/toifavicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "3f5a5c61-deeb-403a-8b5e-e235c3224bbe",
      "title": "California vineyard estate sells for $11.04 million",
      "slug": "california-vineyard-estate-sells-for-dollar1104-million",
      "description": "A vineyard estate in Portola Valley sold for $11.04 million, which was initially listed for $15.5 million. This property included a three-level Italian villa overlooking San Francisco Bay, featuring six bedrooms and nine bathrooms. The estate had several luxury amenities, including a theatre, a spa, and outdoor entertainment areas. The estate belonged to the Fogarty Family Trust, linked to Dr. Thomas J. Fogarty, the winery founder.",
      "url": "https://timesofindia.indiatimes.com/real-estate/news/a-41-acre-california-vineyard-estate-owned-by-the-family-trust-of-heart-surgeon-thomas-fogarty-has-sold-for-11-04-million-the-property-has-a-14500-sq-ft-italian-villa-with-wine-tasting-room-home-theatre-and-spa/articleshow/135214494.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-135214897,imgsize-429936.cms",
      "author": null,
      "publishedAt": "2026-10-27T18:28:00.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": "https://timesofindia.indiatimes.com/icons/toifavicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "27648098-01d6-410b-81a5-de99bef3d429",
      "title": "Jain seer gives Karnataka govt. 10-day deadline to meet demands; threatens sallekhana in December if demands remain unmet ",
      "slug": "jain-seer-gives-karnataka-govt-10-day-deadline-to-meet-demands-threatens-sallekhana-in-december-if-demands-remain-unmet",
      "description": "Acharya Gunadharanandi Maharaj of Varur Navagraha Teertha Kshetra has given the State government 10 days to provide written assurances on five demands of the Jain community, including the establishment of a Jain Development Corporation.",
      "url": "https://www.thehindu.com/news/national/karnataka/jain-seer-gives-karnataka-govt-10-day-deadline-to-meet-demands-threatens-sallekhana-in-december-if-demands-remain-unmet/article71631286.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/oj4gmv/article71633172.ece/alternates/LANDSCAPE_1200/2699_27_10_2026_19_7_24_2_28HUBLIJAINMONKPC_2.JPG",
      "author": null,
      "publishedAt": "2026-10-27T18:27:57.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": "https://www.thehindu.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "73273969-2d78-44a4-860d-df712191bb85",
      "title": "Congress gets permission for rally at Delhi's Ramlila Maidan, but with conditions",
      "slug": "congress-gets-permission-for-rally-at-delhis-ramlila-maidan-but-with-conditions",
      "description": "Congress gets permission for rally at Delhi's Ramlila Maidan, but with conditions",
      "url": " https://www.indiatoday.in/india/story/delhi-police-permission-congress-rally-ramlila-maidan-valid-november-1-event-must-end-5-pm-list-of-conditions-3026518-2026-10-27?utm_source=rss ",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202610/congress-up-rally-2027-assembly-election-political-active-271742771-16x9_0.jpg?VersionId=eNdQuIhFkZFLTtvRf6.CFFa96ZCSd110",
      "author": null,
      "publishedAt": "2026-10-27T18:26:22.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": "https://www.indiatoday.in/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "a1e30bce-ff5c-43af-a815-0cd503fc5d75",
      "title": "Mumbai airport faces network outage, check-in shifts to manual mode; 327 flights delayed",
      "slug": "mumbai-airport-faces-network-outage-check-in-shifts-to-manual-mode-327-flights-delayed",
      "description": "A network outage at Mumbai Airport forced staff to switch to manual check-in procedures. While the airport operator said flight operations remained unaffected, Flightradar24 data showed 327 flights delayed by around 9.30 pm, with average departure delays of 50 minutes.&nbsp;",
      "url": "https://www.livemint.com/news/mumbai-airport-faces-network-outage-check-in-shifts-to-manual-mode-327-flights-delayed-11793124239765.html",
      "imageUrl": "https://www.livemint.com/lm-img/img/2026/10/27/1600x900/logo/INDIA-MUMBAI-AIRPORT-13_1767108128268_1767108135824_1793125092127_VPUl_ed1f3dfe-5a51-4d2e-b939-acdd50c5cd54_u152.jpg",
      "author": null,
      "publishedAt": "2026-10-27T18:26:05.000Z",
      "source": {
        "id": "b3345da4-f37d-4706-8168-67aac4b387a4",
        "name": "Mint",
        "country": "India",
        "logo": "https://www.livemint.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "da25c487-a55a-4248-ac2d-49b8d08e7f98",
      "title": "Aviation ministry suspends ops at three Andhra airports as Cyclone Arnab intensifies",
      "slug": "aviation-ministry-suspends-ops-at-three-andhra-airports-as-cyclone-arnab-intensifies",
      "description": "NEW DELHI: The ministry of civil aviation on Tuesday reviewed aviation safety and operational readiness as Cyclone Arnab is expected to intensify into a",
      "url": "https://timesofindia.indiatimes.com/india/aviation-ministry-suspends-operations-at-three-andhra-airports-as-cyclone-arnab-intensifies/articleshow/135243430.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-135243795,imgsize-180862.cms",
      "author": "PRISHA PATNAIK",
      "publishedAt": "2026-10-27T18:25:41.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": "https://timesofindia.indiatimes.com/icons/toifavicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "1e2389c8-7a1a-4680-9f3d-b5d45dbf65a5",
      "title": "Cyclone Alert in Andhra Pradesh: Evacuations Underway and High Alert at Kakinada Port",
      "slug": "cyclone-alert-in-andhra-pradesh-evacuations-underway-and-high-alert-at-kakinada-port",
      "description": "Cyclone Alert in Andhra Pradesh: Evacuations Underway and High Alert at Kakinada Port",
      "url": " https://www.indiatoday.in/india/video/cyclone-alert-in-andhra-pradesh-evacuations-underway-and-high-alert-at-kakinada-port-ytvd-3026532-2026-10-27?utm_source=rss ",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202610/highalertinandhraasseverecyclonethreatenscoast-s0-original-sixteen-to-nine.jpg?VersionId=nWmMVvsCepfncdpeCG2.neibfd7wIXxM",
      "author": null,
      "publishedAt": "2026-10-27T18:24:46.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": "https://www.indiatoday.in/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "1694c404-483a-4b94-941a-8565e348c3e5",
      "title": "Vijay govt cancels high-rate power tenders amid Opposition criticism over prices",
      "slug": "vijay-govt-cancels-high-rate-power-tenders-amid-opposition-criticism-over-prices",
      "description": "Vijay govt cancels high-rate power tenders amid Opposition criticism over prices",
      "url": " https://www.indiatoday.in/india/tamil-nadu/story/tamil-nadu-power-tender-cancelled-bidders-quote-rs-37-41-per-unit-3026463-2026-10-27?utm_source=rss ",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202610/tamil-nadu-chief-minister-vijay-062546384-16x9.jpg?VersionId=2.ds5HP.ZxGG7hKXyipHdoM0SiiEWZQ2",
      "author": null,
      "publishedAt": "2026-10-27T18:22:06.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": "https://www.indiatoday.in/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "0c7cdf74-35c6-460b-96a1-4ae9aa671065",
      "title": "Denver Parkland Protections Advance: City taps MVVA for Park Hill design; bond funds back new park",
      "slug": "denver-parkland-protections-advance-city-taps-mvva-for-park-hill-design-bond-funds-back-new-park",
      "description": "Denver is advancing plans to convert the former Park Hill Golf Course into Park Hill Park. The city has selected Michael Van Valkenburgh Associates to design the 155-acre site. Voters rejected a development proposal for the land in 2023, emphasizing its importance as public space. Funding for the project includes $70 million approved through the Vibrant Denver Bond program.",
      "url": "https://timesofindia.indiatimes.com/world/us/denver-voters-rejected-development-on-a-155-acre-former-golf-course-in-2023-after-a-land-swap-and-70-million-bond-allocation-the-city-is-moving-to-permanently-protect-it-as-a-public-park/articleshow/135222627.cms",
      "imageUrl": "https://static.toiimg.com/photo/msid-135222645,imgsize-2527387.cms",
      "author": null,
      "publishedAt": "2026-10-27T18:21:00.000Z",
      "source": {
        "id": "44f39d98-d861-4064-a006-624cca2c0f63",
        "name": "Times of India",
        "country": "India",
        "logo": "https://timesofindia.indiatimes.com/icons/toifavicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "ad3efbcc-0eda-48b4-b582-f5c9bcc37f6c",
      "title": "Brazil’s Flavio Bolsonaro reportedly leaves for US after election defeat; questions remain over his whereabouts",
      "slug": "brazils-flavio-bolsonaro-reportedly-leaves-for-us-after-election-defeat-questions-remain-over-his-whereabouts",
      "description": "A senior Brazilian Federal Police official reportedly said Bolsonaro had not exited the country through any regular migration point, leaving the circumstances surrounding his reported departure unclear.",
      "url": "https://www.livemint.com/news/world/brazils-flavio-bolsonaro-reportedly-leaves-for-us-after-election-defeat-questions-remain-over-his-whereabouts-11793123718967.html",
      "imageUrl": "https://www.livemint.com/lm-img/img/2026/10/27/1600x900/logo/FILES-BRAZIL-ELECTION-RUNOFF-1_1793124340043_N4x6_1793124651987_aKmO_4ab99830-fcac-4cbf-9399-e9e211482403_I0sk.jpg",
      "author": null,
      "publishedAt": "2026-10-27T18:19:14.000Z",
      "source": {
        "id": "b3345da4-f37d-4706-8168-67aac4b387a4",
        "name": "Mint",
        "country": "India",
        "logo": "https://www.livemint.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "c3f27c41-70fd-4648-b4d7-39cad383f9a2",
      "title": "Radhatri Nethralaya conducts workshop on first aid for firecracker-related eye injuries",
      "slug": "radhatri-nethralaya-conducts-workshop-on-first-aid-for-firecracker-related-eye-injuries",
      "description": "Radhatri Nethralaya conducts workshop on first aid for firecracker-related eye injuries",
      "url": "https://www.thehindu.com/news/cities/chennai/radhatri-nethralaya-conducts-workshop-on-first-aid-for-firecracker-related-eye-injuries/article71631900.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/n02ynp/article71631893.ece/alternates/LANDSCAPE_1200/WhatsApp%20Image%202026-10-27%20at%207.05.58%20PM.jpeg",
      "author": null,
      "publishedAt": "2026-10-27T18:16:24.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": "https://www.thehindu.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "4a643513-dae3-444a-b956-936bf1eda75a",
      "title": "Cyclone Arnab Nears Landfall in Andhra Pradesh: Coastal Districts on Alert, Evacuations Underway",
      "slug": "cyclone-arnab-nears-landfall-in-andhra-pradesh-coastal-districts-on-alert-evacuations-underway",
      "description": "Cyclone Arnab Nears Landfall in Andhra Pradesh: Coastal Districts on Alert, Evacuations Underway",
      "url": " https://www.indiatoday.in/india/video/cyclone-arnab-nears-landfall-in-andhra-pradesh-coastal-districts-on-alert-evacuations-underway-ytvd-3026524-2026-10-27?utm_source=rss ",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202610/cyclonearnablandfallinandhrahighalertmassevacuations-s0-original-sixteen-to-nine.jpg?VersionId=etSk3r4weaH410EoJfxs5.LjcQP9uzVk",
      "author": null,
      "publishedAt": "2026-10-27T18:15:03.000Z",
      "source": {
        "id": "182c813e-0de5-45fa-b950-238d1a105f8a",
        "name": "India Today",
        "country": "India",
        "logo": "https://www.indiatoday.in/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "1a96635e-5e41-489b-acab-96c79e8f2687",
      "title": "Cyclone Arnab leaves parts of Visakhapatnam in darkness",
      "slug": "cyclone-arnab-leaves-parts-of-visakhapatnam-in-darkness",
      "description": "Prolonged power outages after Cyclone Arnab hit Visakhapatnam, causing hardship and raised calls for faster restoration and transparent updates.",
      "url": "https://www.thehindu.com/news/cities/Visakhapatnam/cyclone-arnab-leaves-parts-of-visakhapatnam-in-darkness/article71632773.ece",
      "imageUrl": "https://th-i.thgim.com/public/incoming/ate8cc/article71633155.ece/alternates/LANDSCAPE_1200/028Arnab.jpg",
      "author": null,
      "publishedAt": "2026-10-27T18:14:02.000Z",
      "source": {
        "id": "8146cdf6-dcba-4cb0-8880-0a84d59fa6b2",
        "name": "The Hindu",
        "country": "India",
        "logo": "https://www.thehindu.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    },
    {
      "id": "7ecbe262-258a-43bd-9841-0e7ad03a9a40",
      "title": "What's behind the AI trade comeback — plus, our take on Intel's latest deal",
      "slug": "whats-behind-the-ai-trade-comeback-plus-our-take-on-intels-latest-deal",
      "description": "Every weekday, the Investing Club releases the Homestretch; an actionable afternoon update just in time for the last hour of trading.",
      "url": "https://www.cnbc.com/investingclub/2026/10/27/the-ai-trade-comeback-plus-our-take-on-latest-intel-deal.html",
      "imageUrl": null,
      "author": null,
      "publishedAt": "2026-10-27T18:13:51.000Z",
      "source": {
        "id": "6f9e25a3-3aca-46d2-b6da-1d35c41db1e4",
        "name": "CNBC",
        "country": "United States",
        "logo": "https://www.cnbc.com/favicon.ico"
      },
      "category": {
        "id": "ffb7a3c3-2e81-449d-b751-1ea2c0d22767",
        "name": "General",
        "slug": "general"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 26199,
    "totalPages": 1310,
    "hasNextPage": true
  }
}