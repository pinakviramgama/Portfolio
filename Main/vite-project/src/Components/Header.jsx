import { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [theme, setTheme] = useState("dark");

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  return (
    <nav className="navbar navbar-dark custom-navbar sticky-top">
      <div className="container">

        {/* ================= LOGO ================= */}
        <a className="navbar-brand fw-bold fs-4 logo" href="#">
          Pinak<span>.dev</span>
        </a>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4 align-items-center">

          <li className="nav-item">
            <a className="nav-link nav-hover" href="#about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-hover" href="#skills">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-hover" href="#experience">
              Experience
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-hover" href="#projects">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-hover" href="#extracurriculars">
              Achievements
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-hover" href="#contact">
              Contact
            </a>
          </li>

          {/* Resume Button */}
          <li className="nav-item">
            <a
              className="resume-btn"
              href="https://drive.google.com/file/d/1UUomJAGgQRV70zSiRgs-7XFsDN9Zx8hE/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>

          {/* Theme Toggle */}
          <li className="nav-item">
            <button
              className="theme-btn"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>

        {/* ================= MOBILE HAMBURGER BUTTON ================= */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ================= MOBILE SIDEBAR ONLY ================= */}
        <div
          className="offcanvas offcanvas-end text-bg-dark d-lg-none"
          tabIndex="-1"
          id="mobileSidebar"
        >
          {/* Sidebar Header */}
          <div className="offcanvas-header">
            <h5 className="offcanvas-title logo">
              Pinak<span>.dev</span>
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          {/* Sidebar Body */}
          <div className="offcanvas-body">
            <ul className="navbar-nav gap-3">

              <li>
                <a className="nav-link nav-hover" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="nav-link nav-hover" href="#skills">
                  Skills
                </a>
              </li>

              <li>
                <a className="nav-link nav-hover" href="#experience">
                  Experience
                </a>
              </li>

              <li>
                <a className="nav-link nav-hover" href="#projects">
                  Projects
                </a>
              </li>

              <li>
                <a className="nav-link nav-hover" href="#extracurriculars">
                  Achievements
                </a>
              </li>

              <li>
                <a className="nav-link nav-hover" href="#contact">
                  Contact
                </a>
              </li>

              {/* Resume Button */}
              <li>
                <a
                  className="resume-btn mt-2 d-inline-block text-center"
                  href="https://drive.google.com/file/d/1UUomJAGgQRV70zSiRgs-7XFsDN9Zx8hE/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>

              {/* Theme Toggle */}
              <li>
                <button
                  className="theme-btn mt-3 w-100"
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                >
                  Toggle Theme 🌙
                </button>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Header;
