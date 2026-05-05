// ============================================================
//  src/data/newsData.ts
//
//  HOW TO ADD A NEW ARTICLE:
//  1. Copy the template below
//  2. Fill in all fields — make sure `id` is unique (use a slug)
//  3. Upload cover to Cloudinary → copy URL → paste into `cover`
//  4. Articles are automatically sorted newest first (by `date`)
//
//  TEMPLATE:
//  {
//    id: "event-name-year",
//    title: "Article Title",
//    category: "Event",        // Event | Announcement | Achievement | Partnership
//    date: "2026-08-22",       // YYYY-MM-DD — used for auto-sorting
//    dateLabel: "August 22, 2026",
//    author: "Author Name",
//    cover: "https://res.cloudinary.com/dwhobhexj/image/upload/v.../photo.jpg",
//    excerpt: "1–2 sentence summary shown on the card.",
//    body: `First paragraph.\n\nSecond paragraph.\n\nEtc.`,
//    tags: ["Tag1", "Tag2"],
//    featured: false,          // true = displayed prominently at the top
//  },
// ============================================================

export type NewsCategory = "Event" | "Announcement" | "Achievement" | "Partnership";

export interface NewsArticle {
  id: string;
  title: string;
  category: NewsCategory;
  date: string;
  dateLabel?: string;
  author?: string;
  cover?: string;
  excerpt: string;
  body?: string;
  tags?: string[];
  featured?: boolean;
}

// ============================================================
//  HERO SLIDESHOW — banner photos on the News page
//
//  HOW TO ADD PHOTOS:
//  1. Upload photo to Cloudinary → copy URL
//  2. Add an object to HERO_SLIDES
//  3. `caption` & `eventName` are optional
//  4. Change HERO_INTERVAL_MS to adjust slide speed (ms)
// ============================================================
export interface HeroSlide {
  src: string;
  caption?: string;
  eventName?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777948575/JNSF_JISF_2026-260_c2zwd6.jpg", caption: "Speech by ICGI President" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777881296/JISF1.jpg", caption: "Presentation of Appreciation Certificate" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777884641/JISF6.jpg", caption: "opening ceremony" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777881295/JISF2.jpg", caption: "Awarding of winner certificate" },
];

export const HERO_INTERVAL_MS = 4500; // ms per slide

// ============================================================
//  NEWS ARTICLES — latest article at the top
// ============================================================
export const NEWS_ARTICLES: NewsArticle[] = [

{
  id: "icgi-supports-jnsf-jisf-2026",
  title: "ICGI Supports the Organization of JNSF and JISF at i3L University",
  category: "Partnership",
  date: "2026-04-24",
  dateLabel: "April 24, 2026",
  author: "ICGI Team",
  cover: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777884641/JISF4.jpg",
  excerpt:
    "ICGI reinforces its commitment to global talent development by supporting the 2026 JNSF and JISF at i3L University, featuring 347 teams from 8 countries.",
  body: `The Indonesian Centre for Giftedness Innovation (ICGI) has officially expressed its support for the Jakarta National Science Fair (JNSF) and Jakarta International Science Fair (JISF). This collaboration, held at i3L University, serves as a strategic effort to foster student talent in science, research, and innovation on both national and international scales.

Founded by Deni Irawan, M.Pd., ICGI operates on the belief that every child possesses unique strengths. Through this partnership, ICGI aims to enhance the quality of the competition while encouraging participation across all educational levels, from elementary school to university.

Event Highlights and Global Reach

Organized by the Indonesian Young Scientist Association (IYSA) in collaboration with i3L University, the events adopted a hybrid format to provide a comprehensive competition experience. This year, the fairs reached a significant milestone with 347 participating teams from 8 countries: Indonesia, Thailand, South Korea, Singapore, Türkiye, Malaysia, Hong Kong, and Vietnam.

Participant Breakdown:
- JNSF (National): 25 teams online and 20 teams in-person.
- JISF (International): 137 teams online and 165 teams in-person.

Recognizing Excellence

As a supporting partner, ICGI presented special awards to the top 5 teams. Among the distinguished recipients was a team from Vietnam, recognized for their innovative project titled "Intelligent Watering System for the Smart Garden."

By providing a platform for young researchers to exchange ideas and address global challenges, ICGI and its partners hope to inspire a creative and highly competitive generation capable of contributing to a prosperous and dignified future.`,
  tags: ["JNSF", "JISF", "ICGI", "i3L University", "IYSA", "Science Fair 2026"],
  featured: true,
}

  // ── Add new articles below ───────────────────────────────
  // {
  //   id: "event-name-year",
  //   title: "Article Title",
  //   category: "Event",
  //   date: "2026-05-01",
  //   dateLabel: "May 1, 2026",
  //   author: "ICGI Team",
  //   cover: "https://res.cloudinary.com/dwhobhexj/...",
  //   excerpt: "Brief 1–2 sentence summary.",
  //   body: `First paragraph.\n\nSecond paragraph.`,
  //   tags: ["Tag1", "Tag2"],
  //   featured: false,
  // },

];

// ── Helpers (do not modify) ──────────────────────────────────
export const NEWS_CATEGORIES = ["All", "Event", "Announcement", "Achievement", "Partnership"] as const;

export const getSortedNews = () =>
  [...NEWS_ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

export const getFeaturedNews = () =>
  getSortedNews().filter((a) => a.featured);

export const getLatestNews = (n = 3) =>
  getSortedNews().slice(0, n);