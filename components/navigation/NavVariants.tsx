//components/navigation/NavVariants.tsx
"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

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

// 1. Gradient Border Navigation
export function GradientBorderNav() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <HoverBorderGradient
                  containerClassName={cn(
                    "rounded-md bg-slate-600 transition-transform duration-300 hover:scale-105",
                    pathname === item.href && "bg-slate-700"
                  )}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-300",
                    pathname === item.href 
                      ? "text-[#BF1E2C]" // Aktiver Link ist rot
                      : "text-slate-300",
                    "hover:text-[#BF1E2C]" // Text wird beim Hovern rot
                  )}
                  duration={0}
                >
                  <Link 
                    href={item.href}
                    className="transition-all duration-300 hover:text-[#BF1E2C] text-slate-300"
                  >
                    {item.title}
                  </Link>
                </HoverBorderGradient>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// 2. Slide Up Navigation
export function SlideUpNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium relative group",
                    pathname === item.href ? "text-primary" : "text-gray-600"
                  )}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// 3. Scale Navigation
export function ScaleNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:bg-primary hover:text-white transform hover:scale-110",
                    pathname === item.href 
                      ? "bg-primary text-white scale-105" 
                      : "text-gray-600"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// 4. Glow Navigation
export function GlowNav() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero-section')?.getBoundingClientRect().height || 0;
      setIsSticky(window.scrollY > heroHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "w-full transition-all duration-300",
      isSticky ? "fixed top-0 animate-in fade-in slide-in-from-top-4 bg-white/80 backdrop-blur-md" : "relative bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
                    "hover:text-primary hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] hover:bg-primary/5",
                    pathname === item.href 
                      ? "text-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]" 
                      : "text-gray-600"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}