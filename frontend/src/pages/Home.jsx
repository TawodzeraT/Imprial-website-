import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Star, CheckCircle, Leaf, Scissors, Trash2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Footer from '../components/Footer';

export default function Home() {
  const services = [
    {
      icon: Scissors,
      title: 'Lawn Maintenance',
      description: 'Regular mowing, edging, and trimming to keep your lawn looking pristine all season long.',
    },
    {
      icon: Leaf,
      title: 'Landscaping',
      description: 'Professional design and installation to transform your outdoor space into a beautiful oasis.',
    },
    {
      icon: Sparkles,
      title: 'Mulching',
      description: 'Quality mulch installation to enhance your garden beds and protect your plants.',
    },
    {
      icon: Trash2,
      title: 'Lawn Cleanups',
      description: 'Seasonal cleanups to remove debris and prepare your lawn for the changing seasons.',
    },
    {
      icon: Leaf,
      title: 'Leaf Removal',
      description: 'Efficient leaf removal services to keep your property clean and healthy during fall.',
    },
    {
      icon: Trash2,
      title: 'Brush & Limb Removal',
      description: 'Safe removal of branches, limbs, and brush to maintain a tidy and safe property.',
    },
  ];

  const reasons = [
    {
      title: 'Locally Owned',
      description: 'A trusted member of the Lexington community',
    },
    {
      title: 'Fast Response',
      description: 'Quick turnaround times for all service requests',
    },
    {
      title: 'Fair Pricing',
      description: 'Competitive rates with no hidden fees',
    },
    {
      title: 'Quality Work',
      description: 'Attention to detail on every single project',
    },
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Imperial Lawn has been taking care of our property for over two years. Always reliable, professional, and the lawn looks amazing!',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best lawn care service in Lexington! They transformed our overgrown yard into something beautiful. Highly recommend!',
      date: '1 month ago',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Professional, punctual, and affordable. They did an excellent job with our fall cleanup. Will definitely use them again.',
      date: '3 weeks ago',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"
            alt="Beautiful lawn and home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary text-primary-foreground border-0 px-4 py-2 text-sm">
              Trusted by 240+ Lexington Homeowners
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Reliable Lawn Care & Landscaping in Lexington, KY
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Professional service you can count on. From weekly maintenance to complete property transformations.
            </p>
            <div className="flex items-center space-x-2 mb-8 animate-slide-up">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9 / 5.0</span>
              <span className="text-white/80">(247 Google Reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button asChild size="lg" className="btn-primary text-base px-8">
                <a href="tel:+18595551234">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline text-base px-8 border-white text-white hover:bg-white hover:text-secondary">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-to-b from-white to-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive lawn care and landscaping solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {service.description}
                    </p>
                    <Button asChild variant="link" className="mt-4 p-0 h-auto text-primary hover:text-primary-dark justify-start">
                      <Link to="/services">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Imperial Lawn & Landscape?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a locally owned, highly rated lawn care professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.9 / 5.0</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Based on 247 Google reviews from satisfied homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proudly Serving Lexington, KY
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide professional lawn care and landscaping services throughout Lexington and the surrounding areas. As a locally owned business, we understand the unique needs of Kentucky lawns and are committed to keeping our community beautiful.
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">Check if We Service Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Lawn?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote today. Fast response guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 text-base px-8">
                <a href="tel:+18595551234">
                  <Phone className="w-5 h-5 mr-2" />
                  (859) 555-1234
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-base px-8">
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}