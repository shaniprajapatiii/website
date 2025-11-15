import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    { name: "President", role: "Leading the club", description: "Overseeing all club activities and initiatives" },
    { name: "Vice President", role: "Supporting leadership", description: "Assisting in club management" },
    { name: "Technical Head", role: "Technical guidance", description: "Managing technical projects and workshops" },
    { name: "Event Coordinator", role: "Event management", description: "Organizing and coordinating events" },
    { name: "Content Lead", role: "Content creation", description: "Managing social media and content" },
    { name: "Design Lead", role: "Creative design", description: "Handling all design requirements" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">Our Team</h1>
              <p className="text-xl text-muted-foreground">Meet the people who make it all happen</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border))] hover:border-primary/50 transition-all duration-300 hover:shadow-glow text-center"
                >
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
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

export default Team;
