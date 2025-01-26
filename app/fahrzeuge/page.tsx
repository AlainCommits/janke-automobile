import { Metadata } from "next";
import { carService } from "@/lib/mock";
import { CarCard } from "@/components/CarCard";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Unsere Fahrzeuge | Janke-Automobile",
  description: "Entdecken Sie unsere große Auswahl an hochwertigen Gebrauchtwagen. Alle Fahrzeuge sind geprüft und mit Garantie.",
};

// 🚀 Hauptseite für die Fahrzeugübersicht
export default async function FahrzeugePage() {
  const cars = await carService.getAllCars(); // ✅ Jetzt mit carService

  return (
    <main className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Unsere Fahrzeuge</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
