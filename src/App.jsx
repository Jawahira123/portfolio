import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Edu from "./components/Education";
import Skill from "./components/Skills";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <>
      <CursorGlow />
      
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="profile">
        <About />
      </section>

      <section id="education">
        <Edu />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="certifications">
        <Certification />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer/>
    </>
  );
}

export default App;