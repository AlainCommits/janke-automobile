//components/car-search.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function CarSearch() {
  return (
    <div className="p-4 space-y-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select>
          <option value="">Alle Marken</option>
          <option value="bmw">BMW</option>
          <option value="audi">Audi</option>
          <option value="mercedes">Mercedes</option>
        </Select>
        
        <div className="space-y-2">
          <label>Preis bis</label>
          <Slider
            defaultValue={[50000]}
            max={100000}
            step={1000}
          />
        </div>
        
        <Button className="h-10">Suchen</Button>
      </div>
    </div>
  );
}