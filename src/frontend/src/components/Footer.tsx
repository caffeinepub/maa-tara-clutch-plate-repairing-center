import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'maa-tara-clutch';

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">Maa Tara Clutch Plate Repairing Center</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Your trusted partner for professional clutch repair services. 
              We specialize in truck, bus, and car clutch repairs with expert leather replacement.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Info</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>✓ Expert Technicians</li>
              <li>✓ Quality Parts & Materials</li>
              <li>✓ Fast Turnaround Time</li>
              <li>✓ Competitive Pricing</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/80 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Maa Tara Clutch Plate Repairing Center. All rights reserved.</span>
          </p>
          <p className="text-sm text-primary-foreground/80 mt-2 flex items-center justify-center gap-1 flex-wrap">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-current inline" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
