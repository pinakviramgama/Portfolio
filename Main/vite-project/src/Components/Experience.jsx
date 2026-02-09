import "./Experience.css";

function Experience() {
 const experiences = [
  {
    role: "Project Mentor",
    company: "GirlScript Summer Of Code",
    duration: "Sep 2025 – Nov 2025",
    location: "Remote",
    points: [
      "Mentored and guided 150+ open-source contributors, reviewing design decisions, code quality, and performance trade-offs.",
      "Evaluated and merged 30+ pull requests through systematic analysis of correctness, scalability, and maintainability.",
      "Analysed recurring technical issues and proposed structural improvements, leading to faster issue resolution and higher contribution quality.",
      "Recognized as Best Mentor for providing consistent technical guidance and support.",
      "Used shell scripting and command-line tools to automate repository checks, validate builds, and streamline contributor workflows.",
     ],
    link: "https://www.linkedin.com/in/gecr-ai230200143075/overlay/Certifications/1645250223/treasury/?profileId=ACoAAErU08YBxkHPMl9xGfqOda4qkWUa3RjfLdY",
  },

  {
    role: "Open Source Contributor",
    company: "GirlScript Summer Of Code",
    duration: "Oct 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Contributed 18+ merged pull requests across multiple projects involving JavaScript, MERN stack, and algorithmic problem solving.",
      "Ranked 119th out of 40,000+ contributors nationwide based on overall impact and consistency.",
      "Designed and optimized search functionality using Trie based data structures, analysing space–time trade-offs for large datasets.",
      "Improved UI workflows using React and strengthened authentication logic for secure login-signup systems.",
    ],
    link: "https://www.linkedin.com/in/gecr-ai230200143075/overlay/Certifications/467815623/treasury/?profileId=ACoAAErU08YBxkHPMl9xGfqOda4qkWUa3RjfLdY",
  },
];


  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="exp-title text-center">Experience 💼</h2>
        <p className="exp-subtitle text-center">
          My journey so far in development
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-card">
              <h4>{exp.role}</h4>
              <h6>
                <a className="company" href={exp.link}>Certification</a>
</h6>
            <hr />
              <h6 className="company">
                {exp.company} • <span>{exp.duration}</span>
              </h6>

              {/* Bullet Points */}
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

                  </ul>

              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
