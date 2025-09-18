import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-primary">
              Kamogelo Clement Maebela
            </h3>
            <p className="text-background/80 mb-4">
              Computer Scientist passionate about creating innovative solutions 
              through clean code and modern technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kamogelo.maebela@email.com"
                className="text-background/80 hover:text-primary transition-colors p-2"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Let's Work Together</h4>
            <p className="text-background/80 mb-4">
              Available for entry-level positions, internships, and collaborative projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              Get in touch →
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            © {currentYear} CMK
            
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;