import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-main text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
          Ready to Compete on a <span className="gold-text">Global Stage?</span>
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
          Join thousands of gifted individuals from around the world in our academic and cultural programs.
        </p>
        <Link to="/membership" className="btn-accent text-base px-12 py-4">
          Join ICGI Now
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
