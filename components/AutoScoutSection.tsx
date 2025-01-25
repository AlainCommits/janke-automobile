//components/AutoScoutSection.tsx
"use client"

import { Card } from "./ui/card"

export function AutoScoutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Unser Fahrzeugangebot</h2>
          <p className="mt-4 text-lg text-gray-600">
            Entdecken Sie unsere aktuellen Fahrzeuge direkt bei AutoScout24
          </p>
        </div>
        
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
          <div className="relative w-full h-[1024px]">
            <iframe 
              src="https://www.autoscout24.de/haendler/embedded-list/janke-automobile?preview=false" 
              className="w-full h-full"
              scrolling="auto" 
              frameBorder="0"
              title="Janke Automobile auf AutoScout24"
              loading="lazy"
            />
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          Falls der Inhalt nicht richtig angezeigt wird, 
          <a 
            href="https://www.autoscout24.de/haendler/janke-automobile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 ml-1"
          >
            besuchen Sie uns direkt auf AutoScout24
          </a>
        </div>
      </div>
    </section>
  )
}