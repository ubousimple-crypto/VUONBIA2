export interface Dish {
  name: string;
  price: number;
  image: string;
}

export interface Location {
  name: string;
  description: string;
  district: string;
  districtName: string;
  image: string;
  isOpen: boolean;
}

export interface District {
  id: string;
  name: string;
  count?: number;
}

export const newDishes: Dish[] = [
  {
    name: "Lạp xưởng tây bắc xào dân tộc",
    price: 149000,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Gỏi bò cà pháo đồng quê",
    price: 169000,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Ếch sốt tiêu gừng chua cay",
    price: 159000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Ốc hương ủ muối thảo mộc",
    price: 269000,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Trâu xào rau muống",
    price: 159000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Gỏi chân gà trộn thính",
    price: 119000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Nầm sữa nướng giềng mẻ",
    price: 189000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Tôm sú ủ muối thảo mộc",
    price: 249000,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Gỏi heo nướng trộn thính",
    price: 169000,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Khoai tây chiên Hongkong",
    price: 58000,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Thịt dải heo cháy tỏi",
    price: 189000,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Nầm sữa cháy tỏi",
    price: 199000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export const locations: Location[] = [
  {
    name: "67A Phó Đức Chính",
    description: "Quán Nhậu Tự Do 67A Phó Đức Chính – \"Chốn ăn chơi\" mới của anh em quận Ba Đình",
    district: "ba-dinh",
    districtName: "Ba Đình",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "10 Nguyễn Văn Huyên",
    description: "Quán Nhậu Tự Do 10 Nguyễn Văn Huyên – Quán nhậu sáng nhất quận Cầu Giấy",
    district: "cau-giay",
    districtName: "Cầu Giấy",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "68 Khúc Thừa Dụ",
    description: "Quán Nhậu Tự Do 68 Khúc Thừa Dụ - Cầu Giấy",
    district: "cau-giay",
    districtName: "Cầu Giấy",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "Lẩu Bò TD - 58 Khúc Thừa Dụ",
    description: "Lẩu Bò Tự Do 58 Khúc Thừa Dụ – Quán lẩu ngon quận Cầu Giấy",
    district: "cau-giay",
    districtName: "Cầu Giấy",
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "02 Lê Đức Thọ",
    description: "Quán Nhậu Tự Do 02 Lê Đức Thọ quận Cầu Giấy – Quán nhậu hot nhất khu vực Mỹ Đình",
    district: "cau-giay",
    districtName: "Cầu Giấy",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "68 Láng Thượng",
    description: "Quán Nhậu Tự Do 68 Láng Thượng – Điểm hẹn mới cho giới trẻ Hà Thành",
    district: "dong-da",
    districtName: "Đống Đa",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "75 Yên Lãng",
    description: "75 Yên Lãng",
    district: "dong-da",
    districtName: "Đống Đa",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "112 Nguyễn Văn Tuyết",
    description: "Quán Nhậu Tự Do 112 Nguyễn Văn Tuyết – Tụ điểm ăn chơi mới nổi trên phố ẩm thực",
    district: "dong-da",
    districtName: "Đống Đa",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "08 Lê Đại Hành",
    description: "Quán Nhậu Tự Do 08 Lê Đại Hành – Quán Nhậu Rooftop quận Hai Bà Trưng",
    district: "hai-ba-trung",
    districtName: "Hai Bà Trưng",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "505 Minh Khai",
    description: "Quán Nhậu Tự Do 505 Minh Khai - Tụ điểm ăn chọi mới quận Hai Bà Trưng",
    district: "hai-ba-trung",
    districtName: "Hai Bà Trưng",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  },
  {
    name: "Lẩu Bò TD - 01 Trần Xuân Soạn",
    description: "Lẩu Bò Tự Do 01 Trần Xuân Soạn – Quán lẩu ngon nức tiếng quận Hai Bà Trưng",
    district: "hai-ba-trung",
    districtName: "Hai Bà Trưng",
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    isOpen: true
  }
];

export const districts: District[] = [
  { id: "all", name: "Gần bạn nhất", count: 3 },
  { id: "ba-dinh", name: "Ba Đình", count: 1 },
  { id: "cau-giay", name: "Cầu Giấy", count: 5 },
  { id: "dong-da", name: "Đống Đa", count: 3 },
  { id: "hai-ba-trung", name: "Hai Bà Trưng", count: 3 }
];
