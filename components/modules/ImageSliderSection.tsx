//Users/alonondanse/janke-auto/components/modules/ImageSliderSection.tsx
"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  "/images/Autos/fort_silber.jpg",
  "/images/Autos/golf_blau.jpg",
  "/images/Autos/mercedes_silber.jpg",
  "/images/Autos/mercedes_weiss.jpg",
  "/images/Autos/opel_cabrio.jpg",
  "/images/Autos/opel_rot.jpg",
  "/images/Autos/seat_blau.jpg",
  "/images/Autos/tt_schwarz.jpg",
  "/images/Autos/vw_blau.jpg",
  "/images/Autos/vw_schwarz.jpg",
  "/images/Autos/vw_schwarzblau.jpg",
  "/images/Autos/vw_scirocco.jpg",
  "/images/Autos/vw_weiss.jpg"
];

export function ImageSliderSection() {
  return (
    <section className="py-12 md:py-24 overflow-hidden mx-auto bg-gray-900/95 border-b-2 border-red-500">
      <div className="container-fluid mx-auto">
        <div className="flex overflow-hidden relative">
          <div className="flex gap-4 animate-scroll whitespace-nowrap">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="relative w-[280px] md:w-[350px] h-[200px] rounded-xl overflow-hidden inline-block"
              >
                <Image
                  src={src}
                  alt={`Auto ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 280px, 350px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}