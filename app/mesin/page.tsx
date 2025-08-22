"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { ProductSearch } from "@/components/product-search"
import { Pagination } from "@/components/pagination"
import { getProductsByCategory } from "@/lib/products"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const PRODUCTS_PER_PAGE = 9

export default function MachineryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    subcategory: "",
    sort: "",
    minPrice: "",
    maxPrice: "",
  })

  const allMachinery = getProductsByCategory("machinery")

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let products = allMachinery

    // Search by name
    if (searchQuery) {
      products = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Filter by subcategory
    if (filters.subcategory) {
      products = products.filter((product) => product.subcategory.toLowerCase() === filters.subcategory.toLowerCase())
    }

    // Filter by price range
    if (filters.minPrice) {
      products = products.filter((product) => product.price >= Number.parseInt(filters.minPrice))
    }

    if (filters.maxPrice) {
      products = products.filter((product) => product.price <= Number.parseInt(filters.maxPrice))
    }

    // Sort products
    if (filters.sort === "price-low") {
      products.sort((a, b) => a.price - b.price)
    } else if (filters.sort === "price-high") {
      products.sort((a, b) => b.price - a.price)
    } else if (filters.sort === "name") {
      products.sort((a, b) => a.name.localeCompare(b.name))
    }

    return products
  }, [allMachinery, searchQuery, filters])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)

  const subcategories = [...new Set(allMachinery.map((product) => product.subcategory))]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filtering
  }

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
              <Link href="/mesin" className="font-body text-accent font-medium">
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
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
              ⚡ INVESTASI TERBAIK UNTUK UMKM ANDA!
            </div>
          </div>
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 mt-8">🏭 Solusi UMKM</Badge>
          <h1 className="font-heading font-bold text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Katalog Mesin UMKM
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            ⚙️ Mesin berkualitas tinggi untuk mengembangkan usaha kecil dan menengah Anda. Investasi terbaik untuk
            meningkatkan produktivitas bisnis.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-green-100 text-green-800 border-green-200">🔧 Support Teknis</Badge>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">📈 ROI Tinggi</Badge>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">⚡ Efisiensi Maksimal</Badge>
          </div>
        </div>

        <div className="mb-8">
          <ProductSearch onSearch={handleSearch} placeholder="Cari mesin berdasarkan nama..." />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters
              subcategories={subcategories}
              currentParams={filters}
              category="machinery"
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-body text-muted-foreground">
                Menampilkan {paginatedProducts.length} dari {filteredProducts.length} produk mesin
                {searchQuery && ` untuk "${searchQuery}"`}
              </p>

              {(filters.subcategory || searchQuery) && (
                <div className="flex gap-2">
                  {searchQuery && (
                    <Badge variant="outline" className="gap-2">
                      "{searchQuery}"
                      <button
                        onClick={() => handleSearch("")}
                        className="ml-1 hover:text-destructive transition-colors"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {filters.subcategory && (
                    <Badge variant="outline" className="gap-2">
                      {filters.subcategory}
                      <button
                        onClick={() => handleFilterChange({ ...filters, subcategory: "" })}
                        className="ml-1 hover:text-destructive transition-colors"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="font-heading font-bold text-lg mb-1">🤝 Konsultasi Bisnis Gratis!</h3>
                      <p className="text-muted-foreground text-sm">
                        Butuh saran mesin yang tepat untuk usaha Anda? Hubungi ahli kami!
                      </p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 whitespace-nowrap">
                      💼 Konsultasi Sekarang
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Tidak ada produk ditemukan</h3>
                <p className="font-body text-muted-foreground mb-4">
                  {searchQuery ? `Tidak ada hasil untuk "${searchQuery}"` : "Coba ubah filter pencarian Anda"}
                </p>
                <div className="flex gap-2 justify-center">
                  {searchQuery && (
                    <Button onClick={() => handleSearch("")} variant="outline">
                      Hapus Pencarian
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      handleFilterChange({ subcategory: "", sort: "", minPrice: "", maxPrice: "" })
                      handleSearch("")
                    }}
                    variant="outline"
                  >
                    Reset Semua Filter
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
