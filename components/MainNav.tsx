//Users/alonondanse/janke-auto/components/MainNav.tsx
"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { title: "Start", href: "/" },
  { title: "Leistungen", href: "/#leistungen" },
  { title: "Galerie", href: "/#galerie" },
  { title: "Bewertungen", href: "/#bewertungen" },
  { title: "Kontakt", href: "/#kontakt" },
  { title: "Fahrzeuge", href: "/#fahrzeuge" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector('section');
      if (firstSection) {
        const sectionBottom = firstSection.getBoundingClientRect().bottom;
        setIsSticky(sectionBottom <= 64);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Logo Stripe - bleibt unverändert */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto w-28 md:w-48 h-full flex items-center justify-center px-4">
          <Link href="/" className="relative w-48 h-12">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-cover md:object-contain"
              priority
            />
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Neue untere Navigation */}
      <nav className={cn(
        "w-full bg-gray-900/95 backdrop-blur-sm border-b border-red-500/20 transition-all duration-300",
        isSticky 
          ? "fixed top-16 left-0 right-0 z-40" 
          : isOpen 
            ? "fixed top-16 left-0 right-0 z-40"
            : "absolute top-[90dvh] left-0 right-0 z-40",
        isOpen ? "block" : "hidden lg:block"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-auto lg:h-16">
            <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 py-4 lg:py-0 w-full lg:w-auto">
              {navItems.map((item, idx) => (
                <li key={item.href} className="w-full lg:w-auto relative">
                  <Link 
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-gray-400 transition-colors relative group",
                      pathname === item.href && "text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="relative z-10">{item.title}</span>
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-px"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          exit={{ width: "0%" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                          <div className="absolute left-0 w-[40%] h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}