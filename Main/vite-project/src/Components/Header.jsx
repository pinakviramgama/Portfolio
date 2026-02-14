import { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [theme, setTheme] = useState("light");

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // remember user preference
  }, [theme]);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold fs-4 logo" href="#">
          Pinak<span>.dev</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-4 align-items-center">

            <li className="nav-item"><a className="nav-link nav-hover" href="/">About</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="#extracurriculars">Achievements</a></li>

            {/* Resume Button */}
            <li className="nav-item">
              <a className="resume-btn fire-link" href="https://drive.google.com/file/d/1UUomJAGgQRV70zSiRgs-7XFsDN9Zx8hE/view" target="_blank">
                Resume
                <span className="fire"></span>
              </a>
            </li>

            {/* Light/Dark Toggle */}
            <li className="nav-item">

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
