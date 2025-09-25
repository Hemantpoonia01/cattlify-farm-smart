import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cattle.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-cream mb-8 leading-tight">
            Cattlify – Smart Cattle Recognition & Management
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Easily identify cattle breeds and manage herd health with our intuitive app.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-12 py-6 text-lg font-semibold hover-lift shadow-elegant"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;