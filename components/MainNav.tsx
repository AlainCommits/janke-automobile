"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Menu, X } from 'lucide-react';

const navItems = [
  { title: "Start", href: "/" },
  { title: "Leistungen", href: "/leistungen" },
  { title: "Fahrzeuge", href: "/fahrzeuge" },
  { title: "Galerie", href: "/galerie" },
  { title: "Ankauf", href: "/ankauf" },
  { title: "Bewertungen", href: "/bewertungen" },
  { title: "Kontakt", href: "/kontakt" },
  { title: "Anfrage", href: "/anfrage" },
  { title: "Anfahrt", href: "/anfahrt" },
];

export function MainNav() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Logo Stripe - immer sticky */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <div className="flex-1 flex items-center justify-center">
            <Link href="/" className="relative w-48 h-12">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
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

      {/* Hauptnavigation */}
      <nav className={cn(
        "w-full bg-white/95 backdrop-blur-sm border-b transition-all duration-300",
        isSticky ? "fixed top-16 left-0 right-0 z-40" : "relative",
        isOpen ? "block" : "hidden lg:block"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-auto lg:h-16">
            <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 py-4 lg:py-0 w-full lg:w-auto">
              {navItems.map((item) => (
                <li key={item.href} className="w-full lg:w-auto">
                  <HoverBorderGradient
                    containerClassName={cn(
                      "rounded-md transition-all duration-300 hover:scale-105 w-full lg:w-auto",
                      // Remove the red shadow effect in mobile view
                      pathname === item.href && !isSticky && "shadow-[0_0_50px_rgba(191,30,44,0.6)]"
                    )}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 text-center lg:text-left",
                      pathname === item.href 
                        ? "text-[#BF1E2C]" 
                        : "text-slate-600",
                      "hover:text-[#BF1E2C]"
                    )}
                    duration={0.5}
                  >
                    <Link href={item.href} className="block w-full" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>
                  </HoverBorderGradient>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}