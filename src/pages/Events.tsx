import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Lab, Building A",
      description: "Learn modern web development with React and TypeScript",
    },
    {
      title: "Hackathon 2024",
      date: "March 22-23, 2024",
      time: "24 Hours",
      location: "Main Auditorium",
      description: "24-hour coding marathon with exciting prizes",
    },
    {
      title: "AI/ML Seminar",
      date: "March 30, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Conference Hall",
      description: "Exploring the future of Artificial Intelligence",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">Events</h1>
              <p className="text-xl text-muted-foreground">Join us for exciting tech events and workshops</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border))] hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <CardHeader>
                    <CardTitle className="text-primary">{event.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
