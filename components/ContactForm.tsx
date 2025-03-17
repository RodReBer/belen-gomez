"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    try {
      // Simulamos el envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mostramos un toast de éxito
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
        className: "bg-blue-50 border-blue-200",
      })

      // Reseteamos el formulario
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100">
      <h3 className="text-2xl font-bold mb-6 text-blue-600">Envíame un mensaje</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre
            </label>
            <Input
              id="name"
              placeholder="Tu nombre"
              className="border-blue-200 focus-visible:ring-blue-500"
              {...register("name")}
            />
            {errors.name && <p className="text-sm font-medium text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              placeholder="tu@email.com"
              className="border-blue-200 focus-visible:ring-blue-500"
              {...register("email")}
            />
            {errors.email && <p className="text-sm font-medium text-destructive">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700">
            Asunto
          </label>
          <Input
            id="subject"
            placeholder="Asunto del mensaje"
            className="border-blue-200 focus-visible:ring-blue-500"
            {...register("subject")}
          />
          {errors.subject && <p className="text-sm font-medium text-destructive">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <Textarea
            id="message"
            placeholder="Escribe tu mensaje aquí..."
            className="min-h-[150px] border-blue-200 focus-visible:ring-blue-500"
            {...register("message")}
          />
          {errors.message && <p className="text-sm font-medium text-destructive">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Enviar Mensaje
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

