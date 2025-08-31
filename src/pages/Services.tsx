
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, BookOpen, Phone, Heart, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Individual Counseling",
      description: "One-on-one sessions with trained mental health professionals in a completely confidential environment.",
      features: [
        "Personal counseling sessions",
        "Stress and anxiety management",
        "Depression support",
        "Academic pressure counseling",
        "Identity and relationship guidance"
      ],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Group Support Sessions",
      description: "Peer support groups where young people can share experiences and learn from others in similar situations.",
      features: [
        "Peer support groups",
        "Safe sharing circles",
        "Guided group discussions",
        "Social skills development",
        "Community building activities"
      ],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: BookOpen,
      title: "Mental Health Workshops",
      description: "Educational sessions focused on building emotional resilience and practical coping skills for daily life.",
      features: [
        "Stress management techniques",
        "Emotional regulation skills",
        "Mindfulness and meditation",
        "Study-life balance",
        "Communication skills training"
      ],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Phone,
      title: "Crisis Support & Referrals",
      description: "Immediate assistance and connections to 24/7 helplines for mental health emergencies and crisis situations.",
      features: [
        "Crisis intervention support",
        "24/7 helpline referrals",
        "Emergency contact assistance",
        "Safety planning",
        "Immediate resource connection"
      ],
      color: "bg-destructive/10 text-destructive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Comprehensive Mental Health Support
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We offer a range of mental health services designed specifically for young people 
                in Trivandrum and surrounding areas. Every service is provided with complete 
                confidentiality and cultural sensitivity.
              </p>
              <Link to="/get-help">
                <Button size="lg" className="orange-gradient text-white font-medium px-8 py-4 hover:scale-105 transition-transform">
                  Get Support Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 border-0 bg-card h-full"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 orange-gradient rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How We Work With You
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our approach is personalized, respectful, and designed to make you feel comfortable and supported.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Easy Scheduling</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Book appointments at times that work for you. We offer flexible scheduling 
                    to accommodate your academic and personal commitments.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Safe Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our space is designed to feel welcoming and non-judgmental. You can share 
                    your thoughts and feelings without fear of criticism.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Ongoing Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mental health is a journey. We provide continuous support and check-ins 
                    to ensure your continued wellbeing and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Take the First Step?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Remember, seeking help is a sign of strength, not weakness. We're here to support 
                you on your journey to better mental health and wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-help">
                  <Button size="lg" className="orange-gradient text-white font-medium px-8 py-4 hover:scale-105 transition-transform">
                    Book an Appointment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                    Ask Questions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
