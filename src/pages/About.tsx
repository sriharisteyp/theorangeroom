
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Shield, Award, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our Mission: Breaking Mental Health Stigma
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Orange Room was created as a stigma-free sanctuary for youth to seek mental health support. 
                As part of Let's Live Kerala's suicide prevention mission, we provide a warm, welcoming space 
                where young minds can find the help they deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why The Orange Room?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Orange represents warmth, enthusiasm, and creativity - the sunrise of new possibilities. 
                  We chose this color because it embodies hope and the bright future we envision for 
                  every young person who seeks our support.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mental health challenges among youth have been on the rise, yet stigma prevents many 
                  from seeking help. The Orange Room breaks down these barriers by creating a space 
                  where seeking help is normalized and celebrated.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 soft-shadow">
                  <div className="orange-gradient rounded-2xl p-8 text-center">
                    <Heart className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      "Every young mind deserves to be heard"
                    </h3>
                    <p className="text-white/90">
                      Our commitment to creating a safe, judgment-free space for healing and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gentle-shadow hover:soft-shadow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    A Kerala where every young person has access to mental health support 
                    without fear of judgment or stigma.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gentle-shadow hover:soft-shadow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Compassion, confidentiality, cultural sensitivity, and community-centered care 
                    guide everything we do.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gentle-shadow hover:soft-shadow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Our Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Supporting hundreds of young lives across Kerala through counseling, 
                    workshops, and community programs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Let's Live Kerala */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Backed by Let's Live Kerala
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Orange Room is a proud initiative of Let's Live Kerala, a leading suicide 
                  prevention organization dedicated to saving lives through awareness, intervention, 
                  and community support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white soft-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Established Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      Let's Live Kerala has been at the forefront of mental health advocacy 
                      and suicide prevention in Kerala, with years of experience in community 
                      mental health programs.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white soft-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Proven Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      Through various initiatives, Let's Live Kerala has positively impacted 
                      thousands of lives, providing hope and support to individuals and families 
                      across the state.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Approach to Mental Health
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in holistic, culturally-sensitive mental health support that 
                addresses the unique needs of young people in Kerala.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 orange-gradient rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Compassionate Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every interaction is guided by empathy, understanding, and genuine concern 
                  for each individual's wellbeing.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 orange-gradient rounded-full flex items-center mx-auto">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Complete Confidentiality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality protocols to ensure everyone feels 
                  safe to share and seek help.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 orange-gradient rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Accessible Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to make mental health support accessible to all, regardless of 
                  background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
