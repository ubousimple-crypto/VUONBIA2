import { Utensils, Phone, Facebook, Instagram, Youtube } from "lucide-react";

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10l3 3 4-4"
            />
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
      <footer className="bg-green-800 text-yellow-200 py-10 shadow-inner font-serif border-t-4 border-yellow-400">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-700 rounded-md p-3 flex items-center justify-center shadow-md">
              <Utensils className="w-6 h-6 text-yellow-200" />
            </div>
            <div>
              <h1 className="font-extrabold text-2xl tracking-wide">Vườn Bia</h1>
              <p className="text-white text-sm mt-1 italic">
                Nơi hội tụ bạn bè, nhâm nhi bia ngon
              </p>
              <div className="flex items-center gap-2 mt-1 text-yellow-400 text-sm font-semibold">
                <Phone className="w-4 h-4" />
                <span>
                  Hotline:{" "}
                  <span className="text-yellow-200 font-bold">*078 388 5288</span>
                </span>
              </div>
            </div>
          </div>

          <nav className="flex gap-8 text-yellow-300 font-semibold text-sm cursor-pointer">
            <button
              onClick={() => scrollToSection("thuc-don")}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Thực đơn
            </button>
            <button
              onClick={() => scrollToSection("co-so")}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Cơ sở
            </button>
            <button
              onClick={() => scrollToSection("uu-dai")}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Ưu đãi
            </button>
            <button
              onClick={() => scrollToSection("lien-he")}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Liên hệ
            </button>
          </nav>

          <div className="flex gap-6">
            {[Facebook, Instagram, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-yellow-300 hover:text-yellow-400 transition-colors duration-200"
                aria-label="social"
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-yellow-400 text-xs mt-8 select-none italic tracking-wide">
          &copy; 2024 Vườn Bia. Tất cả quyền được bảo lưu.
        </div>
      </footer>
    </>
  );
}
