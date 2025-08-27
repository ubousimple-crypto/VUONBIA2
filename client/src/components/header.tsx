import { useState } from "react";
import { Utensils, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isScrolled: boolean;
  onBookingClick: () => void;
}

export default function Header({ isScrolled, onBookingClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky-header fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "scrolled bg-primary/95 backdrop-blur-md" : "bg-primary"
      } text-white`}
      data-testid="header"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Utensils className="text-2xl text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Quán Nhậu Tự Do</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8" data-testid="desktop-menu">
            <button 
              onClick={() => scrollToSection("thuc-don")}
              className="hover:text-secondary transition-colors font-medium"
              data-testid="link-menu"
            >
              THỰC ĐƠN
            </button>
            <button 
              onClick={() => scrollToSection("co-so")}
              className="hover:text-secondary transition-colors font-medium"
              data-testid="link-locations"
            >
              CƠ SỞ
            </button>
            <button 
              onClick={() => scrollToSection("uu-dai")}
              className="hover:text-secondary transition-colors font-medium"
              data-testid="link-offers"
            >
              ƯU ĐÃI
            </button>
            <button 
              onClick={() => scrollToSection("lien-he")}
              className="hover:text-secondary transition-colors font-medium"
              data-testid="link-contact"
            >
              LIÊN HỆ
            </button>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4" data-testid="header-actions">
            <div className="text-right">
              <div className="text-sm">HOTLINE</div>
              <div className="text-xl font-bold text-secondary flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                *1986
              </div>
            </div>
            <Button 
              onClick={onBookingClick}
              className="bg-secondary text-primary px-6 py-2 rounded-lg font-bold hover:bg-secondary/90 transition-all"
              data-testid="button-booking-desktop"
            >
              ĐẶT BÀN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-2xl" />
            ) : (
              <Menu className="text-2xl" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection("thuc-don")}
                className="hover:text-secondary transition-colors text-left"
                data-testid="link-menu-mobile"
              >
                THỰC ĐƠN
              </button>
              <button 
                onClick={() => scrollToSection("co-so")}
                className="hover:text-secondary transition-colors text-left"
                data-testid="link-locations-mobile"
              >
                CƠ SỞ
              </button>
              <button 
                onClick={() => scrollToSection("uu-dai")}
                className="hover:text-secondary transition-colors text-left"
                data-testid="link-offers-mobile"
              >
                ƯU ĐÃI
              </button>
              <button 
                onClick={() => scrollToSection("lien-he")}
                className="hover:text-secondary transition-colors text-left"
                data-testid="link-contact-mobile"
              >
                LIÊN HỆ
              </button>
              <div className="pt-3 border-t border-green-600">
                <div className="text-sm flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  HOTLINE: <span className="text-secondary font-bold ml-1">*1986</span>
                </div>
                <Button 
                  onClick={() => {
                    onBookingClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-2 bg-secondary text-primary px-4 py-2 rounded font-bold"
                  data-testid="button-booking-mobile"
                >
                  ĐẶT BÀN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
