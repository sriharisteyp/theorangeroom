
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, MapPin, Clock, Shield, Heart, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GetHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Crisis Alert */}
        <section className="py-8 bg-destructive/10 border-b border-destructive/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-destructive mb-2">
                    In Crisis? Need Immediate Help?
                  </h2>
                  <p className="text-destructive/90 mb-4 leading-relaxed">
                    If you are in crisis, having thoughts of self-harm, or need immediate assistance, 
                    please call the 24/7 Kerala Suicide Prevention Helpline or visit your nearest emergency room.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-destructive hover:bg-destructive/90 text-white font-medium">
                      Call Crisis Helpline: 1056
                    </Button>
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">
                      Emergency Services: 108
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
                We're Here to Help You
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Taking the first step to seek help takes courage. We're proud of you for being here. 
                The Orange Room provides confidential, compassionate mental health support for young people.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 soft-shadow">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-medium">100% Confidential</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 soft-shadow">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="font-medium">Judgment-Free</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 soft-shadow">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">Flexible Timing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How to Reach Out
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the way that feels most comfortable for you to get in touch.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Speak directly with our trained counselors
                    </CardDescription>
                    <Button className="w-full">+91 XXX XXX XXXX</Button>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Message Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Send us a WhatsApp message anytime
                    </CardDescription>
                    <Button className="w-full orange-gradient text-white">WhatsApp</Button>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Come to our welcoming space in person
                    </CardDescription>
                    <Button variant="outline" className="w-full orange-gradient text-white"><a href="https://www.google.com/maps/place/The+Orange+Room/@8.51748,76.951566,15z/data=!4m6!3m5!1s0x3b05bb539162cb73:0xa117e6140bfe36b4!8m2!3d8.5174798!4d76.9515658!16s%2Fg%2F11hz0ggd_0?hl=en&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Get Directions</a></Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Book an Appointment
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out this form and we'll get back to you within 24 hours to schedule your session.
                </p>
              </div>

              <Card className="bg-white soft-shadow">
                <CardHeader>
                  <CardTitle className="text-center">Appointment Request Form</CardTitle>
                  <CardDescription className="text-center">
                    All information provided is strictly confidential and secure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age Group *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="13-17">13-17 years</SelectItem>
                          <SelectItem value="18-24">18-24 years</SelectItem>
                          <SelectItem value="25-30">25-30 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help you? (Optional)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Share anything you'd like us to know before your appointment..."
                        rows={4}
                      />
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground">
                      <p className="mb-2 font-medium">Privacy Notice:</p>
                      <p>
                        Your information is completely confidential and will only be used to 
                        schedule your appointment and provide you with mental health support. 
                        We never share personal information with third parties.
                      </p>
                    </div>

                    <Button className="w-full orange-gradient text-white font-medium py-4 text-lg hover:scale-105 transition-transform">
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Visit Our Center
                </h2>
                <p className="text-xl text-muted-foreground">
                  The Orange Room is conveniently located in the heart of Trivandrum.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="gentle-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-foreground mb-2">Address:</p>
                      <p className="text-muted-foreground">
                        The Orange Room , Rozario Villa, Scaibac lane,<br />
                         Nanthancode, Thiruvananthapuram 695003
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">Office Hours:</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                    <Button className="w-full"><a href="https://www.google.com/maps/place/The+Orange+Room/@8.5177208,76.9501604,17.96z/data=!4m6!3m5!1s0x3b05bb539162cb73:0xa117e6140bfe36b4!8m2!3d8.5174798!4d76.9515658!16s%2Fg%2F11hz0ggd_0?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Get Directions</a></Button>
                  </CardContent>
                </Card>

                <div className="bg-gray-200 rounded-xl overflow-hidden gentle-shadow">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.123456789!2d76.9501604!3d8.5177208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb539162cb73%3A0xa117e6140bfe36b4!2sThe%20Orange%20Room!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin" width="600" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetHelp;
