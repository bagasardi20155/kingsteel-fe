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

export const products: Product[
  {
    id: sofa-minimalis-01,
    name: Sofa Minimalis 3 Dudukan,
    category: furniture,
    subcategory: Living Room,
    price: 4500000,
    originalPrice: 5200000,
    discount: 13,
    images: "[\"/minimalist-sofa-living-room.png\", \"/modern-sofa-side-view.png\", \"/sofa-fabric-texture.png\"]",
    description: Sofa minimalis dengan desain modern yang cocok untuk ruang tamu kontemporer. Dibuat dengan bahan berkualitas tinggi dan konstruksi yang kokoh untuk kenyamanan maksimal keluarga Anda.,
    specifications: "{Dimensi: \"200cm x 85cm x 80cm\", Material: \"Kayu Jati + Busa High Density\", Pelapis: \"Fabric Premium Anti Noda\", Kapasitas: \"3 Orang Dewasa\", Warna: \"Abu-abu, Krem, Navy\", Berat: \"45 kg\", \"Ketinggian Sandaran\": \"80 cm\", \"Kedalaman Dudukan\": \"55 cm\",}",
    features: "[\"Desain minimalis modern yang timeless\", \"Busa high density tahan lama hingga 10 tahun\", \"Fabric anti noda dan mudah dibersihkan\", \"Konstruksi kayu jati solid anti rayap\", \"Garansi 2 tahun untuk frame dan busa\", \"Tersedia dalam 3 pilihan warna elegan\",]",
    inStock: true,
    featured: true,
  }export const getProductsByCategory = (category: "furniture" | "machinery") => {
  return products.filter((product) => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured)
}

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}
