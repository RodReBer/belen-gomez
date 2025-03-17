"use client"

import { User, Award, Briefcase, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Sobre Mí</h2>
          <p className="mt-4 max-w-[700px] text-gray-600">
            Conoce un poco más sobre quién soy y mi trayectoria como influencer y creadora de contenido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Belén+Gómez"
                alt="Belén Gómez"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6 max-w-xl">
            <h3 className="text-2xl font-bold text-gray-900">¡Hola! Soy Belén Gómez</h3>
            <p className="text-gray-600">
              Soy una apasionada creadora de contenido e influencer con base en Uruguay. Mi viaje en el mundo digital
              comenzó hace 5 años, y desde entonces he tenido el privilegio de colaborar con marcas increíbles y
              conectar con una comunidad maravillosa.
            </p>
            <p className="text-gray-600">
              Mi contenido se centra en moda, estilo de vida, viajes y experiencias auténticas que inspiran a mi
              audiencia a vivir su mejor vida. Creo firmemente en la autenticidad y en crear conexiones genuinas a
              través de las redes sociales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="border-blue-200 hover:border-blue-300 transition-colors duration-300 shadow-sm">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Experiencia</h4>
                    <p className="text-sm text-gray-600">5+ años como creadora de contenido</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:border-blue-300 transition-colors duration-300 shadow-sm">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Reconocimientos</h4>
                    <p className="text-sm text-gray-600">Premiada como influencer emergente</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:border-blue-300 transition-colors duration-300 shadow-sm">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Colaboraciones</h4>
                    <p className="text-sm text-gray-600">+30 marcas nacionales e internacionales</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:border-blue-300 transition-colors duration-300 shadow-sm">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Comunidad</h4>
                    <p className="text-sm text-gray-600">Más de 300K seguidores en redes sociales</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

