import { Link } from "react-router-dom";
import { BookOpen, Music } from "lucide-react";

const DivisionsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main text-center">
        <h2 className="section-title">Our Divisions</h2>
        <p className="section-subtitle mb-12">
          ICGI operates through two complementary fields that nurture both intellect and culture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic */}
          <div className="card-hover relative overflow-hidden rounded-xl border border-border bg-card p-10 text-left">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Academic Field</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Competitions, olympiads, research conferences, seminars, workshops, and speech contests designed to push intellectual boundaries.
            </p>
            <Link to="/programs#academic" className="text-sm font-heading font-semibold text-primary hover:text-accent transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Cultural */}
          <div className="card-hover relative overflow-hidden rounded-xl border border-border bg-card p-10 text-left">
            <div className="w-14 h-14 rounded-lg bg-accent/15 flex items-center justify-center mb-5">
              <Music className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Cultural Field</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Arts & culture competitions, festivals, creative markets, and cultural workshops that celebrate heritage and creativity.
            </p>
            <Link to="/programs#non-academic" className="text-sm font-heading font-semibold text-primary hover:text-accent transition-colors">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
