import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, FileText, Clock, MapPin, Camera, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { upcomingEvents, pastEvents } from "@/data/eventsData";
import { blogPosts } from "@/data/blogData";

const EventsBlog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Events & Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay connected with our community through upcoming workshops, past event highlights, and inspiring stories of hope and healing.
            </p>
          </div>

          {/* Upcoming Events Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="gentle-shadow hover:soft-shadow transition-all duration-300 overflow-hidden">
                  {(((event as Partial<{ posterImage?: string; image?: string }>).posterImage) ?? ((event as Partial<{ posterImage?: string; image?: string }>).image)) && (
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src={((event as Partial<{ posterImage?: string; image?: string }>).posterImage) ?? ((event as Partial<{ posterImage?: string; image?: string }>).image)}
                        loading="lazy"
                        alt={`${event.title} poster`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {event.audience}
                      </span>
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                    <CardTitle className="text-foreground">{event.title}</CardTitle>
                    <CardDescription className="text-muted-foreground flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {event.registrationRequired ? (
                        <Button 
                          className="orange-gradient text-white hover:scale-105 transition-transform"
                          onClick={() => event.googleFormLink && window.open(event.googleFormLink, '_blank')}
                        >
                          Register Now
                        </Button>
                      ) : (
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-xs">
                          No Registration
                        </Button>
                      )}
                      <Link to={`/event/${event.id}`}>
                        <Button variant="outline" className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Camera className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Past Events</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="gentle-shadow hover:soft-shadow transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{event.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Link to={`/past/${event.id}`}>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section>
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Latest Blog Posts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="gentle-shadow hover:soft-shadow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-foreground">{post.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}>
                      <Button className="orange-gradient text-white hover:scale-105 transition-transform">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsBlog;
