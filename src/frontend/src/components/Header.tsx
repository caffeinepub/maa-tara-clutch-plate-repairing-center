import { Wrench } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <div className="bg-primary-foreground/10 p-2 rounded-lg backdrop-blur-sm">
            <Wrench className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold tracking-tight">
              Maa Tara Clutch Plate Repairing Center
            </h1>
            <p className="text-xs md:text-sm text-primary-foreground/90 font-medium mt-0.5">
              Expert Clutch Solutions for All Vehicles
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
