import { useEffect, useRef, useState } from 'react';
import './Home.css';

const passions = [
  "AI/ML Enthusiast",
  "Web Developer",
  "Final Year Student",
  "Cloud Learner"
];

const Home = () => {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);

  const [loopText, setLoopText] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Particle background
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.8)' : 'rgba(255, 0, 255, 0.8)'
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();

    // Animate title letters
    if (titleRef.current) {
      const title = titleRef.current;
      const text = title.getAttribute("data-text");
      title.textContent = '';
      const letters = text.split('');
      letters.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerHTML = char === ' ' ? '&nbsp;' : char; // Preserve space
        span.style.animationDelay = `${i * 0.1}s`;
        span.classList.add('letter-animate');
        title.appendChild(span);
      });
    }
    // Resize handling
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typing passion effect
 useEffect(() => {
  const current = passions[loopIndex];
  let charIndex = 0;
  let interval;

  if (isTyping) {
    interval = setInterval(() => {
      setLoopText(current.substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === current.length) {
        clearInterval(interval);
        setTimeout(() => setIsTyping(false), 3000); // wait after fully typed
      }
    }, 100);
  } else {
    charIndex = current.length;
    interval = setInterval(() => {
      setLoopText(current.substring(0, charIndex - 1));
      charIndex--;

      if (charIndex === 0) {
        clearInterval(interval);
        setIsTyping(true);
        setLoopIndex((prev) => (prev + 1) % passions.length);
      }
    }, 50);
  }

  return () => clearInterval(interval);
}, [isTyping, loopIndex]);

  return (
    <section className="home-section">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="home-content">
        <h1 ref={titleRef} className="home-title" data-text="HELLO,I'M LOGESH"></h1>
        <br />
        <div className="home-subtitle">
          <span className="typing-text">{loopText}</span>
          <span className="cursor">|</span>
        </div>
        <br />  
        <div className="home-buttons">
          <a href="#projects" className="glow-button">
            <span>🚀 View Projects</span>
            <div className="glow"></div>
            <span className="comet right"></span>
            <span className="comet left"></span>
          </a>

          <a href="#contact" className="glow-button">
            <span>📩 Contact Me</span>
            <div className="glow"></div>
            <span className="comet right"></span>
            <span className="comet left"></span>
          </a>

          <a href="/assets/resume.pdf" className="glow-button" download target="_blank" rel="noopener noreferrer">
            <span>📄 Download Resume</span>
            <div className="glow"></div>
            <span className="comet right"></span>
            <span className="comet left"></span>
          </a>
        </div>

        <div className="tech-scroll">
          <div className="tech-items">
            {['React', 'Node.js', 'Java', 'JavaScript', 'Python', 'C'].map((tech, i) => (
              <div key={i} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="scanlines"></div>
    </section>
  );
};

export default Home;
