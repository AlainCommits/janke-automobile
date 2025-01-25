//app/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CarCard } from '@/components/CarCard';
import { CarPurchaseForm } from '@/components/CarPurchaseForm';
import { ServicesSection } from '@/components/ServicesSection';
import { MainNav} from '@/components/MainNav';
import { GradientBorderNav } from '../components/navigation/NavVariants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Hero1 from '../components/heroes/Hero1';
import Hero2 from '../components/heroes/Hero3';
import Hero3 from '../components/heroes/Hero3';
import { AutoScoutSection } from '@/components/AutoScoutSection';
import Video from 'next-video';
import ad from '/videos/hero.mp4'

export const metadata: Metadata = {
  title: 'AutoScout24 Marketplace | Ihr Gebrauchtwagen-Portal',
  description: 'Finden Sie Ihr Traumauto unter tausenden Gebrauchtwagen. Große Auswahl an geprüften Fahrzeugen von Händlern und Privatanbietern.',
};

export default async function HomePage() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero Section */}
      
      <Hero1 /> 
     
      {/* <Hero3 />  */}


      <MainNav />
      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
         <Video src={ad}/>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Geprüfte Qualität</h3>
              <p className="text-muted-foreground">
                Alle Fahrzeuge werden von unseren Experten geprüft
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Schnelle Abwicklung</h3>
              <p className="text-muted-foreground">
                Unkomplizierter Kauf und schnelle Übergabe
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Faire Preise</h3>
              <p className="text-muted-foreground">
                Transparente Preise und faire Konditionen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white border-t-2 border-b-2 border-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bereit, Ihr Traumauto zu finden?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Durchsuchen Sie unsere große Auswahl an Gebrauchtwagen und finden Sie das perfekte Fahrzeug für Ihre Bedürfnisse.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/fahrzeuge">
              Jetzt Fahrzeuge entdecken
            </Link>
          </Button>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Verkaufen Sie Ihr Auto zum besten Preis
            </h1>
            <p className="text-xl text-muted-foreground">
              Schnelle Abwicklung, faire Preise und professioneller Service
            </p>
          </div>

          <CarPurchaseForm />
          <AutoScoutSection />

        </div>
      </section>
    </main>
  );
}