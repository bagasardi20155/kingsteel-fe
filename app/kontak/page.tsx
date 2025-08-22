import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function KontakPage() {
  const whatsappNumber = "6281234567890" // Replace with actual WhatsApp number
  const whatsappMessage = "Halo, saya ingin bertanya tentang produk furniture Anda."

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              FurniStore
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="/furniture" className="text-muted-foreground hover:text-primary transition-colors">
                Furniture
              </Link>
              <Link href="/mesin" className="text-muted-foreground hover:text-primary transition-colors">
                Mesin UMKM
              </Link>
              <Link href="/kontak" className="text-primary font-medium">
                Kontak
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Hubungi Kami</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu Anda menemukan furniture dan mesin UMKM yang tepat untuk kebutuhan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Alamat Toko
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Jl. Raya Delanggu No. 123
                  <br />
                  Delanggu, Klaten
                  <br />
                  Jawa Tengah 57471
                  <br />
                  Indonesia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  WhatsApp Business
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Hubungi kami melalui WhatsApp untuk konsultasi dan pemesanan produk
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Jam Layanan WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Senin - Jumat</span>
                    <span className="font-medium">09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabtu</span>
                    <span className="font-medium">09:00 - 15:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minggu</span>
                    <span className="font-medium text-red-600">Tutup</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Catatan:</strong> Respon WhatsApp di luar jam layanan akan dijawab pada hari kerja
                    berikutnya.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lokasi Toko</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.234567890123!2d110.6789!3d-7.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1234567890ab%3A0x1234567890abcdef!2sDelanggu%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mengapa Memilih Kami?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Kualitas Terjamin</h4>
                    <p className="text-sm text-muted-foreground">
                      Furniture berkualitas tinggi dengan material pilihan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Harga Kompetitif</h4>
                    <p className="text-sm text-muted-foreground">Harga terbaik dengan kualitas premium</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Pelayanan Profesional</h4>
                    <p className="text-sm text-muted-foreground">Tim berpengalaman siap membantu kebutuhan Anda</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Lokasi Strategis</h4>
                    <p className="text-sm text-muted-foreground">Mudah dijangkau di pusat kota Delanggu, Klaten</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2024 FurniStore. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
