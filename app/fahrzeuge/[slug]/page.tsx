// /Users/alonondanse/janke-auto/app/fahrzeuge/[slug]/page.tsx

import { getCarBySlug } from '@/lib/mock';
import { CarCard } from '@/components/CarCard';
import { Metadata } from 'next';

// Update the Props type to match NextJS 13+ requirements
interface Props {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!params?.slug) {
    return {
      title: 'Fahrzeug nicht gefunden',
      description: 'Das angeforderte Fahrzeug konnte nicht gefunden werden.',
    };
  }

  const car = await getCarBySlug(params.slug);

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


// Make sure the component is async and properly typed
export default async function CarPage({ params }: Props) {
  if (!params?.slug) {
    return <div>Fahrzeug nicht gefunden</div>;
  }

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
