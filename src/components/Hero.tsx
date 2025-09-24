import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import heroBg from "../assets/bg.png";
import cvFile from "../assets/CV AZLAG Nouhaila -fr-.pdf";
import coffee from "../assets/icon.png";

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
    <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80"></div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
                {/* Greeting */}
                <div className="opacity-0 animate-fade-in [animation-delay:0.2s]">
                    <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-4">
                        <span>Bonjour et bienvenue</span>
                        <img 
                        src={coffee} 
                        alt="coffee icon"
                        className="w-8 h-8"
                        />
                    </div>
                </div>

                {/* Name */}
                <div className="opacity-0 animate-fade-in [animation-delay:0.4s]">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-foreground">Nouhaila</span>
                        <br />
                        <span className="text-gradient">AZLAG</span>
                    </h1>
                </div>

                {/* Title */}
                <div className="opacity-0 animate-fade-in [animation-delay:0.6s]">
                    <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                        Ingénieure en génie logiciel & développeuse full stack junior
                    </h2>
                </div>

                {/* Description */}
                <div className="opacity-0 animate-fade-in [animation-delay:0.8s]">
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                        En début de carrière et déjà animée par l’envie de créer, apprendre et partager. 
                        Mon objectif : transformer des idées en applications utiles et accessibles à tous.
                    </p>
                </div>


                {/* CTA Buttons */}
                <div className="opacity-0 animate-fade-in [animation-delay:1s] flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button
                        variant="gradient"
                        size="lg"
                        className="hover:scale-105 transition-transform"
                        onClick={() => scrollToSection("projects")}
                    >
                        Voir mes projets
                    </Button>
                    <a href={cvFile} download>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="hover:scale-105 transition-transform"
                        >
                            <ArrowDown size={20} />
                            Télécharger CV
                        </Button>
                    </a>
                    <Button
                        variant="glass"
                        size="lg"
                        className="hover:scale-105 transition-transform"
                        onClick={() => scrollToSection("contact")}
                    >
                        Me contacter
                    </Button>
                </div>

                {/* Social Links */}
                <div className="opacity-0 animate-fade-in [animation-delay:1.2s] flex justify-center space-x-6 mb-12">
                    <a
                        href="https://github.com/NouhailaAZ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                        variant="ghost"
                        size="icon"
                        className="hover:scale-110 transition-transform"
                        >
                        <Github size={24} />
                        </Button>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nouhaila-azlag-26220822b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                        variant="ghost"
                        size="icon"
                        className="hover:scale-110 transition-transform"
                        >
                        <Linkedin size={24} />
                        </Button>
                    </a>

                    <a
                        href="mailto:nouhaila.azlag.17@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                        variant="ghost"
                        size="icon"
                        className="hover:scale-110 transition-transform"
                        >
                        <Mail size={24} />
                        </Button>
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="opacity-0 animate-fade-in [animation-delay:1.4s]">
                    <button
                        onClick={() => scrollToSection("about")}
                        className="animate-float hover:scale-110 transition-transform"
                    >
                        <ArrowDown size={32} className="text-primary" />
                    </button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;
