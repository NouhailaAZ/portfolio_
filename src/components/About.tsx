import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
    const values = [
    {
        icon: Code,
        title: "Tech & créativité",
        description: "Passionnée par le web et le mobile, avec une appétence pour React, Laravel ou Spring Boot."
    },
    {
        icon: Lightbulb,
        title: "Curiosité",
        description: "Toujours en veille pour explorer de nouvelles technologies et trouver des solutions élégantes."
    },
    {
        icon: Users,
        title: "Esprit d’équipe",
        description: "Le partage et la collaboration sont essentiels pour apprendre et créer des projets solides."
    },
    {
        icon: Rocket,
        title: "Motivation",
        description: "Détermination et ambition guident chaque projet, avec l’envie de progresser constamment."
    }
    ];

    return (
    <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        À propos de <span className="text-gradient">moi</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ingénieure en génie logiciel et développeuse full stack, motivée à apprendre, innover et relever de nouveaux défis.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Story */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Diplômée en génie logiciel à la Faculté des Sciences et Techniques de Settat, 
                            j’ai pu renforcer mes compétences à travers divers projets académiques et stages, 
                            notamment chez Inetum et MaxMind sur des technologies comme Angular, Java et Spring Boot.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Actuellement développeuse full stack chez Jbel Annour, je travaille sur le 
                            front-end et le back-end avec React, Laravel et React Native. 
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Active sur le marché, je suis à la recherche de nouvelles opportunités pour 
                            mettre à profit mon expertise, apprendre encore plus et contribuer à des projets ambitieux.
                        </p>
                    </div>


                    {/* Values */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card key={index} className="glass card-hover border-border/50">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="p-2 bg-gradient-primary rounded-lg mr-3">
                                                <Icon size={24} className="text-primary-foreground" />
                                            </div>
                                            <h4 className="text-lg font-semibold">{value.title}</h4>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;
