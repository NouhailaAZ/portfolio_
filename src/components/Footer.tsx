import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                asChild
              >
                <a href="https://github.com/NouhailaAZ" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                asChild
              >
                <a href="https://www.linkedin.com/in/nouhaila-azlag-26220822b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                asChild
              >
                <a href="mailto:nouhaila.azlag.17@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Back to top */}
          <div className="text-center mt-8 pt-8 border-t border-border/30">
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground animated-underline"
            >
              Retour en haut ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;