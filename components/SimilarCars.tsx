//components/SimilarCars.tsx
import { Car } from '@/types/car';
import { CarCard } from '@/components/CarCard';

interface SimilarCarsProps {
  cars: Car[];
}

export default function SimilarCars({ cars }: SimilarCarsProps) {
  if (cars.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Ähnliche Fahrzeuge</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {cars.length === 0 && (
          <p className="text-center text-muted-foreground">
            Keine ähnlichen Fahrzeuge gefunden
          </p>
        )}
      </div>
    </section>
  );
}