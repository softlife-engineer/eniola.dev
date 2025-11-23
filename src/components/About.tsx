import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    "React",
    "JavaScript (ES6+)",
    "Python",
    "React Native / Expo",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Redux / Zustand",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <Card className="border-none shadow-lg hover-lift">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey into coding began with a deep curiosity about how digital systems work. 
                What started as tinkering with simple scripts quickly evolved into a passion for 
                building robust, user-centric applications that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I thrive on the challenge of breaking down complex problems into elegant solutions. 
                Whether it's crafting intuitive interfaces or architecting scalable backend systems, 
                I approach each project with meticulous attention to detail and a commitment to 
                delivering exceptional results.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Continuous learning is at the core of my practice. I stay current with emerging 
                technologies and best practices, always seeking to refine my craft and push the 
                boundaries of what's possible in web development.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
