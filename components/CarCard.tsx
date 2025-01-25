//components/CarCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/fahrzeuge/${car.slug}`}>
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-white/90">
                {car.fuelType}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">
              {car.brand} {car.model}
            </h3>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-lg">
                €{car.price.toLocaleString()}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span>{car.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{car.mileage.toLocaleString()} km</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{car.transmission}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-muted-foreground">
              {car.seller.location}
            </div>
            <Button variant="secondary">
              Details ansehen
            </Button>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}