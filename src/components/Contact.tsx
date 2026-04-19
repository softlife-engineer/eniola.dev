import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, X, Twitter } from "lucide-react";

const TelegramIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.025-.58.05-1.02-.38-1.58-.74-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.21-1.59.15-.15 2.71-2.48 2.76-2.69.006-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.025-.12.025-1.92 1.22-5.43 3.6-.51.36-.97.53-1.4.52-.46-.01-1.34-.26-2-.5-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.74 4.02-1.76 6.71-2.92 8.04-3.51 1.63-.72 2.54-.6 2.81-.4z" />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30 bg-grid-pattern">
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
              <div className="grid gap-6 md:grid-cols-4">
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
                      abondeabdullahi22@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://x.com/Eniola_thedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary transition-all hover-lift group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <Twitter className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold">X/Twitter</h3>
                    <p className="text-sm text-muted-foreground">
                      eniola_thedev
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/eniola-abonde"
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
                      eniola abonde
                    </p>
                  </div>
                </a>

                <a
                  href="https://t.me/eniola_thedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-secondary transition-all hover-lift group"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <TelegramIcon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold">Telegram</h3>
                    <p className="text-sm text-muted-foreground">
                      Eniola_thedev
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <Button size="lg" className="gap-2 shadow-glow" asChild>
                  <a href="mailto: abondeabdullahi22@gmail.com">
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
