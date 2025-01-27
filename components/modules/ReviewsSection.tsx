//Users/alonondanse/janke-auto/components/modules/ReviewsSection.tsx

"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Daniel R.",
    text: "Schnelle Abwicklung & Top-Service. Mein Auto verkauft und direkt bezahlt bekommen.",
    rating: 5
  },
  {
    name: "Lisa M.",
    text: "Riesige Auswahl an Gebrauchtwagen – super Beratung!",
    rating: 5
  },
  {
    name: "Michael K.",
    text: "Faire Preise und ehrliche Beratung. Hier wird man nicht über den Tisch gezogen.",
    rating: 5
  },
  {
    name: "Sarah B.",
    text: "Toller Service von Anfang bis Ende. Das Team ist sehr professionell und freundlich.",
    rating: 5
  }
];

export function ReviewsSection() {
  return (
    <section className="py-24 overflow-hidden">
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

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-reverse">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px]"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{review.text}"</p>
                  <p className="font-bold">- {review.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}