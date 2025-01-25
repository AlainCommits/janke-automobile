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
  power: number;
  description: string;
  images: string[];
  features?: string[];
  color?: string;
  firstRegistration?: string;
}