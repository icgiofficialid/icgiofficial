// src/pages/News.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getSortedNews, NEWS_CATEGORIES,
  HERO_SLIDES, HERO_INTERVAL_MS,
  type NewsArticle,
} from "@/data/newsData";

const CAT_COLOR: Record<string, string> = {
  Event:        "hsl(213 89% 28%)",
  Announcement: "hsl(43 64% 42%)",
  Achievement:  "hsl(142 60% 32%)",
  Partnership:  "hsl(280 50% 38%)",
};

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasSlides = HERO_SLIDES.length > 0;

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(index); setTransitioning(false); }, 400);
  }, [current, transitioning]);

  const next = useCallback(() => goTo((current + 1) % HERO_SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [current, goTo]);

  useEffect(() => {
    if (!hasSlides || HERO_SLIDES.length < 2) return;
    timerRef.current = setTimeout(next, HERO_INTERVAL_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next, hasSlides]);

  return (
    <div className="nh-slideshow">
      <div className="nh-bg">
        {hasSlides ? HERO_SLIDES.map((slide, i) => (
          <div key={i} className="nh-slide" style={{ opacity: i === current ? (transitioning ? 0 : 1) : 0 }}>
            <img src={slide.src} alt={slide.caption ?? `Slide ${i + 1}`} />
          </div>
        )) : (
          <div className="nh-slide" style={{ opacity: 1 }}>
            <div className="nh-fallback" />
          </div>
        )}
        <div className="nh-overlay" />
      </div>

      <div className="nh-content">
        <p className="nh-eyebrow">Latest Updates</p>
        <h1 className="nh-title">News & <span>Announcements</span></h1>
        <p className="nh-sub">Events, achievements, and the latest updates from our organization.</p>
        {hasSlides && HERO_SLIDES[current]?.caption && (
          <div className="nh-caption">
            <span className="nh-caption-dot" />
            {HERO_SLIDES[current].eventName && (
              <span className="nh-caption-event">{HERO_SLIDES[current].eventName}</span>
            )}
            <span className="nh-caption-text">{HERO_SLIDES[current].caption}</span>
          </div>
        )}
      </div>

      {hasSlides && HERO_SLIDES.length > 1 && (
        <>
          <button className="nh-arrow nh-arrow-left" onClick={prev} aria-label="Previous">‹</button>
          <button className="nh-arrow nh-arrow-right" onClick={next} aria-label="Next">›</button>
          <div className="nh-dots">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} className={`nh-dot ${i === current ? "on" : ""}`}
                onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <div className="nh-progress">
            <div className="nh-progress-bar" key={current}
              style={{ animationDuration: `${HERO_INTERVAL_MS}ms` }} />
          </div>
        </>
      )}
    </div>
  );
};

const PlaceholderCover = () => (
  <div style={{ width:"100%", height:"100%", background:"hsl(var(--muted))",
    display:"flex", alignItems:"center", justifyContent:"center" }}>
    <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="24" rx="2"
        stroke="hsl(var(--accent) / 0.4)" strokeWidth="1.5" fill="hsl(var(--accent) / 0.07)" />
      <path d="M4 15h32" stroke="hsl(var(--accent) / 0.4)" strokeWidth="1.5" />
      <path d="M10 22h10M10 27h6" stroke="hsl(var(--accent) / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const ArticleDetail = ({ article, onBack }: { article: NewsArticle; onBack: () => void }) => {
  const color = CAT_COLOR[article.category] ?? "hsl(var(--primary))";
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  return (
    <div className="na-detail">
      <button className="na-back" onClick={onBack}>← Back to News</button>
      <div className="na-cover">
        {article.cover ? <img src={article.cover} alt={article.title} /> : <PlaceholderCover />}
      </div>
      <div className="na-meta">
        <span className="na-tag" style={{ color, borderColor:`${color}44`, background:`${color}11` }}>
          {article.category}
        </span>
        <span className="na-date">{article.dateLabel ?? article.date}</span>
        {article.author && <span className="na-author">· {article.author}</span>}
      </div>
      <h1 className="na-title">{article.title}</h1>
      <div className="na-divider" />
      <div className="na-body">
        {(article.body ?? article.excerpt).split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {article.tags && article.tags.length > 0 && (
        <div className="na-tags">
          {article.tags.map((tag) => <span key={tag} className="na-chip">#{tag}</span>)}
        </div>
      )}
    </div>
  );
};

const NewsCard = ({ article, index, featured, onClick }: {
  article: NewsArticle; index: number; featured?: boolean; onClick: () => void;
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const color = CAT_COLOR[article.category] ?? "hsl(var(--primary))";
  return (
    <div className={`n-card ${featured ? "n-card-featured" : ""}`}
      style={{ animationDelay:`${index * 60}ms` }} onClick={onClick}>
      <div className="n-card-img">
        {article.cover ? (
          <>{!imgLoaded && <div className="n-skeleton" />}
            <img src={article.cover} alt={article.title} loading="lazy"
              onLoad={() => setImgLoaded(true)} style={{ opacity: imgLoaded ? 1 : 0 }} /></>
        ) : <PlaceholderCover />}
        {featured && <span className="n-featured-badge">Featured</span>}
      </div>
      <div className="n-card-body">
        <span className="n-tag" style={{ color, borderColor:`${color}44`, background:`${color}11` }}>
          {article.category}
        </span>
        <h3 className="n-card-title">{article.title}</h3>
        <p className="n-card-excerpt">{article.excerpt}</p>
        <div className="n-card-footer">
          <span className="n-date">{article.dateLabel ?? article.date}</span>
          {article.author && <span className="n-author">{article.author}</span>}
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const allArticles = getSortedNews();
  const detailArticle = id ? allArticles.find((a) => a.id === id) : null;

  const filtered = allArticles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.filter((a) => a.featured);
  const regular  = filtered.filter((a) => !a.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

          .nh-slideshow { position:relative; height:clamp(320px,50vw,520px); overflow:hidden; background:hsl(var(--secondary)); }
          .nh-bg { position:absolute; inset:0; }
          .nh-slide { position:absolute; inset:0; transition:opacity 0.6s ease; }
          .nh-slide img { width:100%; height:100%; object-fit:cover; display:block; }
          .nh-fallback { width:100%; height:100%; background:var(--hero-gradient); }
          .nh-overlay { position:absolute; inset:0; background:linear-gradient(to bottom, hsl(var(--secondary)/0.25) 0%, hsl(var(--secondary)/0.55) 60%, hsl(var(--secondary)/0.85) 100%); }
          .nh-content { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:clamp(24px,5vw,60px); z-index:2; }
          .nh-eyebrow { font-size:10px; font-weight:600; letter-spacing:.28em; text-transform:uppercase; color:hsl(var(--accent)); margin-bottom:14px; }
          .nh-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,5.5vw,3.6rem); font-weight:700; line-height:1.1; color:hsl(var(--primary-foreground)); margin:0 0 12px; }
          .nh-title span { color:hsl(var(--accent)); }
          .nh-sub { font-size:clamp(13px,1.8vw,15px); color:hsl(var(--primary-foreground)/0.65); max-width:460px; line-height:1.75; margin:0; }
          .nh-caption { margin-top:20px; display:inline-flex; align-items:center; gap:8px; background:hsl(var(--primary-foreground)/0.08); border:1px solid hsl(var(--primary-foreground)/0.15); backdrop-filter:blur(8px); padding:6px 14px; border-radius:100px; animation:captionIn .4s ease; }
          @keyframes captionIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
          .nh-caption-dot { width:6px; height:6px; border-radius:50%; background:hsl(var(--accent)); flex-shrink:0; }
          .nh-caption-event { font-size:10px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:hsl(var(--accent)); }
          .nh-caption-text { font-size:12px; color:hsl(var(--primary-foreground)/0.8); }
          .nh-arrow { position:absolute; top:50%; transform:translateY(-50%); z-index:3; width:40px; height:40px; border-radius:50%; background:hsl(var(--primary-foreground)/0.08); border:1px solid hsl(var(--primary-foreground)/0.18); color:hsl(var(--primary-foreground)/0.7); font-size:22px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .18s,border-color .18s,color .18s; backdrop-filter:blur(4px); }
          .nh-arrow:hover { background:hsl(var(--accent)/0.2); border-color:hsl(var(--accent)/0.5); color:hsl(var(--accent)); }
          .nh-arrow-left { left:16px; } .nh-arrow-right { right:16px; }
          .nh-dots { position:absolute; bottom:44px; left:50%; transform:translateX(-50%); z-index:3; display:flex; gap:7px; }
          .nh-dot { width:7px; height:7px; border-radius:50%; background:hsl(var(--primary-foreground)/0.3); border:none; cursor:pointer; padding:0; transition:background .2s,transform .2s; }
          .nh-dot.on { background:hsl(var(--accent)); transform:scale(1.3); }
          .nh-progress { position:absolute; bottom:0; left:0; right:0; height:2px; background:hsl(var(--primary-foreground)/0.1); z-index:3; }
          .nh-progress-bar { height:100%; background:hsl(var(--accent)); animation:nhprogress linear forwards; width:0%; }
          @keyframes nhprogress { from{width:0%} to{width:100%} }

          .n-root { font-family:'DM Sans',sans-serif; background:hsl(var(--background)); }
          .n-controls { max-width:1120px; margin:0 auto; padding:clamp(24px,4vw,40px) clamp(16px,4vw,40px) 0; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
          .n-search { flex:1; min-width:180px; padding:9px 16px; border:1px solid hsl(var(--border)); border-radius:100px; background:hsl(var(--card)); color:hsl(var(--foreground)); font-size:13px; font-family:'DM Sans',sans-serif; outline:none; transition:border-color .18s; }
          .n-search:focus { border-color:hsl(var(--accent)/0.6); }
          .n-search::placeholder { color:hsl(var(--muted-foreground)); }
          .n-filters { display:flex; gap:7px; flex-wrap:wrap; }
          .n-pill { padding:7px 16px; border-radius:100px; font-size:12px; font-weight:500; cursor:pointer; border:1px solid hsl(var(--border)); background:transparent; color:hsl(var(--muted-foreground)); font-family:'DM Sans',sans-serif; transition:color .18s,border-color .18s,background .18s; }
          .n-pill:hover { color:hsl(var(--accent-foreground)); border-color:hsl(var(--accent)/0.5); background:hsl(var(--accent)/0.08); }
          .n-pill.on { background:hsl(var(--accent)); color:hsl(var(--accent-foreground)); border-color:hsl(var(--accent)); font-weight:600; }
          .n-body { max-width:1120px; margin:0 auto; padding:clamp(24px,4vw,44px) clamp(16px,4vw,40px) clamp(60px,8vw,96px); }
          .n-section-label { font-size:10px; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:hsl(var(--muted-foreground)); margin-bottom:14px; }
          .n-featured-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:14px; margin-bottom:36px; }
          .n-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
          @media (max-width:860px) { .n-grid { grid-template-columns:repeat(2,1fr); } }
          @media (max-width:500px) { .n-grid,.n-featured-grid { grid-template-columns:1fr; } }
          .n-card { background:hsl(var(--card)); border:1px solid hsl(var(--border)); border-radius:12px; overflow:hidden; cursor:pointer; display:flex; flex-direction:column; transition:border-color .22s,transform .26s,box-shadow .26s; opacity:0; transform:translateY(14px); animation:nin .42s ease forwards; }
          @keyframes nin { to{opacity:1;transform:none} }
          .n-card:hover { transform:translateY(-5px); border-color:hsl(var(--accent)/0.4); box-shadow:0 10px 32px hsl(var(--accent)/0.1); }
          .n-card-img { aspect-ratio:16/9; overflow:hidden; position:relative; background:hsl(var(--muted)); }
          .n-card-img img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .32s,opacity .2s; }
          .n-card:hover .n-card-img img { transform:scale(1.05); }
          .n-skeleton { position:absolute; inset:0; background:hsl(var(--muted)); animation:shimmer 1.4s infinite; }
          @keyframes shimmer { 0%,100%{opacity:1} 50%{opacity:.5} }
          .n-featured-badge { position:absolute; top:10px; left:10px; font-size:9px; font-weight:700; letter-spacing:.15em; text-transform:uppercase; background:hsl(var(--accent)); color:hsl(var(--accent-foreground)); padding:3px 9px; border-radius:100px; }
          .n-card-body { flex:1; padding:16px 18px 18px; display:flex; flex-direction:column; gap:7px; }
          .n-tag { font-size:9px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; padding:2px 8px; border-radius:100px; border:1px solid; display:inline-block; width:fit-content; }
          .n-card-title { font-family:'Cormorant Garamond',serif; font-size:clamp(14px,1.8vw,17px); font-weight:700; color:hsl(var(--foreground)); margin:0; line-height:1.3; }
          .n-card-excerpt { font-size:12.5px; color:hsl(var(--muted-foreground)); line-height:1.65; margin:0; flex:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
          .n-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:10px; border-top:1px solid hsl(var(--border)); }
          .n-date { font-size:11px; color:hsl(var(--muted-foreground)); }
          .n-author { font-size:11px; font-weight:500; color:hsl(var(--primary)); }
          .n-empty { grid-column:1/-1; text-align:center; padding:60px 24px; color:hsl(var(--muted-foreground)); border:1px dashed hsl(var(--border)); border-radius:12px; font-size:14px; }
          .n-empty strong { display:block; font-size:15px; color:hsl(var(--foreground)); margin-bottom:6px; }

          .na-detail { max-width:760px; margin:0 auto; padding:clamp(32px,5vw,60px) clamp(16px,4vw,40px); }
          .na-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:500; color:hsl(var(--muted-foreground)); background:none; border:none; cursor:pointer; padding:0; margin-bottom:28px; font-family:'DM Sans',sans-serif; transition:color .18s; }
          .na-back:hover { color:hsl(var(--foreground)); }
          .na-cover { width:100%; aspect-ratio:16/9; border-radius:12px; overflow:hidden; border:1px solid hsl(var(--border)); margin-bottom:28px; }
          .na-cover img { width:100%; height:100%; object-fit:cover; display:block; }
          .na-meta { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:14px; }
          .na-tag { font-size:9px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; padding:3px 10px; border-radius:100px; border:1px solid; }
          .na-date { font-size:12px; color:hsl(var(--muted-foreground)); }
          .na-author { font-size:12px; font-weight:500; color:hsl(var(--primary)); }
          .na-title { font-family:'Cormorant Garamond',serif; font-size:clamp(1.6rem,4vw,2.4rem); font-weight:700; color:hsl(var(--foreground)); line-height:1.2; margin:0 0 20px; }
          .na-divider { width:48px; height:2px; background:hsl(var(--accent)); margin-bottom:24px; border-radius:2px; }
          .na-body { font-size:15px; color:hsl(var(--foreground)/0.8); line-height:1.85; }
          .na-body p { margin:0 0 20px; }
          .na-tags { display:flex; gap:8px; flex-wrap:wrap; margin-top:32px; padding-top:24px; border-top:1px solid hsl(var(--border)); }
          .na-chip { font-size:11px; font-weight:500; padding:3px 10px; border-radius:100px; background:hsl(var(--muted)); color:hsl(var(--muted-foreground)); border:1px solid hsl(var(--border)); }
        `}</style>

        <div className="n-root">
          <HeroSlideshow />
          {detailArticle ? (
            <ArticleDetail article={detailArticle} onBack={() => navigate("/news")} />
          ) : (
            <>
              <div className="n-controls">
                <input className="n-search" placeholder="Search news..."
                  value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="n-filters">
                  {NEWS_CATEGORIES.map((cat) => (
                    <button key={cat} className={`n-pill ${activeCategory === cat ? "on" : ""}`}
                      onClick={() => setActiveCategory(cat)}>{cat}</button>
                  ))}
                </div>
              </div>
              <div className="n-body">
                {filtered.length === 0 ? (
                  <div className="n-grid">
                    <div className="n-empty">
                      <strong>No articles found</strong>
                      {search ? `No results for "${search}"` : "Add articles in src/data/newsData.ts"}
                    </div>
                  </div>
                ) : (
                  <>
                    {featured.length > 0 && (
                      <>
                        <p className="n-section-label">Featured</p>
                        <div className="n-featured-grid">
                          {featured.map((a, i) => (
                            <NewsCard key={a.id} article={a} index={i} featured
                              onClick={() => navigate(`/news/${a.id}`)} />
                          ))}
                        </div>
                      </>
                    )}
                    {regular.length > 0 && (
                      <>
                        {featured.length > 0 && <p className="n-section-label" style={{ marginTop:8 }}>All Articles</p>}
                        <div className="n-grid">
                          {regular.map((a, i) => (
                            <NewsCard key={a.id} article={a} index={i}
                              onClick={() => navigate(`/news/${a.id}`)} />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;