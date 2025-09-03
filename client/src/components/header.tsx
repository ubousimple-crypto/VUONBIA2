import { useState, useEffect } from "react";
import { Utensils, Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bắt sự kiện scroll để đổi màu header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-green-700/95 backdrop-blur-md" : "bg-green-700"
      } text-white shadow-md`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-12 h-12 rounded-full overflow-hidden  ">
              <img
                src="/logo-vuon-bia.jpg"
                alt="Logo Vườn Bia"
                className="w-full h-full object-cover scale-150 transform"

              />
            </div>
            <h1 className="text-white font-bold text-lg tracking-wide">VƯỜN BIA</h1>
          </div>


          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 font-semibold text-sm">
            <button onClick={() => scrollToSection("thuc-don")} className="hover:text-yellow-400 transition-colors">THỰC ĐƠN</button>
            <button onClick={() => scrollToSection("co-so")} className="hover:text-yellow-400 transition-colors">CƠ SỞ</button>
            <button onClick={() => scrollToSection("uu-dai")} className="hover:text-yellow-400 transition-colors">ƯU ĐÃI</button>
            <button onClick={() => scrollToSection("lien-he")} className="hover:text-yellow-400 transition-colors">LIÊN HỆ</button>
          </div>

          {/* Hotline + Đặt bàn desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-xs">HOTLINE</div>
              <div className="flex items-center text-lg font-bold text-yellow-400">
                <Phone className="w-5 h-5 mr-1" />
                *1986
              </div>
            </div>
            <button
              onClick={onBookingClick}
              className="bg-yellow-400 text-green-700 px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              ĐẶT BÀN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-green-700 pb-4 space-y-3 text-center font-semibold">
            <button onClick={() => scrollToSection("thuc-don")} className="block w-full py-2 hover:text-yellow-400 transition-colors">
              THỰC ĐƠN
            </button>
            <button onClick={() => scrollToSection("co-so")} className="block w-full py-2 hover:text-yellow-400 transition-colors">
              CƠ SỞ
            </button>
            <button onClick={() => scrollToSection("uu-dai")} className="block w-full py-2 hover:text-yellow-400 transition-colors">
              ƯU ĐÃI
            </button>
            <button onClick={() => scrollToSection("lien-he")} className="block w-full py-2 hover:text-yellow-400 transition-colors">
              LIÊN HỆ
            </button>
            <div className="border-t border-green-600 pt-3">
              <div className="flex justify-center items-center text-yellow-400 font-bold space-x-1 mb-2">
                <Phone className="w-5 h-5" />
                <span>HOTLINE: *1986</span>
              </div>
              <button
                onClick={() => {
                  onBookingClick();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-yellow-400 text-green-700 px-6 py-2 rounded font-bold hover:bg-yellow-300 transition-colors w-full"
              >
                ĐẶT BÀN
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
