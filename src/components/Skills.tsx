import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript",
        "React", "Angular", "Tailwind CSS"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend",
      skills: [
        "Java", "Spring Boot", "Laravel", "PHP",
        "Node.js", "Hibernate", "Microservices"
      ],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Bases de données & Outils",
      skills: [
        "Oracle PL/SQL", "SQL Server",
        "Docker", "Kafka", "Postman", "Git/GitHub"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      skills: [
        "Esprit d’analyse", "Travail d’équipe", "Gestion du temps",
        "Communication", "Adaptabilité", "Créativité"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-gradient">compétences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stack technique acquise au fil de mes projets académiques, stages et expériences professionnelles.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="glass card-hover border-border/50 h-full"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div 
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient} mr-3`}
                    ></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="glass hover:scale-105 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Expérience professionnelle", value: "< 1 an" },
              { label: "Projets académiques & stages", value: "6+" },
              { label: "Technologies pratiquées", value: "10+" },
              { label: "Heures de code", value: "1000+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
