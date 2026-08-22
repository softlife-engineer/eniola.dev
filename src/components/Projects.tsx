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
  status?: "In Progress" | "Completed";
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
      status: "Completed",
      description:
        "A visually engaging meme coin website built to drive community interest, highlight tokenomics, and support early-stage crypto adoption.",
      stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
      liveUrl: "https://www.stonkguyonchain.com/",
      image: "/images/projects/stonk.png",
    },
    {
      name: "MedChain",
      type: "website",
      status: "Completed",
      description:
        "MedChain is a blockchain-based Electronic Health Records (EHR) system designed to securely store, manage, and share patient medical records. It addresses challenges such as fragmented records, unauthorized access, and data integrity by providing a secure and transparent platform for healthcare providers to access verified patient information while maintaining patient privacy and control.",
      stack: [
        "JavaScript",
        "React",
        "Supabase",
        "Tailwind CSS",
        "Solidity",
        "Node.js",
      ],
      liveUrl: "https://blockchain-ehr.vercel.app",
      image: "/images/projects/medchain.png",
      githubUrl: "https://github.com/eniola-thedev/blockchain-EHR",
    },
    {
      name: "UniFyd NG",
      type: "website",
      status: "In Progress",
      description:
        "UniFyd NG is a student-focused marketplace that connects students to buy and sell products and services within their university community, making campus transactions easier, faster, and more accessible.",
      stack: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Paystack",
      ],
      liveUrl: "#",
      image: "/images/projects/unifyd.png",
    },
    {
      name: "DIGO",
      type: "website",
      status: "Completed",
      description:
        "A visually engaging meme coin website built to drive community interest, highlight tokenomics, and support early-stage crypto adoption.",
      stack: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://digoonchain.netlify.app/",
      image: "/images/projects/digo.png",
    },
    {
      name: "D3 DeFi Dash",
      type: "DeFi",
      status: "In Progress",
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
      status: "In Progress",
      description:
        "A provably fair giveaway platform that combines Web3 transparency with local payment rails. It allows anyone to create, fund, and manage giveaway campaigns while ensuring fair winner selection and seamless fiat or crypto payout.",
      stack: ["Next.js", "Supabase", "WalletConnect", "TailwindCSS"],
      liveUrl: "https://FairDrop.io",
      githubUrl: "#",
      image: "/images/projects/fairdrop.png",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="group hover:shadow-glow transition-all duration-300 hover-lift border-border overflow-hidden flex flex-col"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-56 md:h-64 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />

                    {project.status && (
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                        className="absolute top-3 right-3 shadow-md"
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                )}

                {/* Project Header */}
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="w-fit">
                          {project.type === "website"
                            ? "Website"
                            : project.type === "mobile"
                              ? "Mobile App"
                              : project.type}
                        </Badge>

                        {!project.image && project.status && (
                          <Badge
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                            className="w-fit"
                          >
                            {project.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Project Content */}
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2 mt-auto">
                    {project.liveUrl && project.liveUrl !== "#" && (
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

                    {project.githubUrl && project.githubUrl !== "#" && (
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
