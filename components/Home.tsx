"use client"

import { Instagram, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/ContactForm"
import { BrandSlider } from "@/components/BrandSlider"
import { PortfolioGallery } from "@/components/PortfolioGallery"
import { AboutMe } from "@/components/AboutMe"
import Image from "next/image"

// Iconos personalizados para redes sociales - versión azul para contacto
const WhatsAppIconBlue = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-blue-600 ${className}`}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TikTokIconBlue = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-blue-600 ${className}`}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

// Iconos personalizados para redes sociales - versión negra para navbar y footer
const WhatsAppIconBlack = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-gray-800 ${className}`}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TikTokIconBlack = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-gray-800 ${className}`}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Belén Gómez</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-blue-600">
              Inicio
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-blue-600">
              Sobre Mí
            </a>
            <a href="#portfolio" className="text-sm font-medium transition-colors hover:text-blue-600">
              Portfolio
            </a>
            <a href="#brands" className="text-sm font-medium transition-colors hover:text-blue-600">
              Marcas
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-blue-600">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Instagram en navbar - NEGRO con hover AZUL */}
              <a href="https://instagram.com/beluuu_gomez" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-800 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              {/* TikTok en navbar - NEGRO con hover AZUL */}
              <a href="https://tiktok.com/@melliis7" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="group rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="h-5 w-5 flex items-center justify-center text-gray-800 group-hover:text-blue-600">
                    <TikTokIconBlack className="group-hover:hidden" />
                    <TikTokIconBlue className="hidden group-hover:block" />
                  </div>
                  <span className="sr-only">TikTok</span>
                </Button>
              </a>
              {/* WhatsApp en navbar - NEGRO con hover AZUL */}
              <a href="https://wa.me/59898029035" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="group rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="h-5 w-5 flex items-center justify-center text-gray-800 group-hover:text-blue-600">
                    <WhatsAppIconBlack className="group-hover:hidden" />
                    <WhatsAppIconBlue className="hidden group-hover:block" />
                  </div>
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </a>
            </div>
            {/* Botón de contacto mejorado */}
            <Button
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-5 py-2 shadow-md transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Mail className="h-4 w-4" />
              Contacto
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <Image
                src="https://wallpapers.com/images/hd/1600-x-900-black-1yb9521g5yljozk1.jpg"
                alt="Belén Gómez"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Belén Gómez
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
              Influencer & Creadora de Contenido | Uruguay
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-6 shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Conóceme
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 border-gray-300 text-white rounded-full px-8 py-6 shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contacto
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <AboutMe />

        <section id="portfolio" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Mi Portfolio
              </h2>
              <p className="mt-4 max-w-[700px] text-gray-600">
                Una selección de mis mejores trabajos y proyectos como influencer y creadora de contenido.
              </p>
            </div>
            <PortfolioGallery />
          </div>
        </section>

        <section id="brands" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Marcas</h2>
              <p className="mt-4 max-w-[700px] text-gray-600">
                He tenido el privilegio de colaborar con estas increíbles marcas a lo largo de mi carrera.
              </p>
            </div>
            <BrandSlider />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Contacto</h2>
                <p className="mt-4 text-gray-600">
                  ¿Interesado en colaborar? Completa el formulario y me pondré en contacto contigo lo antes posible.
                </p>
                <div className="mt-8 space-y-6">
                  {/* Instagram - AZUL */}
                  <a
                    href="https://instagram.com/belengomez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Instagram className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>@beluuu_gomez</span>
                  </a>

                  {/* TikTok - AZUL */}
                  <a
                    href="https://tiktok.com/@belengomez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <TikTokIconBlue />
                    </div>
                    <span>@melliis7</span>
                  </a>

                  {/* WhatsApp - AZUL */}
                  <a
                    href="https://wa.me/59898029035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <WhatsAppIconBlue />
                    </div>
                    <span>+598 98 029 035</span>
                  </a>

                  {/* Email - AZUL */}
                  <div className="flex items-center text-gray-700">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Belugomez177@gmail.com</span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-gray-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
            © {new Date().getFullYear()} Belén Gómez. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram en footer - NEGRO con hover AZUL */}
            <a href="https://instagram.com/beluuu_gomez" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-800 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            {/* TikTok en footer - NEGRO con hover AZUL */}
            <a href="https://tiktok.com/@melliis7" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="group rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="h-5 w-5 flex items-center justify-center text-gray-800 group-hover:text-blue-600">
                  <TikTokIconBlack className="group-hover:hidden" />
                  <TikTokIconBlue className="hidden group-hover:block" />
                </div>
                <span className="sr-only">TikTok</span>
              </Button>
            </a>
            {/* WhatsApp en footer - NEGRO con hover AZUL */}
            <a href="https://wa.me/59898029035" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="group rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="h-5 w-5 flex items-center justify-center text-gray-800 group-hover:text-blue-600">
                  <WhatsAppIconBlack className="group-hover:hidden" />
                  <WhatsAppIconBlue className="hidden group-hover:block" />
                </div>
                <span className="sr-only">WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

