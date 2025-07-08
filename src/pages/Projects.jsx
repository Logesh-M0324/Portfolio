import React from 'react';
import './projects.css';

const projects = [
  // {
  //   title: "Personalized Recommendation System",
  //   description: "A hybrid filtering system that provides product recommendations using collaborative and content-based techniques.",
  //   technologies: ["Python", "Scikit-Learn", "Flask", "MongoDB"],
  //   link: "https://your-live-link.com",
  //   code: "https://github.com/your-repo",
  //   image: "/images/projimage4.jpeg"
  // },
  // {
  //   title: "AI Interview Prep Platform",
  //   description: "A full-stack MERN platform that helps users prepare for coding interviews with AI-generated questions and tracking.",
  //   technologies: ["React", "Node.js", "Express", "MongoDB"],
  //   link: "#",
  //   code: "#",
  //   image: "/images/projimage1.jpeg"
  // },
  // {
  //   title: "Cloud Resource Monitoring Dashboard",
  //   description: "Built a cloud-native dashboard using AWS CloudWatch and Lambda to monitor and visualize system health metrics.",
  //   technologies: ["AWS", "Lambda", "CloudWatch", "DynamoDB"],
  //   link: "#",
  //   code: "#",
  //   image: "/images/projimage2.jpeg"
  // },
  {
    title: "REST-API",
    description: "Developed a secure RESTful API using Node.js and MongoDB for user authentication, including signup, login, and password management.Tested all endpoints with Postman, implementing JWT-based auth, input validation, and encrypted password handling.",
    technologies: ["Node.js", "Postman"],
    link: "#",
    code: "#",
    image: "/images/rest-api-vs-web-api.jpg"
  },{
    title: "Movie-App",
    description: "A responsive React app that integrates with the TMDb API to display, search, sort, and favorite movies. Features dynamic movie grids, live search, sorting controls, and a personalized favorites page.",
    technologies: ["React", "CSS", "Node.js", "Api Integration"],
    link: "#",
    code: "#",
    image: "/images/Movieapp.png"
  }
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <h2 className="heading1-glow">Projects</h2>
      <div className="project-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-inner">
              <div className="project-front">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.code} target="_blank" rel="noreferrer">Code</a>
                  {/* <a href={project.link} target="_blank" rel="noreferrer">Live</a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
