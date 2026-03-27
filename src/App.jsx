import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.gstatic.com";
    link2.crossOrigin = "true";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link3);

    const link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    document.head.appendChild(link4);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );

}

export default App;