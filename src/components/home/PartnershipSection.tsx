const partners = [
  "University of Indonesia",
  "Ministry of Education",
  "UNESCO Indonesia",
  "ASEAN Foundation",
  "National Science Council",
  "Cultural Affairs Board",
  "Global Talent Network",
  "Asia Pacific Council",
];

const PartnershipSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main text-center">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle mb-12">
          Collaborating with leading institutions to deliver world-class programs.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="card-hover bg-card rounded-xl border border-border p-6 flex items-center justify-center min-h-[100px]"
            >
              <span className="font-heading font-semibold text-sm text-muted-foreground text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
