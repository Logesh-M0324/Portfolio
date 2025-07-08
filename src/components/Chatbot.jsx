import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  
  useEffect(() => {
    // Dynamic particles for canvas
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
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animateParticles);
    };
    
    animateParticles();

    // Title letter animation
    if (titleRef.current) {
      const title = titleRef.current;
      const letters = title.textContent.split('');
      title.textContent = '';
      
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.1}s`;
        span.classList.add('letter-animate');
        title.appendChild(span);
      });
    }

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="home-section">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      <div className="home-content">
        <h1 ref={titleRef} className="home-title">CYBERPUNK DEVELOPER</h1>
        
        <div className="home-subtitle">
          <span className="typing-text">Full-Stack Developer</span>
          <span className="cursor">|</span>
        </div>
        
        <div className="home-buttons">
          <a href="#projects" className="glow-button">
            <span>View Projects</span>
            <div className="glow"></div>
          </a>
          <a href="#contact" className="glow-button">
            <span>Contact Me</span>
            <div className="glow"></div>
          </a>
        </div>
        
        <div className="tech-scroll">
          <div className="tech-items">
            {['React', 'Node.js', 'TypeScript', 'Three.js', 'WebGL', 'GraphQL', 'Python', 'Rust'].map((tech, i) => (
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