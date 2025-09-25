import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Cattlify</h3>
            <p className="text-brand-cream/80 leading-relaxed mb-6">
              Smart cattle recognition and management made simple for farmers, veterinarians, and cattle owners worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-brand-cream/80">hello@cattlify.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-brand-cream/80">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-3 bg-brand-cream/10 rounded-full hover:bg-brand-cream/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-brand-cream/10 rounded-full hover:bg-brand-cream/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-brand-cream/10 rounded-full hover:bg-brand-cream/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-brand-cream/10 rounded-full hover:bg-brand-cream/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-cream/20 text-center">
          <p className="text-brand-cream/60">
            © 2024 Cattlify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
