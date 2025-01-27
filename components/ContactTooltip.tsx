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

// WhatsApp SVG als Komponente
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552"><defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"/><stop offset="1" stop-color="#23b33a"/></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"/></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/></svg>
);

// AutoScout24 SVG als Komponente
const AutoScoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-red-600"
  >
    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    <path d="M12 12.75c-1.243 0-2.25-1.007-2.25-2.25S10.757 8.25 12 8.25s2.25 1.007 2.25 2.25-1.007 2.25-2.25 2.25z" />
  </svg>
);

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
    icon: <MapPin className="w-6 h-6 text-red-600" />,
    href: "/#kontakt"
  },
  {
    id: 2,
    name: "Telefon",
    designation: "+491784684141",
    icon: <Phone className="w-6 h-6 text-red-600" />,
    href: "tel:+491784684141"
  },
  {
    id: 3,
    name: "E-Mail",
    designation: "info@janke-automobile.de",
    icon: <Mail className="w-6 h-6 text-red-600" />,
    href: "mailto:janke-automobile@gmail.com"
  },
  {
    id: 4,
    name: "WhatsApp",
    designation: "Direkt chatten",
    icon:  <WhatsAppIcon />,
    // (
    //   <div className="relative w-6 h-6">
    //     <Image
    //       src="/images/whatsapp.svg"
    //       alt="whatsapp"
    //       fill
    //       className="object-cover"
    //     />
    //   </div>
    // ),    
    href: "https://wa.me/491784684141"
  },
  // {
  //   id: 5,
  //   name: "AutoScout24",
  //   designation: "Unser Händlerprofil",
  //   icon: <AutoScoutIcon />,
  //   // (
  //   //   <div className="relative w-5 h-6">
  //   //     <Image
  //   //       src="/images/autoscout24.svg"
  //   //       alt="AutoScout24"
  //   //       fill
  //   //       className="object-contain"
  //   //     />
  //   //   </div>
  //   // ),
  //   href: "https://www.autoscout24.de/haendler/janke-automobile"
  // }
];

// Beispielverwendung:
export function ContactTooltips() {
  return (
    <div className="flex items-center justify-center p-4">
      <AnimatedTooltip items={contactItems} />
    </div>
  );
}