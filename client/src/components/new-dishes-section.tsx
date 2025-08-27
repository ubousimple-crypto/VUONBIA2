import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { newDishes } from "@/lib/data";

export default function NewDishesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 1280px)": { slidesToScroll: 4 },
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section id="thuc-don" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="dishes-title">
            Món mới ra lò
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef} data-testid="dishes-carousel">
            <div className="flex">
              {newDishes.map((dish, index) => (
                <div key={index} className="flex-[0_0_280px] min-w-0 mr-5">
                  <Card className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-48 object-cover"
                      data-testid={`dish-image-${index}`}
                    />
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2" data-testid={`dish-name-${index}`}>
                        {dish.name}
                      </h3>
                      <p className="text-2xl font-bold text-secondary mb-4" data-testid={`dish-price-${index}`}>
                        {dish.price.toLocaleString()}đ
                      </p>
                      <Button 
                        className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        data-testid={`button-order-${index}`}
                      >
                        Đặt
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <Button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-secondary/90 transition-all"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-secondary/90 transition-all"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-transparent border-2 border-secondary text-secondary px-12 py-4 rounded-lg text-lg font-bold hover:bg-secondary hover:text-primary transition-all"
            data-testid="button-view-menu"
          >
            XEM THỰC ĐƠN
          </Button>
        </div>
      </div>
    </section>
  );
}
