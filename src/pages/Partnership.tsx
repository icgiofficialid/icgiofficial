import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Globe, Handshake } from "lucide-react";

const national = [
  "Ministry of Education & Culture",
  "Indonesian Institute of Sciences",
  "National Research Council",
  "Leading Universities",
  "Cultural Heritage Foundation",
  "Youth Development Agency",
];

const international = [
  "UNESCO",
  "ASEAN Foundation",
  "Asia-Pacific Talent Network",
  "International Science Olympiad Committee",
  "World Cultural Heritage Council",
  "Global Education Alliance",
];

const Partnership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="hero-gradient py-20 md:py-28">
          <div className="container-main text-center">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
              <span className="gold-text">Partnership</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Building bridges with institutions worldwide for greater impact.
            </p>
          </div>
        </section>

        {/* National */}
        <section className="section-padding bg-card">
          <div className="container-main">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Building2 className="w-6 h-6 text-primary" />
              <h2 className="section-title mb-0">National Partnership</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {national.map((p) => (
                <div key={p} className="card-hover bg-background rounded-xl border border-border p-6 text-center">
                  <span className="font-heading font-semibold text-sm text-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Globe className="w-6 h-6 text-accent" />
              <h2 className="section-title mb-0">International Partnership</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {international.map((p) => (
                <div key={p} className="card-hover bg-card rounded-xl border border-border p-6 text-center">
                  <span className="font-heading font-semibold text-sm text-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-gradient section-padding">
          <div className="container-main text-center">
            <Handshake className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">Become a Partner</h2>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Join our network of prestigious institutions and organizations. Together, we can create greater opportunities for gifted individuals worldwide.
            </p>
            <a href="mailto:info@icgi.org" className="btn-accent text-base px-10 py-4">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnership;
