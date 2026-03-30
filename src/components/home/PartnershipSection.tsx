import React from 'react';
import gisa from '@/assets/logos/GISA.png';
import cbso from '@/assets/logos/CBSO.png';
import risetnesia from '@/assets/logos/Risetnesia.png';
import trensains from '@/assets/logos/TRENSAINS.jpg';
import doctorabbit from '@/assets/logos/Doctorabbit.png';
import prospera from '@/assets/logos/Prospera.png';
import resolution from '@/assets/logos/Resolution.png';
import esmoel from '@/assets/logos/ESMOEL.png';
import IPB from '@/assets/logos/IPB.png';
import miica from '@/assets/logos/miica.png';
import elmu from '@/assets/logos/elmu.png';
import myso from '@/assets/logos/myso.png';
import shi from '@/assets/logos/SHI.png';

const partners = [
  { name: "GISA INOVASI INDONESIA", logo: gisa },
  { name: "CENTRAL BORNEO SCIENTIFIC ORGANIZATION (CBSO)", logo: cbso },
  { name: "DOCTORABBIT SCIENCE INC", logo: doctorabbit },
  { name: "ESMOEL MANAGEMENT", logo: esmoel },
  { name: "PROSPERA CREATIVE HUB", logo: prospera },
  { name: "SOLUSI RISET DAN WIRAUSAHA INDONESIA (RESOLUTION)", logo: resolution },
  { name: "RISETNESIA ACADEMY", logo: risetnesia },
  { name: "SCIENCE HUNTER INDONESIA (SHI)", logo: shi },
  { name: "SMA TRENSAINS MUHAMMADIYAH SRAGEN", logo: trensains },
  { name: "Department of Food Science and Technology, IPB University", logo: IPB },
  { name: "ENFORCEMENT, LEADERSHIP AND MANAGEMENT UNIVERSITY", logo: elmu },
  { name: "MALAYSIA INNOVATION INVENTION CREATIVITY ASSOCIATION (MIICA)", logo: miica },
  { name: "MALAYSIA YOUNG SCIENTISTS ORGANIZATIONS (MYSO)", logo: myso },
];


const duplicated = [...partners, ...partners];

const PartnershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* ── Header ── */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3 tracking-tight">
          Our Partners
        </h2>
        <p className="text-gray-500 mb-14 max-w-xl mx-auto text-md leading-relaxed">
          Collaborating with leading institutions to deliver world-class programs.
        </p>
      </div>

      {/* ── Carousel wrapper ── */}
      <div className="relative w-full overflow-hidden">

        {/* Fade kiri */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none
          bg-gradient-to-r from-gray-50 to-transparent" />

        {/* Fade kanan */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none
          bg-gradient-to-l from-white to-transparent" />

        {/* Track yang bergerak — pause saat hover */}
        <div
          className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '30s' }}
        >
          {duplicated.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="group flex items-center justify-center shrink-0"
            title={partner.name}
          >
            <img
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              className="w-72 h-44 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </div>
                    ))}
                  </div>
      </div>

      {/* ── Keyframe CSS ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnershipSection;