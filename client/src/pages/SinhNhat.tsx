import Header from "../components/header";
import Footer from "../components/footer";

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
        <li className="select-none">›</li> {/* dấu mũi tên */}
        <li>
          <a href="/vuon-bia-ly-thai-to" className="hover:underline">Vườn Bia - LTT</a>
        </li>
        <li className="select-none">›</li> {/* dấu mũi tên */}
        <li>
          <a href="/vuon-bia-bui-van-danh" className="hover:underline">Vườn Bia - BVD</a>
        </li>
        <li className="select-none">›</li>
        <li>
          <a href="/sinh-nhat" className="hover:underline">Sinh Nhật</a>
        </li>
      </ul>
    </nav>
  );
}

function SinhNhatPage() {
  return (
    <>
      <Header isScrolled={false} onBookingClick={() => {}} />

      <section className="text-green-900 pt-24 pb-12 px-4 font-sans">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb />

          <p className="text-sm text-gray-500 mb-2">04/09/2025</p>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            SINH NHẬT CHẤT, TIỆC TẤT NIÊN SIÊU VUI & YEAR ONE PARTY RỰC RỠ TẠI VƯỜN BIA – DECOR MIỄN PHÍ CHỈ CÓ TẠI ĐÂY!
          </h1>

          <span className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
            SINH NHẬT - TẤT NIÊN - YEAR ONE PARTY
          </span>

          <p className="mb-4 text-lg leading-relaxed">
            Bạn muốn tổ chức một bữa tiệc sinh nhật để đời? Hay một buổi tiệc tất niên sôi động? Hay thậm chí là Year One Party đầy ý nghĩa? <strong>Vườn Bia</strong> chính là điểm đến không thể bỏ qua! Đặc biệt, khi tổ chức sinh nhật tại đây, bạn sẽ được <strong>MIỄN PHÍ decor cực xinh xắn</strong> với bóng bay, banner và backdrop cực chất – giúp bạn thoải mái “sống ảo” và ghi dấu khoảnh khắc đáng nhớ mà không tốn thêm đồng nào cho trang trí.
          </p>
          <div className="mb-6">
            <img
              src="SINHNHAT/SN-8.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc sinh nhật tại Vườn Bia - Bờ Kè Bùi Văn Danh
            </p>
          </div>

          <h2 className="text-xl font-bold mb-2 mt-6">🎉 Decor sinh nhật miễn phí – Chỉ có tại Vườn Bia!</h2>
          <p className="mb-4 leading-relaxed">
            Hãy tưởng tượng một không gian được trang trí ngập tràn bóng bay đủ màu sắc, backdrop siêu “xịn xò” và banner chúc mừng rực rỡ – tất cả đều miễn phí khi bạn đặt tiệc sinh nhật tại Vườn Bia. Chúng tôi lo phần trang trí, bạn chỉ cần đến và tận hưởng niềm vui cùng bạn bè và gia đình!
          </p>
          <div className="mb-6">
            <img
              src="SINHNHAT/SN-3.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc sinh nhật tại Vườn Bia - Lý Thái Tổ 
            </p>
          </div>
          <div className="mb-6">
            <img
              src="SINHNHAT/SN-1.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc sinh nhật tại Vườn Bia - Bờ Kè Bùi Văn Danh
            </p>
          </div>
          <div className="mb-6">
            <img
              src="SINHNHAT/SN-2.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc sinh nhật tại Vườn Bia
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2 mt-6">✨ Tiệc tất niên & Year One Party – Không gian siêu “cháy”</h2>
          <p className="mb-4 leading-relaxed">
            Ngoài sinh nhật, Vườn Bia còn là lựa chọn tuyệt vời để bạn tổ chức tiệc tất niên và Year One Party đậm chất “quẩy”. Không gian rộng rãi, âm nhạc sôi động, bia tươi mát lạnh và phục vụ tận tình sẽ biến bữa tiệc của bạn thành sự kiện đáng nhớ nhất năm!
          </p>
          <div className="mb-6">
            <img
              src="SINHNHAT/TATNIEN.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc tất niên Vườn Bia -Lý Thái Tổ
            </p>
          </div>
          <div className="mb-6">
            <img
              src="SINHNHAT/SN-6.jpg"
              alt="Không gian ngoài trời chill tại Bùi Văn Danh"
              className="w-full object-cover max-h-[400px] rounded"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc Year One Party Vườn Bia -Lý Thái Tổ
            </p>
          </div>

          <h2 className="text-xl font-bold mb-2 mt-6">❄️ Phòng lạnh riêng tư – Có karaoke, không gian lý tưởng cho buổi tiệc</h2>
          <p className="mb-4 leading-relaxed">
            Muốn một không gian yên tĩnh, mát mẻ và có thể hát hò thả ga? Phòng lạnh riêng biệt tại Vườn Bia được trang bị hệ thống karaoke hiện đại, sẵn sàng phục vụ cho những bữa tiệc sinh nhật hoặc tụ họp thân mật của bạn. Máy lạnh luôn hoạt động, không gian sang trọng và trang trí linh hoạt theo ý muốn – đảm bảo bữa tiệc riêng tư của bạn sẽ hoàn hảo đến từng chi tiết.
          </p>

          <div className="mb-6">
            <img
              src="SINHNHAT/SN-5.jpg"
              alt="Phòng lạnh tại Vườn Bia"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Phòng lạnh riêng tư có karaoke 
            </p>
          </div>

          <h2 className="text-xl font-bold mb-2 mt-6">🍽️ Món ăn đa dạng</h2>
          <p className="mb-4 leading-relaxed">
            Tại Vườn Bia, thực đơn phong phú với các món nhậu đặc sắc, từ hải sản tươi ngon, thịt nướng thơm lừng đến các món ăn nhẹ hợp vị. Mỗi món ăn đều được chế biến cầu kỳ, đảm bảo làm hài lòng cả những thực khách khó tính nhất.
          </p>
          <div className="mb-6">
            <img
              src="MONAN.jpg"
              alt="Phòng lạnh tại Vườn Bia"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2 mt-6">📞 Đừng chần chừ – Gọi ngay để nhận ưu đãi và đặt bàn!</h2>
          <p className="mb-6 leading-relaxed">
            Nhanh tay gọi đến{" "}
            <a href="tel:0783885288" className="text-red-600 font-semibold underline">
              078 388 5288
            </a>{" "}
            để được tư vấn chi tiết về gói decor sinh nhật miễn phí, cũng như các dịch vụ hỗ trợ tổ chức tiệc tất niên, Year One Party và phòng lạnh karaoke chuyên nghiệp tại Vườn Bia.
          </p>

          <div className="text-center mt-8">
            <a
              href="tel:0783885288"
              className="bg-yellow-400 hover:bg-yellow-300 transition px-6 py-3 rounded-full font-bold text-black shadow inline-block"
            >
              📞 Gọi ngay – Đặt tiệc tại Vườn Bia!
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
      <SinhNhatPage />
    </div>
  );
}
