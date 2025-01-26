//Users/alonondanse/janke-auto/components/modules/ReviewsSection.tsx

"use client"

import { motion } from 'framer-motion';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Schnelle Abwicklung & Top-Service. Mein Auto verkauft und direkt bezahlt bekommen. Sehr professionell und unkompliziert.",
    name: "Daniel R.",
    title: "Verkauf perfekt abgewickelt"
  },
  {
    quote: "Riesige Auswahl an Gebrauchtwagen – super Beratung! Sehr zufrieden mit meinem neuen Auto. Faire Preise und kompetente Mitarbeiter.",
    name: "Lisa M.",
    title: "Kompetente Beratung"
  },
  {
    quote: "Faire Preise und ehrliche Beratung. Hier wird man nicht über den Tisch gezogen. Sehr empfehlenswert!",
    name: "Michael K.",
    title: "Faire Preisgestaltung"
  },
  {
    quote: "Toller Service von Anfang bis Ende. Das Team ist sehr professionell und freundlich. Würde jederzeit wieder hier kaufen.",
    name: "Sarah B.",
    title: "Ausgezeichneter Service"
  },
  {
    quote: "Reibungsloser Ablauf beim Autokauf. Der gesamte Prozess war transparent und kundenorientiert. Kann ich nur weiterempfehlen!",
    name: "Thomas H.",
    title: "Problemlose Abwicklung"
  },
  {
    quote: "Sehr zuvorkommend und kompetent. Man fühlt sich gut aufgehoben und ehrlich beraten. Top Autohaus!",
    name: "Julia W.",
    title: "Top Kundenservice"
  },
  {
    quote: "Beste Autohandlung in der Region. Faire Preise und top Qualität. Immer wieder gerne!",
    name: "Marcus P.",
    title: "Qualität überzeugt"
  },
  {
    quote: "Hervorragender Kundenservice und faire Preisgestaltung. Die Beratung war ausgezeichnet und sehr persönlich.",
    name: "Andrea K.",
    title: "Persönliche Beratung"
  },
];

export function ReviewsSection() {
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
            Das sagen unsere Kunden
          </h2>
          <p className="text-muted-foreground text-lg">
            Kundenzufriedenheit steht bei uns an erster Stelle
          </p>
        </motion.div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}