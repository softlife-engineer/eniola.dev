import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-grid-pattern overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Eniola Abonde
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Web2 ➜ Web3 Front-end Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I build sleek and performant web3 applications, transforming ideas
              into seamless user experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="gap-2 shadow-glow hover:shadow-lg transition-all"
              asChild
            >
              <a href="mailto:abondeabdullahi22@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="gap-2 hover-lift"
            >
              View Projects
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary hover:scale-110 transition-all"
              asChild
            >
              <a href="mailto:abondeabdullahi22@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary hover:scale-110 transition-all"
              asChild
            >
              <a
                href="https://github.com/softlife-engineer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-secondary hover:scale-110 transition-all"
              asChild
            >
              <a
                href="https://linkedin.com/in/eniola-abonde"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};
