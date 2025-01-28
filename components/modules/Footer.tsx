//Users/alonondanse/janke-auto/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ContactTooltips } from '@/components/ContactTooltip';
import { OpeningHours } from '@/components/OpeningHours';

const navItems = [
  { title: "Start", href: "/" },
  { title: "Leistungen", href: "/#leistungen" },
  { title: "Galerie", href: "/#galerie" },
  { title: "Bewertungen", href: "/#bewertungen" },
  { title: "Kontakt", href: "/#kontakt" },
  { title: "Fahrzeuge", href: "/#fahrzeuge" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-2 border-red-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo und Beschreibung */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-48 h-24">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 mt-4 text-center lg:text-left">
              Ihr vertrauenswürdiger Partner für Gebrauchtwagen in Bochum
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-center lg:text-left mb-4">Navigation</h3>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  {navItems.slice(0, 3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between border-b border-gray-700 pb-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  {navItems.slice(3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between border-b border-gray-700 pb-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-lg font-bold text-center lg:text-left mb-4">Öffnungszeiten</h3>
            <OpeningHours />
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold text-center lg:text-left mb-4">Kontakt</h3>
            <div className="flex justify-center lg:justify-start">
              <ContactTooltips />
            </div>
          </div>
        </div>

        {/* Unterer Bereich */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Janke Automobile. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-gray-400 hover:text-red-500 text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-red-500 text-sm">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-400 hover:text-red-500 text-sm">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}