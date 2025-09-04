import { useEffect, useState } from "react";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4 overflow-auto">
      <div className="relative w-full max-w-[90vw] max-h-[90vh]">
        {/* nút đóng */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white text-3xl z-10"
          aria-label="Đóng popup"
        >
          &times;
        </button>

        {/* ảnh ưu đãi */}
        <img
          src="BIA.jpg" // Đường dẫn ảnh bạn muốn dùng
          alt="Popup Ưu Đãi"
          className="w-full h-auto object-contain rounded-lg shadow-xl"
          style={{ maxHeight: '90vh' }}
        />
      </div>
    </div>
  );
}
