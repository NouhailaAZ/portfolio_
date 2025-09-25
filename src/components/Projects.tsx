import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import imgPortfolio from "../assets/imagePortfolio.png";
import imgPortfolio_ from "../assets/imagePortfolio_.png";

import imgDB from "../assets/imageProject1.png";
import imgmicroservices from "../assets/imageProject2.png";


const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personnel-React",
      description: "Un portfolio moderne développé avec React et Tailwind CSS. Plus dynamique, modulable et évolutif, il reflète mes compétences actuelles en développement front-end.",
      image: imgPortfolio_,
      technologies: ["ReactJS", "CSS", "tailwind", "Responsive Design"],
      githubUrl: "https://github.com/NouhailaAZ/portfolio_",
      liveUrl: "https://github.com/NouhailaAZ/portfolio_",
      featured: true
    },
    {
      title: "Base de données répartie - BANK",
      description: "Système bancaire distribué avec Oracle 11g. Répartition automatique des données entre sites géographiques avec synchronisation PL/SQL.",
      image: imgDB,
      technologies: ["Oracle", "PL/SQL", "VMware", "SQL Developer"],
      githubUrl: "https://github.com/NouhailaAZ/Repartition-Base-Donnees-BANK-Oracle",
      liveUrl: "https://github.com/NouhailaAZ/Repartition-Base-Donnees-BANK-Oracle/blob/main/projet%20BDR.mp4",
      featured: false
    },
    {
      title: "Gestion centre de formation",
      description: "Application de gestion d’un centre de formation. Implémentation d’un back-end robuste et d’une architecture microservices.",
      image: imgmicroservices,
      technologies: ["JAVA", "Spring Boot", "MySql", "Microservices"],
      githubUrl: "https://github.com/NouhailaAZ/Gestion-centre-de-formation",
      liveUrl: "https://github.com/NouhailaAZ/Gestion-centre-de-formation",
      featured: false
    },
    {
      title: "Portfolio Personnel",
      description: "Mon premier portfolio créé pour présenter mes compétences et projets. Design responsive réalisé uniquement avec CSS et Bootstrap.",
      image: imgPortfolio,
      technologies: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      githubUrl: "https://github.com/NouhailaAZ/portfolio",
      liveUrl: "https://nouhaz.web.app/",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-gradient">projets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Au cours de ma formation, j’ai réalisé différents projets, certains en équipe et d’autres en autonomie, afin de mettre en pratique mes connaissances et en faire de vraies expériences concrètes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`glass card-hover border-border/50 h-full ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-primary">
                      Dernier projet
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      variant="gradient"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="glass" 
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              <a href="https://github.com/NouhailaAZ" target="_blank" rel="noopener noreferrer">
                Voir mes autres projets sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;