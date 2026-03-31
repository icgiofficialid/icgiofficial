import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Globe, Handshake } from "lucide-react";

import trensains from "@/assets/logos/TRENSAINS.jpg";
import resolution from "@/assets/logos/Resolution.png";
import IYSA from "@/assets/logos/IYSA.png";
import YPPI from "@/assets/logos/YPPI.png";
import sman1driyorejo from "@/assets/logos/Negeri_1_Driyorejo.png";
import doctorabbit from "@/assets/logos/Doctorabbit.png";
import gisa from "@/assets/logos/GISA.png";
import risetnesia from "@/assets/logos/RISETNESIA.png";
import cbso from "@/assets/logos/CBSO.png";
import prospera from "@/assets/logos/Prospera.png";
import esmoel from "@/assets/logos/ESMOEL.png";
import IPB from "@/assets/logos/IPB.png";
import ypbii from "@/assets/logos/YPBII.png";
import universitaspancasila from "@/assets/logos/Universitas_Pancasila.png";
import untrunojoyo from "@/assets/logos/Universitas_trunojoyo_madura.png";
import sman1lumbang from "@/assets/logos/SMAN1_Lumbang.png";
import miica from "@/assets/logos/miica.png";
import myso from "@/assets/logos/myso.png";
import BachKhoa from "@/assets/logos/bkmsc.jpg";
import milset from "@/assets/logos/milset.png";
import segi from "@/assets/logos/segi.png";
import aria from "@/assets/logos/aria_iran.png";
import cadia from "@/assets/logos/cadia.png";
import elmu from "@/assets/logos/elmu.png";
import intoc from "@/assets/logos/intoc.png";
import doza from "@/assets/logos/macedonia.png";

interface Partner {
  name: string;
  logo?: string;
}

const national: Partner[] = [
  { name: "SMA TRENSAINS MUHAMMADIYAH SRAGEN", logo: trensains },
  { name: "SOLUSI RISET DAN WIRAUSAHA INDONESIA (RESOLUTION)", logo: resolution },
  { name: "INDONESIAN YOUNG SCIENTISTS ASSOCIATION (IYSA)", logo: IYSA },
  { name: "YAYASAN PRESTASI PENDIDIK INDONESIA (YPPI)", logo: YPPI },
  { name: "SMAN 1 DRIYOREJO GRESIK", logo: sman1driyorejo },
  { name: "DOCTORABBIT SCIENCE INC", logo: doctorabbit },
  { name: "GISA INOVASI INDONESIA", logo: gisa },
  { name: "RISETNESIA ACADEMY", logo: risetnesia },
  { name: "CENTRAL BORNEO SCIENTIFIC ORGANIZATION (CBSO)", logo: cbso },
  { name: "SMAN 1 LUMBANG", logo: sman1lumbang },
  { name: "PROSPERA CREATIVE HUB", logo: prospera },
  { name: "ESMOEL MANAGEMENT", logo: esmoel },
  { name: "Department of Food Science and Technology, IPB University", logo: IPB },
  { name: "YAYASAN PRESTASI BELIA INDONESIA", logo: ypbii },
  { name: "UNIVERSITAS PANCASILA", logo: universitaspancasila },
  { name: "UNIVERSITAS TRUNOJOYO MADURA", logo: untrunojoyo },
];

const international: Partner[] = [
  { name: "MALAYSIA INNOVATION INVENTION CREATIVITY ASSOCIATION (MIICA)", logo: miica },
  { name: "MALAYSIA YOUNG SCIENTISTS ORGANIZATIONS (MYSO)", logo: myso },
  { name: "Bach Khoa Math and Science Club (BKMSC)", logo: BachKhoa },
  { name: "MILSET ASIA", logo: milset },
  { name: "SEGI UNIVERSITY", logo: segi },
  { name: "ARIA INVENTORS ASSOCIATION (IRAN)", logo: aria },
  { name: "CADIA", logo: cadia },
  { name: "ENFORCEMENT, LEADERSHIP AND MANAGEMENT UNIVERSITY", logo: elmu },
  { name: "INTOC GLOBAL", logo: intoc },
  { name: "DOZA SREKJA", logo: doza },
];

// ── Hook: fade-in saat elemen masuk viewport ──
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

// ── Partner Card dengan hover tooltip + mobile-safe loading ──
const PartnerCard = ({ partner, index }: { partner: Partner; index: number }) => {
  const [hasError, setHasError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="group relative flex items-center justify-center p-4 aspect-square cursor-pointer"
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {partner.logo && !hasError ? (
        <>
          {/* Skeleton shimmer saat gambar belum load */}
          {!loaded && (
            <div className="absolute inset-4 rounded-lg bg-gray-100 animate-pulse" />
          )}
          <img
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setHasError(true)}
            className={`h-36 w-full object-contain transition-all duration-300 ease-out
              ${loaded ? 'opacity-100' : 'opacity-0'}
              ${hovered ? 'scale-110 opacity-30 blur-[1px]' : 'scale-100'}`}
          />
        </>
      ) : (
        <span className="font-heading font-semibold text-xs text-foreground leading-snug text-center px-2">
          {partner.name}
        </span>
      )}

      {/* Nama muncul saat hover */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-3 transition-all duration-300
          ${hovered && loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <p className="text-[11px] font-semibold text-gray-700 text-center leading-snug">
          {partner.name}
        </p>
      </div>
    </div>
  );
};

// ── Section dengan fade-in ──
const FadeSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};

const Partnership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container-main text-center">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
              <span className="gold-text">Partnership</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Building bridges with institutions worldwide for greater impact.
            </p>
          </div>
        </section>

        {/* National */}
        <section className="section-padding bg-card">
          <div className="container-main">
            <FadeSection>
              <div className="flex items-center gap-3 justify-center mb-10">
                <Building2 className="w-6 h-6 text-primary" />
                <h2 className="section-title mb-0">National Partnership</h2>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-10 -mt-6">
                {national.length} institutions
              </p>
            </FadeSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-w-5xl mx-auto">
              {national.map((p, i) => (
                <FadeSection key={p.name}>
                  <PartnerCard partner={p} index={i} />
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* International */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <FadeSection>
              <div className="flex items-center gap-3 justify-center mb-10">
                <Globe className="w-6 h-6 text-accent" />
                <h2 className="section-title mb-0">International Partnership</h2>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-10 -mt-6">
                {international.length} institutions
              </p>
            </FadeSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-w-5xl mx-auto">
              {international.map((p, i) => (
                <FadeSection key={p.name}>
                  <PartnerCard partner={p} index={i} />
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FadeSection>
          <section className="hero-gradient section-padding">
            <div className="container-main text-center">
              <Handshake className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
                Become a Partner
              </h2>
              <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
                Join our network of prestigious institutions and organizations. Together, we can create greater opportunities for gifted individuals worldwide.
              </p>
              <a href="mailto:info@icgi.org" className="btn-accent text-base px-10 py-4">
                Contact Us
              </a>
            </div>
          </section>
        </FadeSection>

      </main>
      <Footer />
    </div>
  );
};

export default Partnership;