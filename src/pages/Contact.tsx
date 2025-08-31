
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our services? Want to learn more about mental health support? 
                We're here to help and answer any questions you might have.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Speak with our team directly
                    </CardDescription>
                    <div className="space-y-2">
                      <p className="font-medium">+91 XXX XXX XXXX</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9 AM - 7 PM<br />
                        Saturday: 9 AM - 4 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Send us a detailed message
                    </CardDescription>
                    <div className="space-y-2">
                      <p className="font-medium">hello@theorangeroom.org</p>
                      <p className="text-sm text-muted-foreground">
                        We respond within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow hover:soft-shadow transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Quick messages and updates
                    </CardDescription>
                    <div className="space-y-2">
                      <Button className="orange-gradient text-white">
                        Message on WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Office Info */}
        <section className="py-20 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Whether you have questions, feedback, or just want to learn more about our services, 
                    we'd love to hear from you.
                  </p>

                  <Card className="bg-white soft-shadow">
                    <CardContent className="p-6">
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
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input id="subject" placeholder="What is your message about?" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Write your message here..."
                            rows={6}
                          />
                        </div>

                        <Button className="w-full orange-gradient text-white font-medium py-4 text-lg hover:scale-105 transition-transform">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Office Information */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Visit Our Office
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our office is designed to be a welcoming, comfortable space where you can feel 
                    at ease discussing your mental health needs.
                  </p>

                  <Card className="bg-white soft-shadow mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary" />
                        Office Location
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
                      <Button className="w-full">Get Directions</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white soft-shadow mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-primary" />
                        Office Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span className="font-medium">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span className="font-medium">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-medium text-muted-foreground">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white soft-shadow">
                    <CardHeader>
                      <CardTitle>Follow Us</CardTitle>
                      <CardDescription>
                        Stay updated with our latest programs and mental health resources
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Here are some common questions about our services and how we can help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="gentle-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Is counseling really confidential?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, absolutely. We maintain strict confidentiality protocols. Your personal 
                      information and conversations are never shared without your explicit consent, 
                      except in cases where there's immediate danger to yourself or others.
                    </p>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Do you charge for services?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We strive to make mental health support accessible. Please contact us to 
                      discuss our services and any financial considerations. We never want cost 
                      to be a barrier to getting the help you need.
                    </p>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">What if I'm not sure I need counseling?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      That's completely normal! You can always reach out just to talk or ask 
                      questions. There's no commitment, and we can help you understand whether 
                      our services might be helpful for your situation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="gentle-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Can parents or family members call?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, family members can contact us for information about our services or 
                      to discuss how to support a young person. However, any specific counseling 
                      information remains confidential to the individual receiving services.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
