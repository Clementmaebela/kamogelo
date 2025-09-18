import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Bootstrap"],
      icon: "🛠️"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "VS Code"],
      icon: "🗄️"
    },
    {
      title: "Concepts & Methodologies",
      skills: ["Data Structures", "Algorithms", "OOP", "REST APIs", "Agile", "Testing"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies 
            I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-heading font-semibold text-lg mb-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="font-heading font-semibold text-2xl mb-6">Learning & Growing</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a computer science professional, I'm committed to continuous learning. 
            I stay updated with the latest technologies and best practices through 
            online courses, documentation, and hands-on projects. Currently exploring 
            cloud technologies, machine learning, and advanced software architecture patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;