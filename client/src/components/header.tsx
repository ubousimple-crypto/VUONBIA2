import React, { useState } from "react";
import { useLocation } from "wouter";
import { Utensils, Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
  onBookingClick: () => void;
}

export default function Header({ onBookingClick, isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation(); // lấy setLocation để chuyển route

  // Hàm cuộn tới section theo id (dùng cho scroll nội bộ)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Hàm chuyển trang route (dùng cho các link dẫn sang trang khác)
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
            onClick={() => navigateTo("/")} // 👉 chuyển về trang chủ
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/logo-vuon-bia.jpg"
                alt="Logo Vườn Bia"
                className="w-full h-full object-cover scale-150 transform"
              />
            </div>
            <h1 className="text-white font-bold text-lg tracking-wide">
              VƯỜN BIA
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 font-semibold text-sm">
            <button
              onClick={() => scrollToSection("thuc-don")}
              className="hover:text-yellow-400 transition-colors"
            >
              THỰC ĐƠN
            </button>
            <button
              onClick={() => scrollToSection("co-so")}
              className="hover:text-yellow-400 transition-colors"
            >
              CƠ SỞ
            </button>
            <button
              onClick={() => scrollToSection("uu-dai")}
              className="hover:text-yellow-400 transition-colors"
            >
              ƯU ĐÃI
            </button>
            <button
              onClick={() => scrollToSection("lien-he")}
              className="hover:text-yellow-400 transition-colors"
            >
              LIÊN HỆ
            </button>
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
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden bg-green-700 pb-4 space-y-3 text-center font-semibold transition-max-height duration-300 ease-in-out
      ${isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
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
