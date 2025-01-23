
import React from "react";
import { Link } from "react-scroll"; // Smooth scrolling
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-links">
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <main>
      <section id="about">
  <AboutMe />
  {/* Adding your profile image to the AboutMe section */}
  <div className="about-image">
    <img 
      src="/images/profile.jpg"  // Path to your profile image in the public/images folder
      alt="Vaishnavi Ambadkar's Avatar"  // Alt text for the image
      className="about-img"
      style={{ width: '250px', height: '250px' }} // Adjusted width and height to be equal
    />
  </div>
</section>

        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Vaishnavi's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
