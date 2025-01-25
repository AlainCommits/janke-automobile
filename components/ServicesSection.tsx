//components/ServicesSection.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Fahrzeugankauf",
    image: "/images/cars/mercedes.webp",
    description: "Vertrauen Sie auf unsere fairen, schnellen und unkomplizierten Prozesse beim Fahrzeugankauf – überzeugen Sie sich selbst in unseren Bewertungen."
  },
  {
    title: "Ihr Traumwagen wartet auf Sie!",
    image: "/images/cars/bmw.jpeg",
    description: "Entdecken Sie unser vielfältiges Angebot an erstklassigen Gebrauchtwagen – geprüft, gepflegt und mit Garantie"
  },
  {
    title: "Top Finanzierung",
    image: "/images/cars/lambo.webp",
    description: "Mit unserem Finanzierungs-Partner geht Ihr Fahrzeugwunsch bei uns bestimmt in Erfüllung! Niedrige Zinsen, niedrige Raten, gern auch ohne Anzahlung."
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}