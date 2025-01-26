//app/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CarPurchaseForm } from '@/components/CarPurchaseForm';
import { ServicesSection } from '@/components/ServicesSection';
import { MainNav} from '@/components/MainNav';
import { GradientBorderNav } from '../components/navigation/NavVariants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Hero1 from '../components/heroes/Hero1';
import Hero2 from '../components/heroes/Hero2';
import Hero3 from '../components/heroes/Hero3';
import { AutoScoutSection } from '@/components/AutoScoutSection';
import Video from 'next-video';
import ad from '/videos/hero.mp4'
import { WelcomeSection } from '@/components/modules/WelcomeSection';
import { ContactSection } from '../components/modules/ContactSection';
import { ReviewsSection } from '../components/modules/ReviewsSection';
import { WhyUsSection } from '@/components/modules/WhyUsSection';

export const metadata: Metadata = {
  title: 'AutoScout24 Marketplace | Ihr Gebrauchtwagen-Portal',
  description: 'Finden Sie Ihr Traumauto unter tausenden Gebrauchtwagen. Große Auswahl an geprüften Fahrzeugen von Händlern und Privatanbietern.',
};

export default async function HomePage() {
  return (
    <main className="flex-1 pt-16">
       <Hero1 /> 
       <MainNav />

      {/* <WelcomeSection /> */}
      <ServicesSection />
      
      {/* Featured Cars Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
         <Video src={ad}/>
        </div>
      </section> */}


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
          <ContactSection />
          <ReviewsSection />
          <AutoScoutSection />

        </div>
      </section>
    </main>
  );
}