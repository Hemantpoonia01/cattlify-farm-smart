import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* SEO Meta Tags */}
      <div className="sr-only">
        <h1>Cattlify - Smart Cattle Recognition and Management App</h1>
      </div>
      
      {/* Logo in top right */}
      <div className="fixed top-6 right-6 z-50">
        <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center shadow-elegant">
          <span className="text-brand-dark font-bold text-xl">Cattlify</span>
        </div>
      </div>
      
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;
