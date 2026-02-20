export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-accent via-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional Clutch Repair Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Specializing in truck, bus, and car clutch repairs with expert leather replacement services. 
              Quality workmanship you can trust.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-card border-2 border-primary/20 rounded-lg px-6 py-3 shadow-sm">
                <p className="text-sm text-muted-foreground">Trucks</p>
                <p className="text-2xl font-bold text-primary">✓</p>
              </div>
              <div className="bg-card border-2 border-primary/20 rounded-lg px-6 py-3 shadow-sm">
                <p className="text-sm text-muted-foreground">Buses</p>
                <p className="text-2xl font-bold text-primary">✓</p>
              </div>
              <div className="bg-card border-2 border-primary/20 rounded-lg px-6 py-3 shadow-sm">
                <p className="text-sm text-muted-foreground">Cars</p>
                <p className="text-2xl font-bold text-primary">✓</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/1] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 bg-muted/50">
              <img
                src="/assets/generated/hero-banner.dim_1200x400.png"
                alt="Clutch repair workshop with professional tools and equipment"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg hidden md:block">
              <p className="text-sm font-semibold">Expert Service</p>
              <p className="text-2xl font-bold">Since Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
