import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss potential opportunities? 
              Let's create something amazing together.
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-6 md:grid-cols-3">
                <a
                  href="mailto:dimejiademola5@gmail.com"
                  className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary transition-all hover-lift group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">
                      dimejiademola5@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Sheriff-Oladimeji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary transition-all hover-lift group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <Github className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      Sheriff-Oladimeji
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/sheriff-oladimeji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary transition-all hover-lift group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <Linkedin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      sheriff-oladimeji
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <Button
                  size="lg"
                  className="gap-2 shadow-glow"
                  asChild
                >
                  <a href="mailto:dimejiademola5@gmail.com">
                    <Mail className="h-5 w-5" />
                    Send Me a Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
