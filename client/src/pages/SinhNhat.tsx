import Header from "../components/header";
import Footer from "../components/footer";

function SinhNhatPage() {
  return (
    <>
      <Header isScrolled={false} onBookingClick={() => {}} />

      <section className="text-green-900 pt-24 pb-12 px-4 font-sans">
        <div className="max-w-3xl mx-auto">
          {/* Ngày đăng */}
          <p className="text-sm text-gray-500 mb-2">04/09/2025</p>

          {/* Tiêu đề lớn */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            VƯỜN BIA – TỔ CHỨC TIỆC SINH NHẬT CHẤT NHƯ NƯỚC CẤT
          </h1>

          {/* Tag */}
          <span className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
            TIỆC SINH NHẬT - TẤT NIÊN
          </span>

          {/* Mở đầu */}
          <p className="mb-4 text-lg leading-relaxed">
            Bạn đang tìm kiếm một địa điểm vừa chill, vừa vui, vừa có không gian lý tưởng để tổ chức sinh nhật tại Long Xuyên? <strong className="text-yellow-600">Vườn Bia</strong> chính là lựa chọn số 1 với
            <strong> 2 chi nhánh nổi bật:</strong> <br />
            📍 <strong>Lý Thái Tổ</strong> – sôi động, dễ tìm giữa trung tâm <br />
            📍 <strong>Bờ Kè Bùi Văn Danh</strong> – chill bên sông, không gian mở cực chất
          </p>

          {/* Ảnh 1 */}
          <div className="mb-6">
            <img
              src="BVD-TOI.jpg"
              alt="Không gian ngoài trời tại chi nhánh Bờ Kè"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Không gian ngoài trời chill tại Vườn Bia – Bờ Kè Bùi Văn Danh về đêm
            </p>
          </div>

          {/* Không gian ngoài trời */}
          <h2 className="text-xl font-bold mb-2 mt-6">🏞️ Không gian ngoài trời – Chill hết cỡ</h2>
          <p className="mb-4 leading-relaxed">
            Khu vực ngoài trời rộng rãi, thoáng mát với view sông tuyệt đẹp, rất phù hợp cho các buổi tiệc sinh nhật hay tụ họp bạn bè đông người.
          </p>
          <ul className="list-disc ml-6 mb-4 leading-relaxed">
            <li>Không khí trong lành, mát mẻ bên sông</li>
            <li>Bàn ghế rộng rãi, thoải mái cho nhóm lớn</li>
            <li>Background check-in cực chất từ chiều đến tối</li>
          </ul>

          {/* Ảnh 2 */}
          <div className="mb-6">
            <img
              src="SN-BVD.jpg"
              alt="Không gian tổ chức sinh nhật tại chi nhánh Bờ Kè"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Tiệc sinh nhật chill tại Vườn Bia – Bờ Kè Bùi Văn Danh
            </p>
          </div>

          {/* Không gian đèn vàng */}
          <h2 className="text-xl font-bold mb-2 mt-6">🪩 Góc sân vườn decor đèn vàng – Ấm cúng & riêng tư</h2>
          <p className="mb-4 leading-relaxed">
            Khu vực sân vườn với ánh đèn vàng ấm áp, decor bằng tường gỗ, đèn LED và slogan neon là không gian lý tưởng cho các bữa tiệc thân mật, hẹn hò hoặc tụ tập bạn bè nhỏ gọn.
          </p>
          <p className="mb-4 leading-relaxed">
            Không gian này mang lại sự riêng tư và ánh sáng lung linh, tạo nên khung hình đẹp mê ly cho mọi khoảnh khắc của bạn.
          </p>

          {/* Ảnh 3 */}
          <div className="mb-6">
            <img
              src="VB-LTT.jpg"
              alt="Không gian đèn vàng tại Vườn Bia"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Không gian đèn vàng ấm áp tại Vườn Bia – Lý Thái Tổ
            </p>
          </div>

          {/* Decor miễn phí */}
          <h2 className="text-xl font-bold mb-2 mt-6">🎈 Decor sinh nhật miễn phí – Có 1-0-2</h2>
          <p className="mb-4 leading-relaxed">
            Đặt bàn tại Vườn Bia, bạn sẽ được miễn phí gói trang trí sinh nhật gồm bóng bay, banner, backdrop,... Đội ngũ sẽ chuẩn bị chu đáo để bạn chỉ cần đến vui chơi.
          </p>

          {/* Ảnh decor */}
          <div className="mb-6">
            <img
              src="SN-LTT.jpg"
              alt="Không gian tổ chức sinh nhật tại Vườn Bia"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Không gian sinh nhật đẹp lung linh tại Vườn Bia – Lý Thái Tổ
            </p>
          </div>

          {/* Phòng lạnh */}
          <h2 className="text-xl font-bold mb-2 mt-6">❄️ Phòng lạnh riêng tư – Mát mẻ, sang trọng</h2>
          <p className="mb-4 leading-relaxed">
            Vườn Bia còn có phòng lạnh riêng biệt, dành cho nhóm khách thích không gian yên tĩnh và mát mẻ, phù hợp tổ chức sinh nhật, tiệc công ty hoặc họp mặt gia đình.
          </p>
          <ul className="list-disc ml-6 mb-4 leading-relaxed">
            <li>Không gian kín, máy lạnh hoạt động liên tục</li>
            <li>Bàn ghế gọn gàng, sạch sẽ</li>
            <li>Trang trí linh hoạt theo yêu cầu khách</li>
          </ul>

          <div className="mb-6">
            <img
              src="VB-PL.jpg"
              alt="Phòng lạnh tại Vườn Bia"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Phòng lạnh riêng tư tại Vườn Bia cho tiệc sinh nhật
            </p>
          </div>

          {/* Không gian chung */}
          <h2 className="text-xl font-bold mb-2 mt-6">🍻 Không gian chill – Mồi bén, bia mát lạnh</h2>
          <p className="mb-4 leading-relaxed">
            Cả hai chi nhánh đều được thiết kế thoáng đãng, bàn ghế thoải mái, ánh sáng đẹp và phục vụ các món nhậu hấp dẫn, bia mát lạnh sẵn sàng làm nóng không khí bữa tiệc.
          </p>
          <div className="mb-6">
            <img
              src="MONAN.jpg"
              alt="Món ăn ngon tại Vườn Bia"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-sm italic text-center text-gray-600 mt-2">
              Món ăn đa dạng, bia tươi mát lạnh tại Vườn Bia
            </p>
          </div>

          {/* Đặt bàn */}
          <h2 className="text-xl font-bold mb-2 mt-6">📞 Đặt bàn dễ dàng – Phục vụ tận tâm</h2>
          <p className="mb-6 leading-relaxed">
            Chỉ cần gọi đến{" "}
            <a
              href="tel:0783885288"
              className="text-red-600 font-semibold underline"
            >
              078 388 5288
            </a>{" "}
            bạn sẽ được hỗ trợ đặt bàn và chuẩn bị chu đáo cho bữa tiệc sinh nhật tại Vườn Bia.
          </p>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="tel:0783885288"
              className="bg-yellow-400 hover:bg-yellow-300 transition px-6 py-3 rounded-full font-bold text-black shadow inline-block"
            >
              📞 Gọi ngay để đặt tiệc sinh nhật tại Vườn Bia!
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
