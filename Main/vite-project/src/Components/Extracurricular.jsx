import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./extracurriculars.css";

function Extracurriculars() {
  const achievements = [
    {
      title: "Best Project Mentor",
      org: "GirlScript Summer of Code",
      duration: "Sep 2025 – Nov 2025",
      points: [
        "Mentored 150+ open-source contributors.",
        "Reviewed design decisions, code quality, and performance trade-offs.",
        "Recognized as Best Mentor for consistent guidance and support."
      ]
    },
    {
      title: "119th Rank Contributor",
      org: "GirlScript Summer of Code",
      duration: "Oct 2024 – Dec 2024",
      points: [
        "Ranked 119th out of 40,000+ contributors nationwide.",
        "Contributed to multiple projects involving JavaScript and MERN stack.",
        "Improved UI workflows and authentication logic."
      ]
    },
    {
      title: "Postman API Certified",
      org: "Postman",
      duration: "2025",
      points: ["Certified in Student Fundamentals of REST API development."]
    },
    {
      title: "AI Intern",
      org: "Edunet Foundation",
      duration: "2025",
      points: ["Gained hands-on exposure to software engineering and applied AI systems."]
    },
    {
      title: "LeetCode Achiever",
      org: "LeetCode",
      duration: "2025",
      points: ["Rating: 1461 (Top 58.19% globally)."]
    }
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="extracurriculars-section" id="extracurriculars">
      <div className="container">
        <h2 className="section-title text-center">Extracurriculars / Achievements 🌟</h2>

        <div className="achievements-slider-wrapper">
          <button className="arrow-btn left" onClick={scrollLeft}>
            <FiChevronLeft size={28} />
          </button>

          <div className="achievements-slider" ref={sliderRef}>
            {achievements.map((ach, index) => (
              <div key={index} className="achievement-card">
                <h3>{ach.title}</h3>
                <span className="org">{ach.org} • {ach.duration}</span>
                <ul>
                  {ach.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button className="arrow-btn right" onClick={scrollRight}>
            <FiChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Extracurriculars;
