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
    price: 1104000,
    image: "https://i.imgur.com/tbFMVvF.jpg",
  },
  {
    name: "Combo 2",
    category: "Combo",
    price: 1324000,
    image: "https://i.imgur.com/EYliPzL.jpg",
  },

  // MÓN MỚI
  {
    name: "Khoai tây chiên Hongkong",
    category: "Món mới",
    price: 58000,
    image: "https://i.imgur.com/WPb6CnE.jpg",
  },
  {
    name: "Salad xà lách cá trích ép trứng",
    category: "Món mới",
    price: 149000,
    image: "https://i.imgur.com/Q7vU0v4.jpg",
  },

  // MÓN BÒ
  {
    name: "Bò lúc lắc",
    category: "Món heo",
    price: 85000,
    image: "https://i.imgur.com/ayLPl4F.jpg",
  },
  {
    name: "Phở bò tái",
    category: "Món heo",
    price: 50000,
    image: "https://i.imgur.com/99VnhTr.jpg",
  },

  // MÓN HEO
  {
    name: "Sườn heo nướng",
    category: "Món heo",
    price: 90000,
    image: "https://i.imgur.com/jhJfx8T.jpg",
  },
  {
    name: "Heo quay giòn bì",
    category: "Món heo",
    price: 110000,
    image: "https://i.imgur.com/VRHo34G.jpg",
  },

  // MÓN CHAY
  {
    name: "Nấm xào chay",
    category: "Món chay",
    price: 60000,
    image: "https://i.imgur.com/9m3V6Yo.jpg",
  },
  {
    name: "Salad chay",
    category: "Món chay",
    price: 45000,
    image: "https://i.imgur.com/2y6Tya1.jpg",
  },

  // BIA – NƯỚC GIẢI KHÁT
  {
    name: "Coca",
    category: "Nước giải khát",
    price: 15000,
    image: "https://i.imgur.com/NljnXmx.jpg",
  },
  {
    name: "Bia Tiger",
    category: "Bia",
    price: 19000,
    image: "https://i.imgur.com/3FWT6cy.jpg",
  },
];

export const locations = [
  {
    name: "Vườn Bia - Lý Thái Tổ",
    address: "Mỹ Thạnh, Long Xuyên, An Giang",
    hotline: "0788853288",
    district: "mythanh", // Thêm dòng này
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
  { id: "mythanh", name: "Mỹ Thạnh", count: 1 },
  { id: "myhoa", name: "Mỹ Hòa", count: 1 },
];
