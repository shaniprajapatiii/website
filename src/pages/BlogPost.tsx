import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Back Button */}
            <Link to="/blogs">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Button>
            </Link>

            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-bold text-primary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative overflow-hidden rounded-[28px] p-8 sm:p-12 lg:p-16"
              style={{
                filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                backdropFilter: "brightness(1.1) blur(9px)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              {/* Glassmorphic border effect */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                }}
              />

              {/* Article Content */}
              <article className="relative z-10 prose prose-invert max-w-none">
                <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground/90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-center">
              <Link to="/blogs">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
