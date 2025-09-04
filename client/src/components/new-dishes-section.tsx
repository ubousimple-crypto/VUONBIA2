import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { newDishes } from "@/lib/data";
import { useLocation } from "wouter";

// Component VuonBia - giới thiệu và carousel ảnh
export function VuonBia() {
  // Khởi tạo embla carousel với loop, dragFree
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  useEffect(() => {
    if (!emblaApi) return;

    // Tự động chuyển slide mỗi 3s
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Danh sách ảnh carousel
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
      {/* Flex container 2 cột trên lg */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Cột text bên trái */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p
            className="text-sm font-extrabold uppercase tracking-widest text-yellow-500 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Welcome to
          </p>
          <h2
            className="text-5xl font-extrabold leading-tight text-green-800 drop-shadow-md"
            style={{ fontFamily: "'Bebas Neue', 'SVN-Bangla', 'sans-serif'" }}
          >
            VƯỜN BIA
          </h2>

          <p className="italic text-lg mb-6 flex items-center gap-2">
            <span className="text-yellow-900 font-semibold">
              “Ăn uống thả ga - Cùng chill siêu đã 🍻”
            </span>
          </p>

          <p className="mb-4 text-black font-semibold italic ">
            📍 Giữa lòng Long Xuyên nhộn nhịp, có một chỗ tụ tập lý tưởng cho mấy
            “chiến hữu” thích lai rai, mê đồ nhậu ngon, bia mát lạnh – đó là Vườn
            Bia!
          </p>

          <p className="mb-6 font-semibold italic text-black leading-relaxed">
            Không phải kiểu quán sang chảnh, cũng chẳng phải lề đường bụi bặm –
            Vườn Bia mang đến <strong>trải nghiệm nhậu đúng chất</strong>:{" "}
            <strong>bia tươi, mồi bén, không gian chill</strong> – ngồi là không
            muốn về!
          </p>
        </div>

        {/* Cột carousel + nút bên phải */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Carousel */}
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
                  <img
                    src={src}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nút XEM THÊM */}
          <button
            className="bg-yellow-400 text-black border-2 border-black px-6 py-3 rounded hover:bg-yellow-300 transition font-semibold mb-4 max-w-[200px]"
          >
            XEM THÊM
          </button>

          {/* Nút ĐẶT BÀN (số điện thoại) */}
          <a
            href="tel:0783885288"
            className="flex items-center space-x-2 text-red-700 font-bold text-base md:text-lg underline hover:text-green-800"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <mask id="ipSPhoneCall0">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    d="M41.78 20.607a13.06 13.06 0 0 0-.25-5.102a12.939 12.939 0 0 0-3.415-6.018a12.94 12.94 0 0 0-6.018-3.416a13.068 13.068 0 0 0-5.102-.249m7.195 13.981a5.991 5.991 0 0 0-1.692-5.132a5.991 5.991 0 0 0-5.132-1.691"
                  />
                  <path
                    fill="#fff"
                    d="M14.376 8.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848h5.073Z"
                  />
                </g>
              </mask>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSPhoneCall0)"
              />
            </svg>
            <span>Đặt Bàn Ngay: 078 388 5288</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Component hiển thị các món mới ra lò
export function MonNgonMoiRaLo() {
  const [, setLocation] = useLocation();

  // Lọc món có category = "Món mới"
  const monMoi = (newDishes || []).filter((dish) => dish.category === "Món mới");

  // Khởi tạo embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Format số thành dạng tiền VND
  const formatPrice = (price: number) => price.toLocaleString("vi-VN") + " ₫";

  // Khi bấm nút Xem thực đơn chuyển trang
  const handleClick = () => {
    setLocation("/menu");
  };

  return (
    <section className="relative py-2 px-8 md:px-16 lg:px-24 text-white font-sans">
      <div className="relative z-10 max-w-full w-full mx-auto px-4">
        <h3
          className="text-4xl font-extrabold mb-6 text-center text-green-800"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Món mới ra lò
        </h3>

        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex gap-6">
            {monMoi?.length > 0 ? (
              monMoi.map((mon, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[0_0_60%] bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition"
                >
                  <img
                    src={mon.image}
                    alt={mon.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-center font-semibold text-gray-800">
                    <p className="text-lg mb-1">{mon.name}</p>
                    <p className="text-red-600 font-bold">{formatPrice(mon.price)}</p>
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

        <div className="flex justify-center mt-6">
          <button
            onClick={handleClick}
            className="bg-yellow-400 border border-black text-black px-8 py-3 rounded hover:bg-yellow-300 hover:text-black transition font-semibold"
          >
            XEM THỰC ĐƠN
          </button>
        </div>
      </div>
    </section>
  );
}

// Trang chính kết hợp VuonBia và MonNgonMoiRaLo
export default function MainPage() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/anh-go7.jpg')" }}
    >
      {/* Nội dung phủ lên */}
      <div className="relative">
        <VuonBia />
        <MonNgonMoiRaLo />
      </div>
    </div>
  );
}
