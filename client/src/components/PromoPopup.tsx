import { useState, useEffect } from "react";

export default function PromoPopup() {
  const [show, setShow] = useState(true); // Mặc định hiện popup

  // Auto đóng popup sau 10 giây (tùy chọn)
  // useEffect(() => {
  //   const timer = setTimeout(() => setShow(false), 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="relative max-w-3xl w-full">
        {/* Nút đóng */}
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-200 z-50"
          onClick={() => setShow(false)}
        >
          <span className="text-xl font-bold">&times;</span>
        </button>

        {/* Ảnh nội dung */}
        <img
          src="BIA.jpg" // Đường dẫn ảnh bạn muốn dùng
          alt="Popup quảng cáo"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
