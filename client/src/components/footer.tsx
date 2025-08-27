import { Utensils, Phone, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="lien-he" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Utensils className="text-primary" />
              </div>
              <span className="text-xl font-bold">Quán Nhậu Tự Do</span>
            </div>
            <p className="text-gray-400 mb-4">
              17 cơ sở khắp Hà Nội phục vụ quý khách hàng.
            </p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2" data-testid="footer-hotline">
                <Phone className="text-secondary w-4 h-4" />
                <span className="font-bold text-secondary">*1986</span>
              </p>
            </div>
          </div>
          
          <div data-testid="footer-info">
            <h3 className="text-lg font-semibold mb-4">Thông Tin</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("thuc-don")}
                  className="hover:text-secondary transition-colors"
                  data-testid="footer-link-menu"
                >
                  Thực đơn
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("co-so")}
                  className="hover:text-secondary transition-colors"
                  data-testid="footer-link-locations"
                >
                  Cơ sở
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("uu-dai")}
                  className="hover:text-secondary transition-colors"
                  data-testid="footer-link-offers"
                >
                  Ưu đãi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("lien-he")}
                  className="hover:text-secondary transition-colors"
                  data-testid="footer-link-contact"
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-areas">
            <h3 className="text-lg font-semibold mb-4">Khu Vực</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ba Đình (1)</li>
              <li>Cầu Giấy (4)</li>
              <li>Đống Đa (3)</li>
              <li>Hai Bà Trưng (3)</li>
              <li>Hoàng Mai (1)</li>
              <li>Long Biên (1)</li>
            </ul>
          </div>
          
          <div data-testid="footer-social">
            <h3 className="text-lg font-semibold mb-4">Theo Dõi</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400" data-testid="footer-copyright">
          <p>&copy; 2024 Quán Nhậu Tự Do. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
