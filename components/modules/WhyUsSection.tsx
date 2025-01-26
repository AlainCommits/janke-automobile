// /Users/alonondanse/janke-auto/components/sections/WhyUsSection.tsx

"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: "✅",
    title: "Geprüfte Qualität",
    description: "Alle Fahrzeuge sind werkstattgeprüft und mit Garantie erhältlich"
  },
  {
    icon: "✅",
    title: "Attraktive Finanzierung",
    description: "Flexible Finanzierungsmodelle, auch ohne Anzahlung"
  },
  {
    icon: "✅",
    title: "Schneller Ankauf",
    description: "Kostenlose Bewertung & Sofortzahlung für Ihr Fahrzeug"
  }
];

export function WhyUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Warum Janke-Automobile?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}