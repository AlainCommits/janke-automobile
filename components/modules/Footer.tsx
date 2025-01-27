//Users/alonondanse/janke-auto/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ContactTooltips } from '@/components/ContactTooltip';

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
          <div className="space-y-4">
            <div className="relative w-48 h-24">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              Ihr vertrauenswürdiger Partner für Gebrauchtwagen in Bochum
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kontakt</h3>
            <div className="mt-4">
              <ContactTooltips />
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Öffnungszeiten</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Mo. – Fr.</span>
                <span>9:00 – 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sa.</span>
                <span>09:00 – 13:00</span>
              </div>
              <p className="text-sm italic mt-2">
                (Bitte um Terminabsprache)
              </p>
            </div>
          </div>
        </div>

        {/* Unterer Bereich */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Janke Automobile. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-4 justify-start md:justify-end">
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