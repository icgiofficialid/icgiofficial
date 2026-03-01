import { GraduationCap, Palette, Globe } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Fostering world-class academic achievement through international competitions, olympiads, and research programs.",
  },
  {
    icon: Palette,
    title: "Cultural Identity",
    description: "Celebrating and preserving cultural heritage through arts competitions, festivals, and creative workshops.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Connecting gifted minds across borders to build international networks and collaborative partnerships.",
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main text-center">
        <h2 className="section-title">About <span className="text-primary">ICGI</span></h2>
        <p className="section-subtitle mb-12">
          We empower gifted and talented individuals through innovative academic and cultural programs on a global stage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="card-hover bg-background rounded-xl p-8 text-center border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
