import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Number',
    details: '8013648470',
    description: 'Call us for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: 'suvankar78saha@gmail.com',
    description: 'Send us your queries anytime'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Sat: 9:00 AM - 7:00 PM',
    description: 'Sunday: Closed'
  }
];

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted/50 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg font-semibold text-primary">
                    {info.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-card border-2 border-primary/20 rounded-xl px-8 py-6 shadow-lg">
            <p className="text-sm text-muted-foreground mb-2">Need Emergency Service?</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              We're Ready to Help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
