import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import TimelineSection from "@/components/home/TimelineSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import MembershipSection from "@/components/home/MembershipSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DivisionsSection />
        <TimelineSection />
        <PartnershipSection />
        <MembershipSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
