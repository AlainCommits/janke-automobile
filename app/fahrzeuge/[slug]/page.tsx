// /Users/alonondanse/janke-auto/app/cars/[slug]/page.tsx

import { getCarBySlug } from '@/lib/mock';
import { CarCard } from '@/components/CarCard';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCarBySlug(params.slug);
  if (!car) {
    return {
      title: 'Fahrzeug nicht gefunden',
      description: 'Das angeforderte Fahrzeug konnte nicht gefunden werden.',
    };
  }

  return {
    title: `${car.brand} ${car.model} | AutoScout24 Marketplace`,
    description: car.description,
  };
}

export default async function CarPage({ params }: Props) {
  const car = getCarBySlug(params.slug);

  if (!car) {
    return <div>Fahrzeug nicht gefunden</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <CarCard car={car} />
    </main>
  );
}