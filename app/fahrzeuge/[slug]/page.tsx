import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { autoscout24Client } from '@/lib/autoscout24';
import SimilarCars from '@/components/SimilarCars';
import { Car } from '@/types/car';

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const car = await autoscout24Client.getCarBySlug(params.slug);
  
  if (!car) return {};
  
  return {
    title: `${car.brand} ${car.model} ${car.year} | Gebrauchtwagen Details`,
    description: car.description,
    openGraph: {
      images: car.images,
      title: `${car.brand} ${car.model} ${car.year}`,
      description: car.description,
    },
  };
}

export async function generateStaticParams() {
  const cars = await autoscout24Client.getAllCars();
  return cars.map((car: Car) => ({
    slug: car.slug,
  }));
}

export default async function CarPage({ params }: PageProps) {
  const car = await autoscout24Client.getCarBySlug(params.slug);
  
  if (!car) notFound();
  
  // Explizite Typisierung für similarCars
  const similarCars: Car[] = await autoscout24Client.getSimilarCars(car as Car);

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