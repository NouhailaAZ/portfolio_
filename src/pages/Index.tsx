import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Toaster } from "../components/ui/toaster";
import Footer from "../components/Footer";
import Experiences from "../components/Experiences";

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
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
