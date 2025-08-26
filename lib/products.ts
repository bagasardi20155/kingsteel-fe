export interface Product {
  id: string
  name: string
  category: "furniture" | "machinery"
  subcategory: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  description: string
  specifications: Record<string, string>
  features: string[]
  inStock: boolean
  featured?: boolean
}

export const products: Product[] = [
  // Featured Furniture Products
  {
    id: "sofa-minimalis-01",
    name: "Sofa Minimalis 3 Dudukan",
    category: "furniture",
    subcategory: "Living Room",
    price: 4500000,
    originalPrice: 5200000,
    discount: 13,
    images: ["/minimalist-sofa-living-room.png", "/modern-sofa-side-view.png", "/sofa-fabric-texture.png"],
    description:
      "Sofa minimalis dengan desain modern yang cocok untuk ruang tamu kontemporer. Dibuat dengan bahan berkualitas tinggi dan konstruksi yang kokoh untuk kenyamanan maksimal keluarga Anda.",
    specifications: {
      Dimensi: "200cm x 85cm x 80cm",
      Material: "Kayu Jati + Busa High Density",
      Pelapis: "Fabric Premium Anti Noda",
      Kapasitas: "3 Orang Dewasa",
      Warna: "Abu-abu, Krem, Navy",
      Berat: "45 kg",
      "Ketinggian Sandaran": "80 cm",
      "Kedalaman Dudukan": "55 cm",
    },
    features: [
      "Desain minimalis modern yang timeless",
      "Busa high density tahan lama hingga 10 tahun",
      "Fabric anti noda dan mudah dibersihkan",
      "Konstruksi kayu jati solid anti rayap",
      "Garansi 2 tahun untuk frame dan busa",
      "Tersedia dalam 3 pilihan warna elegan",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "meja-makan-kayu-01",
    name: "Meja Makan Kayu Jati 6 Kursi",
    category: "furniture",
    subcategory: "Dining Room",
    price: 6800000,
    originalPrice: 7500000,
    discount: 9,
    images: ["/modern-wooden-dining-set.png", "/wood-dining-table-top.png", "/modern-dining-chair-detail.png"],
    description:
      "Set meja makan kayu jati solid dengan 6 kursi matching. Desain modern dengan finishing natural yang elegan, sempurna untuk ruang makan keluarga yang hangat dan berkelas.",
    specifications: {
      "Dimensi Meja": "180cm x 90cm x 75cm",
      "Dimensi Kursi": "45cm x 50cm x 85cm",
      Material: "100% Kayu Jati Grade A",
      Finishing: "Natural Wood + Clear Coating",
      Kapasitas: "6 Orang",
      "Berat Meja": "65 kg",
      "Berat per Kursi": "8 kg",
      "Ketebalan Top": "4 cm",
    },
    features: [
      "Kayu jati grade A berkualitas tinggi",
      "Finishing natural tahan lama dan anti jamur",
      "Desain modern minimalis yang elegan",
      "Set lengkap dengan 6 kursi matching",
      "Tahan rayap dan cuaca ekstrem",
      "Mudah perawatan dengan wood polish",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "lemari-pakaian-01",
    name: "Lemari Pakaian 3 Pintu Modern",
    category: "furniture",
    subcategory: "Bedroom",
    price: 3200000,
    images: ["/modern-3-door-wardrobe.png", "/wardrobe-interior.png", "/modern-wardrobe-handle.png"],
    description:
      "Lemari pakaian 3 pintu dengan desain modern dan ruang penyimpanan yang optimal. Dilengkapi dengan gantungan baju, rak serbaguna, dan sistem organisasi yang efisien untuk semua kebutuhan penyimpanan Anda.",
    specifications: {
      Dimensi: "150cm x 60cm x 200cm",
      Material: "MDF + Veneer Kayu",
      Pintu: "3 Pintu dengan Handle Modern",
      Interior: "Gantungan + Rak Serbaguna",
      Warna: "Walnut, Oak, White",
      "Jumlah Rak": "6 Rak Adjustable",
      "Rod Gantungan": "2 Rod Stainless Steel",
      Berat: "85 kg",
    },
    features: [
      "Ruang penyimpanan optimal dengan 3 kompartemen",
      "Desain modern minimalis yang stylish",
      "Handle berkualitas tinggi anti karat",
      "Rak dan gantungan fleksibel dapat disesuaikan",
      "Mudah dirakit dengan panduan lengkap",
      "Tersedia dalam 3 pilihan warna premium",
    ],
    inStock: true,
    featured: true,
  },
  // Additional Furniture Products
  {
    id: "kursi-kantor-ergonomis-01",
    name: "Kursi Kantor Ergonomis Executive",
    category: "furniture",
    subcategory: "Office",
    price: 2800000,
    originalPrice: 3200000,
    discount: 12,
    images: ["/ergonomic-office-chair.png"],
    description:
      "Kursi kantor ergonomis dengan desain executive yang mendukung postur tubuh optimal untuk produktivitas kerja maksimal.",
    specifications: {
      Dimensi: "65cm x 70cm x 110-120cm",
      Material: "Kulit Sintetis Premium + Mesh",
      "Sistem Gas": "Class 4 Heavy Duty",
      "Kapasitas Beban": "150 kg",
      Roda: "5 Roda PU Silent",
      Adjustable: "Tinggi, Sandaran, Armrest",
    },
    features: [
      "Desain ergonomis mendukung postur tubuh",
      "Bahan kulit sintetis premium tahan lama",
      "Sistem gas heavy duty untuk durabilitas",
      "Roda silent untuk lantai keras dan karpet",
      "Adjustable height dan lumbar support",
      "Garansi 1 tahun untuk semua komponen",
    ],
    inStock: true,
  },
  // Machinery Products (minimal display)
  {
    id: "mesin-jahit-01",
    name: "Mesin Jahit Industrial High Speed",
    category: "machinery",
    subcategory: "Textile",
    price: 8500000,
    images: ["/industrial-sewing-machine.png"],
    description:
      "Mesin jahit industrial untuk UMKM tekstil dengan kecepatan tinggi dan hasil jahitan berkualitas profesional. Cocok untuk produksi skala menengah.",
    specifications: {
      Kecepatan: "5000 RPM",
      Jenis: "Lockstitch",
      Motor: "550W Servo Motor",
      Dimensi: "120cm x 60cm x 110cm",
      "Panjang Setik": "0-6mm",
      "Lebar Zigzag": "0-7mm",
      Berat: "45 kg",
    },
    features: [
      "Kecepatan tinggi hingga 5000 RPM",
      "Hasil jahitan rapi dan konsisten",
      "Motor servo hemat energi",
      "Tahan lama untuk produksi kontinyu",
      "Cocok untuk berbagai jenis kain",
      "Mudah maintenance dan spare part tersedia",
    ],
    inStock: true,
  },
  {
    id: "mesin-potong-laser-01",
    name: "Mesin Potong Laser CO2 Desktop",
    category: "machinery",
    subcategory: "Cutting",
    price: 15500000,
    images: ["/desktop-laser-cutter.png"],
    description:
      "Mesin potong laser CO2 desktop untuk UMKM kreatif. Cocok untuk memotong kayu, akrilik, kain, dan material non-logam dengan presisi tinggi.",
    specifications: {
      "Area Kerja": "40cm x 60cm",
      "Power Laser": "40W CO2",
      "Ketebalan Max": "10mm (kayu), 5mm (akrilik)",
      Software: "LaserGRBL Compatible",
      Koneksi: "USB + WiFi",
      Dimensi: "80cm x 60cm x 25cm",
      Berat: "35 kg",
    },
    features: [
      "Presisi tinggi dengan akurasi 0.1mm",
      "Cocok untuk berbagai material non-logam",
      "Software user-friendly dan mudah dipelajari",
      "Koneksi WiFi untuk kemudahan operasi",
      "Compact design hemat tempat",
      "Training dan support teknis tersedia",
    ],
    inStock: true,
  },
  {
    id: "sofa-minimalis-05",
    name: "Sofa Minimalis 5 Dudukan",
    category: "furniture",
    subcategory: "Living Room",
    price: 666666,
    originalPrice: 666666 === 0 ? undefined : 666666,
    discount: 0 === 0 ? undefined : 0,
    images: ["/minimalist-sofa-living-room.png", "/modern-sofa-side-view.png", "/sofa-fabric-texture.png"],
    description: "Sofa minimalis dengan desain modern yang cocok untuk ruang tamu kontemporer. Dibuat dengan bahan berkualitas tinggi dan konstruksi yang kokoh untuk kenyamanan maksimal keluarga Anda.",
    specifications: {
      "Dimensi": "200cm x 85cm x 80cm",
      "Material": "Kayu Jati + Busa High Density",
      "Pelapis": "Fabric Premium Anti Noda",
      "Kapasitas": "3 Orang Dewasa",
      "Warna": "Abu-abu, Krem, Navy",
      "Berat": "45 kg",
      "Ketinggian Sandaran": "80 cm",
      "Kedalaman Dudukan": "55 cm",
    },
    features: [
      "Desain minimalis modern yang timeless",
      "Busa high density tahan lama hingga 10 tahun",
      "Fabric anti noda dan mudah dibersihkan",
      "Konstruksi kayu jati solid anti rayap",
      "Garansi 2 tahun untuk frame dan busa",
      "Tersedia dalam 3 pilihan warna elegan",
    ],
    inStock: true,
    featured: false,
  },
]

export const getProductsByCategory = (category: "furniture" | "machinery") => {
  return products.filter((product) => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured)
}

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}
