export const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] rounded-2xl border border-[hsl(var(--glass-border))] p-8 sm:p-12 shadow-xl animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              CodeSpace
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At CodeSpace, we are more than just a tech club; we are a vibrant community of tech enthusiasts where innovation meets passion. Our mission is to create a space where students can learn, grow, and excel together.
              </p>
              <p>
                Whether it's mastering a new programming language, competing in hackathons, or collaborating on groundbreaking projects, CodeSpace is the perfect place to turn your passion into reality!
              </p>
              <p>
                Join us and become part of a community where creativity, collaboration, and technology come together to shape the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
