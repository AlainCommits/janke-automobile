import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {}

const Hero2 = (props: Props) => {
  return (
    // Variante 3 - Fibonacci Spiral Layout
<section className="relative min-h-[600px] flex items-stretch bg-black">
  <div className="container mx-auto flex flex-col lg:flex-row">
    {/* Video Bereich - ca. 61.8% */}
    <div className="relative w-full lg:w-[61.8%] min-h-[400px] lg:min-h-[600px]">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Finden Sie Ihr Traumauto
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Große Auswahl an geprüften Gebrauchtwagen von seriösen Händlern
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/fahrzeuge">
              Fahrzeuge durchsuchen
            </Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Kontakt Bereich - ca. 38.2% */}
    <div className="w-full lg:w-[38.2%] bg-white p-8 flex items-center">
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Kontaktieren Sie uns</h2>
          <div className="space-y-3">
            <a 
              href="tel:+491784684141"
              className="flex items-center space-x-3 text-lg hover:text-red-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+49 178 468 4141</span>
            </a>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-1" />
              <div>
                <p className="font-medium">Wattenscheider Hellweg 4</p>
                <p>44869 Bochum</p>
              </div>
            </div>
            <a 
              href="mailto:info@apaydin-automobile.de"
              className="flex items-center space-x-3 text-lg hover:text-red-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>info@apaydin-automobile.de</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full bg-red-600 hover:bg-red-700"
          >
            <a href="tel:+491784684141">
              Jetzt anrufen
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="w-full"
          >
            <Link href="/kontakt">
              Kontaktformular
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero2