//app/fahrzeuge/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MockCars, getCarBySlug, getSimilarCars } from '@/lib/mock';
import SimilarCars from '@/components/SimilarCars';
import { Car } from '@/types/car';

type Props = {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCarBySlug(params.slug);
  
  if (!car) return {};
  
  return {
    title: `${car.brand} ${car.model} ${car.year} | Fahrzeugdetails`,
    description: car.description,
    openGraph: {
      images: car.images,
    },
  };
}

export async function generateStaticParams() {
  return MockCars.map((car) => ({
    slug: car.slug,
  }));
}

export default function CarPage({ params }: Props) {
  const car = getCarBySlug(params.slug);
  
  if (!car) notFound();
  
  const similarCars = getSimilarCars(car);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
          <Image
            src={car.images[0]}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {car.brand} {car.model} {car.year}
          </h1>
          <div className="space-y-4">
            <p className="text-2xl font-bold">€{car.price.toLocaleString()}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Kilometerstand</p>
                <p>{car.mileage.toLocaleString()} km</p>
              </div>
              <div>
                <p className="text-gray-600">Kraftstoff</p>
                <p>{car.fuelType}</p>
              </div>
              <div>
                <p className="text-gray-600">Leistung</p>
                <p>{car.power} PS</p>
              </div>
              <div>
                <p className="text-gray-600">Getriebe</p>
                <p>{car.transmission}</p>
              </div>
            </div>
            <p className="text-gray-700">{car.description}</p>
          </div>
        </div>
      </article>

      {similarCars && similarCars.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Ähnliche Fahrzeuge</h2>
          <SimilarCars cars={similarCars} />
        </div>
      )}
    </div>
  );
}