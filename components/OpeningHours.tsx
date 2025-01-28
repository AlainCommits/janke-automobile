//Users/alonondanse/janke-auto/components/OpeningHours.tsx
"use client"

import { Clock } from 'lucide-react';

export function OpeningHours() {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-red-500" />
        <span className="text-sm font-medium">Unsere Geschäftszeiten</span>
      </div>
      <div className="space-y-2 text-sm text-gray-400">
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <span>Montag – Freitag</span>
          <span className="font-medium">09:00 – 17:00</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <span>Samstag</span>
          <span className="font-medium">09:00 – 13:00</span>
        </div>
        <p className="text-xs italic mt-3 text-center text-gray-500">
          (Bitte um vorherige Terminabsprache)
        </p>
      </div>
    </div>
  );
}