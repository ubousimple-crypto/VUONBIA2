import React, { useState, useEffect } from 'react';

function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("hasShownPopup");

    if (!hasShown) {
      setIsVisible(true); // hiện popup khi vào tab mới
      sessionStorage.setItem("hasShownPopup", "true");
    }
  }, []);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
        {/* Popup content */}
        <div className="relative pointer-events-auto w-[400px] max-w-[90vw] max-h-[80vh] overflow-auto rounded-lg shadow-lg p-4">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-black border-2 border-white bg-opacity-70 rounded-full hover:bg-opacity-90"
            aria-label="Close popup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Popup image */}
          <img
            src="BIA.jpg"
            alt="Promo"
            className="w-full object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default PromoPopup;
