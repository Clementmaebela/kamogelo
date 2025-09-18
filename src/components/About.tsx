import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a strong foundation in software development 
            and a commitment to creating meaningful technological solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="font-heading font-semibold text-2xl mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As an entry-level computer scientist, I bring fresh perspectives and 
              enthusiasm to every project. My academic background has provided me with 
              a solid understanding of programming fundamentals, algorithms, and 
              software engineering principles.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm particularly interested in web development, software architecture, 
              and emerging technologies. I believe in the power of code to solve 
              real-world problems and create positive impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest tech 
              trends, contributing to open-source projects, and continuously expanding 
              my skill set through online courses and personal projects.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-up">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      Computer Science (University of Limpopo) with focus on software development, AI, Statistics, 
                      algorithms, and system design.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Code className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Development</h4>
                    <p className="text-muted-foreground">
                      Passionate about clean code, modern frameworks, and 
                      building scalable applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <Target className="text-success" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Goals</h4>
                    <p className="text-muted-foreground">
                      To grow as a developer, contribute to meaningful projects, 
                      and make a positive impact through technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;