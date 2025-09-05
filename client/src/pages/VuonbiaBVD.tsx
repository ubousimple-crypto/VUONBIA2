// src/pages/VuonBiaBVD.tsx

import Header from "@/components/header";
import Footer from "@/components/footer";
  function Breadcrumb() {
    return (
      <nav className="text-gray-500 text-sm font-semibold mb-4 px-4">
        <ul className="flex items-center space-x-2">
          <li>
            <a href="/" className="hover:underline">Trang Chủ</a>
          </li>
          <li className="select-none">›</li> {/* dấu mũi tên */}
          <li>
            <a href="/menu" className="hover:underline">Menu</a>
          </li>
          <li className="select-none">›</li> {/* dấu mũi tên */}
          <li>
            <a href="/sinh-nhat" className="hover:underline"> Sinh Nhật</a>
          </li>
          <li className="select-none">›</li> {/* dấu mũi tên */}
          <li>
            <a href="/vuon-bia-ly-thai-to" className="hover:underline">Vườn Bia - LTT</a>
          </li>
          <li className="select-none">›</li> {/* dấu mũi tên */}
          <li>
            <a href="/vuon-bia-bui-van-danh" className="hover:underline">Vườn Bia - BVD</a>
          </li>
        </ul>
      </nav>
    );
  }
function VuonbiaBVD() {
  return (
    <>
      <Header isScrolled={false} onBookingClick={() => {}} />

      <section className="text-green-900 pt-24 pb-12 px-4 font-sans">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
           <Breadcrumb />

          {/* Ngày đăng */}
          <p className="text-sm text-gray-500 mb-2">05/09/2025</p>

          {/* Tiêu đề */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            VƯỜN BIA – BỜ KÈ BÙI VĂN DANH "CHILL BÊN SÔNG, KARAOKE HẾT MÌNH"
          </h1>

          {/* Tag */}
          <span className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
            KHÔNG GIAN CHILL - KARAOKE - SINH NHẬT
          </span>

          {/* Giới thiệu */}
          <p className="mb-4 text-lg leading-relaxed">
            Nếu bạn đang tìm kiếm một địa điểm tổ chức tiệc sinh nhật, tụ họp bạn bè hay đơn giản là chill nhẹ sau giờ làm, thì <strong className="text-yellow-600">Vườn Bia – Bờ Kè Bùi Văn Danh</strong> là gợi ý không thể bỏ qua. Với không gian bên sông thoáng mát, món ăn hấp dẫn và phòng lạnh có karaoke riêng tư – nơi đây chắc chắn sẽ mang đến trải nghiệm khó quên.
          </p>

          {/* Ảnh ngoài trời về đêm */}
          <div className="mb-6">
            <img
              src="/BVD-TOI.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Không gian ngoài trời chill bên sông về đêm – Vườn Bia BVD
            </p>
          </div>

          {/* Không gian chill */}
          <h2 className="text-xl font-bold mb-2 mt-6">🏞️ Chill bên sông – Gió mát, view đẹp</h2>
          <p className="mb-4 leading-relaxed">
            Nằm sát bờ kè, không gian ngoài trời của quán tạo cảm giác thư thái, thoải mái. Bàn ghế gỗ đẹp mắt, đèn tre treo cao mang phong cách chill nhẹ, cực hợp với các buổi tiệc sinh nhật, liên hoan bạn bè.
          </p>

          <ul className="list-disc ml-6 mb-4 leading-relaxed">
            <li>Gió mát tự nhiên từ sông</li>
            <li>Không gian mở rộng rãi, thoáng đãng</li>
            <li>View đẹp từ chiều đến tối – sống ảo cực chất</li>
          </ul>

          {/* Ảnh sinh nhật */}
          <div className="mb-6">
            <img
              src="/SN-BVD.jpg"
              alt="Tiệc sinh nhật ngoài trời tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc sinh nhật ngoài trời – Setup đẹp, phục vụ tận tâm
            </p>
          </div>

          {/* Món ăn & bia */}
          <h2 className="text-xl font-bold mb-2 mt-6">🍢 Món ngon – Bia mát – Combo hoàn hảo</h2>
          <p className="mb-4 leading-relaxed">
            Vườn Bia phục vụ đa dạng món nhậu từ hải sản, thịt nướng, gỏi cho đến lẩu nóng hổi. Bia luôn được ướp lạnh sẵn, kết hợp cùng đồ ăn cực bắt vị – quá lý tưởng cho một buổi chill!
          </p>

          <div className="mb-6">
            <img
              src="/MONAN.jpg"
              alt="Món ăn và bia tại Vườn Bia"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Đồ ăn ngon, bia mát lạnh – chỉ có tại Vườn Bia BVD
            </p>
          </div>

          {/* Phòng lạnh riêng có karaoke */}
          <h2 className="text-xl font-bold mb-2 mt-6">❄️ Phòng lạnh riêng tư – Có karaoke cực đã</h2>
          <p className="mb-4 leading-relaxed">
            Nếu bạn muốn không gian riêng tư, yên tĩnh hoặc muốn “cháy hết mình” cùng bạn bè, Vườn Bia còn có phòng lạnh riêng biệt, có sẵn hệ thống karaoke chất lượng cao.
          </p>

          <ul className="list-disc ml-6 mb-4 leading-relaxed">
            <li>Máy lạnh hoạt động mạnh – mát mẻ cả buổi</li>
            <li>Karaoke sẵn sàng – mic xịn, hát vui</li>
            <li>Trang trí theo yêu cầu – sinh nhật hay tất niên đều hợp</li>
          </ul>

          <div className="mb-6">
            <img
              src="/VB-PL.jpg"
              alt="Phòng lạnh riêng tư tại Vườn Bia"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Phòng lạnh riêng – hát karaoke, tổ chức tiệc, rất tiện nghi
            </p>
          </div>

          {/* Call to action */}
          <h2 className="text-xl font-bold mb-2 mt-6">📞 Đặt bàn ngay – Giữ chỗ trước kẻo full</h2>
          <p className="mb-6 leading-relaxed">
            Gọi ngay để được giữ chỗ, tư vấn setup và nhận <strong>trang trí sinh nhật miễn phí</strong>!
          </p>

          <div className="text-center mt-8">
            <a
              href="tel:0783885288"
              className="bg-yellow-400 hover:bg-yellow-300 transition px-6 py-3 rounded-full font-bold text-black shadow inline-block"
            >
              📞 Gọi đặt bàn ngay: 078 388 5288
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default function MainPage() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/anh-go7.jpg')" }}
    >
      <VuonbiaBVD />
    </div>
  );
}





