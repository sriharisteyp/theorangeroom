import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
const AboutPreview = () => {
  return <section className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission: Breaking Mental Health Stigma
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Orange Room was created as a stigma-free sanctuary for youth to seek mental health support. 
                As part of Let's Live Kerala's suicide prevention mission, we provide a warm, welcoming space 
                where young minds can find the help they deserve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">Creating accessible mental health support for all youth</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Our Values</h3>
                <p className="text-sm text-muted-foreground">Compassion, confidentiality, and community care</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Our Impact</h3>
                <p className="text-sm text-muted-foreground">Supporting hundreds of young lives across Kerala</p>
              </div>
            </div>

            <Link to="/about">
              <Button size="lg" className="orange-gradient text-white font-medium px-8 py-4 hover:scale-105 transition-transform mt-5">
                Learn Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 soft-shadow">
              <blockquote className="text-xl font-medium text-foreground leading-relaxed mb-6">
                "The Orange Room represents hope, warmth, and healing. We chose orange because it symbolizes 
                enthusiasm, creativity, and the sunrise of new possibilities for every young person who walks through our doors."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 orange-gradient rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Let's Live Kerala</div>
                  <div className="text-sm text-muted-foreground">Founding Organization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutPreview;