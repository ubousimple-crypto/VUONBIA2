// src/pages/VuonBiaLTT.tsx

import Header from "@/components/header";
import Footer from "@/components/footer";

function Breadcrumb() {
  return (
    <nav className="text-gray-500 text-sm font-semibold mb-4 px-4">
      <ul className="flex items-center space-x-2">
        <li>
          <a href="/" className="hover:underline">Trang Chủ</a>
        </li>
        <li className="select-none">›</li>
        <li>
          <a href="/menu" className="hover:underline">Menu</a>
        </li>
        <li className="select-none">›</li>
        <li>
          <a href="/sinh-nhat" className="hover:underline">Sinh Nhật</a>
        </li>
        <li className="select-none">›</li> {/* dấu mũi tên */}
        <li>
          <a href="/vuon-bia-bui-van-danh" className="hover:underline">Vườn Bia - BVD</a>
        </li>
        <li className="select-none">›</li>
        <li>
          <a href="/vuon-bia-ly-thai-to" className="hover:underline">Vườn Bia - LTT</a>
        </li>
        
      </ul>
    </nav>
  );
}

function VuonbiaLTT() {
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
            VƯỜN BIA LÝ THÁI TỔ "KHÔNG GIAN CHILL ĐỘC ĐÁO" 
          </h1>

          {/* Tag */}
          <span className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
            QUÁN NHẬU VIEW ĐẸP LONG XUYÊN 
          </span>

          {/* Giới thiệu */}
          <p className="mb-4 text-lg leading-relaxed">
            <strong className="text-yellow-600">Vườn Bia Lý Thái Tổ</strong> nổi bật với phong cách thiết kế hiện đại độc đáo, mang đến một không gian thoáng đãng, mộc mạc mà không kém phần hiện đại. Đây là nơi lý tưởng để bạn cùng bạn bè, đồng nghiệp tận hưởng những giây phút thư giãn bên ly bia mát lạnh, đắm mình trong không khí ấm cúng và vui nhộn.
          </p>

          {/* Ảnh không gian */}
          <div className="mb-6">
            <img
              src="/VB-LTT2.jpg"
              alt="Không gian Vườn Bia Lý Thái Tổ về đêm"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Không gian Vườn Bia Lý Thái Tổ về đêm 
            </p>
          </div>

          {/* Không gian chi tiết */}
          <h2 className="text-xl font-bold mb-2 mt-6">🏙️ Không gian hiện đại và mát mẻ</h2>
          <p className="mb-4 leading-relaxed">
            Với hệ thống mái che hiện đại và những bức tường tôn gỉ độc đáo, quán mang đến cảm giác gần gũi với thiên nhiên mà vẫn giữ được sự mộc mạc, tinh tế. Bàn ghế gỗ phối khung sắt đen chắc chắn, kết hợp với ánh sáng vàng dịu nhẹ từ dây đèn led, tạo nên bầu không khí lý tưởng cho mọi cuộc gặp gỡ.
          </p>

          <ul className="list-disc ml-6 mb-4 leading-relaxed">
            <li>Mái che trong suốt, không gian mở, thoáng đãng</li>
            <li>Bức tường trang trí tranh tường độc đáo, nghệ thuật</li>
            <li>Hệ thống ánh sáng ấm áp, thân thiện cho buổi tối chill</li>
          </ul>

          {/* Ảnh bàn ghế */}
          <div className="mb-6">
            <img
              src="/VB-LTT.jpg"
              alt="Bàn ghế và trang trí tại Vườn Bia Lý Thái Tổ"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Bàn ghế gỗ và không gian được chăm chút tỉ mỉ tại Vườn Bia Lý Thái Tổ
            </p>
          </div>

          {/* Món ăn và bia */}
          <h2 className="text-xl font-bold mb-2 mt-6">🍻 Bia tươi mát lạnh – Món ngon phong phú</h2>
          <p className="mb-4 leading-relaxed">
            Tại đây, bạn sẽ được thưởng thức các loại bia tươi chất lượng cao, được ướp lạnh hoàn hảo. Các món nhậu đa dạng, từ hải sản tươi sống đến các món nướng thơm ngon, đều được chế biến cầu kỳ, đảm bảo làm hài lòng cả những thực khách khó tính nhất.
          </p>
          <div className="mb-6">
            <img
               src="/MONAN.jpg"
              alt="Không gian Vườn Bia Lý Thái Tổ về đêm"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Không gian Vườn Bia Lý Thái Tổ về đêm 
            </p>
          </div>
          {/* Call to action */}
          <h2 className="text-xl font-bold mb-2 mt-6">📞 Đặt bàn ngay – Trải nghiệm không gian độc đáo</h2>
          <p className="mb-6 leading-relaxed">
            Đừng bỏ lỡ cơ hội trải nghiệm không gian độc đáo, phong cách khác biệt tại <strong>Vườn Bia Lý Thái Tổ</strong>. Liên hệ ngay để được tư vấn và giữ chỗ nhanh chóng!
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
      <VuonbiaLTT />
    </div>
  );
}
