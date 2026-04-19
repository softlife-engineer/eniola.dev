import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  type: "website" | "mobile" | "DeFi";
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      name: "Stonk",
      type: "website",
      description:
        "A visually engaging meme coin website built to drive community interest, highlight tokenomics, and support early-stage crypto adoption.",
      stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
      liveUrl: "https://www.stonkguyonchain.com/",
      image: "/images/projects/stonk.png",
      // githubUrl: "",
    },
    {
      name: "Tariff Cow $TCOW",
      type: "website",
      description:
        "A modern, high-performance meme coin website designed to clearly present token branding, utilities, and community links, with a fast and responsive user experience.",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://tariffcow.netlify.app/",
      image: "/images/projects/traiff sc.png",
    },
    {
      name: "OASIS CAPITAL",
      type: "website",
      description:
        "A responsive meme coin website focused on performance, branding, and clear information architecture, built with modern frontend tools..",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://oasiscapital.netlify.app/",
      image: "/images/projects/oasis.png",
    },
    {
      name: "DIGO",
      type: "website",
      description:
        "A visually engaging meme coin website built to drive community interest, highlight tokenomics, and support early-stage crypto adoption.",
      stack: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://digoonchain.netlify.app/",
      image: "/images/projects/digo.png",
    },
    {
      name: "D3 DeFi Dash",
      type: "DeFi",
      description:
        "A decentralized finance (DeFi) web application designed to present core protocol features, token utilities, and user flows with a clear and intuitive interface.",
      stack: ["React", "Next.js", "web3.js", "Supabase", "WalletConnect"],
      liveUrl: "https://defidash.app/",
      githubUrl: "#",
      image: "/images/projects/defi.png",
    },
    {
      name: "FairDrop",
      type: "website",
      description:
        "A provably fair giveaway platform that combines Web3 transparency with local payment rails. It allows anyone to create, fund, and manage giveaway campaigns while ensuring fair winner selection and seamless fiat or crypto payout.",
      stack: ["Next.js", "Supabase", "WalletConnect", "TailwindCSS"],
      liveUrl: "FairDrop.io",
      githubUrl: "#",
      image: "/images/projects/fairdrop.png",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise across
              different technologies and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="group hover:shadow-glow transition-all duration-300 hover-lift border-border overflow-hidden flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {project.image && (
                  <div className="relative h-56 md:h-64 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {project.type === "website"
                          ? "Website"
                          : project.type === "mobile"
                            ? "Mobile App"
                            : project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 mt-auto">
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
