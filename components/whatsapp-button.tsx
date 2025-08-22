"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  productName: string
  productPrice: number
  className?: string
  variant?: "default" | "outline" | "secondary"
}

export function WhatsAppButton({
  productName,
  productPrice,
  className = "",
  variant = "default",
}: WhatsAppButtonProps) {
  const phoneNumber = "6281234567890" // Replace with actual WhatsApp Business number

  const message = encodeURIComponent(
    `Halo, saya tertarik dengan produk:\n\n` +
      `Nama Produk: ${productName}\n` +
      `Harga: Rp ${productPrice.toLocaleString("id-ID")}\n\n` +
      `Mohon informasi lebih lanjut mengenai ketersediaan dan cara pembelian. Terima kasih!`,
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button onClick={handleClick} variant={variant} className={`gap-2 ${className}`}>
      <MessageCircle className="h-4 w-4" />
      Tanya via WhatsApp
    </Button>
  )
}
