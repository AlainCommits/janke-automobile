//Users/alonondanse/janke-auto/components/modules/ContactSection.tsx

"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { AnimatedButton } from '../ui/animated-button';
import Image from 'next/image';

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
          {/* Kontaktinformationen mit Hintergrundbild */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/contact-bg.jpg"
                alt="Contact background"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Unsere Kontaktdaten</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <p>Wattenscheider Hellweg 4, 44869 Bochum</p>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <p>01784684141</p>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <p>janke-automobile@hotmail.de</p>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 p-3 rounded-lg backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p>Mo.–Fr. 9:00 – 17:00 Uhr</p>
                    <p>Sa. 09:00 – 13:00 Uhr</p>
                    <p className="text-sm text-muted-foreground mt-1">(Bitte immer um Terminabsprache!)</p>
                  </div>
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