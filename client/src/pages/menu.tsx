import React, { useState, useCallback, useMemo } from "react";
import CategoryBar from "./CategoryBar";
import { newDishes } from "../lib/data";
import Header from "../components/header";
import Footer from "../components/footer";
import useEmblaCarousel from "embla-carousel-react";

function Breadcrumb() {
  return (
    <nav className="text-gray-500 text-sm font-semibold mb-2 px-4 pt-4">
      <ul className="flex items-center space-x-2">
        <li>
          <a href="/" className="hover:underline">Trang Chủ</a>
        </li>
        <li className="select-none">›</li>
        <li>
          <a href="/sinh-nhat" className="hover:underline">Tiệc Sinh Nhật</a>
        </li>
        <li className="select-none">›</li>
        <li>
          <a href="/menu" className="hover:underline">Menu</a>
        </li>
      </ul>
    </nav>
  );
}

const categories = [
  "Tất cả",
  "Khai Vị",
  "Món bò",
  "Lẩu",
  "Mì - Miến",
  "Cơm",
  "Món gà",
  "Món heo",
  "Gỏi vườn bia",
  "Thủy sản",
  "Hải Sản và Ốc",
  "Món chay",
  "Combo",
  "Best Vườn Bia",
  "Bia – NƯỚC Giải Khát",
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter dishes theo search hoặc category
  const filteredDishes = useMemo(() => {
    return newDishes.filter((dish) => {
      const search = searchTerm.trim().toLowerCase();
      const category = activeCategory.trim().toLowerCase();

      // Nếu có searchTerm -> tìm toàn bộ món theo tên hoặc category (ưu tiên search, bỏ qua activeCategory)
      if (search !== "") {
        return (
          dish.name.toLowerCase().includes(search) ||
          dish.category.toLowerCase().includes(search)
        );
      }

      // Nếu không có searchTerm -> lọc theo category
      return category === "tất cả" || dish.category.trim().toLowerCase() === category;
    });
  }, [searchTerm, activeCategory]);

  // Embla carousel cho Combo
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const renderSection = (category: string) => {
    const dishes = filteredDishes.filter((d) =>
      searchTerm !== ""
        ? true // khi đang search thì gom hết vào một nhóm, không lọc lại
        : activeCategory === "Tất cả"
        ? d.category === category
        : d.category.toLowerCase() === category.toLowerCase()
    );

    if (dishes.length === 0) return null;

    // Render Combo (carousel)
    if (category === "Combo" && searchTerm === "") {
      return (
        <section key={category} className="mt-6">
          <h2 className="font-bold text-lg mb-2">{category}</h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex space-x-4 min-w-max">
                {dishes.map((dish) => (
                  <div
                    key={dish.name}
                    className="min-w-[220px] border rounded p-2 flex-shrink-0 bg-white shadow"
                  >
                    <img
                      src={dish.image || "/no-image.png"}
                      alt={dish.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <div className="text-green-900 font-semibold">{dish.name}</div>
                    {dish.note && (
                      <div className="text-gray-500 whitespace-pre-line italic text-sm">
                        {dish.note}
                      </div>
                    )}
                    <div className="text-xs italic text-red-900">
                      *Hình ảnh chỉ mang tính chất minh họa
                    </div>
                    <div className="text-red-700 font-bold">
                      {dish.price.toLocaleString()} đ
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {dishes.length > 4 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-900 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-800 transition"
                >
                  &#8592;
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-900 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-800 transition"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
        </section>
      );
    }

    // Render các category khác hoặc kết quả search
    return (
      <section key={category} className="mt-6">
        <h2 className="font-bold text-lg mb-2">
          {searchTerm !== "" ? "Kết quả tìm kiếm" : category}
        </h2>
        <div className="space-y-4">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex items-center border rounded p-2 bg-white shadow"
            >
              <img
                src={dish.image || "/no-image.png"}
                alt={dish.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <div className="text-green-900 font-semibold">{dish.name}</div>
                <div className="text-xs italic text-yellow-900">
                  *Hình ảnh chỉ mang tính chất minh họa
                </div>
                <div className="text-red-700 font-bold">
                  {dish.price.toLocaleString()} đ
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/anh-go7.jpg')" }}
    >
      <Header isScrolled={false} onBookingClick={() => {}} />

      {/* Header cố định */}
      <div
        className="fixed top-[72px] left-0 right-0 z-[10] backdrop-blur-sm bg-transparent"
        style={{
          backgroundImage: "url('/anh-go7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "160px",
        }}
      >
        <Breadcrumb />
        <div className="px-4 pt-2 pb-2">
          <h1 className="text-2xl font-extrabold text-yellow-800">MENU</h1>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="search"
              placeholder="Tìm kiếm món ăn..."
              className="w-full bg-green-900 text-gray-300 placeholder-gray-400 rounded-full py-2 pl-12 pr-4 border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Category */}
        <div className="border-b border-gray-200 py-2">
          <CategoryBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Main content */}
      <main
        className="container mx-auto px-4"
        style={{ marginTop: "260px", paddingBottom: "50px" }}
      >
        {searchTerm !== ""
          ? renderSection("Kết quả tìm kiếm")
          : activeCategory === "Tất cả"
          ? categories.map((cat) => renderSection(cat))
          : renderSection(activeCategory)}

        {filteredDishes.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            Không tìm thấy món ăn nào.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
