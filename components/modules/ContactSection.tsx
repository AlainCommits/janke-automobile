//Users/alonondanse/janke-auto/components/modules/ContactSection.tsx

"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { AnimatedButton } from '../ui/animated-button';
import Image from 'next/image';
import { ContactTooltips } from '../ContactTooltip';

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            So erreichen Sie uns
          </h2>
          <p className="text-muted-foreground text-lg">
            Haben Sie Fragen? Kontaktieren Sie uns!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Linke Seite mit Logo, Tooltips und Öffnungszeiten */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/contact-bg.jpg"
                alt="Contact background"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 p-8 backdrop-blur-sm space-y-8">
              {/* Logo */}
              <div className="relative w-48 h-24 mx-auto">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Contact Tooltips */}
              <div className="py-6">
                <ContactTooltips />
              </div>

              {/* Öffnungszeiten */}
              <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-lg">Öffnungszeiten</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span>9:00 – 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span>09:00 – 13:00 Uhr</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center italic">
                    (Bitte immer um Terminabsprache!)
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Karte - 2/3 Breite */}
          <Card className="p-6 lg:col-span-2 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9419387839386!2d7.183931776976927!3d51.47999491711621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b920aa1f70e875%3A0x86a3c2e8c6c0c0fd!2sWattenscheider%20Hellweg%204%2C%2044869%20Bochum!5e0!3m2!1sde!2sde!4v1706289510703!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>

        <div className="text-center mt-12">
          <AnimatedButton>
            Jetzt Termin vereinbaren
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}