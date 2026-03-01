import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GraduationCap, School, Briefcase, CreditCard, Hash, Percent, Star, Bell, Award, Monitor } from "lucide-react";

const categories = [
  { icon: GraduationCap, title: "Student", desc: "For elementary through high school students with exceptional talents." },
  { icon: School, title: "College", desc: "For university and college students pursuing academic and cultural excellence." },
  { icon: Briefcase, title: "General", desc: "For teachers, lecturers, researchers, and professionals in education and culture." },
];

const benefits = [
  { icon: CreditCard, title: "E-Membership Card", desc: "Official digital membership card for identification and access." },
  { icon: Hash, title: "Official ID Number", desc: "Unique membership number for all ICGI activities and records." },
  { icon: Percent, title: "Registration Discounts", desc: "Special reduced pricing on all competition registration fees." },
  { icon: Star, title: "Priority Access", desc: "Early registration and priority access to all programs and events." },
  { icon: Bell, title: "Exclusive Updates", desc: "First access to international competition announcements and opportunities." },
  { icon: Monitor, title: "Premium Webinar Access", desc: "Complimentary access to expert-led webinars and online workshops." },
  { icon: Award, title: "Recommendation Support", desc: "Official letters of recommendation for academic and professional pursuits." },
];

const Membership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="hero-gradient py-20 md:py-28">
          <div className="container-main text-center">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
              <span className="gold-text">Membership</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Join ICGI and unlock a world of opportunities for gifted individuals.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-card">
          <div className="container-main text-center">
            <h2 className="section-title mb-10">Membership Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {categories.map((cat) => (
                <div key={cat.title} className="card-hover bg-background rounded-xl border border-border p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <cat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-background">
          <div className="container-main text-center">
            <h2 className="section-title mb-10">Member Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className="card-hover flex items-start gap-4 bg-card rounded-xl border border-border p-6 text-left">
                  <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{b.title}</h4>
                    <p className="text-xs text-muted-foreground font-body">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-gradient section-padding">
          <div className="container-main text-center">
            <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
              Ready to <span className="gold-text">Join?</span>
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Become a member today and start your journey toward global recognition.
            </p>
            <a href="mailto:info@icgi.org" className="btn-accent text-base px-12 py-4">
              Join Membership
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
