import React from 'react';

const partners = [
  { name: "GISA INOVASI INDONESIA", logo: "/assets/logos/GISA.jpg" },
  { name: "CENTRAL BORNEO SCIENTIFIC ORGANIZATION (CBSO)", logo: "/assets/logos/CBSO.jpg" },
  { name: "DOCTORABBIT SCIENCE INC", logo: "/assets/logos/doctorabbit.jpg" },
  { name: "ESMOEL MANAGEMENT", logo: "/assets/logos/esmoel.jpg" },
  { name: "PROSPERA CREATIVE HUB", logo: "/assets/logos/prospera.jpg" },
  { name: "SOLUSI RISET DAN WIRAUSAHA INDONESIA (RESOLUTION)", logo: "/assets/logos/resolution.jpg" },
  { name: "RISETNESIA ACADEMY", logo: "/assets/logos/risetnesia.jpg" },
  { name: "SCIENCE HUNTER INDONESIA (SHI)", logo: "/assets/logos/shi.jpg" },
  { name: "SMA TRENSAINS MUHAMMADIYAH SRAGEN", logo: "/assets/logos/trensains.jpg" },
  { name: "Department of Food Science and Technology, IPB University", logo: "/assets/logos/ipb.jpg" },
  { name: "ENFORCEMENT, LEADERSHIP AND MANAGEMENT UNIVERSITY", logo: "/assets/logos/elmu.jpg" },
  { name: "MALAYSIA INNOVATION INVENTION CREATIVITY ASSOCIATION (MIICA)", logo: "/assets/logos/miica.jpg" },
  { name: "MALAYSIA YOUNG SCIENTISTS ORGANIZATIONS (MYSO)", logo: "/assets/logos/myso.jpg" },
];

const PartnershipSection = () => {
  return (
    <section className="section-padding bg-background py-16">
      <div className="container-main mx-auto px-4 text-center">
        <h2 className="section-title text-3xl font-bold mb-4">Our Partners</h2>
        <p className="section-subtitle mb-12 text-gray-600 max-w-2xl mx-auto">
          Collaborating with leading institutions to deliver world-class programs.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 min-h-[140px]"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                
                
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://via.placeholder.com/200x100?text=${encodeURIComponent(partner.name.substring(0, 10))}...`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;