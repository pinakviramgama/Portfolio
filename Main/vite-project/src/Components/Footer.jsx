import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Left */}
        <h3 className="footer-logo">Pinak.dev</h3>

        {/* Center Links */}
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Social */}
        <div className="footer-socials">
          <a href="https://github.com/pinakviramgama" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/gecr-ai230200143075" target="_blank">LinkedIn</a>
          <a href="pinakdv11@gmail.com">Email</a>
        </div>
      </div>

      {/* Bottom */}
      <p className="footer-bottom">
        © {new Date().getFullYear()} Pinak Viramgama | Built with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;
