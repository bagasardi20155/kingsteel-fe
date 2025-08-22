import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search } from "lucide-react"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>

            <h1 className="font-heading font-bold text-2xl mb-4">Produk Tidak Ditemukan</h1>

            <p className="font-body text-muted-foreground mb-6">
              Maaf, produk yang Anda cari tidak dapat ditemukan. Mungkin produk telah dihapus atau URL tidak valid.
            </p>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/furniture">Lihat Katalog Furniture</Link>
              </Button>

              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
