//Users/alonondanse/janke-auto/components/heroes/Hero1.tsx
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { carService } from '@/lib/mock';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { CarPurchaseForm } from '@/components/CarPurchaseForm';
import Link from 'next/link';

export default function Hero1() {
  const cars = carService.getAllCars();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cars.length);
    }, 500);

    return () => clearInterval(timer);
  }, [cars.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="relative h-[90dvh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        {cars.map((car, index) => (
          <div
            key={car.id}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            <Image
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 z-10" />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block container mx-auto h-full relative z-10 px-4">
        <div className="flex h-full w-full items-center justify-between py-12 lg:py-0">
          <div className="w-7/12 xl:w-8/12 bg-slate-600/75 rounded-lg p-14 text-left lg:text-center space-y-8">
            <div className="relative w-48 h-24 rounded-full mb-8">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Janke Automobile
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
              Große Auswahl an geprüften Gebrauchtwagen von seriösen Händlern
            </p>
            <div className="flex gap-4">
              <Link href="/#fahrzeuge">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-lg"
                >
                  Fahrzeuge durchsuchen
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/20 text-slate-800 hover:bg-white/10 text-lg"
                  >
                    Fahrzeug verkaufen
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>Fahrzeug Ankauf</DialogTitle>
                    <DialogDescription>
                      Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <CarPurchaseForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-4/12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
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

      {/* Mobile Version */}
      <div className="lg:hidden container mx-auto relative z-10 px-4 py-8">
        <div className="flex flex-col min-h-[calc(90dvh-4rem)] w-full items-center justify-center">
          <div className="w-full text-center bg-slate-600/75 rounded-lg p-6 space-y-6">
            <div className="relative w-40 h-20 mx-auto">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <h1 className="text-3xl font-bold text-white leading-tight">
              Janke Automobile
            </h1>
            <p className="text-lg text-white/90">
              Große Auswahl an geprüften Gebrauchtwagen von seriösen Händlern
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/#fahrzeuge">
                <Button 
                  size="lg" 
                  className="w-full bg-red-600 hover:bg-red-700 text-lg"
                >
                  Fahrzeuge durchsuchen
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-white/20 text-slate-800 hover:bg-white/10 text-lg"
                  >
                    Fahrzeug verkaufen
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>Fahrzeug Ankauf</DialogTitle>
                    <DialogDescription>
                      Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <CarPurchaseForm />
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="w-full bg-white/90 text-gray-900 hover:bg-white"
                  >
                    Kontakt aufnehmen
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-6">
                  <DialogHeader>
                    <DialogTitle>Kontaktieren Sie uns</DialogTitle>
                    <DialogDescription>
                      Wir beraten Sie gerne persönlich
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name-mobile">Name</Label>
                        <Input 
                          id="name-mobile"
                          placeholder="Ihr Name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email-mobile">E-Mail</Label>
                        <Input 
                          id="email-mobile"
                          type="email"
                          placeholder="ihre@email.de"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone-mobile">Telefon</Label>
                        <Input 
                          id="phone-mobile"
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
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}