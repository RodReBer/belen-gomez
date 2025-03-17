"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Campaña Verano",
    category: "Moda",
    image: "/placeholder.svg?height=600&width=800",
    description: "Campaña de verano para marca de ropa",
  },
  {
    id: 2,
    title: "Evento Lanzamiento",
    category: "Eventos",
    image: "/placeholder.svg?height=600&width=800",
    description: "Presentación de nuevo producto",
  },
  {
    id: 3,
    title: "Sesión Editorial",
    category: "Moda",
    image: "/placeholder.svg?height=600&width=800",
    description: "Editorial para revista de moda",
  },
  {
    id: 4,
    title: "Campaña Digital",
    category: "Digital",
    image: "/placeholder.svg?height=600&width=800",
    description: "Contenido para redes sociales",
  },
  {
    id: 5,
    title: "Viaje Promocional",
    category: "Viajes",
    image: "/placeholder.svg?height=600&width=800",
    description: "Destino turístico promocionado",
  },
  {
    id: 6,
    title: "Colaboración Gastronómica",
    category: "Gastronomía",
    image: "/placeholder.svg?height=600&width=800",
    description: "Promoción de restaurante",
  },
]

const categories = ["Todos", "Moda", "Eventos", "Digital", "Viajes", "Gastronomía"]

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    selectedCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <div
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(item.title)}`}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <div className="grid gap-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={item.image || `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(item.title)}`}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

