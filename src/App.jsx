import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import AIAssistant from "./pages/AIAssistant";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certification">
          <Certifications />
        </section>
        <section id="aiassisstant">
          <AIAssistant />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
