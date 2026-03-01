import { CreditCard, Hash, Percent, Star, Bell, Award } from "lucide-react";

const benefits = [
  { icon: CreditCard, title: "E-Membership Card", desc: "Digital membership card for easy identification" },
  { icon: Hash, title: "Official Membership Number", desc: "Unique ID for all ICGI activities" },
  { icon: Percent, title: "Registration Discounts", desc: "Special pricing on all competition fees" },
  { icon: Star, title: "Priority Access", desc: "Early access to programs and events" },
  { icon: Bell, title: "Exclusive Updates", desc: "International competition information first" },
  { icon: Award, title: "Recommendation Support", desc: "Letters of recommendation for further pursuits" },
];

const MembershipSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main text-center">
        <h2 className="section-title">Membership Benefits</h2>
        <p className="section-subtitle mb-12">
          Join ICGI to unlock exclusive benefits and opportunities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card-hover flex items-start gap-4 bg-background rounded-xl border border-border p-6 text-left">
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
  );
};

export default MembershipSection;
