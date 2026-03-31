import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="relative z-10 container-main text-center py-20">
        <p className="font-heading text-sm md:text-base tracking-[0.3em] uppercase gold-text mb-6 animate-fade-in-up">
          Indonesian Centre for Giftedness Innovation
        </p>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Shaping Innovative &<br />
          <span className="gold-text">Cultured Global Achievers</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          International Academic & Cultural Competition Platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Link to="/membership" className="btn-accent text-base px-10 py-4">
            Register Now
          </Link>
          <Link to="/programs" className="btn-outline text-base px-10 py-4">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;