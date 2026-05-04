// ============================================================
//  src/data/galleryData.ts
//  
//  CARA PAKAI:
//  1. Upload foto ke Cloudinary (Assets → Upload)
//  2. Klik foto → klik icon copy URL
//  3. Tempel URL ke array photos[] event yang sesuai
//  4. Untuk event baru, copy salah satu objek di bawah & edit
// ============================================================

export type Category = "Competition" | "Workshop"| "Collaboration";

export interface Photo {
  src: string;       // URL dari Cloudinary
  caption?: string;  // Keterangan foto (opsional)
}

export interface GalleryEvent {
  id: string;
  name: string;         // Nama event (tampil di card)
  category: Category;
  date: string;         // Contoh: "Mar 15, 2026"
  location: string;
  cover?: string;       // URL foto cover (opsional, default: foto pertama)
  photos: Photo[];
}

// ============================================================
//  DATA EVENTS — tambah/edit di sini
// ============================================================
export const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: "jisf-2026",
    name: "JISF 2026",
    category: "Collaboration",
    date: "2026",
    location: "Jakarta",
    cover: "", // opsional: URL foto untuk thumbnail event card
    photos: [
      // Tempel URL Cloudinary di sini:
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777881296/JISF1.jpg", caption: "Presentation of Appreciation Certificate" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777884641/JISF6.jpg", caption: "opening ceremony" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777881295/JISF2.jpg", caption: "Awarding of winner certificate" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777884641/JISF3.jpg", caption: "presentation participants and jury assessment" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777884641/JISF4.jpg", caption: "Awarding of winner certificate" },
      { src: "https://res.cloudinary.com/dwhobhexj/image/upload/v1777884641/JISF5.jpg", caption: "Awarding of winner certificate" },
    ],
  },

  // ── Tambah event baru di bawah ini ──────────────────────────
  // {
  //   id: "workshop-ai-2026",
  //   name: "AI & Future Technology Workshop",
  //   category: "Workshop",
  //   date: "Aug 22, 2026",
  //   location: "Jakarta",
  //   photos: [
  //     { src: "https://res.cloudinary.com/dwhobhexj/...", caption: "Sesi 1" },
  //   ],
  // },
];

// Kategori yang tersedia untuk filter
export const CATEGORIES = ["All", "Competition", "Workshop", "Collaboration"] as const;