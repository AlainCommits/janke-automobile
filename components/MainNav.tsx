//Users/alonondanse/janke-auto/components/MainNav.tsx
"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactTooltips } from './ContactTooltip';

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
      {/* Logo Stripe */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto w-28 md:w-48 h-full flex items-center justify-center px-4">
          <Link href="/" className="relative w-48 h-12">
            <Image
              src="/images/logo.jpg"
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

      {/* Navigation */}
      <nav className={cn(
        "w-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300",
        isSticky 
          ? "fixed top-16 left-0 right-0 z-40" 
          : isOpen 
            ? "fixed top-16 left-0 right-0 z-40"
            : "absolute top-[90dvh] left-0 right-0 z-40",
        isOpen ? "block" : "hidden lg:block"
      )}>
        <div className="container mx-auto px-4">
          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-6 flex flex-col items-center">
              {/* Logo */}
              <div className="relative w-40 h-20 mb-8">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col items-center space-y-4 w-full max-w-xs mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative text-gray-400 hover:text-white transition-colors py-2 text-center"
                  >
                    <span>{item.title}</span>
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-px">
                        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                        <div className="absolute left-0 w-[40%] h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                      </div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Contact Tooltips */}
              <div className="mt-4">
                <ContactTooltips />
              </div>
            </div>
          )}

          {/* Desktop Navigation - Unverändert */}
          <div className="hidden lg:flex items-center justify-center h-16">
            <ul className="flex items-center space-x-2">
              {navItems.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors relative group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span>{item.title}</span>
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