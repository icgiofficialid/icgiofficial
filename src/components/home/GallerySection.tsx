// src/components/home/GallerySection.tsx
import { useState, useEffect } from "react";
import { GALLERY_EVENTS, CATEGORIES, type GalleryEvent, type Photo } from "@/data/galleryData";

// ── Placeholder icons per kategori ──────────────────────────
const ICONS: Record<string, JSX.Element> = {
  Competition: (
    <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
      <path d="M20 4l3.8 10.5H35L25.5 21l3.6 10.5L20 26l-9.1 5.5 3.6-10.5L5 14.5h11.2L20 4z"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" strokeLinejoin="round"
        fill="hsl(43 64% 52% / 0.08)" />
    </svg>
  ),
  Workshop: (
    <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
      <rect x="5" y="10" width="30" height="22" rx="2"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" fill="hsl(43 64% 52% / 0.08)" />
      <path d="M13 10V7M27 10V7" stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 17h30" stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" />
    </svg>
  ),
  Seminar: (
    <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="14" r="7"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" fill="hsl(43 64% 52% / 0.08)" />
      <path d="M7 36c0-7.18 5.82-13 13-13s13 5.82 13 13"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Ceremony: (
    <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
      <path d="M20 5L7 14.5V20h26v-5.5L20 5z"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" strokeLinejoin="round"
        fill="hsl(43 64% 52% / 0.08)" />
      <rect x="11" y="20" width="6" height="12"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" fill="hsl(43 64% 52% / 0.08)" />
      <rect x="23" y="20" width="6" height="12"
        stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" fill="hsl(43 64% 52% / 0.08)" />
      <path d="M7 32h26" stroke="hsl(43 64% 52% / 0.5)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

// ── Lightbox state ───────────────────────────────────────────
interface LightboxState {
  photos: Photo[];
  index: number;
  eventName: string;
  category: string;
  date: string;
  location: string;
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openEvent, setOpenEvent]           = useState<GalleryEvent | null>(null);
  const [lightbox, setLightbox]             = useState<LightboxState | null>(null);
  const [loaded, setLoaded]                 = useState(false);

  const filteredEvents =
    activeCategory === "All"
      ? GALLERY_EVENTS
      : GALLERY_EVENTS.filter((e) => e.category === activeCategory);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll when modal/lightbox is open
  useEffect(() => {
    document.body.style.overflow = openEvent || lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openEvent, lightbox]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setLightbox(null);
      if (e.key === "ArrowRight")  nextPhoto();
      if (e.key === "ArrowLeft")   prevPhoto();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const openLightbox = (event: GalleryEvent, index: number) => {
    setLightbox({
      photos: event.photos,
      index,
      eventName: event.name,
      category: event.category,
      date: event.date,
      location: event.location,
    });
  };

  const nextPhoto = () =>
    setLightbox((lb) => lb && lb.index < lb.photos.length - 1
      ? { ...lb, index: lb.index + 1 } : lb);

  const prevPhoto = () =>
    setLightbox((lb) => lb && lb.index > 0
      ? { ...lb, index: lb.index - 1 } : lb);

  const coverSrc = (ev: GalleryEvent) =>
    ev.cover || ev.photos[0]?.src || "";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .g-root {
          min-height: 60vh;
          font-family: 'DM Sans', sans-serif;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          padding: clamp(40px,6vw,72px) clamp(16px,4vw,40px) clamp(60px,8vw,96px);
        }

        /* ── Filter pills ── */
        .g-filters {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: clamp(28px,5vw,52px);
        }
        .g-pill {
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 12.5px;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid hsl(var(--border));
          background: transparent;
          color: hsl(var(--muted-foreground));
          font-family: 'DM Sans', sans-serif;
          transition: color .18s, border-color .18s, background .18s;
        }
        .g-pill:hover {
          color: hsl(var(--accent-foreground));
          border-color: hsl(var(--accent) / 0.5);
          background: hsl(var(--accent) / 0.08);
        }
        .g-pill.on {
          background: hsl(var(--accent));
          color: hsl(var(--accent-foreground));
          border-color: hsl(var(--accent));
          font-weight: 600;
        }

        /* ── Event grid ── */
        .g-grid {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 860px) { .g-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 500px) { .g-grid { grid-template-columns: 1fr; gap: 10px; } }

        /* ── Event card ── */
        .g-ecard {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          border: 1px solid hsl(var(--border));
          transition: border-color .22s, transform .26s, box-shadow .26s;
          opacity: 0;
          transform: translateY(14px);
        }
        .g-ecard.vis { animation: cin .42s ease forwards; }
        @keyframes cin { to { opacity:1; transform:none; } }
        .g-ecard:hover {
          transform: translateY(-5px);
          border-color: hsl(var(--accent) / 0.5);
          box-shadow: 0 10px 36px hsl(var(--accent) / 0.14);
        }

        .g-ecard-bg {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          background: hsl(var(--muted));
          transition: transform .32s;
        }
        .g-ecard:hover .g-ecard-bg { transform: scale(1.04); }
        .g-ecard img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform .32s;
        }
        .g-ecard:hover img { transform: scale(1.05); }

        .g-eoverlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top,
            hsl(var(--secondary) / 0.97) 0%,
            hsl(var(--secondary) / 0.45) 45%,
            transparent 100%);
          padding: 18px;
          display: flex; flex-direction: column; justify-content: flex-end;
        }
        .g-tag {
          display: inline-block;
          font-size: 9px; font-weight: 600;
          letter-spacing: .18em; text-transform: uppercase;
          color: hsl(var(--accent));
          border: 1px solid hsl(var(--accent) / 0.35);
          background: hsl(var(--accent) / 0.1);
          padding: 2px 8px; border-radius: 100px;
          margin-bottom: 7px; width: fit-content;
        }
        .g-ename {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(15px,2vw,18px);
          font-weight: 700;
          color: hsl(var(--primary-foreground));
          margin: 0 0 5px; line-height: 1.25;
        }
        .g-emeta {
          font-size: 11px;
          color: hsl(var(--primary-foreground) / 0.55);
          display: flex; gap: 6px; align-items: center;
        }
        .g-ecount {
          margin-left: auto;
          font-size: 10px; font-weight: 600;
          background: hsl(var(--accent) / 0.18);
          color: hsl(var(--accent));
          padding: 2px 8px; border-radius: 100px;
          border: 1px solid hsl(var(--accent) / 0.25);
        }

        /* ── Empty state ── */
        .g-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 64px 24px;
          color: hsl(var(--muted-foreground));
          border: 1px dashed hsl(var(--border));
          border-radius: 12px;
          font-size: 14px;
        }
        .g-empty strong {
          display: block; font-size: 15px;
          color: hsl(var(--foreground)); margin-bottom: 6px;
        }

        /* ── Event modal (foto grid) ── */
        .g-modal-backdrop {
          position: fixed; inset: 0;
          background: hsl(var(--background) / 0.92);
          backdrop-filter: blur(6px);
          z-index: 999;
          display: flex; align-items: flex-start; justify-content: center;
          padding: clamp(16px,4vw,40px);
          overflow-y: auto;
          animation: lbin .18s ease;
        }
        @keyframes lbin { from{opacity:0} to{opacity:1} }
        .g-modal {
          width: 100%; max-width: 1000px;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          overflow: hidden;
          margin: auto;
        }
        .g-modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid hsl(var(--border));
          display: flex; align-items: center; gap: 16px;
        }
        .g-modal-info { flex: 1; }
        .g-modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px,3vw,24px);
          font-weight: 700;
          color: hsl(var(--foreground));
          margin: 0 0 4px;
        }
        .g-modal-meta { font-size: 13px; color: hsl(var(--muted-foreground)); }
        .g-modal-x {
          width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
          background: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--muted-foreground));
          font-size: 15px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', sans-serif;
          transition: border-color .18s, color .18s;
        }
        .g-modal-x:hover { border-color: hsl(var(--accent)); color: hsl(var(--accent)); }

        .g-photo-grid {
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        @media (max-width: 600px) { .g-photo-grid { grid-template-columns: repeat(2,1fr); } }

        .g-photo-thumb {
          aspect-ratio: 4/3;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid hsl(var(--border));
          transition: border-color .2s, transform .2s;
          position: relative;
        }
        .g-photo-thumb:hover {
          border-color: hsl(var(--accent) / 0.5);
          transform: scale(1.02);
        }
        .g-photo-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .g-photo-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: hsl(var(--secondary) / 0.85);
          color: hsl(var(--primary-foreground) / 0.85);
          font-size: 10px; padding: 5px 8px;
          opacity: 0; transition: opacity .18s;
        }
        .g-photo-thumb:hover .g-photo-caption { opacity: 1; }

        .g-no-photos {
          grid-column: 1/-1;
          text-align: center;
          padding: 48px 16px;
          color: hsl(var(--muted-foreground));
          font-size: 14px;
        }

        /* ── Lightbox ── */
        .g-lb {
          position: fixed; inset: 0;
          background: hsl(var(--secondary) / 0.97);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          animation: lbin .15s ease;
        }
        .g-lb-x {
          position: absolute; top: 16px; right: 16px;
          width: 38px; height: 38px; border-radius: 50%;
          background: hsl(var(--primary-foreground) / 0.05);
          border: 1px solid hsl(var(--primary-foreground) / 0.12);
          color: hsl(var(--primary-foreground) / 0.5);
          font-size: 16px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color .18s, color .18s;
        }
        .g-lb-x:hover { border-color: hsl(var(--accent)); color: hsl(var(--accent)); }

        .g-lb-counter {
          position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
          font-size: 12px; color: hsl(var(--primary-foreground) / 0.4);
          font-family: 'DM Sans', sans-serif;
        }

        .g-lb-inner {
          width: 100%; max-width: 860px;
          padding: clamp(16px,4vw,40px);
          display: flex; flex-direction: column; align-items: center; gap: 16px;
        }
        .g-lb-frame {
          width: 100%;
          border-radius: 10px; overflow: hidden;
          border: 1px solid hsl(var(--primary-foreground) / 0.07);
          max-height: 70vh;
          display: flex; align-items: center; justify-content: center;
          background: hsl(var(--muted) / 0.2);
        }
        .g-lb-frame img {
          max-width: 100%; max-height: 70vh;
          object-fit: contain; display: block;
        }
        .g-lb-bot {
          width: 100%;
          display: flex; align-items: center; gap: 16px;
        }
        .g-lb-info { flex: 1; }
        .g-lb-tag {
          font-size: 9px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
          color: hsl(var(--accent));
          border: 1px solid hsl(var(--accent) / 0.32);
          background: hsl(var(--accent) / 0.08);
          padding: 2px 8px; border-radius: 100px;
          display: inline-block; margin-bottom: 5px;
        }
        .g-lb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px,2.5vw,20px);
          font-weight: 700; margin: 0 0 2px;
          color: hsl(var(--primary-foreground));
        }
        .g-lb-meta { font-size: 12px; color: hsl(var(--primary-foreground) / 0.45); }
        .g-lb-caption { font-size: 13px; color: hsl(var(--primary-foreground) / 0.65); margin-top: 3px; font-style: italic; }

        .g-lb-nav {
          display: flex; gap: 8px;
        }
        .g-lb-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: hsl(var(--primary-foreground) / 0.05);
          border: 1px solid hsl(var(--primary-foreground) / 0.12);
          color: hsl(var(--primary-foreground) / 0.6);
          font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color .18s, color .18s, background .18s;
        }
        .g-lb-btn:hover:not(:disabled) {
          border-color: hsl(var(--accent));
          color: hsl(var(--accent));
          background: hsl(var(--accent) / 0.08);
        }
        .g-lb-btn:disabled { opacity: 0.25; cursor: default; }
      `}</style>

      <div className="g-root">
        {/* Filter Pills */}
        <div className="g-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`g-pill ${activeCategory === cat ? "on" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="g-grid">
          {filteredEvents.length === 0 ? (
            <div className="g-empty">
              <strong>Belum ada event</strong>
            </div>
          ) : (
            filteredEvents.map((ev, i) => (
              <div
                key={ev.id}
                className={`g-ecard ${loaded ? "vis" : ""}`}
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => setOpenEvent(ev)}
              >
                {coverSrc(ev) ? (
                  <img src={coverSrc(ev)} alt={ev.name} loading="lazy" />
                ) : (
                  <div className="g-ecard-bg">
                    {ICONS[ev.category] ?? ICONS["Competition"]}
                  </div>
                )}
                <div className="g-eoverlay">
                  <span className="g-tag">{ev.category}</span>
                  <p className="g-ename">{ev.name}</p>
                  <div className="g-emeta">
                    <span>{ev.date}</span>
                    <span>·</span>
                    <span>{ev.location}</span>
                    {ev.photos.length > 0 && (
                      <span className="g-ecount">{ev.photos.length} foto</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Event Modal (foto grid) ── */}
      {openEvent && (
        <div className="g-modal-backdrop" onClick={() => setOpenEvent(null)}>
          <div className="g-modal" onClick={(e) => e.stopPropagation()}>
            <div className="g-modal-header">
              <div className="g-modal-info">
                <span className="g-tag">{openEvent.category}</span>
                <p className="g-modal-title">{openEvent.name}</p>
                <p className="g-modal-meta">{openEvent.date} · {openEvent.location}</p>
              </div>
              <button className="g-modal-x" onClick={() => setOpenEvent(null)}>✕</button>
            </div>

            <div className="g-photo-grid">
              {openEvent.photos.length === 0 ? (
                <div className="g-no-photos">
                  Belum ada foto untuk event ini.
                </div>
              ) : (
                openEvent.photos.map((ph, i) => (
                  <div
                    key={i}
                    className="g-photo-thumb"
                    onClick={() => openLightbox(openEvent, i)}
                  >
                    <img src={ph.src} alt={ph.caption ?? `Foto ${i + 1}`} loading="lazy" />
                    {ph.caption && (
                      <div className="g-photo-caption">{ph.caption}</div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="g-lb" onClick={() => setLightbox(null)}>
          <button className="g-lb-x" onClick={() => setLightbox(null)}>✕</button>
          <div className="g-lb-counter">
            {lightbox.index + 1} / {lightbox.photos.length}
          </div>

          <div className="g-lb-inner" onClick={(e) => e.stopPropagation()}>
            <div className="g-lb-frame">
              <img
                src={lightbox.photos[lightbox.index].src}
                alt={lightbox.photos[lightbox.index].caption ?? lightbox.eventName}
              />
            </div>
            <div className="g-lb-bot">
              <div className="g-lb-info">
                <span className="g-lb-tag">{lightbox.category}</span>
                <p className="g-lb-title">{lightbox.eventName}</p>
                <p className="g-lb-meta">{lightbox.date} · {lightbox.location}</p>
                {lightbox.photos[lightbox.index].caption && (
                  <p className="g-lb-caption">{lightbox.photos[lightbox.index].caption}</p>
                )}
              </div>
              <div className="g-lb-nav">
                <button className="g-lb-btn" onClick={prevPhoto} disabled={lightbox.index === 0}>‹</button>
                <button className="g-lb-btn" onClick={nextPhoto} disabled={lightbox.index === lightbox.photos.length - 1}>›</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}