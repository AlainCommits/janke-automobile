// /Users/alonondanse/janke-auto/components/sections/FeaturedCarsSection.tsx

"use client"

import { motion } from 'framer-motion';
import { carService } from '@/lib/mock';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedButton } from '../ui/animated-button';
import Image from 'next/image';

export function FeaturedCarsSection() {
  const featuredCars = carService.getAllCars().slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ausgewählte Fahrzeuge
          </h2>
          <p className="text-muted-foreground text-lg">
            Entdecken Sie unsere aktuellen Highlights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={car.images[0]}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-white/90">
                        {car.price.toLocaleString('de-DE')} €
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <AnimatedButton>
            Alle Fahrzeuge ansehen
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}