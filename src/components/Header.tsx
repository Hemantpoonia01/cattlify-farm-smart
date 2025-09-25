import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
            <span className="text-brand-dark font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-brand-dark">Cattlify</span>
        </div>
        
        <Button variant="outline" size="sm">
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;