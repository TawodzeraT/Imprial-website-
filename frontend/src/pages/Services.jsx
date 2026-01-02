import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Leaf, Trash2, Sparkles, Palette, Trees, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Lawn Maintenance',
      description: 'Keep your lawn looking its best year-round with our comprehensive maintenance services.',
      features: [
        'Weekly or bi-weekly mowing',
        'Professional edging and trimming',
        'Line trimming around obstacles',
        'Grass clipping cleanup',
        'Seasonal fertilization',
      ],
      seasonal: 'Available Spring through Fall',
    },
    {
      icon: Palette,
      title: 'Landscaping',
      description: 'Transform your outdoor space with professional landscape design and installation.',
      features: [
        'Custom landscape design',
        'Plant selection and installation',
        'Garden bed creation',
        'Decorative stone placement',
        'Hardscape installation',
      ],
      seasonal: 'Available Year-Round',
    },
    {
      icon: Sparkles,
      title: 'Mulching',
      description: 'Enhance your garden beds with quality mulch that protects and beautifies your plants.',
      features: [
        'Premium mulch materials',
        'Weed barrier installation',
        'Bed edge definition',
        'Color-matched selections',
        'Annual mulch refresh',
      ],
      seasonal: 'Best in Spring and Fall',
    },
    {
      icon: Trash2,
      title: 'Lawn Cleanups',
      description: 'Seasonal cleanups to prepare your lawn for changing weather and growing conditions.',
      features: [
        'Spring cleanup and preparation',
        'Fall cleanup and winterization',
        'Debris removal',
        'Bed maintenance',
        'Gutter cleaning (optional)',
      ],
      seasonal: 'Spring and Fall',
    },
    {
      icon: Leaf,
      title: 'Leaf Removal',
      description: 'Efficient leaf removal to keep your property clean and your lawn healthy during fall.',
      features: [
        'Complete leaf removal',
        'Mulching options available',
        'Multiple visits if needed',
        'Bed and lawn clearing',
        'Disposal included',
      ],
      seasonal: 'Fall Season',
    },
    {
      icon: Trees,
      title: 'Brush & Limb Removal',
      description: 'Safe and efficient removal of branches, limbs, and brush to maintain your property.',
      features: [
        'Storm damage cleanup',
        'Overgrown brush clearing',
        'Small tree removal',
        'Complete debris hauling',
        'Same-day service available',
      ],
      seasonal: 'Available Year-Round',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center pt-20 bg-gradient-to-br from-secondary via-secondary to-primary">
        <div className="container-custom relative z-10 px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Professional Lawn Care Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Comprehensive solutions for all your lawn care and landscaping needs in Lexington, KY
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <p className="text-sm text-primary font-medium">{service.seasonal}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 flex-grow">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="btn-primary w-full mt-6">
                      <Link to="/contact">Request Quote for {service.title}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with Imperial Lawn & Landscape is simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Contact Us
              </h3>
              <p className="text-muted-foreground">
                Call or fill out our quote form with details about your property and service needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Get Your Quote
              </h3>
              <p className="text-muted-foreground">
                Receive a fair, transparent quote within 24 hours. No hidden fees, no pressure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Enjoy Your Lawn
              </h3>
              <p className="text-muted-foreground">
                We'll complete the work professionally and on time. Sit back and enjoy your beautiful lawn!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Need a Custom Service Package?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              We offer flexible service packages tailored to your specific needs and budget. Let's discuss what works best for you.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 text-base px-8">
              <Link to="/contact">Get Your Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}