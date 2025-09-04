import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import NewDishesSection from "@/components/new-dishes-section";
import LocationsSection from "@/components/locations-section";
import Footer from "@/components/footer";
import BookingModal from "@/components/booking-modal";
import PromoPopup from "@/components/PromoPopup";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-white">
       <PromoPopup /> 
      <Header 
        isScrolled={isScrolled} 
        onBookingClick={openBookingModal}
        data-testid="header-main"
      />
      <HeroSection 
        onBookingClick={openBookingModal}
        data-testid="hero-section"
      />
      <NewDishesSection data-testid="new-dishes-section" />
      <LocationsSection 
        onBookingClick={openBookingModal}
        data-testid="locations-section"
      />
      <Footer data-testid="footer-main" />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        data-testid="booking-modal"
      />
    </div>
  );
}
