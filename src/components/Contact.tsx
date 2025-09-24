import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast({
        title: "✅ Message envoyé !",
        description: "Merci pour votre message.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, (error) => {
      toast({
        title: "Erreur !",
        description: "Le message n'a pas pu être envoyé. Réessayez plus tard.",
      });
      console.error(error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nouhaila.azlag.17@gmail.com",
      href: "mailto:nouhaila.azlag.17@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212 688 64 25 66",
      href: "tel:+212688642566"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Casablanca, Maroc",
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prenons <span className="text-gradient">contact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vous cherchez une développeuse junior motivée ? Je serais ravie 
              d'échanger sur des opportunités d'emploi !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass"
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass resize-none"
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="gradient"
                    className="w-full hover:scale-105 transition-transform"
                  >
                    <Send size={20} className="mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center space-x-4 p-4 glass rounded-lg card-hover transition-all group"
                      >
                        <div className="p-3 bg-gradient-primary rounded-lg">
                          <Icon size={24} className="text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          <p className="text-lg font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Recherche active</h4>
                  <p className="text-muted-foreground mb-4">
                    Actuellement en poste en développement full stack, je suis à la recherche 
                    d'un nouvel emploi pour évoluer et relever de nouveaux défis.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-500 font-medium">
                      Disponible immédiatement
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;