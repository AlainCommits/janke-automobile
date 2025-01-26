// /Users/alonondanse/janke-auto/app/fahrzeuge/[slug]/page.tsx

import { getCarBySlug } from '@/lib/mock';
import { CarCard } from '@/components/CarCard';
import { Metadata } from 'next';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const car = await getCarBySlug(params.slug);
  
  if (!car) {
    return {
      title: 'Fahrzeug nicht gefunden',
      description: 'Das angeforderte Fahrzeug konnte nicht gefunden werden.',
    };
  }

  return {
    title: `${car.brand} ${car.model} | Janke-Automobile`,
    description: car.description,
  };
}

export default async function CarPage({ params }: PageProps) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    return <div>Fahrzeug nicht gefunden</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <CarCard car={car} />
    </main>
  );
}