import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  type: "website" | "mobile";
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      name: "Qlipify",
      type: "website",
      description: "A modern video editing and sharing platform with real-time collaboration features and cloud storage integration.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS S3"],
      liveUrl: "https://qlipify.com",
      githubUrl: "https://github.com/Sheriff-Oladimeji/qlipify",
    },
    {
      name: "YouTranscripts",
      type: "website",
      description: "AI-powered transcription service for YouTube videos with multi-language support and export capabilities.",
      stack: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
      liveUrl: "https://youtranscripts.app",
      githubUrl: "https://github.com/Sheriff-Oladimeji/youtranscripts",
    },
    {
      name: "Streakup",
      type: "mobile",
      description: "Habit tracking mobile app with streak monitoring, reminders, and detailed analytics for personal growth.",
      stack: ["React Native", "Expo", "TypeScript", "Firebase", "Redux"],
      githubUrl: "https://github.com/Sheriff-Oladimeji/streakup",
    },
    {
      name: "Qlip",
      type: "website",
      description: "Social media management dashboard with scheduling, analytics, and multi-platform posting capabilities.",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS"],
      liveUrl: "https://qlip.io",
      githubUrl: "https://github.com/Sheriff-Oladimeji/qlip",
    },
    {
      name: "ClearLink",
      type: "website",
      description: "Video conferencing platform with screen sharing, recording, and collaborative whiteboard features.",
      stack: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "https://clearlink.app",
      githubUrl: "https://github.com/Sheriff-Oladimeji/clearlink",
    },
    {
      name: "Sparkle",
      type: "website",
      description: "E-commerce platform with product management, payment integration, and order tracking system.",
      stack: ["Next.js", "Stripe", "PostgreSQL", "Zustand", "TailwindCSS"],
      liveUrl: "https://sparkle-shop.com",
      githubUrl: "https://github.com/Sheriff-Oladimeji/sparkle",
    },
    {
      name: "LogoIpsum",
      type: "website",
      description: "Brand identity generator with AI-powered logo creation, color palette suggestions, and export tools.",
      stack: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
      liveUrl: "https://logoipsum.design",
      githubUrl: "https://github.com/Sheriff-Oladimeji/logoipsum",
    },
    {
      name: "Bookr",
      type: "mobile",
      description: "Book discovery and reading tracker app with personalized recommendations and social features.",
      stack: ["React Native", "Expo", "TypeScript", "Firebase", "Google Books API"],
      githubUrl: "https://github.com/Sheriff-Oladimeji/bookr",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="group hover:shadow-glow transition-all duration-300 hover-lift border-border"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {project.type === "website" ? "Website" : "Mobile App"}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-2 flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
