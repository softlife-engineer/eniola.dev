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
    "Redux / Zustand",
    "Tailwind CSS",
    "HTML & CSS",
    "web3.js / ethers.js",
    "wagmi",
    "Hardhat",
    "Restful APIs",
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
                I'm a web3 frontend developer focused on building clean, user- friendly decentralized applications.
                I specialize in creating modern interfaces that seamlessly connect users to blockchain technologies.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I work primarily with React, Next.js, TypeScript and web3 libraries like ether.js and wagmi to integrate wallet,
                 interact with smart contracts, and handle on-chain data security.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My goal is to bridge the gap between complex blockchain concepts and intuitive user experiences, by building scalable, secure and visually appealing web3 applications/products. 
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
