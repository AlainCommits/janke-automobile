import { Car } from '@/types/car';

// Interface für einen Verkäufer (ehemals "dealer")
interface Seller {
  name: string;
  location: string;
  sellerType: string; // "dealer" oder "private"
  rating: number;
}

// 🚀 Mock-Daten für Fahrzeuge
export const MockCars: Car[] = [
  {
    id: '1',
    slug: 'mercedes-amg-2023',
    brand: 'Mercedes',
    model: 'AMG GT',
    year: 2023,
    price: 129900,
    mileage: 15000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 476,
    images: ['/images/cars/mercedes.webp'],
    description: 'Mercedes-AMG GT in perfektem Zustand...',
    features: ['LED-Scheinwerfer', 'Navigationssystem', 'Performance Sitze'],
    color: 'Obsidianschwarz Metallic',
    firstRegistration: '01/2023',
    seller: {
      name: 'Mercedes-Benz Center',
      location: 'Hamburg',
      sellerType: 'dealer',
      rating: 4.9
    }
  },
  {
    id: '2',
    slug: 'bmw-m4-2024',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 109900,
    mileage: 5000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 510,
    images: ['/images/cars/bmw.jpeg'],
    description: 'BMW M4 Competition mit M Driver\'s Package...',
    features: ['M Sport Sitze', 'Laserlicht', 'Harman Kardon'],
    color: 'San Marino Blau',
    firstRegistration: '11/2023',
    seller: {
      name: 'BMW M Studio',
      location: 'München',
      sellerType: 'dealer',
      rating: 4.8
    }
  },
  {
    id: '3',
    slug: 'lamborghini-huracan-2022',
    brand: 'Lamborghini',
    model: 'Huracán',
    year: 2022,
    price: 249900,
    mileage: 8000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 640,
    images: ['/images/cars/lambo.webp'],
    description: 'Lamborghini Huracán EVO...',
    features: ['Carbon Keramik Bremsen', 'Lift System', 'Sport Auspuff'],
    color: 'Verde Mantis',
    firstRegistration: '06/2022',
    seller: {
      name: 'Luxury Cars Hamburg',
      location: 'Hamburg',
      sellerType: 'dealer',
      rating: 5.0
    }
  },
  {
    id: '4',
    slug: 'jeep-wrangler-2023',
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    price: 69900,
    mileage: 12000,
    fuelType: 'Diesel',
    transmission: 'Automatik',
    power: 272,
    images: ['/images/cars/jeep.jpeg'],
    description: 'Jeep Wrangler Unlimited Rubicon...',
    features: ['Hardtop', 'Off-Road Paket', 'LED Paket'],
    color: 'Granite Crystal',
    firstRegistration: '03/2023',
    seller: {
      name: 'Jeep Center Berlin',
      location: 'Berlin',
      sellerType: 'dealer',
      rating: 4.7
    }
  },
  {
    id: '5',
    slug: 'mini-cooper-2024',
    brand: 'MINI',
    model: 'Cooper S',
    year: 2024,
    price: 39900,
    mileage: 1000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    power: 178,
    images: ['/images/cars/mini.jpeg'],
    description: 'MINI Cooper S mit John Cooper Works Paket...',
    features: ['Panoramadach', 'Harman Kardon', 'Sport Paket'],
    color: 'British Racing Green',
    firstRegistration: '12/2023',
    seller: {
      name: 'MINI Store Frankfurt',
      location: 'Frankfurt',
      sellerType: 'dealer',
      rating: 4.6
    }
  }
];

// 🚀 Funktionen zur Datenabfrage (nur Mock-Daten)
export function getAllCars(): Car[] {
  return MockCars;
}

export async function getCarBySlug(slug: string): Promise<Car | null> {
  return MockCars.find(car => car.slug === slug) || null;
}

export function getSimilarCars(car: Car): Car[] {
  return MockCars
    .filter(c => c.slug !== car.slug && c.brand === car.brand)
    .slice(0, 3);
}
