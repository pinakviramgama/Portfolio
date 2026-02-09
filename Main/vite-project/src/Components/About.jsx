import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "./about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6">
            <h2 className="about-title">
              About <span>Me</span>
            </h2>

            <h3 className="typing-text">
              I am a{" "}
              <span>
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Software Engineer",
                    "Open Source Contributor",
                    "Tech Enthusiast",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>

            <p className="about-desc">
              Hi 👋 I’m <b>Pinak Viramgama</b>, passionate about building modern
              web apps and solving real-world problems.
            </p>

                  <div className="photo-social-icons">
                <a
                  href="https://www.linkedin.com/in/gecr-ai230200143075"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/pinakviramgama"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/syntaxWithSoul"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
              </div>

            {/* Buttons */}
            <div className="about-buttons">
              <a href="#projects" className="btn btn-main">
                View My Work 🚀
              </a>
            </div>
          </div>

          {/* Right Side Photo */}
          <div className="col-md-6 text-center">
            <div className="photo-flip-wrapper">
              <div className="photo-flip-inner">
                {/* Front side */}
                <img
                  src="image.jpeg"
                  alt="Pinak"
                  className="about-photo"
                />

                {/* Back side: same photo */}
                <img
                  src="image.jpeg"
                  alt="Pinak"
                  className="about-photo photo-back"
                />
              </div>

              {/* Social Icons below photo */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
