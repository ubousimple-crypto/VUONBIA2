import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/BVD/3.jpg",
  "/BVD/1.jpg",
  "/BVD/2.jpg",
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // ✅ Auto-scroll every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // 3s

    return () => clearInterval(interval); // cleanup when unmounted
  }, [emblaApi]);

  return (
    <section className="relative w-full" style={{ paddingTop: "64px" }}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroImages.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] relative">
              <img
                src={src}
                alt={`Hero ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
