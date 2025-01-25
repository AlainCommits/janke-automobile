import { Metadata } from 'next';
import { getAllCars } from '@/lib/autoscout24';
import { CarCard } from '@/components/CarCard';

export const metadata: Metadata = {
  title: 'Fahrzeugübersicht | AutoScout24',
  description: 'Finde dein Traumauto unter zahlreichen Angeboten.',
};

export default function VehiclesPage() {
  const cars = getAllCars(); // Holt die Mock-Daten

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fahrzeuge</h1>

      {cars.length === 0 ? (
        <p className="text-gray-600">Keine Fahrzeuge gefunden.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </main>
  );
}
