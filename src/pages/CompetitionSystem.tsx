import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, Search, Users, Presentation, Trophy, Upload, Eye, Star } from "lucide-react";

const academicSteps = [
  { icon: FileText, title: "Submission", desc: "Participants submit their academic work, research papers, or project proposals through our online platform." },
  { icon: Search, title: "Selection", desc: "Expert panels review and evaluate all submissions based on established academic criteria." },
  { icon: Users, title: "Finalist Announcement", desc: "Top-scoring participants are announced as finalists and invited to the next stage." },
  { icon: Presentation, title: "Presentation", desc: "Finalists present their work to a panel of national and international judges." },
  { icon: Trophy, title: "Awarding", desc: "Winners are recognized with awards, certificates, and opportunities for further development." },
];

const nonAcademicSteps = [
  { icon: Upload, title: "Registration & Portfolio Submission", desc: "Artists and performers register and submit their portfolios or performance recordings." },
  { icon: Search, title: "Selection", desc: "A panel of cultural experts reviews submissions for quality, creativity, and cultural value." },
  { icon: Eye, title: "Live Performance", desc: "Selected participants showcase their talents through live performances or exhibitions." },
  { icon: Star, title: "Judging & Awarding", desc: "Judges evaluate performances and award winners across multiple categories." },
];

const academicCriteria = [
  { label: "Innovation", weight: "Core" },
  { label: "Originality", weight: "Core" },
  { label: "Impact", weight: "Core" },
  { label: "Sustainability", weight: "Core" },
];

const culturalCriteria = [
  { label: "Technique", weight: "20%" },
  { label: "Creativity", weight: "20%" },
  { label: "Cultural Value", weight: "20%" },
  { label: "Expression", weight: "20%" },
  { label: "Professionalism", weight: "20%" },
];

const CompetitionSystem = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="hero-gradient py-20 md:py-28">
          <div className="container-main text-center">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
              Competition <span className="gold-text">System</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Transparent, fair, and internationally standardized competition processes.
            </p>
          </div>
        </section>

        {/* Academic Competition */}
        <section className="section-padding bg-card">
          <div className="container-main">
            <h2 className="section-title text-center mb-4">Academic Competition</h2>
            {/* <p className="section-subtitle text-center mb-12">Score-based awarding: 80% score allocation, 20% finalist recognition</p> */}

            <div className="space-y-4 max-w-3xl mx-auto mb-12">
              {academicSteps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-5 bg-background rounded-xl border border-border p-6 card-hover">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-heading font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">{step.title}</h4>
                    <p className="text-xs text-muted-foreground font-body">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background rounded-xl border border-border p-8 max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-lg mb-4 text-foreground text-center">Assessment Rubric</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">Judged by national & international panel</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {academicCriteria.map((c) => (
                  <div key={c.label} className="text-center p-4 rounded-lg bg-card border border-border">
                    <p className="font-heading font-bold text-sm text-primary">{c.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{c.weight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Non-Academic Competition */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <h2 className="section-title text-center mb-12">Non-Academic Competition</h2>

            <div className="space-y-4 max-w-3xl mx-auto mb-12">
              {nonAcademicSteps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-5 bg-card rounded-xl border border-border p-6 card-hover">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 text-accent-foreground font-heading font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">{step.title}</h4>
                    <p className="text-xs text-muted-foreground font-body">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl border border-border p-8 max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-lg mb-6 text-foreground text-center">Assessment Criteria</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {culturalCriteria.map((c) => (
                  <div key={c.label} className="text-center p-4 rounded-lg bg-background border border-border">
                    <p className="font-heading font-bold text-sm text-accent">{c.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{c.weight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompetitionSystem;
