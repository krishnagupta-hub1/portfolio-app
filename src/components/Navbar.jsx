import "../styles/navbar.css";
import { scrollToSection } from "../utils/scrollToSection";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          <span className="logo-icon">◼</span>
          <span className="logo-text">Portfolio</span>
        </div>

        <nav className="navbar-links">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <button className="primary" onClick={() => scrollToSection("contact")}>
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  );
}
