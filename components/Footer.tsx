//components/Footer.tsx
import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-2 border-red-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <a 
                href="tel:+491784684141" 
                className="flex items-center space-x-2 hover:text-red-500 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+49 178 468 4141</span>
              </a>
              <a 
                href="mailto:info@apaydin-automobile.de"
                className="flex items-center space-x-2 hover:text-red-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>janke-automobile@hotmail.de</span>
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Adresse</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <p>
                Wattenscheider Hellweg 4

                44869 Bochum
              </p>
            </div>
          </div>

          {/* Rechtliches */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="hover:text-red-500 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-red-500 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-red-500 transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Janke Automobile. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}