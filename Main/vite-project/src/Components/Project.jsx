import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./project.css";

function Projects() {
  const projects = [
    {
      title: "Campus_Sphere",
      duration: "Dec 2025 – Feb 2026",
      desc: [
        "Platform for my college to access all materials, web links, and other resources in one place.",
        "Solves college material access problems, the key crux of this project.",
        "All Materials, PYQs, Reference, Web Links available department-wise and semester-wise.",
        "Students can upload materials, which admin approves before publishing.",
        "Admin manages website flow: uploading materials, managing subjects, adding web links, etc.",
        "Secured authorization and authentication using backend APIs and middlewares."
      ],
      tech: ["MERN Stack", "Project Management","Problem Solving","Cloudinary"],
      github: "https://github.com/pinakviramgama/CMS",        // Replace with actual GitHub link
      live: "https://cms-4-74hb.onrender.com/",          // Replace with actual Live link
      thumbnail: "Campus_Sphere_Thumbnail" // Replace with actual thumbnail
    },
    {
      title: "WanderLust",
      duration: "Jan 2025 – Jun 2025",
      desc: [
        "Travel Property Listing App.",
        "Backend: Node.js, Express.js, MongoDB (Mongoose).",
        "Frontend: EJS Templates, Bootstrap 4.",
        "Cloud: Cloudinary for images, Render for deployment.",
        "Auth: Sessions & Flash messages.",
        "Features: View & filter property listings, Add/Edit/Delete listings, Leave star-rated reviews, Store images on Cloudinary."
      ],
      tech: ["MERN Stack", "Node.js", "Bootstrap", "Cloudinary"],
      github: "https://github.com/pinakviramgama/Wanderlust",
      live: "https://wanderlust-9pk3.onrender.com/testlisting",
      thumbnail: "WanderLust_Thumbnail"
    },
    {
      title: "Weather App Using React",
      duration: "Apr 2024 – Apr 2024",
      desc: [
        "Shows weather data for any city entered."
      ],
      tech: ["React.js", "REST APIs"],
      github: "https://github.com/pinakviramgama/Wheather_APP-REACT-",
      live: "#",
      thumbnail: "Weather_App_Thumbnail"
    },
    {
      title: "AI Powered E-Commerce Website",
      duration: "Associated with Government Engineering College, Rajkot",
      desc: [
        "Brand-centric modern UI that makes your brand pop.",
        "AI Intelligence: Smart product tagging, trend predictions & insights.",
        "Easy Management: Create, edit, and launch products quickly.",
        "Mobile-first: Fast, responsive, and smooth on any device.",
        "Built for Scale: From 10 to 10,000 products seamlessly."
      ],
      tech: ["Artificial Intelligence (AI)", "MERN Stack"],
      github: "https://github.com/pinakviramgama/MeraBazar",
      live: "https://merabazar.onrender.com/",
      thumbnail: "AI_Ecommerce_Thumbnail"
    }
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="projects-title text-center">Projects 🚀</h2>
        <p className="projects-subtitle text-center">
          Some featured work I’ve built recently
        </p>

        {/* Projects Slider with Arrows */}
        <div className="projects-slider-wrapper">
          <button className="arrow-btn left" onClick={scrollLeft}>
            <FiChevronLeft size={28} />
          </button>

          <div className="projects-slider" ref={sliderRef}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-duration">{project.duration}</p>

                {/* Description as bullet points */}
                <ul className="project-desc">
                  {project.desc.map((point, i) => (
                    <li key={i}>{point.replace(/^-/, "")}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glow"
                  >
                    GitHub ⚡
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-live"
                  >
                    Live Demo 🚀
                  </a>
                </div>
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

export default Projects;
