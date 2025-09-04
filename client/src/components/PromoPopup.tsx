import React, { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay nền mờ full màn hình */}
      <div className="fixed inset-0 z-40 bg-black bg-opacity-60"></div>

      {/* Popup full màn hình */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-auto p-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-black text-3xl font-bold"
          aria-label="Đóng popup"
        >
          &times;
        </button>
        <img
          src="BIA.jpg"
          alt="Popup Ưu Đãi"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </>
  );
}
