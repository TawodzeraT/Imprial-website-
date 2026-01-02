import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Footer from '../components/Footer';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We take pride in every lawn we care for, treating each property as if it were our own.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'As a local business, we\'re invested in making Lexington beautiful, one lawn at a time.',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Count on us to show up on time and deliver consistent, dependable results every visit.',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We listen, adapt, and ensure you love your lawn.',
    },
  ];

  const stats = [
    { number: '240+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center pt-20 bg-gradient-to-br from-secondary via-secondary to-primary">
        <div className="container-custom relative z-10 px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              About Imperial Lawn & Landscape
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed animate-slide-up">
              Your trusted partner for beautiful, healthy lawns in Lexington, KY
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Imperial Lawn & Landscape was founded with a simple mission: to provide Lexington homeowners with reliable, high-quality lawn care services they can trust.
                </p>
                <p>
                  As a locally owned and operated business, we understand the unique needs of Kentucky lawns. Our team has deep roots in this community, and we take pride in contributing to the beauty of our neighborhoods.
                </p>
                <p>
                  What started as a one-person operation has grown into a trusted service provider for over 240 families across Lexington and surrounding areas. Our commitment to quality work, fair pricing, and exceptional customer service has earned us a 4.9-star rating and countless repeat customers.
                </p>
                <p>
                  Every lawn we care for receives the same attention to detail and dedication we'd give our own. When you choose Imperial Lawn & Landscape, you're not just hiring a lawn care service—you're partnering with neighbors who care about your home as much as you do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/20727438/pexels-photo-20727438.jpeg"
                alt="Professional lawn care service"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide every service we provide and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gradient-to-b from-muted to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Experience You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground">
                Years of hands-on experience caring for Lexington lawns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Local Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    We understand Kentucky's climate, soil conditions, and seasonal challenges. Our team knows exactly what your lawn needs to thrive in this region.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Professional Equipment
                  </h3>
                  <p className="text-muted-foreground">
                    We invest in quality, well-maintained equipment to ensure efficient service and superior results on every job.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Fully Insured
                  </h3>
                  <p className="text-muted-foreground">
                    Your property and peace of mind are protected. We carry comprehensive insurance for all our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    If you're not completely satisfied with our work, we'll make it right. Your happiness is our success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join 240+ satisfied homeowners who trust Imperial Lawn & Landscape with their properties.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 text-base px-8">
              <Link to="/contact">Get Your Free Quote Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}