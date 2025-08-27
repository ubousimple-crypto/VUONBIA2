import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { locations, districts } from "@/lib/data";

interface LocationsSectionProps {
  onBookingClick: () => void;
}

export default function LocationsSection({ onBookingClick }: LocationsSectionProps) {
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const filteredLocations = selectedDistrict === "all" 
    ? locations 
    : locations.filter(location => location.district === selectedDistrict);

  return (
    <section id="co-so" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4" data-testid="locations-title">
            17 Cơ sở
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="locations-description">
            Quán Nhậu Tự Do tự hào khi có số lượng cơ sở khắp các quận cùng đội ngũ nhân viên nhiệt tình chu đáo sẵn sàng phục vụ quý thực khách.
          </p>
        </div>

        {/* District Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="district-filters">
          {districts.map((district) => (
            <Button
              key={district.id}
              onClick={() => setSelectedDistrict(district.id)}
              className={`font-semibold transition-all ${
                selectedDistrict === district.id
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
              }`}
              data-testid={`filter-${district.id}`}
            >
              {district.name} {district.count && <span className="text-sm">({district.count})</span>}
            </Button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="locations-grid">
          {filteredLocations.map((location, index) => (
            <Card 
              key={index}
              className="location-card bg-white rounded-xl overflow-hidden shadow-lg"
              data-testid={`location-card-${index}`}
            >
              <div className="relative">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-48 object-cover"
                  data-testid={`location-image-${index}`}
                />
                <Badge 
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  data-testid={`location-status-${index}`}
                >
                  <Clock className="w-3 h-3 mr-1" />
                  ĐANG MỞ
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`location-name-${index}`}>
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`location-description-${index}`}>
                  {location.description}
                </p>
                <div className="space-y-2">
                  <Button 
                    onClick={onBookingClick}
                    className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    data-testid={`button-booking-${index}`}
                  >
                    Đặt bàn ngay
                  </Button>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                      data-testid={`button-map-${index}`}
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Xem bản đồ
                    </Button>
                    <Button 
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                      data-testid={`button-details-${index}`}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
