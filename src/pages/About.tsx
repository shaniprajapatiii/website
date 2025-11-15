import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">About Us</h1>
              <p className="text-xl text-muted-foreground">Learn more about our mission and vision</p>
            </div>

            <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] rounded-2xl border border-[hsl(var(--glass-border))] p-8 sm:p-12 shadow-xl space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                CodeSpace Club was founded with a vision to create a community where technology enthusiasts can come together,
                learn from each other, and build amazing things. We believe in the power of collaboration and innovation.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground pt-6">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed">
                We organize workshops, hackathons, coding competitions, and tech talks featuring industry experts. Our members
                work on real-world projects, contribute to open source, and develop skills that prepare them for successful careers in technology.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
