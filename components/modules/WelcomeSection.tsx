//Users/alonondanse/janke-auto/components/modules/WelcomeSection.tsx

"use client"

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function WelcomeSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Bento Grid Bildcontainer - 2/3 Breite */}
          <div className="lg:col-span-2 grid grid-cols-2 auto-rows-[240px] gap-4">
            <div className="relative row-span-2 rounded-xl overflow-hidden">
              <Image
                src="/images/cars/mercedes.webp"
                alt="Mercedes Showroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/cars/bmw.jpeg"
                alt="BMW Showroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/cars/lambo.webp"
                alt="Lamborghini Showroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Container - 1/3 Breite */}
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl 
            hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold">
                Willkommen bei Janke-Automobile
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Suchen Sie einen zuverlässigen Gebrauchtwagen oder möchten Sie Ihr Fahrzeug schnell & unkompliziert verkaufen?
                </p>
                <p className="text-lg font-medium">
                  Janke-Automobile ist Ihr Experte für geprüfte Fahrzeuge, faire Preise und Top-Kundenservice.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  { icon: "✓", text: "Geprüfte Qualität & Garantie" },
                  { icon: "🔄", text: "Schnelle & faire Abwicklung" },
                  { icon: "💰", text: "Attraktive Finanzierung" },
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 
                    hover:bg-primary/10 hover:translate-x-2
                    transition-all duration-300"
                  >
                    <span className="text-xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}