import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = {}

const Hero3 = (props: Props) => {
  return (
    // Variante 3 - Fibonacci Spiral Layout
    <section className="relative h-[90dvh] bg-black">
      <div className="container mx-auto h-full relative">
        <div className="grid grid-cols-2 h-full gap-8">
          {/* Linke Seite - Titel und Text */}
          <div className="flex items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Finden Sie Ihr
    Traumauto
              </h1>
              <p className="text-xl md:text-2xl max-w-xl">
                Große Auswahl an geprüften Gebrauchtwagen von seriösen Händlern
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/fahrzeuge">
                  Fahrzeuge durchsuchen
                </Link>
              </Button>
            </div>
          </div>
    
          {/* Rechte Seite - Grid für Video und Kontakt */}
          <div className="grid grid-rows-2 gap-8 h-full mt-24">
            {/* Video oben */}
            <div className="relative overflow-hidden rounded-lg">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
            </div>
    
            {/* Kontakt unten */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Direktkontakt</h2>
                <div className="space-y-3">
                  <a 
                    href="tel:+491784684141"
                    className="flex items-center space-x-3 text-lg hover:text-red-600 transition-colors group"
                  >
                    <div className="p-2 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                      <Phone className="h-5 w-5 text-red-600" />
                    </div>
                    <span>+49 178 468 4141</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-red-50 rounded-full mt-1">
                      <MapPin className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Wattenscheider Hellweg 4</p>
                      <p className="text-gray-600">44869 Bochum</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  asChild 
                  className="flex-1 bg-red-600 hover:bg-red-700"
                >
                  <a href="tel:+491784684141">
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="flex-1"
                >
                  <Link href="/kontakt">
                    Kontakt
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3