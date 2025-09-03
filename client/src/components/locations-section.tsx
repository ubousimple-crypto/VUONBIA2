import { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { locations } from "@/lib/data";
import { useLocation } from "wouter";

interface LocationsSectionProps {
  onBookingClick: () => void;
}

const createSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

function parseOpeningHours(openingHours: string) {
  const parts = openingHours.split("-");
  if (parts.length !== 2) return null;

  const [openStr, closeStr] = parts.map((s) => s.trim());

  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const open = toMinutes(openStr);
  const close = toMinutes(closeStr);

  return { open, close };
}

function isOpenNow(openingHours: string, currentTime: Date): boolean {
  const parsed = parseOpeningHours(openingHours);
  if (!parsed) return false;

  const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  if (parsed.close < parsed.open) {
    return nowMinutes >= parsed.open || nowMinutes < parsed.close;
  }

  return nowMinutes >= parsed.open && nowMinutes < parsed.close;
}

const mapLinks: Record<string, string> = {
  "Vườn Bia - Lý Thái Tổ": "https://www.google.com/maps/place/V%C6%AF%E1%BB%9CN+BIA+LONG+XUY%C3%8AN/@10.3746637,105.4362463,17z/data=!3m1!4b1!4m6!3m5!1s0x310a73ca03b1a245:0x2efc327802d26df!8m2!3d10.3746637!4d105.4388212!16s%2Fg%2F11tj56cm_r?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  "Vườn Bia - Bùi Văn Danh": "https://www.google.com/maps/place/V%C6%B0%E1%BB%9Dn+Bia+-+BVD/@10.386406,105.4271561,17z/data=!3m1!4b1!4m6!3m5!1s0x310a7379f74b8731:0x66a54707bf276bb1!8m2!3d10.386406!4d105.429731!16s%2Fg%2F11vbdzm0dx?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3Dz",
};

export default function LocationsSection({ onBookingClick }: LocationsSectionProps) {
  const [, setLocation] = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const branchDescriptions = [
    <>
      <span style={{ fontFamily: "'Roboto', 'Tahoma', 'Arial', sans-serif" }}>
        Không gian <span className="font-semibold text-yellow-700">nhộn nhịp sôi động</span> tại Lý Thái Tổ nối dài, Phường Long Xuyên, An Giang – nơi bạn có thể tụ tập bạn bè, thưởng thức bia mát lạnh và cảm nhận bầu không khí náo nhiệt.
      </span>
    </>,
    <>
      <span style={{ fontFamily: "'Roboto', 'Tahoma', 'Arial', sans-serif" }}>
        Thiên đường <span className="font-semibold text-yellow-700">sông nước yên bình</span> tại Lý Thái Tổ nối dài, Phường Long Xuyên, An Giang – tận hưởng không gian chill chill, thư giãn cùng cảnh đẹp thiên nhiên và những ly bia thơm ngon.
      </span>
    </>
  ];

  return (
    <section
      id="co-so"
      className="relative py-2 overflow-hidden"
      style={{
        backgroundImage: "url('/anh-go7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-opacity-90 rounded-xl shadow-xl p-8 space-y-4 font-serif border-yellow-700">
          {/* Giảm margin-bottom để chữ "Vườn Bia tự hào..." sát lên */}
          <p
            className="italic text-center text-yellow-900 font-semibold text-lg max-w-lg mx-auto font-serif"
            style={{
              fontFamily: "'Playfair Display', serif",
              marginTop: 0,
                marginBottom: "4px",
            }}
          >
            "Vườn Bia tự hào có 2 chi nhánh với phong cách riêng biệt để bạn lựa chọn, có phòng lạnh riêng tư thoải mái"
          </p>

          {locations.map((location, index) => {
            const openStatus = isOpenNow(location.openingHours, currentTime);
            const mapUrl = mapLinks[location.name] || "#";

            return (
              <div key={index} className="space-y-6">
                <div>
                  <p className="flex items-center text-green-800 font-extrabold text-2xl mb-4">
                    <span role="img" aria-label="pin" className="mr-4 text-3xl">
                      📍
                    </span>
                    <span className="mr-2">{`CHI NHÁNH ${index + 1}`}</span>
                    <span role="img" aria-label="beer" className="text-3xl">
                      🍺
                    </span>
                  </p>
                  {/* Thêm font-semibold để chữ đậm */}
                  <p className="text-gray-800 leading-relaxed text-base max-w-xl font-serif font-semibold">
                    {branchDescriptions[index]}
                  </p>
                </div>

                <Card className="overflow-hidden rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300 max-w-xl bg-yellow/90">
                  <div className="relative">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge
                      className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full shadow-sm flex items-center gap-1 ${
                        openStatus ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      {openStatus ? "ĐANG MỞ" : "CHƯA MỞ CỬA"}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{location.name}</h3>
                    <p className="text-yellow-700 font-semibold mb-2">{location.description.trim()}</p>
                    <p className="flex items-center gap-2 text-gray-600 text-sm mb-6">
                      <Clock className="w-5 h-5" />
                      <span>Giờ mở cửa: {location.openingHours.trim()}</span>
                    </p>

                    <div className="flex gap-4 flex-col sm:flex-row">
                      <Button
                        onClick={() => window.open(mapUrl, "_blank")}
                        className="flex-1 bg-green-200 hover:bg-green-500 text-gray-700 font-extrabold py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        Xem bản đồ
                      </Button>

                      <Button
                        onClick={() => setLocation(`/location/${createSlug(location.name)}`)}
                        className="flex-1 bg-yellow-100 hover:bg-yellow-300 text-yellow-900 font-extrabold py-3 rounded-lg transition-colors duration-300"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        Xem chi tiết
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
