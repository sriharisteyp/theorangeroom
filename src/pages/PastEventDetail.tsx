
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Camera } from "lucide-react";
import { pastEvents } from "@/data/eventsData";

const PastEventDetail = () => {
  const { id } = useParams();
  const event = pastEvents.find(e => e.id === Number(id));

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
            {/* Main Event Image */}
            <div className="aspect-video bg-muted flex items-center justify-center mb-8 rounded-lg overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <Card className="gentle-shadow">
              <CardContent className="p-8">
                <h1 className="text-4xl font-bold text-foreground mb-6">{event.title}</h1>
                
                <div className="flex items-center text-muted-foreground mb-8">
                  <Calendar className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-lg">{event.date}</span>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Event Overview</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {event.fullDescription || event.description}
                  </p>
                </div>

                {/* Gallery */}
                {event.gallery && event.gallery.length > 0 && (
                  <div>
                    <div className="flex items-center mb-6">
                      <Camera className="w-6 h-6 mr-3 text-primary" />
                      <h2 className="text-2xl font-semibold text-foreground">Event Gallery</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {event.gallery.map((image, index) => (
                        <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${event.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
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

export default PastEventDetail;
