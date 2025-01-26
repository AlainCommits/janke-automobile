import { Metadata } from "next";
import { carService } from "@/lib/mock";
import { CarCard } from "@/components/CarCard";

interface PageProps {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

// 🏷 Dynamisches Metadata-Rendering basierend auf dem Fahrzeug
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const car = await carService.getCarBySlug(params.slug);

  if (!car) {
    return {
      title: "Fahrzeug nicht gefunden",
      description: "Das angeforderte Fahrzeug konnte nicht gefunden werden.",
    };
  }

  return {
    title: `${car.brand} ${car.model} | Janke-Automobile`,
    description: car.description,
  };
}

// 🏗 Statische Seiten-Generierung (SSG) für bessere Performance
export async function generateStaticParams() {
  const cars = carService.getAllCars();
  return cars.map((car) => ({ slug: car.slug }));
}

// 📌 Fahrzeug-Detailseite
export default async function CarPage({ params }: { params: { slug: string } }) {
  const car = await carService.getCarBySlug(params.slug);

  if (!car) {
    return <div>Fahrzeug nicht gefunden</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <CarCard car={car} />
    </main>
  );
}
