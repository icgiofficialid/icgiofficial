// src/pages/Gallery.tsx  ← buat file ini
import GallerySection from "../components/home/GallerySection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container-main text-center"> 
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4">
          <span className="gold-text">Gallery</span>
        </h1>
        <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          A collection of our past events and activities.
        </p>
      </div>
    </section>
  );
}