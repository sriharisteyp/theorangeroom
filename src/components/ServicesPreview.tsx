
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, BookOpen, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Individual Counseling",
      description: "One-on-one sessions with trained professionals in a safe, confidential environment.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Group Support",
      description: "Peer support groups and safe spaces for sharing experiences with others.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: BookOpen,
      title: "Workshops",
      description: "Educational sessions on stress management, emotional resilience, and coping skills.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "24/7 helpline referrals and immediate assistance during mental health crises.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Can Help You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive mental health support services designed specifically 
            for young people in Trivandrum and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button 
              size="lg" 
              className="orange-gradient text-white font-medium px-8 py-4 hover:scale-105 transition-transform"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
