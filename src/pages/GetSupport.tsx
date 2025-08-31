
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Heart, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GetSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Emergency Alert */}
        <section className="py-8 bg-destructive/10 border-b border-destructive/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-destructive mb-2">
                    Crisis? Need Help Right Now?
                  </h2>
                  <p className="text-destructive/90 mb-4 leading-relaxed">
                    If you're having thoughts of self-harm or are in immediate danger, 
                    please call emergency services or the 24/7 crisis helpline immediately.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-destructive hover:bg-destructive/90 text-white font-medium text-lg px-8">
                      Kerala Crisis Helpline: 1056
                    </Button>
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">
                      Emergency: 108
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                You're Not Alone
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Whatever you're going through, we're here to listen and support you. 
                The Orange Room provides immediate, confidential mental health support 
                when you need it most.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Heart className="w-6 h-6 text-primary" />
                <span className="font-medium text-foreground">Available now - No appointment needed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Immediate Support Options */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Get Support Right Now
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the option that feels right for you. All support is confidential and judgment-free.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 orange-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Call Our Support Line</CardTitle>
                    <CardDescription className="text-base">
                      Speak directly with a trained counselor who understands what you're going through
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4">
                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="font-medium text-foreground mb-1">Direct Support Line</p>
                        <p className="text-2xl font-bold text-primary">+91 XXX XXX XXXX</p>
                        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Available: Mon-Fri 9AM-7PM, Sat 9AM-4PM</span>
                        </div>
                      </div>
                      <Button className="w-full orange-gradient text-white text-lg py-3 hover:scale-105 transition-transform">
                        Call Now for Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Message Us on WhatsApp</CardTitle>
                    <CardDescription className="text-base">
                      Send a message and start chatting with our support team at your own pace
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4">
                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="font-medium text-foreground mb-2">WhatsApp Support</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Send "Hello" to start a conversation. We typically respond within 30 minutes during office hours.
                        </p>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 hover:scale-105 transition-transform">
                        Start WhatsApp Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/get-help" className="group">
                  <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Book an Appointment
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Schedule a longer session to discuss your concerns in detail
                      </p>
                      <ArrowRight className="w-5 h-5 mx-auto text-primary group-hover:translate-x-1 transition-transform" />
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/services" className="group">
                  <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Learn About Our Services
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Explore our counseling, workshops, and support programs
                      </p>
                      <ArrowRight className="w-5 h-5 mx-auto text-primary group-hover:translate-x-1 transition-transform" />
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/contact" className="group">
                  <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Ask Questions
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get answers about our process, confidentiality, or services
                      </p>
                      <ArrowRight className="w-5 h-5 mx-auto text-primary group-hover:translate-x-1 transition-transform" />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What to Expect When You Reach Out
                </h2>
                <p className="text-xl text-muted-foreground">
                  We understand reaching out can feel scary. Here's what happens when you contact us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white soft-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">When You Call</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        You'll speak with a trained counselor or support staff member
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        We'll listen to what you're going through without judgment
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        We can provide immediate support and coping strategies
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        If needed, we can schedule a follow-up appointment
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white soft-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">When You Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        Start with a simple "Hello" or share what's on your mind
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        We respond with care and respect for your situation
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        You can take your time responding - no pressure
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 orange-gradient rounded-full mt-2 flex-shrink-0"></div>
                        We can move to a call or in-person meeting if you'd like
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 orange-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                You've Already Taken the Hardest Step
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                By being here and considering reaching out, you've shown incredible strength and courage. 
                Mental health challenges are real, and seeking help is a sign of wisdom, not weakness. 
                We're honored that you're considering trusting us with your journey.
              </p>
              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <p className="text-lg text-foreground font-medium mb-2">Remember:</p>
                <p className="text-muted-foreground leading-relaxed">
                  Every feeling is valid. Every struggle matters. Your story is important. 
                  And most importantly, things can and do get better with the right support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="orange-gradient text-white font-medium px-8 py-4 text-lg hover:scale-105 transition-transform">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 XXX XXX XXXX
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Send WhatsApp Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetSupport;
