//components/heroes/HeroSwiper.tsx
"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  '/images/cars/mercedes.webp',
  '/images/cars/bmw.jpeg',
  '/images/cars/lambo.webp'
];

export default function Hero1() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="relative h-[90dvh] bg-black">
      {/* Background Swiper mit Overlay */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Verbessertes Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto h-full relative z-10 px-4">
        <div className="flex flex-col lg:flex-row h-full w-full items-center  justify-between py-12 lg:py-0">
          {/* Linke Seite - Logo, Titel & CTA */}
          <div className="w-full lg:w-7/12 xl:w-8/12 text-center bg-slate-600/75 p-14 lg:text-left space-y-8 mt-16 lg:mt-0">
            {/* Logo über dem Titel */}
            <div className="relative w-48 h-24 mx-auto rounded-full lg:mx-0 mb-8">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Finden Sie Ihr Traumauto
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl">
              Große Auswahl an geprüften Gebrauchtwagen von seriösen Händlern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-lg"
              >
                Fahrzeuge durchsuchen
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-slate-800 hover:bg-white/50 text-lg"
              >
                Fahrzeug verkaufen
              </Button>
            </div>
          </div>

          {/* Rechte Seite - Kontaktformular */}
          <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Kontaktieren Sie uns
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Wir beraten Sie gerne persönlich
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      placeholder="Ihr Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Jetzt kontaktieren
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ihre Daten werden vertraulich behandelt
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}