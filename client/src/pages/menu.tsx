import React, { useState, useCallback } from "react";
import CategoryBar from "./CategoryBar";
import { newDishes } from "../lib/data";
import Header from "../components/header";
import Footer from "../components/footer";
import useEmblaCarousel from "embla-carousel-react";

const categories = [
  "Combo",
  "Món mới",
  "Món heo",
  "Món bò",
  "Món gà",
  "Món chay",
  "Nước giải khát",
  "Bia",
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc món theo category và searchTerm
  const filteredDishes = newDishes.filter((d) => {
    const matchCategory =
      activeCategory === "Tất cả" ||
      d.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Embla carousel cho combo
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Hàm render section theo category
  const renderSection = (category: string) => {
    const dishes =
      activeCategory === "Tất cả"
        ? filteredDishes.filter((d) => d.category === category)
        : filteredDishes.filter(
            (d) => d.category.toLowerCase() === category.toLowerCase()
          );

    if (dishes.length === 0) return null;

    if (category === "Combo") {
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
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <div className="font-semibold">{dish.name}</div>
                    <div className="text-green-900 font-bold">
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
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-900 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-800 transition"
                  aria-label="Scroll left"
                >
                  &#8592;
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-900 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-800 transition"
                  aria-label="Scroll right"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
        </section>
      );
    }

    return (
      <section key={category} className="mt-6">
        <h2 className="font-bold text-lg mb-2">{category}</h2>
        <div className="space-y-4">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex items-center border rounded p-2 bg-white shadow"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <div className="font-semibold">{dish.name}</div>
                <div className="text-green-900 font-bold">
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
    <>
      <Header onBookingClick={() => {}} />

      {/* Phần cố định "Thực đơn" + tìm kiếm + danh mục */}
      <div
        className="fixed top-[72px] left-0 right-0 z-50 bg-white shadow-md"
        style={{ maxWidth: "100%", width: "100%" }}
      >
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-2xl font-extrabold text-yellow-600 drop-shadow-md">
            Thực đơn
          </h1>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="search"
              placeholder="Tìm kiếm món ăn..."
              className="w-full bg-green-900 text-gray-300 placeholder-gray-400 rounded-full py-2 pl-12 pr-4 border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 pointer-events-none"
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

        <div className="border-b border-gray-200 py-2">
          <CategoryBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Chỉnh margin top main để tránh bị che */}
        <main className="container mx-auto px-4 py-0" style={{ marginTop: "220px" }}>
        {activeCategory === "Tất cả"
          ? categories.map((cat) => renderSection(cat))
          : renderSection(activeCategory)}

        {filteredDishes.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            Không tìm thấy món ăn nào.
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
