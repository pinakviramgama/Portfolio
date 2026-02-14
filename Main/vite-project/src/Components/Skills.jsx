import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import {
  SiExpress,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si"; // VS Code removed

import "./skills.css";

function Skills() {

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "DSA", icon: <SiLeetcode />, color: "#FFA116" },
    { name: "API", icon: <SiPostman />, color: "#FF6C37" },
  ];

  // Duplicate array for continuous scroll
  const scrollSkills = [...skills, ...skills];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills ⚡</h2>
        <p className="skills-subtitle">
          Technologies I use to build modern web applications
        </p>

              <div className="skills-scroll-wrapper">

          <div className="skills-scroll">
  <div className="skills-track">
    {scrollSkills.map((skill, index) => (
      <div key={index} className="skill-card">
        <div className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h5>{skill.name}</h5>
      </div>
    ))}
  </div>
</div>

<div className="scroll-again">
  <div className="skills-track reverse">
    {scrollSkills.map((skill, index) => (
      <div key={index} className="skill-card-2">
        <div className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h5>{skill.name}</h5>
      </div>
    ))}
  </div>
</div>


</div>


      </div>
    </section>
  );
}

export default Skills;
