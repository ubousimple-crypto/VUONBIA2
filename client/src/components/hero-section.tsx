import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="hero-parallax min-h-screen flex items-center justify-center text-white">
      <div className="hero-content container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <h2 className="text-6xl lg:text-8xl font-light tracking-wider" data-testid="hero-title">
            <span className="block">Không có gì</span>
            <span className="block text-secondary font-bold">quý</span>
          </h2>
          <h3 className="text-4xl lg:text-6xl font-light" data-testid="hero-subtitle">
            <span className="block">Tự do là</span>
            <span className="block text-secondary font-bold">hạnh phúc</span>
          </h3>
          <p className="text-2xl lg:text-3xl font-light opacity-90" data-testid="hero-tagline">
            tự do trong thế giới của ta
          </p>
          <div className="pt-8">
            <Button 
              onClick={onBookingClick}
              className="bg-secondary text-primary px-12 py-4 rounded-lg text-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105"
              data-testid="button-booking-hero"
            >
              ĐẶT BÀN NGAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
