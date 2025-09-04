import React, { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000); // Hiện popup sau 2s
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay nền mờ full màn hình */}
      <div className="fixed inset-0 z-40 bg-black bg-opacity-60"></div>

      {/* Popup canh giữa màn hình, kích thước vừa phải */}
      <div className="fixed top-1/2 left-1/2 z-50 w-[700px] max-w-[90vw] max-h-[90vh] overflow-auto -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-black text-2xl font-bold"
          aria-label="Đóng popup"
        >
          &times;
        </button>
        <img
          src="BIA.jpg" // Đường dẫn ảnh bạn muốn dùng
          alt="Popup Ưu Đãi"
          className="w-full h-auto max-h-[85vh] object-contain"
        />
      </div>
    </>
  );
}
