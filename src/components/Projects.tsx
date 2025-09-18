import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A responsive web application for managing personal and team tasks with real-time updates and collaboration features.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current conditions and forecasts with beautiful visualizations and location search.",
      technologies: ["JavaScript", "REST API", "Chart.js", "CSS3"],
      category: "Frontend",
      status: "Completed"
    },
    {
      title: "Student Grade Calculator",
      description: "A Python application that calculates student grades with statistical analysis and generates detailed reports.",
      technologies: ["Python", "Pandas", "Matplotlib", "SQLite"],
      category: "Desktop Application",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and mobile-first design.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      category: "Web Development",
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my technical skills, 
            problem-solving abilities, and passion for creating user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {project.title}
                    </h3>
                    <Badge 
                      variant="outline"
                      className={`text-xs ${
                        project.status === 'Completed' 
                          ? 'border-success text-success' 
                          : 'border-accent text-accent'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="bg-muted">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="flex items-center gap-2 bg-primary hover:bg-primary-hover"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="font-heading font-semibold text-2xl mb-4">More Projects Coming Soon</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm constantly working on new projects and exploring different technologies. 
            Follow my GitHub to stay updated with my latest work and contributions.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="mr-2" size={20} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;