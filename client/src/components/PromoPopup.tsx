import { useEffect, useState } from "react";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="relative w-full max-w-[90vw] md:max-w-[600px]">
        <button
          className="absolute top-2 right-2 text-white text-3xl z-10"
          onClick={() => setIsVisible(false)}
        >
          &times;
        </button>
        <img
          src="BIA.jpg" // Đường dẫn ảnh bạn muốn dùng
          alt="Popup Ưu Đãi"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
