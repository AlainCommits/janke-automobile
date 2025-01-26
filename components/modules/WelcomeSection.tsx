// /Users/alonondanse/janke-auto/components/sections/WelcomeSection.tsx

"use client"

import { Card, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import { Car } from '@/types/car';

// Korrekter Import des Carousels
const Carousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.default), {
  ssr: false
});

// Interface für die Slide-Daten
interface SlideData {
  title: string;
  button: string;
  src: string;
}

// Mock-Daten direkt in der Komponente
const mockCars: Car[] = [
  {
    id: '1',
    slug: 'mercedes-amg-2023',
    brand: 'Mercedes',
    model: 'AMG GT',
    year: 2023,
    price: 129900,
    mileage: 15000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 476,
    images: ['/images/cars/mercedes.webp'],
    description: 'Mercedes-AMG GT in perfektem Zustand...'
  },
  {
    id: '2',
    slug: 'bmw-m4-2024',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 109900,
    mileage: 5000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 510,
    images: ['/images/cars/bmw.jpeg'],
    description: 'BMW M4 Competition mit M Driver\'s Package...'
  },
  {
    id: '3',
    slug: 'lamborghini-huracan-2022',
    brand: 'Lamborghini',
    model: 'Huracán',
    year: 2022,
    price: 249900,
    mileage: 8000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 640,
    images: ['/images/cars/lambo.webp'],
    description: 'Lamborghini Huracán EVO...'
  }
];

export function WelcomeSection() {
  // Konvertiere Car-Daten zu Slide-Daten
  const slideData: SlideData[] = mockCars.map((car: Car) => ({
    title: `${car.brand} ${car.model}`,
    button: "Details ansehen",
    src: car.images[0]
  }));

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Carousel Column */}
          <div className="relative w-full aspect-square">
            <Carousel slides={slideData} />
          </div>

          {/* Content Column */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl 
              hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
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
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 1, icon: "✓", text: "Geprüfte Qualität & Garantie" },
                    { id: 2, icon: "🔄", text: "Schnelle & faire Abwicklung" },
                    { id: 3, icon: "💰", text: "Attraktive Finanzierung" },
                  ].map((feature) => (
                    <div 
                      key={feature.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 
                        hover:bg-primary/10 hover:translate-x-2 cursor-pointer
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
      </div>
    </section>
  );
}