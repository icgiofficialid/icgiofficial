// src/components/home/NewsSection.tsx
// Preview of 3 latest articles — shown on the Index page
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLatestNews, type NewsArticle } from "@/data/newsData";

const CATEGORY_COLORS: Record<string, string> = {
  Event:        "hsl(213 89% 28%)",
  Announcement: "hsl(43 64% 42%)",
  Achievement:  "hsl(142 60% 32%)",
  Partnership:  "hsl(280 50% 38%)",
};

const PlaceholderCover = () => (
  <div style={{ width:"100%", height:"100%", background:"hsl(var(--muted))",
    display:"flex", alignItems:"center", justifyContent:"center" }}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="24" rx="2"
        stroke="hsl(var(--accent) / 0.4)" strokeWidth="1.5" fill="hsl(var(--accent) / 0.07)" />
      <path d="M4 15h32" stroke="hsl(var(--accent) / 0.4)" strokeWidth="1.5" />
      <path d="M10 22h10M10 27h6" stroke="hsl(var(--accent) / 0.35)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const NewsCard = ({ article, index }: { article: NewsArticle; index: number }) => {
  const [loaded, setLoaded] = useState(false);
  const color = CATEGORY_COLORS[article.category] ?? "hsl(var(--primary))";

  return (
    <Link to={`/news/${article.id}`} className="ns-card"
      style={{ animationDelay:`${index * 80}ms` } as React.CSSProperties}>
      <div className="ns-card-img">
        {article.cover ? (
          <>{!loaded && <div className="ns-skeleton" />}
            <img src={article.cover} alt={article.title} loading="lazy"
              onLoad={() => setLoaded(true)} style={{ opacity: loaded ? 1 : 0 }} /></>
        ) : <PlaceholderCover />}
      </div>
      <div className="ns-card-body">
        <span className="ns-tag" style={{ color, borderColor:`${color}44`, background:`${color}11` }}>
          {article.category}
        </span>
        <h3 className="ns-card-title">{article.title}</h3>
        <p className="ns-card-excerpt">{article.excerpt}</p>
        <div className="ns-card-footer">
          <span className="ns-date">{article.dateLabel ?? article.date}</span>
          {article.author && <span className="ns-author">{article.author}</span>}
        </div>
      </div>
    </Link>
  );
};

export default function NewsSection() {
  const [visible, setVisible] = useState(false);
  const articles = getLatestNews(3);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .ns-root { background:hsl(var(--background)); padding:clamp(48px,7vw,80px) clamp(16px,4vw,40px); font-family:'DM Sans',sans-serif; }
        .ns-header { max-width:1120px; margin:0 auto clamp(28px,4vw,44px); display:flex; align-items:flex-end; justify-content:space-between; gap:16px; flex-wrap:wrap; }
        .ns-eyebrow { font-size:10px; font-weight:600; letter-spacing:.25em; text-transform:uppercase; color:hsl(var(--accent)); margin-bottom:8px; }
        .ns-heading { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,4vw,2.6rem); font-weight:700; color:hsl(var(--foreground)); margin:0; line-height:1.15; }
        .ns-heading span { color:hsl(var(--accent)); }
        .ns-viewall { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:hsl(var(--primary)); text-decoration:none; padding:8px 18px; border:1px solid hsl(var(--primary)/0.3); border-radius:100px; transition:background .18s,border-color .18s; white-space:nowrap; }
        .ns-viewall:hover { background:hsl(var(--primary)/0.06); border-color:hsl(var(--primary)/0.6); }
        .ns-grid { max-width:1120px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media (max-width:860px) { .ns-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:520px) { .ns-grid { grid-template-columns:1fr; } }
        .ns-card { display:flex; flex-direction:column; background:hsl(var(--card)); border:1px solid hsl(var(--border)); border-radius:12px; overflow:hidden; text-decoration:none; transition:border-color .22s,transform .26s,box-shadow .26s; opacity:0; transform:translateY(16px); animation:nsin .44s ease forwards; }
        @keyframes nsin { to{opacity:1;transform:none} }
        .ns-card:hover { transform:translateY(-5px); border-color:hsl(var(--accent)/0.45); box-shadow:0 10px 36px hsl(var(--accent)/0.1); }
        .ns-card-img { aspect-ratio:16/9; overflow:hidden; position:relative; background:hsl(var(--muted)); }
        .ns-card-img img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .32s,opacity .2s; }
        .ns-card:hover .ns-card-img img { transform:scale(1.05); }
        .ns-skeleton { position:absolute; inset:0; background:hsl(var(--muted)); animation:shimmer 1.4s infinite; }
        @keyframes shimmer { 0%,100%{opacity:1} 50%{opacity:.5} }
        .ns-card-body { flex:1; padding:18px 20px 20px; display:flex; flex-direction:column; gap:8px; }
        .ns-tag { font-size:9px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; padding:2px 8px; border-radius:100px; border:1px solid; display:inline-block; width:fit-content; }
        .ns-card-title { font-family:'Cormorant Garamond',serif; font-size:clamp(15px,1.8vw,18px); font-weight:700; color:hsl(var(--foreground)); margin:0; line-height:1.3; }
        .ns-card-excerpt { font-size:13px; color:hsl(var(--muted-foreground)); line-height:1.65; margin:0; flex:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .ns-card-footer { display:flex; align-items:center; justify-content:space-between; gap:8px; padding-top:10px; border-top:1px solid hsl(var(--border)); }
        .ns-date { font-size:11px; color:hsl(var(--muted-foreground)); }
        .ns-author { font-size:11px; font-weight:500; color:hsl(var(--primary)); }
        .ns-empty { text-align:center; padding:48px; color:hsl(var(--muted-foreground)); border:1px dashed hsl(var(--border)); border-radius:12px; font-size:14px; max-width:1120px; margin:0 auto; }
      `}</style>

      <section className="ns-root">
        <div className="ns-header">
          <div>
            <p className="ns-eyebrow">Latest</p>
            <h2 className="ns-heading">News & <span>Announcements</span></h2>
          </div>
          <Link to="/news" className="ns-viewall">View All →</Link>
        </div>

        {articles.length === 0 ? (
          <div className="ns-empty">No articles yet. Add them in <code>src/data/newsData.ts</code></div>
        ) : (
          <div className="ns-grid">
            {articles.map((article, i) => (
              <NewsCard key={article.id} article={article} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}