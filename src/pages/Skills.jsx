import React from "react";
import "./Skills.css";
import {
  FaPython,
  FaReact,
  FaNode,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaJava,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTensorflow,
  SiDocker,
  SiC,
  SiFirebase,
  SiVite,
  SiPostman,
} from "react-icons/si";

const skills = {
  "Frontend": [
    { name: "React", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Vite", icon: <SiVite /> },
  ],
  "Backend & Cloud": [
    { name: "Node.js", icon: <FaNode /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    // { name: "Firebase", icon: <SiFirebase /> },
    { name: "AWS", icon: <FaAws /> },
    // { name: "Docker", icon: <SiDocker /> },
  ],
  "Proramming Language": [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <SiC /> },
    // { name: "TensorFlow", icon: <SiTensorflow /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt /> },
    // { name: "Linux", icon: <FaLinux /> },
    { name:"Postman",icon:<SiPostman/>},
    { name:"VS Code"},
  ]
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading-glow">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <div className="skill-category" key={idx}>
            <h3>{category}</h3>
            <div className="skill-items">
              {items.map((skill, i) => (
                <div className="skill-box" key={i}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
