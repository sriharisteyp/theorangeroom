
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Need Someone to Talk To?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You don't have to face your struggles alone. Reach out today and take the first step toward healing.
              Our team is ready to listen and support you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/contact" className="group">
              <div className="bg-card rounded-2xl p-6 gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground">Speak directly with our counselors</p>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-card rounded-2xl p-6 gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Message Us</h3>
                <p className="text-muted-foreground">Send us a message anytime</p>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-card rounded-2xl p-6 gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">Come to our welcoming space</p>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-destructive mb-2">
                In Crisis? Need Immediate Help?
              </h3>
              <p className="text-destructive/90 mb-4">
                If you are in crisis or having thoughts of self-harm, please call the 24/7 Kerala Suicide Prevention Helpline immediately.
              </p>
              <Button 
                className="bg-destructive hover:bg-destructive/90 text-white font-medium"
                size="lg"
              >
                Call Crisis Helpline: 1056
              </Button>
            </div>

            <Link to="/get-help">
              <Button 
                size="lg" 
                className="orange-gradient text-white font-medium px-12 py-4 text-lg hover:scale-105 transition-transform soft-shadow"
              >
                Get Help Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
