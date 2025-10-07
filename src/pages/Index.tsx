import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";
import { Toaster } from "../components/ui/toaster";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Chatbot />
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
