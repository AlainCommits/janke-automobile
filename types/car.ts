//types/car.ts
export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  power: number; // PS
  images: string[];
  description: string;
  features: string[];
  color: string;
  firstRegistration: string;
  seller: {
    name: string;
    location: string;
    type: 'private' | 'dealer';
    rating?: number;
  };
}