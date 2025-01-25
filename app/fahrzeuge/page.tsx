//app/fahrzeuge/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { autoscout24Client } from '@/lib/autoscout24';
import SimilarCars from '@/components/SimilarCars';
import { notFound } from 'next/navigation';
import CarGrid from '@/components/CarGrid';
export const metadata: Metadata = {
  title: 'Gebrauchtwagen | AutoScout24 Marketplace',
  description: 'Durchsuchen Sie unsere Auswahl an Gebrauchtwagen',
};

export default async function CarsPage() {
  const cars = await autoscout24Client.getAllCars();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Verfügbare Fahrzeuge</h1>
      <CarGrid cars={cars} />
    </div>
  );
}