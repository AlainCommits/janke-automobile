//lib/autoscout24.ts
import { Car } from '@/types/car';

// Interface für Filter-Optionen
interface Filters {
  brand?: string;
  priceMin?: number;
  priceMax?: number;
  limit?: number; // Für Pagination/Limiting
}

// API Interface Definition
interface AutoScout24API {
  getAllCars: (filters?: Filters) => Promise<Car[]>;
  getCarBySlug: (slug: string) => Promise<Car | null>;
  getSimilarCars: (car: Car) => Promise<Car[]>;
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
    images: [
      '/images/cars/mercedes.webp',
      '/images/cars/amg.html'
    ],
    description: 'Mercedes-AMG GT in perfektem Zustand...',
    features: ['LED-Scheinwerfer', 'Navigationssystem', 'Performance Sitze'],
    color: 'Obsidianschwarz Metallic',
    firstRegistration: '01/2023',
    seller: {
      name: 'Mercedes-Benz Center',
      location: 'Hamburg',
      type: 'dealer',
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
    images: [
      '/images/cars/bmw.jpeg'
    ],
    description: 'BMW M4 Competition mit M Driver\'s Package...',
    features: ['M Sport Sitze', 'Laserlicht', 'Harman Kardon'],
    color: 'San Marino Blau',
    firstRegistration: '11/2023',
    seller: {
      name: 'BMW M Studio',
      location: 'München',
      type: 'dealer',
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
    images: [
      '/images/cars/lambo.webp'
    ],
    description: 'Lamborghini Huracán EVO...',
    features: ['Carbon Keramik Bremsen', 'Lift System', 'Sport Auspuff'],
    color: 'Verde Mantis',
    firstRegistration: '06/2022',
    seller: {
      name: 'Luxury Cars Hamburg',
      location: 'Hamburg',
      type: 'dealer',
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
    images: [
      '/images/cars/jeep.jpeg'
    ],
    description: 'Jeep Wrangler Unlimited Rubicon...',
    features: ['Hardtop', 'Off-Road Paket', 'LED Paket'],
    color: 'Granite Crystal',
    firstRegistration: '03/2023',
    seller: {
      name: 'Jeep Center Berlin',
      location: 'Berlin',
      type: 'dealer',
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
    images: [
      '/images/cars/mini.jpeg'
    ],
    description: 'MINI Cooper S mit John Cooper Works Paket...',
    features: ['Panoramadach', 'Harman Kardon', 'Sport Paket'],
    color: 'British Racing Green',
    firstRegistration: '12/2023',
    seller: {
      name: 'MINI Store Frankfurt',
      location: 'Frankfurt',
      type: 'dealer',
      rating: 4.6
    }
  }
];

class AutoScout24Client implements AutoScout24API {
  private apiKey: string;
  private baseUrl: string;
  private isProduction: boolean;

  constructor() {
    this.apiKey = process.env.AUTOSCOUT24_API_KEY || '';
    this.baseUrl = 'https://api.autoscout24.com/v1';
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  async getAllCars(filters?: Filters): Promise<Car[]> {
    if (!this.isProduction) {
      return this.getMockCars(filters);
    }

    try {
      const queryParams = new URLSearchParams();
      if (filters?.brand) queryParams.append('brand', filters.brand);
      if (filters?.priceMin) queryParams.append('priceFrom', filters.priceMin.toString());
      if (filters?.priceMax) queryParams.append('priceTo', filters.priceMax.toString());
      if (filters?.limit) queryParams.append('limit', filters.limit.toString());

      const response = await fetch(`${this.baseUrl}/cars?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }

      const cars = await response.json();
      return this.formatCars(cars);
    } catch (error) {
      console.error('Error fetching cars:', error);
      return this.getMockCars(filters);
    }
  }

  async getCarBySlug(slug: string): Promise<Car | null> {
    if (!this.isProduction) {
      return MOCK_CARS.find(car => car.slug === slug) || null;
    }

    try {
      const response = await fetch(`${this.baseUrl}/cars/${slug}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });

      if (!response.ok) return null;

      const car = await response.json();
      return this.formatCar(car);
    } catch (error) {
      console.error('Error fetching car:', error);
      return MOCK_CARS.find(car => car.slug === slug) || null;
    }
  }

  async getSimilarCars(car: Car): Promise<Car[]> {
    if (!this.isProduction) {
      return MOCK_CARS
        .filter(c => 
          c.id !== car.id && 
          c.brand === car.brand &&
          Math.abs(c.price - car.price) <= 5000
        )
        .slice(0, 3);
    }

    try {
      const queryParams = new URLSearchParams({
        brand: car.brand,
        priceFrom: (car.price * 0.8).toString(),
        priceTo: (car.price * 1.2).toString(),
        limit: '3'
      });

      const response = await fetch(
        `${this.baseUrl}/cars?${queryParams.toString()}`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch similar cars');
      }

      const cars = await response.json();
      return this.formatCars(cars)
        .filter(c => c.id !== car.id)
        .slice(0, 3);
    } catch (error) {
      console.error('Error fetching similar cars:', error);
      return this.getMockCars()
        .then(cars => cars
          .filter(c => 
            c.id !== car.id && 
            c.brand === car.brand &&
            Math.abs(c.price - car.price) <= 5000
          )
          .slice(0, 3)
        );
    }
  }

  private getMockCars(filters?: Filters): Promise<Car[]> {
    let filteredCars = [...MOCK_CARS];

    if (filters?.brand) {
      filteredCars = filteredCars.filter(car => 
        car.brand.toLowerCase() === filters.brand!.toLowerCase()
      );
    }

    if (filters?.priceMin) {
      filteredCars = filteredCars.filter(car => 
        car.price >= filters.priceMin!
      );
    }

    if (filters?.priceMax) {
      filteredCars = filteredCars.filter(car => 
        car.price <= filters.priceMax!
      );
    }

    if (filters?.limit) {
      filteredCars = filteredCars.slice(0, filters.limit);
    }

    return Promise.resolve(filteredCars);
  }

  private formatCar(car: any): Car {
    return {
      id: car.id,
      slug: this.generateSlug(car),
      brand: car.brand,
      model: car.model,
      year: car.year,
      price: car.price,
      mileage: car.mileage,
      fuelType: car.fuelType,
      transmission: car.transmission,
      power: car.power,
      images: car.images,
      description: car.description,
      features: car.features,
      color: car.color,
      firstRegistration: car.firstRegistration,
      seller: car.seller
    };
  }

  private formatCars(cars: any[]): Car[] {
    return cars.map(car => this.formatCar(car));
  }

  private generateSlug(car: any): string {
    return `${car.brand}-${car.model}-${car.year}`
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }
}

// Singleton-Instanz exportieren
export const autoscout24Client = new AutoScout24Client();