import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center warm-gradient pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                A Safe Space for{" "}
                <span className="bg-clip-text text-orange-600">
                  Young Minds
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The Orange Room is a mental health counseling space by Let's Live Kerala, 
                dedicated to supporting youth in Trivandrum with compassionate, stigma-free care.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-help">
                <Button size="lg" className="orange-gradient text-white font-medium px-8 py-4 text-lg hover:scale-105 transition-all soft-shadow">
                  Get Support Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Confidential</div>
                  <div className="text-sm text-muted-foreground">100% Private</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Compassionate</div>
                  <div className="text-sm text-muted-foreground">Caring Support</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Community</div>
                  <div className="text-sm text-muted-foreground">You're Not Alone</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 soft-shadow animate-gentle-float">
              <div className="orange-gradient rounded-2xl p-8 text-center">
                <Heart className="w-16 h-16 text-white mx-auto mb-4 animate-warm-pulse" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Sometimes talking is the first step to healing
                </h3>
                <p className="text-white/90">
                  The Orange Room is here to listen, support, and guide you through difficult times.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-bounce" style={{
              animationDelay: '0.5s'
            }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default Hero;