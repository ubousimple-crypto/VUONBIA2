import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

interface CategoryBarProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function CategoryBar({ activeCategory, setActiveCategory }: CategoryBarProps) {
  // Khởi tạo Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  // Cuộn đến mục được chọn
  const scrollToActive = useCallback(() => {
    if (!emblaApi) return;
    const index = categories.findIndex((cat) => cat === activeCategory);
    if (index !== -1) emblaApi.scrollTo(index);
  }, [activeCategory, emblaApi]);

  useEffect(() => {
    scrollToActive();
  }, [scrollToActive]);

  return (
    <div className="w-full bg-green-800">
      <nav className="bg-orange-400 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex whitespace-nowrap py-0 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative inline-block px-6 py-2 font-bold text-sm flex-shrink-0 transition-all duration-300
                  ${activeCategory === cat ? "bg-[#ffa827] text-green-900 font-bold" : "bg-[#ffa827] text-green-900"}
                  focus:outline-none focus:ring-0`}
                style={{ fontFamily: 'Roboto, sans-serif', textTransform: 'uppercase' }}
              >
                {cat}
                {activeCategory === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-green-900"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
