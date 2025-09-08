import React, { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const navigateTo = (path: string) => {
    setLocation(path);
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
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
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
            <button
              onClick={() => navigateTo("/")}
              className="hover:text-yellow-400 transition-colors"
            >
              TRANG CHỦ
            </button>
            <button
              onClick={() => navigateTo("/menu")}
              className="hover:text-yellow-400 transition-colors"
            >
              MENU
            </button>
            <button
              onClick={() => navigateTo("/sinh-nhat")}
              className="hover:text-yellow-400 transition-colors"
            >
              TIỆC SINH NHẬT - TẤT NIÊN
            </button>
            <button
              onClick={() => navigateTo("/vuon-bia-ly-thai-to")}
              className="hover:text-yellow-400 transition-colors"
            >
              VƯỜN BIA - LÝ THÁI TỔ
            </button>
            <button
              onClick={() => navigateTo("/vuon-bia-bui-van-danh")}
              className="hover:text-yellow-400 transition-colors"
            >
              VƯỜN BIA - BÙI VĂN DANH
            </button>
          </div>

          {/* Hotline desktop */}
          <div className="hidden lg:flex items-center text-yellow-400 font-bold space-x-2">
            <Phone className="w-5 h-5" />
            <a href="tel:0783885288" className="hover:underline">
              HOTLINE: 0783885288
            </a>
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
          <div
            className={`lg:hidden bg-green-700 pb-4 space-y-3 text-center font-semibold transition-max-height duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <button
              onClick={() => navigateTo("/")}
              className="block w-full py-2 hover:text-yellow-400 transition-colors"
            >
              TRANG CHỦ
            </button>
            <button
              onClick={() => navigateTo("/menu")}
              className="block w-full py-2 hover:text-yellow-400 transition-colors"
            >
              MENU
            </button>
            <button
              onClick={() => navigateTo("/sinh-nhat")}
              className="block w-full py-2 hover:text-yellow-400 transition-colors"
            >
              TIỆC SINH NHẬT - TẤT NIÊN
            </button>
            <button
              onClick={() => navigateTo("/vuon-bia-ly-thai-to")}
              className="block w-full py-2 hover:text-yellow-400 transition-colors"
            >
              VƯỜN BIA - LÝ THÁI TỔ
            </button>
            <button
              onClick={() => navigateTo("/vuon-bia-bui-van-danh")}
              className="block w-full py-2 hover:text-yellow-400 transition-colors"
            >
              VƯỜN BIA - BÙI VĂN DANH
            </button>

            <div className="border-t border-green-600 pt-3">
              <div className="flex justify-center items-center text-yellow-400 font-bold space-x-1 mb-2">
                <Phone className="w-5 h-5" />
                <a href="tel:0783885288" className="hover:underline">
                  HOTLINE: 0783885288
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
