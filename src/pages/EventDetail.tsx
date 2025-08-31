
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { upcomingEvents } from "@/data/eventsData";

const EventDetail = () => {
  const { id } = useParams();
  const event = upcomingEvents.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground">The event you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Event Poster */}
            {event.posterImage && (
              <div className="aspect-video bg-muted flex items-center justify-center mb-8 rounded-lg overflow-hidden">
                <img 
                  src={event.posterImage} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Event Details */}
            <Card className="gentle-shadow">
              <CardContent className="p-8">
                <h1 className="text-4xl font-bold text-foreground mb-6">{event.title}</h1>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-6 h-6 mr-3 text-primary" />
                      <span className="text-lg">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-6 h-6 mr-3 text-primary" />
                      <span className="text-lg">{event.time}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-6 h-6 mr-3 text-primary" />
                      <span className="text-lg">{event.audience}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <MapPin className="w-6 h-6 mr-3 text-primary mt-0.5" />
                      <span className="text-lg">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">About This Event</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {event.fullDescription || event.description}
                  </p>
                </div>

                {event.registrationRequired && (
                  <div className="text-center">
                    <Button 
                      className="orange-gradient text-white hover:scale-105 transition-transform text-lg px-8 py-3"
                      onClick={() => event.googleFormLink && window.open(event.googleFormLink, '_blank')}
                    >
                      Register Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
