import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "./whatsapp-button"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.originalPrice ? product.price : product.price

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Link href={`/produk/${product.id}`}>
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">-{product.discount}%</Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            Stok Habis
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <Link href={`/produk/${product.id}`}>
          <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2 hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2 mb-3">
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rp {product.originalPrice.toLocaleString("id-ID")}
            </span>
          )}
          <span className="font-heading font-bold text-lg text-accent">Rp {product.price.toLocaleString("id-ID")}</span>
        </div>

        <Badge variant="outline" className="text-xs">
          {product.subcategory}
        </Badge>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <WhatsAppButton
          productName={product.name}
          productPrice={product.price}
          className="w-full"
          variant="secondary"
        />
      </CardFooter>
    </Card>
  )
}
