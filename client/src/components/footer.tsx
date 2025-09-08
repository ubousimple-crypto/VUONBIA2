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
                href="https://www.facebook.com/profile.php?id=100084943486238"
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
                className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-full text-white hover:bg-red-800 transition shadow-lg"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>

              {/* Messenger */}
              <a
                href="https://www.messenger.com/t/102058722637703"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition shadow-lg"
                aria-label="Messenger"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-7 h-7"
                >
                  <path
                    fill="white"
                    d="M16 0C7.164 0 0 6.72 0 15c0 4.727 2.389 8.964 6.176 11.748V32l5.656-3.104C13.246 29.616 14.598 30 16 30c8.836 0 16-6.72 16-15S24.836 0 16 0zm1.544 20.328l-3.944-4.2-7.968 4.2 8.732-9.328 3.888 4.2 8.028-4.2-8.736 9.328z"
                  />
                </svg>
              </a>


              {/* Zalo */}
              <a
                href="https://zalo.me/0783885288"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-700 transition shadow-lg"
                aria-label="Zalo"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                  alt="Zalo"
                  className="w-9 h-9"
                />
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
                      <span>Chi nhánh 1: Lý Thái Tổ Nối Dài, Phường Long Xuyên, Tỉnh An Giang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-white" />
                      <span>Chi nhánh 2: Bờ Kè Bùi Văn Danh, Phường Long Xuyên, Tỉnh An Giang </span>
                    </li>
                  </ul>
                </div>

                {/* Facebook Feed */}
              

                {/* Nếu bạn muốn thêm cột nữa, thêm ở đây */}
              </div>

              {/* Bottom Bar */}
              <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-yellow-400 italic">
                <p>&copy; 2025 Vườn Bia — Cùng chill, cùng bia, cùng bạn bè.</p>
              </div>
            </footer>
          </>
        );
      }
