import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, FlaskConical, Mic, MessageSquare, Palette, PartyPopper, Paintbrush, ShoppingBag } from "lucide-react";

const academic = [
  { icon: BookOpen, title: "Competitions & Olympiads", desc: "International-level academic competitions across various disciplines including science, mathematics, and technology." },
  { icon: FlaskConical, title: "Conferences & Research Camps", desc: "Immersive research experiences and academic conferences for aspiring scholars and researchers." },
  { icon: Mic, title: "Workshops / Webinars / Seminars", desc: "Expert-led sessions on cutting-edge topics in education, innovation, and professional development." },
  { icon: MessageSquare, title: "Speech Contests", desc: "Public speaking and debate competitions to develop communication and critical thinking skills." },
];

const nonAcademic = [
  { icon: Palette, title: "Arts & Culture Competition", desc: "Showcasing artistic talent in visual arts, performing arts, traditional crafts, and contemporary media." },
  { icon: PartyPopper, title: "Cultural Festival & Expo", desc: "Celebrating cultural diversity through exhibitions, performances, and interactive cultural experiences." },
  { icon: Paintbrush, title: "Culture Workshop", desc: "Hands-on workshops exploring traditional and contemporary cultural practices and art forms." },
  { icon: ShoppingBag, title: "Creative Market", desc: "A platform for creative entrepreneurs to showcase and market culturally-inspired products." },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="hero-gradient py-20 md:py-28">
          <div className="container-main text-center">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
              Our <span className="gold-text">Programs</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Comprehensive programs spanning academic excellence and cultural celebration.
            </p>
          </div>
        </section>

        {/* Academic */}
        <section id="academic" className="section-padding bg-card">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">Academic Field</h2>
              <p className="section-subtitle">Programs designed to challenge and elevate intellectual potential.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academic.map((item) => (
                <div key={item.title} className="card-hover bg-background rounded-xl border border-border p-8 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Academic */}
        <section id="non-academic" className="section-padding bg-background">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="section-title">Non-Academic Field</h2>
              <p className="section-subtitle">Programs celebrating cultural heritage and creative expression.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nonAcademic.map((item) => (
                <div key={item.title} className="card-hover bg-card rounded-xl border border-border p-8 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
