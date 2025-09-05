// src/lib/data.ts

export type Location = {
  name: string;
  address: string;
  hotline: string;
  image: string;
  description: string;
  district: string;
};
export const newDishes = [
  // COMBO
  {
    name: "Combo 1",
    category: "Combo",
    price: 529000,
    image: "https://i.imgur.com/tbFMVvF.jpg",
    note: "Giò Heo Chiên Giòn\n Ếch Núp Lùm\n Lườn Ngỗng Sốt Tiêu Đen\n Chân Gà Rang Muối"
  },
  {
    name: "Combo 2",
    category: "Combo",
    price: 619000,
    image: "https://i.imgur.com/EYliPzL.jpg",
    note: "Gà Đốt Hỏa Diệm Sơn\n Cơm Chiên Hải Sản\n Rau Rừng Xào Tỏi\n Khô Mực Cháy Tỏi"
  },
  
  // KHÁI VỊ
  {
    name: "Khoai Cao Chiên Nước Mắm",
    category: "Khai vị",
    price: 69000,
    image: "KHAIVI/khoai-mon-chien-nuoc-mam.jpg",
     note: "",
  },
  {
    name: "Chả Giò Vườn Bia",
    category: "Khai vị",
    price: 89000,
    image: "KHAIVI/chagio.jpg",
     note: "",
  },
  {
    name: "Rau Rừng Xào Tỏi",
    category: "Khai vị",
    price: 79000,
    image: "KHAIVI/rau-rung-xao-toi.jpg"
  },
  {
    name: "Xà Lách Dầu Giấm",
    category: "Khai vị",
    price: 59000,
    image: "KHAIVI/salad-dau-giam.jpeg"
  },
  {
    name: "Xà Lách Dầu Giấm Trứng",
    category: "Khai vị",
    price: 79000,
    image: "KHAIVI/sa-lach-trung.jpg"
  },
  {
    name: "Tôm Khô - Củ Kiệu - Bách Thảo",
    category: "Khai vị",
    price: 109000,
    image: "KHAIVI/tom-kho-cu-kieu.jpg"
  },
  {
    name: "Tôm Khô Rang Muối",
    category: "Khai vị",
    price: 99000,
    image: "KHAIVI/tom-kho-rang-muoi.jpg"
  },
  {
    name: "Da Heo Chiên Nước Mắm",
    category: "Khai vị",
    price: 79000,
    image: "KHAIVI/da-heo-chien-nuoc-mam.jpg"
  },
  {
    name: "Đậu Hủ Chiên Giòn / Chiên Sả",
    category: "Khai vị",
    price: 59000,
    image: "KHAIVI/dau-hu-chien.jpg"
  },
  {
    name: "Đậu Hủ Trứng Chiên Giòn",
    category: "Khai vị",
    price: 59000,
    image: "KHAIVI/dau-hu-trung-chien.jpg"
  },
  {
    name: "Rau Luộc Thập Cẩm Khô Quẹt",
    category: "Khai vị",
    price: 109000,
    image: "KHAIVI/rau-luoc-kho-quet.jpg"
  },
  {
    name: "Rau Luộc Thập Cẩm Hồng Đào",
    category: "Khai vị",
    price: 109000,
    image: "KHAIVI/rau-trung.jpg"
  },
  {
    name: "Bắp Xào Hành",
    category: "Khai vị",
    price: 59000,
    image: "KHAIVI/bap-xao-hanh.jpg"
  },
  {
    name: "Bắp Xào Tôm Khô",
    category: "Khai vị",
    price: 99000,
    image: "KHAIVI/bap-xao-tom-kho.jpg"
  },
  {
    name: "Khoai Tây Chiên Giòn",
    category: "Khai vị",
    price: 59000,
    image: "KHAIVI/khoai-tay-chien.jpg"
  },
  {
    name: "Khô Mực Cháy Tiêu/ Nướng Mọi",
    category: "Khai vị",
    price: 109000,
    image: "KHAIVI/kho-muc-chay-tieu.jpg"
  },
  {
    name: "Các Chạch 1 Nắng Chiên Giòn",
    category: "Khai vị",
    price: 129000,
    image: "KHAIVI/ca-chach-chien.jpg"
  },
  {
    name: "Khô Cá Dứa 1 Nắng Chiên Giòn",
    category: "Khai vị",
    price: 89000,
    image: "KHAIVI/kho-ca-dua.jpg"
  },
  {
    name: "Khổ Qua Chà Bông",
    category: "Khai vị",
    price: 99000,
    image: "KHAIVI/kho-qua-cha-bong.jpg"
  },
  {
    name: "Cá Nướng Thịt Bằm",
    category: "Khai vị",
    price: 99000,
    image: "KHAIVI/ca-nuong-thit-bam.jpg"
  },
  {
    name: "Tép Xào Bông Điên Điển",
    category: "Khai vị",
    price: 119000,
    image: "KHAIVI/tep-xao.jpg"
  },
  {
    name: "Lươn Ngổng Sốt Tiêu Đen",
    category: "Khai vị",
    price: 119000,
    image: "KHAIVI/luon-ngong-sot-tieu.jpg"
  },
  {
    name: "Đậu Hủ Khói Lửa",
    category: "Khai vị",
    price: 169000,
    image: "KHAIVI/dau-hu-khoi-lua.jpg"
  },

  // MÓN BÒ
  {
    name: "Bắp Bò Nướng Mắm Nhỉ",
    category: "Món bò",
    price: 109000,
    image: "BO/bap-bo-nuong.jpg"
  },
  {
    name: "Bắp Bò Nhúng Mẻ",
    category: "Món bò",
    price: 219000,
    image: "BO/bap-bo-nhung-me.jpg"
  },
  {
    name: "Bò Lúc Lắc - Khoai Tây Chiên",
    category: "Món bò",
    price: 129000,
    image: "BO/bo-luc-lac-khoai.jpg"
  },
  {
    name: "Bò Xào Rau Rừng",
    category: "Món bò",
    price: 129000,
    image: "BO/bo-xao-rau-rung.jpg"
  },
  {
    name: "Bò Nướng Tảng",
    category: "Món bò",
    price: 169000,
    image: "BO/bo-nuong-tang.jpg"
  },
  {
    name: "Gù Bò Ngũ Cốc Nướng Xối Sả",
    category: "Món bò",
    price: 190000,
    image: "BO/gu-bo-nuong.jpg"
  },
  {
    name: "Bò Xào Củ Hành / Xào Khổ Qua",
    category: "Món bò",
    price: 109000,
    image: "BO/bo-xao-cu-hanh.jpg"
  },
  {
    name: "Bò Sốt Tiêu Đen",
    category: "Món bò",
    price: 129000,
    image: "BO/bo-sot-tieu-den.jpg"
  },

 

    // MÓN GÀ
    {
      name: "Gà Tre Hấp Mắm Nhĩ",
      category: "Món gà",
      price: 290000,
      image: "GA/ga-hap-mam-nhi.png",
    },
    {
      name: "Gà Tre Nướng Muối Ớt",
      category: "Món gà",
      price: 290000,
      image: "GA/ga-nuong-muoi-ot.jpg",
    },
    {
      name: "Gà Nòi Chiên Sả",
      category: "Món gà",
      price: 249000,
      image: "GA/ga-noi-chien-sa.jpg",
    },
    {
      name: "Gà Nòi Xào Cối",
      category: "Món gà",
      price: 249000,
      image: "GA/ga-noi-xao-coi.jpg",
    },
    {
      name: "Gà H'mông Nấu Nấm/ Hầm Sả",
      category: "Món gà",
      price: 319000,
      image: "GA/g-hmong-nam.png",
    },
    
    {
      name: "Chân Gà Rút Xương Chiên Nước Mắm",
      category: "Món gà",
      price: 89000,
      image: "GA/chan-ga-rut-xuong-rang-muoi.png",
    },
    {
      name: "Chân Gà Rút Xương Rang Muối Hongkong",
      category: "Món gà",
      price: 89000,
      image: "GA/chan-ga-rut-xuong-rang-muoi.png",
    },
    {
      name: "Chân Gà Rút Xương Nướng Muối Ớt/Sa Tế",
      category: "Món gà",
      price: 89000,
      image: "GA/chan-ga-nuong-muoi-ot.jpg",
    },
    
  {
    name: "Chân Gà Rút Xương Sốt Thái",
    category: "Món gà",
    price: 89000,
    image: "GA/chan-ga-sot-thai.jpg",
  },
  {
    name: "Lòng Gà Xào Mướp",
    category: "Món gà",
    price: 89000,
    image: "GA/long-ga-xao-muop.jpg",
  },
  {
    name: "Sụn Gà Chiên Nước Mắm/Rang Lá Trúc/ Rang Muối",
    category: "Món gà",
    price: 89000,
    image: "GA/sun-ga-chien.jpg",
  },
  {
    name: "Mề Gà Rang Muối",
    category: "Món gà",
    price: 89000,
    image: "GA/me-ga-rang-muoi.jpg",
  },
  {
    name: "Trứng Gà Non Cháy Tỏi/ Xào Ngồng Tỏi",
    category: "Món gà",
    price: 109000,
    image: "GA/trung-ga-non-chay-toi.jpg",
  },
  {
    name: "Tứ Quý Gà Vườn Bia",
    category: "Món gà",
    price: 149000,
    image: "GA/tu-quy-ga-vuon-bia.png",
  },
  
  // MÓN HEO
  {
    name: "Cao Sơn Nướng Sa Tế / Nướng Chao",
    category: "Món heo",
    price: 109000,
    image: "HEO/cao-son-nuong-sa-te.jpg", // ảnh minh họa
  },
  {
    name: "Cao Sơn Chiên Nước Mắm",
    category: "Món heo",
    price: 109000,
    image: "HEO/cao-son-chien.jpg",
  },
  {
    name: "Dồi Trường Xào Dưa Cải",
    category: "Món heo",
    price: 149000,
    image: "HEO/doi-truong-xao-dua-cai.jpg", 
  },
  {
    name: "Dồi Trường Chiên Nước Mắm",
    category: "Món heo",
    price: 149000,
    image: "HEO/doi-truong-chien.jpg",
  },
  {
    name: "Ba Rọi Chiên Sả",
    category: "Món heo",
    price: 109000,
    image: "HEO/ba-roi-chien-sa.jpg",
  },
  {
    name: "Ba Rọi Chiên Giòn Mắm Nhĩ",
    category: "Món heo",
    price: 189000,
    image: "HEO/ba-roi-chien-mam-nhi.jpg",
  },
  {
    name: "Giò Heo Chiên Giòn",
    category: "Món heo",
    price: 179000,
    image: "HEO/gio-heo-chien-gion.jpg",
  },
  {
    name: "Bao Tử Hầm Tiêu Xanh",
    category: "Món heo",
    price: 179000,
    image: "HEO/bao-tu-ham-tieu-xanh.jpg",
  },
  {
    name: "Sườn Non Chiên Sả",
    category: "Món heo",
    price: 199000,
    image: "HEO/suon-non-chien-sa.jpg",
  },
  // GỎI VƯỜN BIA
  {
    name: "Gỏi Tôm Thịt Chua Ngọt",
    category: "Gỏi Vườn Bia",
    price: 149000,
    image: "GOI/goi-tom-thit.jpg",
  },
  {
    name: "Gỏi Hải Sản Khoai Cao",
    category: "Gỏi Vườn Bia",
    price: 169000,
    image: "GOI/goi-hai-san-khoai-cao.jpg",
  },
  {
    name: "Gỏi Bò Khoai Cao",
    category: "Gỏi Vườn Bia",
    price: 169000,
    image: "GOI/goi-bo-khoai-mon.jpg",
  },
  {
    name: "Gỏi Xoài Tôm Khô",
    category: "Gỏi Vườn Bia",
    price: 99000,
    image: "GOI/goi-xoai-tom-kho.jpg",
  },
  {
    name: "Gỏi Xoài Khô Cá Lóc",
    category: "Gỏi Vườn Bia",
    price: 99000,
    image: "GOI/goi-xoai-ca-loc.jpg",
  },
  {
    name: "Gỏi Bò Rau Càng Cua",
    category: "Gỏi Vườn Bia",
    price: 149000,
    image: "GOI/goi-bo-rau-cang-cua.jpg",
  },
  {
    name: "Gỏi Bò Bóp Thấu",
    category: "Gỏi Vườn Bia",
    price: 149000,
    image: "GOI/goi-bo-bop-thau.jpg",
  },
  {
    name: "Gỏi Sầu Đầu Khô Cá Sặc",
    category: "Gỏi Vườn Bia",
    price: 109000,
    image: "GOI/goi-sau-dau.jpg",
  },
  {
    name: "Gỏi Sầu Đầu Khô Cá Lóc",
    category: "Gỏi Vườn Bia",
    price: 109000,
    image: "GOI/goi-sau-dau.jpg",
  },
  // HẢI SẢN VÀ ỐC
  {
    name: "Ốc Bươu Luộc Sả",
    category: "Hải Sản và Ốc",
    price: 69000,
    image: "HAISAN/oc-buou-luoc-sa.jpg",
  },
  {
    name: "Ốc Bươu Nướng Tiêu Xanh",
    category: "Hải Sản và Ốc",
    price: 69000,
    image: "HAISAN/oc-buou-nuong-tieu.jpg",
  },
  {
    name: "Ốc Bươu Nhồi Thịt",
    category: "Hải Sản và Ốc",
    price: 89000,
    image: "HAISAN/oc-buou-nhoi-thit.jpg",
  },
  {
    name: "Nghêu Hấp Sả / Hấp Thái",
    category: "Hải Sản và Ốc",
    price: 69000,
    image: "HAISAN/ngheu-hap-sa.jpg",
  },
  {
    name: "Nghêu Xào Lá Quế",
    category: "Hải Sản và Ốc",
    price: 69000,
    image: "HAISAN/ngheu-xao-la-que.jpg",
  },
  {
    name: "Mực Trứng Chiên Nước Mắm",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/muc-trung-chien-nuoc-mam.jpg",
  },
  {
    name: "Mực Trứng Hấp Gừng",
    category: "Hải Sản và Ốc",
    price: 169000,
    image: "HAISAN/muc-trung-hap-gung.jpg",
  },
  {
    name: "Mực Trứng Nướng Muối Ớt",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/muc-trung-nuong.jpg",
  },
  {
    name: "Mực Một Nắng Chiên Nước Mắm",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/muc-mot-nang-chien-nuoc-mam.jpg",
  },
  {
    name: "Mực Lá Nướng Muối Ớt",
    category: "Hải Sản và Ốc",
    price: 129000,
    image: "HAISAN/muc-la-nuong-muoi-ot.jpg",
  },
  {
    name: "Sò Huyết Rang Muối",
    category: "Hải Sản và Ốc",
    price: 129000,
    image: "HAISAN/so-huyet-rang-muoi.jpg",
  },
  {
    name: "Sò Huyết Cháy Tỏi",
    category: "Hải Sản và Ốc",
    price: 129000,
    image: "HAISAN/so-huyet-chay-toi.jpg",
  },
  {
    name: "Sò Huyết Lacoste",
    category: "Hải Sản và Ốc",
    price: 129000,
    image: "HAISAN/so-huyet-lacos.jpg",
  },
  {
    name: "Sò Huyết Nướng Mọi",
    category: "Hải Sản và Ốc",
    price: 129000,
    image: "HAISAN/so-huyet-nuong-moi.png",
  },
  {
    name: "Ốc Hương Rang Muối",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/oc-huong-rang-muoi.jpg",
  },
  {
    name: "Ốc Hương Luộc Sả",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/oc-huong-luoc-sa.jpg",
  },
  {
    name: "Ốc Hương Nướng Mọi",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/oc-huong-nuong-moi.jpg",
  },
  {
    name: "Ốc Hương Sốt Trứng Muối",
    category: "Hải Sản và Ốc",
    price: 159000,
    image: "HAISAN/oc-huong-sot-trung-muoi.jpg",
  },
  {
    name: "Hào Nướng Mỡ Hành / Phô Mai (Con)",
    category: "Hải Sản và Ốc",
    price: 25000,
    image: "HAISAN/hau-nuong-mo-hanh.jpg",
  },
  {
    name: "Mực Khoanh Chiên Giòn",
    category: "Hải Sản và Ốc",
    price: 89000,
    image: "HAISAN/muc-ong-chien-gion.jpg",
  },
  // THỦY SẢN
  {
    name: "Tôm Nướng Muối Ớt / Nướng Mọi",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/tom-nuong-muoi-ot.jpg",
  },
  {
    name: "Tôm Nướng Phô Mai",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/tom-nuong-pho-mai.jpg",
  },
  {
    name: "Tôm Sốt Thái",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/tom-sot-thai.jpg",
  },
  {
    name: "Tôm Cháy Tỏi",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/tom-chay-toi.jpg",
  },
  {
    name: "Tôm Mù Tạt",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/tom-mu-tat.jpg",
  },
  {
    name: "Ếch Chiên Nước Mắm",
    category: "Thủy Sản",
    price: 99000,
    image: "THUYSAN/ech-chien-nuoc-mam.jpe",
  },
  {
    name: "Ếch Nướng Mọi / Muối Ớt",
    category: "Thủy Sản",
    price: 99000,
    image: "THUYSAN/ech-nuong-moi.jpg",
  },
  {
    name: "Ếch Núp Lùm",
    category: "Thủy Sản",
    price: 129000,
    image: "THUYSAN/ech-nup-lum.jpg",
  },
  {
    name: "Chả Cá Thác Lác Chiên Giòn",
    category: "Thủy Sản",
    price: 120000,
    image: "THUYSAN/cha-ca-thac-lat-chien.jpg",
  },
  {
    name: "Chả Cá Thác Lác Hấp Cải Xanh",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/ca-thac-lac-hap-cai-xanh.jpg",
  },
  {
    name: "Cá Thác Lác Rút Xương Ôm Trứng Muối",
    category: "Thủy Sản",
    price: 159000,
    image: "THUYSAN/ca-thac-lac-rut-xuong.jpg",
  },
  {
    name: "Cá Cam Nướng Muối Ớt",
    category: "Thủy Sản",
    price: 119000,
    image: "THUYSAN/ca-cam-nuong.jpg",
  },
  {
    name: "Cá Đồng Chiên Giòn",
    category: "Thủy Sản",
    price: 149000,
    image: "THUYSAN/ca-dong-chien-gion.jpg",
  },
  {
    name: "Cá Chim Nướng Muối Ớt",
    category: "Thủy Sản",
    price: 180000,
    image: "THUYSAN/ca-chim-nuong.jpg",
  },
  {
    name: "Càng Ghẹ Rang Muối",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/cang-ghe-rang-muoi.jpg",
  },
  {
    name: "Càng Ghẹ Cháy Tỏi",
    category: "Thủy Sản",
    price: 139000,
    image: "THUYSAN/cang-ghe-chay-toi.jpg",
  },
  {
    name: "Vây Cá Hồi Chiên Nước Mắm",
    category: "Thủy Sản",
    price: 89000,
    image: "THUYSAN/vay-ca-hoi-chien-nuoc-mam.jpg",
  },
  // MÓN CHAY
  {
    name: "Mì Xào Chay",
    category: "Món chay",
    price: 69000,
    image: "CHAY/mi-xao-chay.jpg",
  },
  {
    name: "Nấm Chiên Bột",
    category: "Món chay",
    price: 59000,
    image: "CHAY/nam-chien-bot.jpg",
  },
  {
    name: "Nấm Xào Chay",
    category: "Món chay",
    price: 79000,
    image: "CHAY/nam-xao-chay.jpg",
  },
  {
    name: "Lẩu Nấm Chay",
    category: "Món chay",
    price: 169000,
    image: "CHAY/lau-nam-chay.jpg",
  },
  {
    name: "Đậu Hũ Chiên Giòn / Chiên Sả",
    category: "Món chay",
    price: 59000,
    image: "CHAY/dau-hu-chien-gion.jpg",
  },
  {
    name: "Rau Luộc - Nấm Kho",
    category: "Món chay",
    price: 99000,
    image: "CHAY/rau-luoc-nam-kho.jpg",
  },
  // BEST VƯỜN BIA
  {
    name: "Bồ Câu Rôti",
    category: "Best Vườn Bia",
    price: 189000,
    image: "BESTVUONBIA/bo-cau-roti.jpg",
  },
  {
    name: "Bồ Câu Nướng Muối Ớt",
    category: "Best Vườn Bia",
    price: 189000,
    image: "BESTVUONBIA/bo-cau-nuong-muoi-ot.jpg",
  },
  {
    name: "Bồ Câu Xúc Bánh Đa",
    category: "Best Vườn Bia",
    price: 189000,
    image: "BESTVUONBIA/bo-cau-xuc-banh-da.jpg",
  },
  {
    name: "Gà H’Mông Nấu Nấm",
    category: "Best Vườn Bia",
    price: 319000,
    image: "BESTVUONBIA/ga-hmong-nau-nam.png",
  },
  
  {
    name: "Gà Nòi Chiên Sả + Đậu Rồng",
    category: "Best Vườn Bia",
    price: 249000,
    image: "BESTVUONBIA/ga-noi-chien.jpg",
  },
  {
    name: "Gà Nòi Nướng Muối Ớt",
    category: "Best Vườn Bia",
    price: 249000,
    image: "BESTVUONBIA/ga-noi-nuong-muoi-ot.jpg",
  },
  {
    name: "Sườn Nướng BBQ",
    category: "Best Vườn Bia",
    price: 159000,
    image: "BESTVUONBIA/suon-nuong-bbq.png",
  },
  {
    name: "Sườn Nướng Kiểu Mỹ",
    category: "Best Vườn Bia",
    price: 159000,
    image: "BESTVUONBIA/suon-nuong-kieu-my.jpg",
  },

  // BIA – NƯỚC GIẢI KHÁT
  {
    name: "Bia Tuborg",
    category: "Bia – Nước Giải Khát",
    price: 20000,
    image: "BIA/bia-tuborg.jpg",
  },
  {
    name: "Bia Tuborg Ice",
    category: "Bia – NƯỚC Giải Khát",
    price: 22000,
    image: "BIA/bia-tuborg-ice.jpg",
  },
  {
    name: "Bia Blanc 1664",
    category: "Bia – NƯỚC Giải Khát",
    price: 24000,
    image: "BIA/bia-blanc-1664.jpg",
  },
  {
    name: "Bia Carlsberg Pilsner",
    category: "Bia – NƯỚC Giải Khát",
    price: 24000,
    image: "BIA/bia-carlslver.jpg",
  },
  {
    name: "Bia Tươi Tháp Blanc 1664 (3 lít)",
    category: "Bia – NƯỚC Giải Khát",
    price: 269000,
    image: "BIA/bia-thap-1664.jpg",
  },
  {
    name: "Bia Tươi Tháp Carlsberg (3 lít)",
    category: "Bia – NƯỚC Giải Khát",
    price: 299000,
    image: "BIA/bia-carlsberg-thap.jpg",
  },
  {
    name: "Bia Budweiser Chai",
    category: "Bia – NƯỚC Giải Khát",
    price: 24000,
    image: "BIA/bia-budweiser.jpg",
  },
  {
    name: "Bia Budweiser Lon",
    category: "Bia – NƯỚC Giải Khát",
    price: 26000,
    image: "BIA/bia-budweiser-330ml.jpg",
  },
  {
    name: "Bia Corona 300ml - Mexico - Chai",
    category: "Bia – NƯỚC Giải Khát",
    price: 36000,
    image: "BIA/bia-corona.png",
  },
  {
    name: "Bia Tiger Nâu",
    category: "Bia – NƯỚC Giải Khát",
    price: 22000,
    image: "BIA/bia-tiger-lon.jpg",
  },
  {
    name: "Bia Tiger Crystal",
    category: "Bia – NƯỚC Giải Khát",
    price: 26000,
    image: "BIA/bia-tiger-crystal.jpg",
  },
  {
    name: "Bia Heniken Silver",
    category: "Bia – NƯỚC Giải Khát",
    price: 26000,
    image: "BIA/bia-heineken-silver-250ml.jpg",
  },
  {
    name: "Bia Heniken Silver 250ml",
    category: "Bia – NƯỚC Giải Khát",
    price: 22000,
    image: "",
  },
  {
    name: "Bia Bubweiser Alu",
    category: "Bia – NƯỚC Giải Khát",
    price: 52000,
    image: "BIA/bia-budweiser-alumium-355ml.jpg",
  },
  {
    name: "Rượu Soju",
    category: "Bia – NƯỚC Giải Khát",
    price: 89000,
    image: "BIA/ruou-soju.jpg",
  },
  {
    name: "Pepsi",
    category: "Bia – NƯỚC Giải Khát",
    price: 15000,
    image: "BIA/pepsi.jpg",
  },
  {
    name: "7 Up",
    category: "Bia – NƯỚC Giải Khát",
    price: 15000,
    image: "BIA/7up.jpg",
  },
  {
    name: "Nước Ngọt",
    category: "Bia – NƯỚC Giải Khát",
    price: 15000,
    image: "BIA/nuocngot.jpg",
  },
  {
    name: "Nước Suối",
    category: "Bia – NƯỚC Giải Khát",
    price: 14000,
    image: "BIA/nuoc-suoi.jpg",
  },
  {
    name: "Trái Cây",
    category: "Bia – NƯỚC Giải Khát",
    price: 79000,
    image: "BIA/trai-cay-.jpg",
  },
  {
    name: "Điều Rang",
    category: "Bia – NƯỚC Giải Khát",
    price: 20000,
    image: "BIA/dieu-rang.jpg",
  },
  // 🍲 LẨU
  {
    name: "Lẩu Cá Bóp",
    category: "Lẩu",
    price: 249000,
    image: "LAU/lau-ca-bop.jpg",
    note: ""
  },
  {
    name: "Lẩu Thái Hải Sản",
    category: "Lẩu",
    price: 249000,
    image: "LAU/lau-hai-san.png",
    note: ""
  },
  {
    name: "Lẩu Gà Lá Chanh",
    category: "Lẩu",
    price: 299000,
    image: "LAU/lau-ga-la-chanh.jpg",
    note: ""
  },
  {
    name: "Lẩu Gà Tiềm Ớt Hiểm",
    category: "Lẩu",
    price: 319000,
    image: "LAU/lau-ga-tiem.jpg",
    note: "HOT!"
  },
  {
    name: "Lẩu Ếch Lá Chanh",
    category: "Lẩu",
    price: 219000,
    image: "LAU/lau-ech-la-chanh.jpg",
    note: ""
  },
  {
    name: "Lẩu Vây Cá Hồi",
    category: "Lẩu",
    price: 189000,
    image: "LAU/lau-vay-ca-hoi.jpg",
    note: ""
  },
  {
    name: "Lẩu Chả Cá Thác Lác Khổ Qua",
    category: "Lẩu",
    price: 219000,
    image: "LAU/lau-ca-cha.jpg",
    note: ""
  },

  // 🍜 MÌ - MIẾN
  {
    name: "Mì Xào Hải Sản / Xào Bò",
    category: "Mì - Miến",
    price: 99000,
    image: "MI/mi-xao-hai-san.jpg",
    note: ""
  },
  {
    name: "Miến Xào Hải Sản",
    category: "Mì - Miến",
    price: 99000,
    image: "MI/mien-xao-hai-san.jpg",
    note: ""
  },

  // 🍚 CƠM
  {
    name: "Cơm Chiên Hải Sản",
    category: "Cơm",
    price: 99000,
    image: "COM/com-chien-hai-san.jpg",
    note: ""
  },
  {
    name: "Cơm Chiên Tỏi",
    category: "Cơm",
    price: 59000,
    image: "COM/com-chien-toi.jpg",
    note: ""
  },
  {
    name: "Cơm Chiên Cá Mặn",
    category: "Cơm",
    price: 69000,
    image: "COM/com-chien-ca-man.jpg",
    note: ""
  },
  {
    name: "Cơm Trùm Mền",
    category: "Cơm",
    price: 99000,
    image: "COM/com-trum-men.jpg",
    note: ""
  },
  {
    name: "Cháo Sò Huyết",
    category: "Cơm",
    price: 149000,
    image: "COM/chao-so-huyet.jpg",
    note: ""
  },
  {
    name: "Cháo Thịt Bằm (Tô)",
    category: "Cơm",
    price: 149000,
    image: "COM/chao-thit-bam.jpg",
    note: ""
  }
];

export const locations = [
  {
    name: "Vườn Bia - Lý Thái Tổ",
    address: "Lý Thái Tổ nối dài, Long Xuyên, An Giang",
    hotline: "0788853288",
    district: "mylong", // Thêm dòng này
    image: "/VB-LTT2.jpg", // nếu có dùng ảnh
    description: "Chi nhánh 1",
    openingHours: "16:00 - 23:00",

  },
  {
    name: "Vườn Bia - Bùi Văn Danh",
    address: "Bờ Kè Bùi Văn Danh, Phường Long Xuyên, Long Xuyên, An Giang",
    hotline: "0788853288",
    district: "myhoa",
    image: "/VB-BVD2.png",
    description: "    Chi nhánh 2",
     openingHours: "16:00 - 23:30",
  },
];
export const districts = [
  { id: "all", name: "Tất cả" },
  { id: "mylong", name: "Mỹ Long", count: 1 },
  { id: "myhoa", name: "Mỹ Hòa", count: 1 },
];


