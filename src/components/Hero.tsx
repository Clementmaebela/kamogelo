import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, ChevronDown } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0" />
      
      <div className="container mx-auto px-6 py-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-2xl">
                <AvatarImage 
                  src={profileAvatar} 
                  alt="Kamogelo Clement Maebela"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  KM
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
              <span className="text-gradient">Kamogelo Clement</span>
              <br />
              <span className="text-foreground">Maebela</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left">
              Computer Scientist & Software Developer
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              Passionate about creating innovative solutions through technology. 
              Entry-level professional with a strong foundation in computer science 
              and a drive for continuous learning and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3"
              >
                <a href="/cv.pdf" download="Kamogelo_Maebela_CV.pdf" className="flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 animate-fade-in-up">
              <a
                href="https://github.com/Clementmaebela"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/clement-maebela-177771102"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:clementmaebela@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;