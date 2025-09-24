import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Experiences = () => {
    const experiences = [
        {
            title: "Développeuse Full Stack (en présentiel)",
            company: "Jbel Annour, Mohammédia",
            date: "Fév. 2025 – Présent",
            description: [
                "Conception et développement de fonctionnalités back-end avec Laravel, incluant la création d’API robustes et sécurisées.",
                "Création d’interfaces interactives et responsive en React et React Native, en optimisant l’expérience utilisateur sur web et mobile.",
                "Analyse et optimisation de la base de données MySQL pour améliorer la performance des applications et la gestion des données."
            ],
            tech: ["Laravel", "React", "React Native", "MySQL"]
        },
        {
            title: "Stage de fin d’études (hybride)",
            company: "Inetum, Casablanca",
            date: "Fév. – Juil. 2024",
            description: [
                "Contribution à la refonte du frontend avec Angular et à la mise en place d’une architecture microservices pour un système de gestion des taxes.",
                "Réalisation d’un proof of concept du module de dépôt et de prise en charge des déclarations fiscales avec Java, Spring Boot et Angular.",
            ],
            tech: ["Angular", "Java", "Hibernate", "Spring Boot", "Microservices", "SVN"]
        },
        {
            title: "Stage de fin d’année (à distance)",
            company: "MaxMind, Casablanca",
            date: "Juil. 2023",
            description: [
                "Participation à un projet en environnement agile, avec une organisation 100% à distance.",
                "Création d’un site portfolio moderne en HTML, CSS et Bootstrap 5, en utilisant Git/GitHub pour la gestion du code.",
                "Développement d’une application CRUD avec Node.js, Restify et HTML/CSS, renforçant mes compétences en développement web full stack."
            ],
            tech: ["Node.Js", "HTML", "CSS", "Bootstrap", "Git/GitHub"]
        },
        {
            title: "Stage d’observation (en présentiel)",
            company: "Inetum, Casablanca",
            date: "Juil. 2022",
            description: [
            "Première immersion dans le monde professionnel, au sein d’une entreprise des services numériques.",
            "Réalisation d’une petite application CRUD en Java Swing, me permettant de consolider mes bases en développement desktop et base de données MySQL."
            ],
            tech: ["Découverte d’outils collaboratifs", "Java", "MySql"]
        }
    ];

    return (
        <section id="experiences" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Mon <span className="text-gradient">parcours pro</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Aperçu de mes expériences professionnelles, stages et technologies utilisées.
                        </p>
                    </div>

                    {/* Timeline / Cards */}
                    <div className="grid gap-8">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="glass border-border/50 card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl">
                                        <Briefcase className="w-5 h-5 mr-2 text-primary" />
                                        {exp.title}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        {exp.company} • {exp.date}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <Badge
                                            key={i}
                                            variant="secondary"
                                            className="glass hover:scale-105 transition-transform cursor-default"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
