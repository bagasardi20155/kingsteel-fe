import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import { getProductById, getProductsByCategory } from "@/lib/products"
import { Star, Shield, Truck, CheckCircle, Heart, Share2 } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | FurniStore",
    }
  }

  return {
    title: `${product.name} | FurniStore`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0
  const discountPercentage = product.discount || 0

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-sm">F</span>
              </div>
              <span className="font-heading font-bold text-xl">FurniStore</span>
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

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
            Beranda
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            href={product.category === "furniture" ? "/furniture" : "/mesin"}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            {product.category === "furniture" ? "Furniture" : "Mesin UMKM"}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category and Stock Status */}
            <div className="flex items-center gap-3">
              <Badge variant="outline">{product.subcategory}</Badge>
              {product.inStock ? (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Tersedia
                </Badge>
              ) : (
                <Badge variant="destructive">Stok Habis</Badge>
              )}
            </div>

            {/* Product Name */}
            <h1 className="font-heading font-bold text-3xl lg:text-4xl leading-tight">{product.name}</h1>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="font-heading font-bold text-3xl text-accent">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )}
              </div>
              {discountPercentage > 0 && (
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-100 text-red-800 border-red-200">Hemat {discountPercentage}%</Badge>
                  <span className="text-sm text-muted-foreground">
                    Anda hemat Rp {discountAmount.toLocaleString("id-ID")}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-3">Deskripsi Produk</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-3">Keunggulan Produk</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <WhatsAppButton
                productName={product.name}
                productPrice={product.price}
                className="w-full text-lg py-6"
                variant="default"
              />

              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1 gap-2 bg-transparent">
                  <Heart className="h-4 w-4" />
                  Simpan
                </Button>
                <Button variant="outline" size="lg" className="flex-1 gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Bagikan
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <p className="font-body text-xs text-muted-foreground">Garansi Resmi</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <p className="font-body text-xs text-muted-foreground">Pengiriman Aman</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <p className="font-body text-xs text-muted-foreground">Kualitas Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <Card className="mb-16">
          <div className="p-6 border-b">
            <h2 className="font-heading font-bold text-2xl">Spesifikasi Lengkap</h2>
            <p className="text-muted-foreground mt-1">Detail teknis produk untuk referensi Anda</p>
          </div>
          <CardContent className="p-0">
            <div className="divide-y">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <span className="font-body font-medium text-foreground">{key}</span>
                  <span className="font-body font-semibold text-accent">{value}</span>
                </div>
              ))}
            </div>

            <div className="m-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl text-center">
              <h3 className="font-heading font-bold text-lg mb-2">Butuh Informasi Lebih Detail?</h3>
              <p className="text-muted-foreground mb-4">Tim ahli kami siap membantu Anda memilih produk yang tepat!</p>
              <WhatsAppButton
                productName={product.name}
                productPrice={product.price}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3"
                variant="default"
              >
                Tanya Langsung via WhatsApp
              </WhatsAppButton>
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-bold text-2xl">Produk Terkait</h2>
              <Button variant="outline" asChild>
                <Link href={product.category === "furniture" ? "/furniture" : "/mesin"}>Lihat Semua</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
