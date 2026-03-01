import { FileText, Search, Users, Presentation, Trophy } from "lucide-react";

const steps = [
  { icon: FileText, label: "Submission", step: 1 },
  { icon: Search, label: "Review", step: 2 },
  { icon: Users, label: "Finalist Announcement", step: 3 },
  { icon: Presentation, label: "Presentation", step: 4 },
  { icon: Trophy, label: "Awarding", step: 5 },
];

const TimelineSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main text-center">
        <h2 className="section-title">Competition Process</h2>
        <p className="section-subtitle mb-14">
          Our structured process ensures fair and transparent competition for all participants.
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary/30" />

          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center relative z-10 flex-1">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-heading font-semibold text-accent mb-1">Step {step.step}</span>
              <span className="text-sm font-heading font-medium text-foreground">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.label} className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs font-heading font-semibold text-accent">Step {step.step}</span>
                <p className="text-sm font-heading font-medium text-foreground">{step.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
