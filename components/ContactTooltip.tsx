//Users/alonondanse/janke-auto/components/ui/contact-tooltips.tsx
"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    icon: React.ReactNode;
    href: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {items.map((item) => (
        <a
          href={item.href}
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black/80 z-50 shadow-xl px-3 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-red-600 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-sm">
                  {item.name}
                </div>
                <div className="text-white/80 text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition duration-300">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export const contactItems = [
  {
    id: 1,
    name: "Standort",
    designation: "Wattenscheider Hellweg 4, 44869 Bochum",
    icon: <MapPin className="w-5 h-5 text-red-500" />,
    href: "/#kontakt"
  },
  {
    id: 2,
    name: "Telefon",
    designation: "+49 123 456789",
    icon: <Phone className="w-5 h-5 text-red-500" />,
    href: "tel:+49123456789"
  },
  {
    id: 3,
    name: "E-Mail",
    designation: "info@janke-automobile.de",
    icon: <Mail className="w-5 h-5 text-red-500" />,
    href: "mailto:info@janke-automobile.de"
  },
  {
    id: 4,
    name: "WhatsApp (+49 178 468 4141)",
    designation: "Direkt chatten",
    icon: (
      <div className="relative w-5 h-5">
        <Image
          src="/images/whatsapp.png"
          alt="whatsapp"
          fill
          className="object-contain"
        />
      </div>
    ),
    href: "https://wa.me/491784684141"  
  },
  {
    id: 5,
    name: "AutoScout24",
    designation: "Unser Händlerprofil",
    icon: (
      <div className="relative w-5 h-5">
        <Image
          src="/images/autoscout.png"
          alt="AutoScout24"
          fill
          className="object-contain"
        />
      </div>
    ),
    href: "https://www.autoscout24.de/haendler/janke-automobile"
  }
];

export function ContactTooltips() {
  return <AnimatedTooltip items={contactItems} />;
}
