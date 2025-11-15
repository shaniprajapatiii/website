import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/data/events";

const Events = () => {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="eventsDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <Header />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 animate-fade-in">
            {/* Page Header */}
            <div className="text-center space-y-3 sm:space-y-4 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">Events</h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us for exciting tech events, workshops, and competitions
              </p>
            </div>

            {/* Upcoming Events Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Upcoming Events
                </h2>
              </div>

              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {upcomingEvents.map((event) => (
                    <Link
                      key={event.id}
                      to={`/events/${event.id}`}
                      className="block group"
                    >
                      <div
                        className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02]"
                        style={{
                          filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
                          backdropFilter: 'brightness(1.1) blur(9px) url(#eventsDisplacementFilter)',
                          WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
                          background: 'hsl(var(--glass-bg))',
                        }}
                      >
                        {/* Glassmorphic border effect */}
                        <div 
                          className="absolute inset-0 rounded-[28px] pointer-events-none"
                          style={{
                            boxShadow: 'inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)',
                          }}
                        />

                        {/* Content */}
                        <div className="relative z-10 space-y-4 h-full flex flex-col">
                          {/* Category Badge */}
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 self-start">
                            <span className="text-xs sm:text-sm font-bold text-primary">
                              {event.category}
                            </span>
                          </div>

                          <div className="space-y-2 flex-grow">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                          
                          <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          {/* View Details */}
                          <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-2">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No upcoming events at the moment. Check back soon!</p>
                </div>
              )}
            </div>

            {/* Past Events Section */}
            {pastEvents.length > 0 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-muted rounded-full" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Past Events
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {pastEvents.map((event) => (
                    <Link
                      key={event.id}
                      to={`/events/${event.id}`}
                      className="block group"
                    >
                      <div
                        className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02] opacity-80 hover:opacity-100"
                        style={{
                          filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
                          backdropFilter: 'brightness(1.1) blur(9px) url(#eventsDisplacementFilter)',
                          WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
                          background: 'hsl(var(--glass-bg))',
                        }}
                      >
                        {/* Glassmorphic border effect */}
                        <div 
                          className="absolute inset-0 rounded-[28px] pointer-events-none"
                          style={{
                            boxShadow: 'inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)',
                          }}
                        />

                        {/* Content */}
                        <div className="relative z-10 space-y-4 h-full flex flex-col">
                          {/* Category Badge */}
                          <div className="inline-block px-3 py-1 rounded-full bg-muted/20 border border-muted/30 self-start">
                            <span className="text-xs sm:text-sm font-bold text-muted-foreground">
                              {event.category}
                            </span>
                          </div>

                          <div className="space-y-2 flex-grow">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                          
                          <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          {/* View Details */}
                          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary font-bold text-sm group-hover:gap-3 transition-all pt-2">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
