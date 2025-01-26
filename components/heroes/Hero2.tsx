// /Users/alonondanse/janke-auto/components/sections/HeroSection.tsx

"use client"

import { motion } from 'framer-motion';
import Video from 'next-video';
import ad from '/videos/hero.mp4';

export default function Hero2() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container relative z-20 h-full flex items-center"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hochwertige Gebrauchtwagen kaufen & verkaufen
          </h1>
          <p className="text-xl text-white/90">
            Ihr zuverlässiger Partner für den Autokauf und -verkauf
          </p>
        </div>
      </motion.div>
      <div className="absolute inset-0">
        <Video 
          src={ad}
          className="object-cover w-full h-full max-w-[1600px] mx-auto"
        />
      </div>
    </section>
  );
}