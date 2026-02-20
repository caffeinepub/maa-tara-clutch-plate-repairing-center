import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Bus, Car, Package } from 'lucide-react';

const services = [
  {
    title: 'Truck Clutch Repair',
    description: 'Specialized repair services for heavy-duty truck clutches. We handle all makes and models with precision and expertise.',
    icon: '/assets/generated/truck-icon.dim_128x128.png',
    alt: 'Truck clutch repair service icon',
    fallbackIcon: Wrench
  },
  {
    title: 'Bus Clutch Repair',
    description: 'Professional clutch repair for buses and commercial vehicles. Fast turnaround to keep your fleet running smoothly.',
    icon: '/assets/generated/bus-icon.dim_128x128.png',
    alt: 'Bus clutch repair service icon',
    fallbackIcon: Bus
  },
  {
    title: 'Car Clutch Repair',
    description: 'Expert clutch repair for all car models. From diagnostics to complete replacement, we ensure smooth performance.',
    icon: '/assets/generated/car-icon.dim_128x128.png',
    alt: 'Car clutch repair service icon',
    fallbackIcon: Car
  },
  {
    title: 'Clutch Leather Replacement',
    description: 'High-quality clutch leather replacement services. We use premium materials for long-lasting durability and performance.',
    icon: '/assets/generated/leather-icon.dim_128x128.png',
    alt: 'Clutch leather replacement service icon',
    fallbackIcon: Package
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive clutch repair solutions for all vehicle types. Quality service backed by years of experience.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = 'none';
                        const FallbackIcon = service.fallbackIcon;
                        const iconContainer = document.createElement('div');
                        iconContainer.className = 'text-primary';
                        parent.appendChild(iconContainer);
                        const icon = <FallbackIcon className="w-16 h-16 md:w-20 md:h-20" />;
                        // Use a simple fallback approach
                        parent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
                      }
                    }}
                  />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
