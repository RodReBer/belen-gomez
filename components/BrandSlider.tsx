"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Brand {
  id: number
  name: string
  logo: string
  description: string
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Conaprole",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Colaboración para campaña de productos lácteos",
  },
  {
    id: 2,
    name: "McDonald's",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 3,
    name: "Vans",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Embajadora de marca para colección de verano",
  },
  {
    id: 4,
    name: "Adidas",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Campaña deportiva y lanzamiento de productos",
  },
  {
    id: 5,
    name: "Coca-Cola",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Promoción de campaña navideña",
  },
  {
    id: 6,
    name: "Netflix",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Promoción de series originales",
  },
]

export function BrandSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = brands.length - visibleItems + 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, totalSlides])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="flex-none px-4" style={{ width: `${100 / visibleItems}%` }}>
              <Card className="h-full border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src={brand.logo || `/placeholder.svg?height=100&width=200&text=${encodeURIComponent(brand.name)}`}
                      alt={brand.name}
                      width={200}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{brand.name}</h3>
                  <p className="text-sm text-gray-600">{brand.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md z-10 border-blue-300 text-blue-600 hover:bg-blue-100"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md z-10 border-blue-300 text-blue-600 hover:bg-blue-100"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Siguiente</span>
      </Button>
    </div>
  )
}

