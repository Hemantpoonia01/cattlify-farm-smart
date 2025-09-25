import Header from "@/components/Header";
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
      
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;