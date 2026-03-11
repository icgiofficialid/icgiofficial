import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Flag, Users, Award, BookOpen } from "lucide-react";

const team = [
  {
    name: "Dr. Ahmad Wijaya",
    role: "Director General",
    expertise: "Education Policy",
  },
  {
    name: "Prof. Siti Nurhaliza",
    role: "Academic Director",
    expertise: "Research & Innovation",
  },
  {
    name: "Dr. Budi Santoso",
    role: "Cultural Director",
    expertise: "Arts & Heritage",
  },
  {
    name: "Maria Chen, Ph.D.",
    role: "International Relations",
    expertise: "Global Partnerships",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container-main text-center">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
              About <span className="gold-text">ICGI</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              The Indonesian Centre for Giftedness Innovation is dedicated to
              nurturing and celebrating exceptional talent across academic and
              cultural domains.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding bg-card">
          <div className="container-main max-w-4xl">
            <h2 className="section-title text-center mb-8">Our Story</h2>
            <p className="text-muted-foreground font-body leading-relaxed text-center">
              ICGI was established to bridge the gap between academic excellence
              and cultural identity on the global stage. We provide a
              comprehensive platform for gifted students, researchers, artists,
              and professionals to showcase their talents, compete
              internationally, and build meaningful cross-cultural connections.
              Through our innovative programs, we empower the next generation of
              global achievers who are both intellectually brilliant and
              culturally grounded.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl border border-border p-8 card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  Vision
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  The realization of innovative, creative, cultured, and
                  characterful students in creating a more prosperous and
                  dignified world.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border p-8 card-hover">
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  Mission
                </h3>
                <ul className="text-muted-foreground font-body text-sm leading-relaxed space-y-2">
                  <li>
                    • Providing a forum for competition and exhibition for
                    students in the fields of invention, innovation, research,
                    and culture-based creativity.
                  </li>
                  <li>
                    • Providing a space for collaboration and talent development
                    for students at the national and international levels.
                  </li>
                  <li>
                    • Instilling local character and cultural values in every
                    activity as the foundation for shaping students who are
                    ethical, have a strong sense of identity, and are socially
                    responsible.
                  </li>
                  <li>
                    • Establishing strategic partnerships to support the
                    sustainable development of the younger generation.
                  </li>
                  <li>
                    • Encouraging students to become agents of change through
                    their work and achievements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="section-padding bg-card">
          <div className="container-main text-center">
            <h2 className="section-title mb-10">Objectives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  text: "Fostering a spirit of creativity, innovation, and expression in students through the development of both academic and non-academic potential.",
                },
                {
                  icon: BookOpen,
                  text: "Improving student achievement through innovative, creative, and culture-based works that are beneficial to life and society.",
                },
                {
                  icon: Users,
                  text: "Encouraging student contributions to national progress through science, technology, arts, and culture as part of identity and civilization.",
                },
                {
                  icon: Flag,
                  text: "Supporting the improvement of student competencies through the organization of science project competitions, scientific works, inventions, innovations, as well as structured arts and cultural activities that meet national and international standards.",
                },
                {
                  icon: Target,
                  text: "Shaping the character of students rooted in local cultural values, with a sense of identity, ethics, and social responsibility as part of the nation's future generation.",
                },
              ].map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background rounded-xl border border-border p-6 text-left card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <obj.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    {obj.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="section-padding bg-background">
          <div className="container-main text-center">
            <h2 className="section-title mb-10">Expert Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl border border-border p-6 card-hover"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-xs gold-text font-heading font-semibold mt-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.expertise}
                  </p>
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

export default About;
