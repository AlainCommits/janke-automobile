import { Metadata } from 'next';
import Image from 'next/image';
import { autoscout24Client } from '@/lib/autoscout24';
import SimilarCars from '@/components/SimilarCars';
import { notFound } from 'next/navigation';

// Korrekte Definition der Props
interface CarPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Metadata-Funktion mit korrektem Typ
export async function generateMetadata({ params }: CarPageProps): Promise<Metadata> {
  const car = await autoscout24Client.getCarBySlug(params.slug);

  if (!car) return { title: 'Fahrzeug nicht gefunden', description: 'Dieses Fahrzeug ist nicht verfügbar.' };

  return {
    title: `${car.brand} ${car.model} ${car.year} | AutoScout24`,
    description: car.description,
    openGraph: {
      images: car.images?.length ? [car.images[0]] : [],
    },
  };
}

// Statische Routen generieren
export async function generateStaticParams() {
  const cars = await autoscout24Client.getAllCars();
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

// Hauptkomponente der Fahrzeugseite
export default async function CarPage({ params }: CarPageProps) {
  const car = await autoscout24Client.getCarBySlug(params.slug);

  if (!car) return notFound();

  const similarCars = await autoscout24Client.getSimilarCars(car);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
          <Image
            src={car.images?.[0] || '/fallback-car.jpg'} // Fallback-Bild für Fehlerhandling
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
            <p>{car.mileage.toLocaleString()} km</p>
            <p>{car.description}</p>
          </div>
        </div>
      </article>

      {/* JSON-LD für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Car',
            name: `${car.brand} ${car.model}`,
            manufacturer: car.brand,
            model: car.model,
            modelDate: car.year,
            mileageFromOdometer: {
              '@type': 'QuantitativeValue',
              value: car.mileage,
              unitCode: 'KMT',
            },
            offers: {
              '@type': 'Offer',
              price: car.price,
              priceCurrency: 'EUR',
            },
          }),
        }}
      />

      <SimilarCars cars={similarCars} />
    </div>
  );
}
