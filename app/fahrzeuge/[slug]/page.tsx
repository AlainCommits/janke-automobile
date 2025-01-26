import { Metadata } from "next";
import { carService } from "@/lib/mock";
import { CarCard } from "@/components/CarCard";

interface PageProps {
  params: { slug: string }; // ✅ Korrekte Typisierung
  searchParams?: Record<string, string | string[] | undefined>;
}

// 🏷 Dynamisches Metadata-Rendering für SEO
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

// ✅ Statische Seiten-Generierung (SSG) für Next.js
export async function generateStaticParams(): Promise<{ params: { slug: string } }[]> {
  const cars = carService.getAllCars(); // Falls asynchron, async/await verwenden
  return cars.map((car) => ({ params: { slug: car.slug } })); // ✅ Richtige Struktur
}

// 📌 Fahrzeug-Detailseite
export default async function CarPage({ params }: PageProps) {
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
