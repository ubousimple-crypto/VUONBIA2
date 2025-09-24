import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { newDishes } from "@/lib/data";
import { useLocation } from "wouter"; // ✅ Dùng đúng cách

// ===========================
// Component: Vườn Bia Section
// ===========================
export function VuonBia() {
  const [, setLocation] = useLocation(); // ✅ Gọi hook bên trong component

  // Khởi tạo carousel với embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext(); // Tự động next slide mỗi 3 giây
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Danh sách hình ảnh carousel
  const carouselImages = [
    "BVD/506004261_688404770667633_8159746349051566525_n.jpg",
    "BVD/BVD1.jpg",
    "BVD/BVD3.jpg",
  ];

  return (
    <section
      className="relative py-10 px-8 md:px-16 lg:px-24 text-black font-sans rounded-lg w-full max-w-full mx-auto"
      style={{
        backgroundImage: "url('/bg-paper.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Cột trái: Giới thiệu */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-yellow-500 mb-2">
            Welcome to
          </p>
          <h2 className="text-5xl font-extrabold text-green-800 drop-shadow-md">
            VƯỜN BIA
          </h2>
          <p className="italic text-lg mb-6 text-yellow-900 font-semibold">
            “Ăn uống thả ga - Cùng chill siêu đã 🍻”
          </p>
          <p className="mb-4 font-semibold italic text-black">
            📍 Giữa lòng Long Xuyên nhộn nhịp, có một chỗ tụ tập lý tưởng cho mấy
            “chiến hữu” thích lai rai, mê đồ nhậu ngon, bia mát lạnh – đó là Vườn Bia!
          </p>

          <p className="mb-2 font-semibold italic text-black leading-relaxed">
            Không phải kiểu quán sang chảnh, cũng chẳng phải lề đường bụi bặm – 
            Vườn Bia mang đến <strong>trải nghiệm nhậu đúng chất</strong>:{" "}
            <strong>bia tươi, mồi bén, không gian chill</strong> – ngồi là không muốn về!
            <br />
            <span className="inline-block mt-3 px-3 py-1 bg-yellow-300 text-yellow-900 font-bold rounded shadow">
              🎈 Quán có decor tiệc sinh nhật miễn phí 
            </span>
          </p>
        </div>

        {/* Cột phải: Carousel + Nút bấm */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div
            className="embla overflow-hidden rounded-lg w-full max-w-md mb-6"
            ref={emblaRef}
          >
            <div className="embla__container flex gap-4">
              {carouselImages.map((src, index) => (
                <div
                  key={index}
                  className="embla__slide flex-shrink-0 rounded overflow-hidden cursor-pointer w-72 aspect-square"
                >
                  <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Nút chuyển trang đến /sinh-nhat */}
          <button
            onClick={() => setLocation("/sinh-nhat")}
            className="bg-yellow-400 text-black border-2 border-black px-6 py-3 rounded hover:bg-yellow-300 transition font-semibold mb-4 max-w-[200px]"
          >
            XEM CHI TIẾT
          </button>

          {/* Nút gọi điện */}
          <a
            href="tel:0783885288"
            className="flex items-center space-x-2 text-red-700 font-bold text-base md:text-lg hover:text-green-800"
          >
            <span>📞 Đặt Bàn Ngay: 078 388 5288</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ===========================
// Component: Món mới ra lò
// ===========================
export function MonNgonMoiRaLo() {
  const [, setLocation] = useLocation(); // ✅ Gọi đúng nơi

  const monMoi = (newDishes || []).filter((dish) => dish.category === "Món bò");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const formatPrice = (price: number) => price.toLocaleString("vi-VN") + " ₫";

  return (
    <section className="relative py-2 px-8 md:px-16 lg:px-24 text-white font-sans">
      <div className="max-w-full mx-auto px-4">
        <h3 className="text-4xl font-extrabold mb-6 text-center text-green-800">
          Món mới ra lò
        </h3>

        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex gap-6">
            {monMoi.length > 0 ? (
              monMoi.map((mon, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[0_0_60%] bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
                >
                  <img src={mon.image} alt={mon.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4 text-center font-semibold text-gray-800">
                   <p className="text-lg mb-1">{mon.name}</p>
                    <p className="text-red-600 font-bold">{formatPrice(mon.price)}</p>
                     <p className="text-xs text-center italic text-yellow-900"> *Hình ảnh chỉ mang tính chất minh họa</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full text-yellow-200 font-semibold py-4">
                Không có món mới nào để hiển thị.
              </p>
            )}
          </div>
        </div>

        {/* Nút xem thực đơn */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setLocation("/menu")}
            className="bg-yellow-400 border border-black text-black px-8 py-3 rounded hover:bg-yellow-300 font-semibold"
          >
            XEM THỰC ĐƠN
          </button>
        </div>
      </div>
    </section>
  );
}

// ===========================
// Trang chính
// ===========================
export default function MainPage() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/anh-go7.jpg')" }}
    >
      <VuonBia />
      <MonNgonMoiRaLo />
    </div>
  );
}
