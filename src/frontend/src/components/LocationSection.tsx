import { MapPin } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Find Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us for professional clutch repair services. We're conveniently located and ready to serve you.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234567890123!2d90.12345678901234!3d23.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA5MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maa Tara Clutch Plate Repairing Center Location"
              className="absolute inset-0"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/QWNQgTdd4EJLymry8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
