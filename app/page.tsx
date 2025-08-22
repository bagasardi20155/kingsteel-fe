import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts, getProductsByCategory } from "@/lib/products"
import { ArrowRight, Star, Shield, Truck, HeadphonesIcon, Zap, Gift, Clock } from "lucide-react"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const machineryProducts = getProductsByCategory("machinery").slice(0, 2) // Show minimal machinery

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-sm">K</span>
              </div>
              <span className="font-heading font-bold text-xl">KingSteel</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="font-body hover:text-accent transition-colors">
                Beranda
              </Link>
              <Link href="/furniture" className="font-body hover:text-accent transition-colors">
                Furniture
              </Link>
              <Link href="/mesin" className="font-body hover:text-accent transition-colors">
                Mesin UMKM
              </Link>
              <Link href="/kontak" className="font-body hover:text-accent transition-colors">
                Kontak
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-accent to-orange-500 text-white py-3 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <Gift className="h-5 w-5 animate-bounce" />
            <p className="font-heading font-semibold">
              🎉 PROMO SPESIAL! Diskon hingga 40% untuk semua furniture modern + Gratis Ongkir!
            </p>
            <Clock className="h-5 w-5" />
            <span className="font-bold">Berakhir 31 Des 2024</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted via-background to-accent/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-accent to-orange-500 text-white border-0 animate-pulse">
                  <Zap className="h-3 w-3 mr-1" />
                  Furniture Modern Berkualitas
                </Badge>
                <Badge className="bg-red-500 text-white border-0 animate-bounce">DISKON 40%</Badge>
              </div>

              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 leading-tight">
                <div>
                  Transformasi Ruang Anda dengan
                </div>
                <span className="text-transparent bg-gradient-to-r from-accent to-orange-500 bg-clip-text animate-pulse">
                  Furniture Modern
                </span>
                <span className="text-2xl lg:text-3xl block mt-2 text-accent">✨ Promo Akhir Tahun! ✨</span>
              </h1>

              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                Koleksi lengkap furniture modern dan mesin UMKM berkualitas tinggi. Desain elegan, material premium,
                <span className="font-semibold text-accent"> harga terjangkau dengan diskon fantastis!</span>
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <Gift className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-sm">Gratis Ongkir</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-orange-500/10 rounded-lg">
                  <Star className="h-5 w-5 text-orange-500" />
                  <span className="font-semibold text-sm">Garansi 2 Tahun</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/furniture">
                    🔥 Lihat Promo Furniture
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 bg-transparent"
                >
                  💬 Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-orange-500 rounded-lg blur opacity-20 animate-pulse"></div>
              <Image
                src="/elegant-modern-living-room.png"
                alt="Modern Furniture Showcase"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold text-sm animate-bounce z-20">
                DISKON 40%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Promotions Section */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-orange-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-lg px-4 py-2">
              🎊 PROMO TERBATAS
            </Badge>
            <h2 className="font-heading font-bold text-3xl mb-4">Penawaran Spesial Akhir Tahun!</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Jangan lewatkan kesempatan emas ini! Dapatkan furniture impian dengan harga terbaik sepanjang masa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">40%</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Diskon Furniture</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Semua koleksi furniture modern dengan potongan hingga 40%
                </p>
                <Badge className="bg-red-500 text-white">Berakhir 31 Des</Badge>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-orange-500/20 hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Gratis Ongkir</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Pengiriman gratis ke seluruh Indonesia untuk pembelian minimal 2 juta
                </p>
                <Badge className="bg-orange-500 text-white">Semua Produk</Badge>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-green-500/20 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Bonus Eksklusif</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Dapatkan bantal sofa gratis untuk setiap pembelian sofa set
                </p>
                <Badge className="bg-green-500 text-white">Terbatas</Badge>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
              asChild
            >
              <Link href="/furniture">
                🛒 Belanja Sekarang & Hemat!
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Kualitas Premium</h3>
              <p className="font-body text-sm text-muted-foreground">
                Material berkualitas tinggi dan finishing terbaik
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Garansi Resmi</h3>
              <p className="font-body text-sm text-muted-foreground">Garansi hingga 2 tahun untuk semua produk</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Pengiriman Aman</h3>
              <p className="font-body text-sm text-muted-foreground">
                Pengiriman ke seluruh Indonesia dengan packaging aman
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Konsultasi Gratis</h3>
              <p className="font-body text-sm text-muted-foreground">
                Tim ahli siap membantu memilih furniture yang tepat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Furniture Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Produk Unggulan</Badge>
            <h2 className="font-heading font-bold text-3xl mb-4">
              Furniture Modern Pilihan Terbaik
              <span className="text-red-500">🔥 Sedang Promo!</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Koleksi furniture modern dengan desain elegan dan kualitas premium. Sempurna untuk menciptakan ruang yang
              nyaman dan stylish dengan <span className="font-semibold text-accent">harga spesial akhir tahun!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/furniture">
                Lihat Semua Furniture Promo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Machinery Section (Minimal) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl mb-4">Mesin UMKM Berkualitas</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Solusi mesin berkualitas untuk mengembangkan usaha kecil dan menengah Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {machineryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-accent-foreground text-sm">F</span>
                </div>
                <span className="font-heading font-bold text-xl">FurniStore</span>
              </div>
              <p className="font-body text-sm text-primary-foreground/80">
                Toko furniture modern dan mesin UMKM terpercaya dengan kualitas premium dan pelayanan terbaik.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/furniture" className="hover:text-accent transition-colors">
                    Furniture Modern
                  </Link>
                </li>
                <li>
                  <Link href="/mesin" className="hover:text-accent transition-colors">
                    Mesin UMKM
                  </Link>
                </li>
                <li>
                  <Link href="/promo" className="hover:text-accent transition-colors">
                    Promo Spesial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/konsultasi" className="hover:text-accent transition-colors">
                    Konsultasi Gratis
                  </Link>
                </li>
                <li>
                  <Link href="/pengiriman" className="hover:text-accent transition-colors">
                    Info Pengiriman
                  </Link>
                </li>
                <li>
                  <Link href="/garansi" className="hover:text-accent transition-colors">
                    Garansi Produk
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm">
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Email: info@furnistore.com</li>
                <li>Alamat: Jl. Furniture No. 123, Jakarta</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-primary-foreground/60">© 2024 FurniStore. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
