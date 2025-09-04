      import { Utensils, Phone, Facebook, Instagram, Youtube, MapPin } from "lucide-react";

      export default function Footer() {
        const scrollToSection = (sectionId: string) => {
          const section = document.getElementById(sectionId);
          if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        return (
          <>
            {/* Các nút social cố định bên trái */}
            <div className="fixed top-[45%] right-0 flex flex-col gap-3 z-50">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white hover:bg-blue-700 transition shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* Phone */}
              <a
                href="tel:+0783885288"
                className="w-12 h-12 flex items-center justify-center bg-green-700 rounded-full text-white hover:bg-green-800 transition shadow-lg"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>

              {/* Messenger */}
              <a
                href="https://m.me/yourpage"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full text-white hover:bg-yellow-500 transition shadow-lg"
                aria-label="Messenger"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10l3 3 4-4" />
                </svg>
              </a>

              {/* Zalo */}
              <a
                href="https://zalo.me/yourid"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full text-white hover:bg-red-700 transition shadow-lg text-sm font-bold"
                aria-label="Zalo"
              >
                Zalo
              </a>
            </div>

            {/* Footer chính */}
            <footer className="bg-green-900 border-t-4 border-yellow-400 text-gray-200 py-12">
              <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* About Us */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Vườn Bia</h3>
                  <p className="text-sm leading-relaxed">
                    Nơi tụ họp bạn bè, cụng ly và chill không giới hạn. Đừng quên theo dõi chúng mình!
                  </p>
                </div>

                {/* Chi nhánh */}
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400 font-poppins">Chi nhánh</h4>
                  <ul className="text-sm space-y-2 font-poppins text-white">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-white" />
                      <span>Chi nhánh 1: Lý Thái Tổ, Long Xuyên</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-white" />
                      <span>Chi nhánh 2: Bờ Kè, Bùi Văn Danh</span>
                    </li>
                  </ul>
                </div>

                {/* Facebook Feed */}
              

                {/* Nếu bạn muốn thêm cột nữa, thêm ở đây */}
              </div>

              {/* Bottom Bar */}
              <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-yellow-400 italic">
                <p>&copy; 2024 Vườn Bia — Cùng chill, cùng bia, cùng bạn bè.</p>
              </div>
            </footer>
          </>
        );
      }
