// /Users/alonondanse/janke-auto/lib/mock.ts

// Typdefinitionen
export interface Seller {
  name: string;
  location: string;
  sellerType: "dealer" | "private";
  rating: number;
}

export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: "Benzin" | "Diesel" | "Elektro" | "Hybrid";
  transmission: "Automatik" | "Manuell";
  power: number;
  images: string[];
  description: string;
  features: string[];
  color: string;
  firstRegistration: string;
  seller: Seller;
}

// Mock-Daten
const MOCK_CARS: Car[] = [
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
  // ... weitere Autos
];

// Service-Funktionen
export const carService = {
  /**
   * Gibt alle verfügbaren Autos zurück
   */
  getAllCars(): Car[] {
    return MOCK_CARS;
  },

  /**
   * Findet ein Auto anhand seiner Slug-URL
   */
  async getCarBySlug(slug: string): Promise<Car | null> {
    return MOCK_CARS.find(car => car.slug === slug) || null;
  },

  /**
   * Findet ähnliche Autos der gleichen Marke
   */
  getSimilarCars(car: Car): Car[] {
    return MOCK_CARS
      .filter(c => c.slug !== car.slug && c.brand === car.brand)
      .slice(0, 3);
  },

  /**
   * Filtert Autos nach verschiedenen Kriterien
   */
  filterCars(options: {
    brand?: string;
    maxPrice?: number;
    fuelType?: Car['fuelType'];
  }): Car[] {
    return MOCK_CARS.filter(car => {
      if (options.brand && car.brand !== options.brand) return false;
      if (options.maxPrice && car.price > options.maxPrice) return false;
      if (options.fuelType && car.fuelType !== options.fuelType) return false;
      return true;
    });
  }
};