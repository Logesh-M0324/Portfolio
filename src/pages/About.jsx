import React, { useEffect, useState } from "react";
import "./About.css";

const quotes = [
  "Transforming ideas into reality, one line of code at a time.",
  "Code is not just syntax. It's an expression of creativity.",
  "Dream big. Code smart. Execute flawlessly.",
  "Engineering the future with curiosity and code.",
  "In a world full of trends, remain original with your passion.",
  "You don’t need to be perfect — just consistent, curious, and committed.",
  "Dedication isn't loud — it's silent mornings, late nights, and never giving up.",
  "Your mindset writes more success than any syntax ever could."
];

export default function About() {
  const [text, setText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const quote = quotes[quoteIndex];
    if (charIndex < quote.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + quote[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, quoteIndex]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <div className="quote-box">
            <p className="quote-glitch hacker-text">{text}|</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h3 className="heading-glow">About Me</h3>
          <br />
           <p>
            Hi, I'm <strong>Logesh</strong> — a passionate final-year Computer Science student with a deep interest in <strong>AI/ML</strong>, <strong>full-stack web development</strong>, and <strong>cloud computing</strong>.<br /><br />
            I enjoy crafting scalable digital experiences and solving real-world problems through code. I'm constantly learning, building, and striving to become a better version of myself—both technically and creatively.
            When I’m not writing code, I’m exploring new tech trends or sharpening my skills on platforms like LeetCode and GitHub.
          </p>

          <div className="timeline-heading">
            <h3 >Education Timeline</h3>
            <ul className="timeline">
              <li>
                <div className="timeline-content">
                  <h4>B.Tech in Artificial Intelligence and Data Science</h4>
                  <p>Dr.N.G.P Institute Of Technology, 2022 - Present</p>
                </div>
              </li>
              {/* {/* <li>
                <div className="timeline-content">
                  <h4>Higher Secondary</h4>
                  <p>ABC Matric School, 2019 - 2021</p>
                </div>
              </li> */}
              <li>
                <div className="timeline-content">
                  <h4>SSLC & HSC</h4>
                  <p>M.N.C Matric Higher Secondary School, 2019 - 2022</p>
                </div>
              </li>  
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
