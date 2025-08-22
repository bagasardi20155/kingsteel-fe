"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Filter, X } from "lucide-react"

interface ProductFiltersProps {
  subcategories: string[]
  currentParams: {
    subcategory?: string
    sort?: string
    minPrice?: string
    maxPrice?: string
  }
  category: "furniture" | "machinery"
  onFilterChange?: (filters: {
    subcategory: string
    sort: string
    minPrice: string
    maxPrice: string
  }) => void
}

export function ProductFilters({ subcategories, currentParams, category, onFilterChange }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [minPrice, setMinPrice] = useState(currentParams.minPrice || "")
  const [maxPrice, setMaxPrice] = useState(currentParams.maxPrice || "")

  const updateFilters = (key: string, value: string | null) => {
    if (onFilterChange) {
      // Client-side filtering mode
      const newFilters = {
        subcategory: currentParams.subcategory || "",
        sort: currentParams.sort || "",
        minPrice: currentParams.minPrice || "",
        maxPrice: currentParams.maxPrice || "",
        [key]: value || "",
      }
      onFilterChange(newFilters)
    } else {
      // URL-based filtering mode (legacy)
      const params = new URLSearchParams(searchParams.toString())

      if (value && value !== "") {
        params.set(key, value)
      } else {
        params.delete(key)
      }

      router.push(`/${category}?${params.toString()}`)
    }
  }

  const applyPriceFilter = () => {
    if (onFilterChange) {
      // Client-side filtering mode
      const newFilters = {
        subcategory: currentParams.subcategory || "",
        sort: currentParams.sort || "",
        minPrice: minPrice,
        maxPrice: maxPrice,
      }
      onFilterChange(newFilters)
    } else {
      // URL-based filtering mode (legacy)
      const params = new URLSearchParams(searchParams.toString())

      if (minPrice) {
        params.set("minPrice", minPrice)
      } else {
        params.delete("minPrice")
      }

      if (maxPrice) {
        params.set("maxPrice", maxPrice)
      } else {
        params.delete("maxPrice")
      }

      router.push(`/${category}?${params.toString()}`)
    }
  }

  const clearAllFilters = () => {
    setMinPrice("")
    setMaxPrice("")

    if (onFilterChange) {
      // Client-side filtering mode
      onFilterChange({
        subcategory: "",
        sort: "",
        minPrice: "",
        maxPrice: "",
      })
    } else {
      // URL-based filtering mode (legacy)
      router.push(`/${category}`)
    }
  }

  const hasActiveFilters =
    currentParams.subcategory || currentParams.minPrice || currentParams.maxPrice || currentParams.sort

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-heading">
          <Filter className="h-4 w-4" />
          Filter Produk
        </CardTitle>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4 mr-1" />
            Hapus Semua Filter
          </Button>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Sort */}
        <div>
          <Label className="font-heading font-medium mb-3 block">Urutkan</Label>
          <Select value={currentParams.sort || "default"} onValueChange={(value) => updateFilters("sort", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih urutan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="name">Nama A-Z</SelectItem>
              <SelectItem value="price-low">Harga Terendah</SelectItem>
              <SelectItem value="price-high">Harga Tertinggi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Category Filter */}
        <div>
          <Label className="font-heading font-medium mb-3 block">Kategori</Label>
          <div className="space-y-2">
            {subcategories.map((subcategory) => (
              <Button
                key={subcategory}
                variant={currentParams.subcategory === subcategory ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() =>
                  updateFilters("subcategory", currentParams.subcategory === subcategory ? null : subcategory)
                }
              >
                {subcategory}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label className="font-heading font-medium mb-3 block">Rentang Harga</Label>
          <div className="space-y-3">
            <div>
              <Label htmlFor="minPrice" className="text-sm text-muted-foreground">
                Harga Minimum
              </Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="maxPrice" className="text-sm text-muted-foreground">
                Harga Maksimum
              </Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="999999999"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <Button onClick={applyPriceFilter} variant="outline" size="sm" className="w-full bg-transparent">
              Terapkan Filter Harga
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <>
            <Separator />
            <div>
              <Label className="font-heading font-medium mb-3 block">Filter Aktif</Label>
              <div className="flex flex-wrap gap-2">
                {currentParams.subcategory && (
                  <Badge variant="secondary" className="gap-1">
                    {currentParams.subcategory}
                    <button onClick={() => updateFilters("subcategory", null)} className="hover:text-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {currentParams.sort && (
                  <Badge variant="secondary" className="gap-1">
                    {currentParams.sort === "price-low"
                      ? "Harga ↑"
                      : currentParams.sort === "price-high"
                        ? "Harga ↓"
                        : currentParams.sort === "name"
                          ? "Nama A-Z"
                          : currentParams.sort}
                    <button onClick={() => updateFilters("sort", null)} className="hover:text-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {(currentParams.minPrice || currentParams.maxPrice) && (
                  <Badge variant="secondary" className="gap-1">
                    Rp {currentParams.minPrice || "0"} - {currentParams.maxPrice || "∞"}
                    <button
                      onClick={() => {
                        updateFilters("minPrice", null)
                        updateFilters("maxPrice", null)
                        setMinPrice("")
                        setMaxPrice("")
                      }}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
