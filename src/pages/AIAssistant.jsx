import React, { useState } from 'react';
import './AIAssistant.css';
import { SendHorizonal, Bot } from 'lucide-react';

const AIAssistant = () => {
    const [messages, setMessages] = useState([
    { text: 'Hello! I\'m your AI Assistant. How can I help you today?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);

    const handleSend = () => {
    if (input.trim() === '') return;

    const userMsg = { text: input, sender: 'user' };
    const lowerInput = input.toLowerCase();

    let reply = "I'm not sure how to respond to that yet. Try asking about skills, projects, or certifications!";

    if (lowerInput.includes("name")) {
    reply = "I'm Logesh's personal AI Assistant. Here to guide you!";
    } else if (lowerInput.includes("who are you")) {
    reply = "I’m a custom rule-based AI built into Logesh’s portfolio.";
    } else if (lowerInput.includes("skill") || lowerInput.includes("technologies")) {
    reply = "Logesh is skilled in JavaScript, React, Node.js, Python, Java, MongoDB, and cloud technologies.";
    } else if (lowerInput.includes("project")) {
    reply = "You can view cool projects like a Personalized Recommendation System and more in the Projects section.";
    } else if (lowerInput.includes("certification") || lowerInput.includes("certificate")) {
    reply = "Logesh holds certifications in AI, Cloud Computing, Full Stack Development, and more.";
    } else if (lowerInput.includes("education")) {
    reply = "Logesh is currently pursuing a degree in Computer Science and has completed several online courses.";
    } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
    reply = "You can reach out to Logesh using the Contact section at the bottom of the site.";
    } else if (lowerInput.includes("goal") || lowerInput.includes("career")) {
    reply = "Logesh aims to become a top-tier AI/ML & Cloud Engineer.";
    } else if (lowerInput.includes("experience") || lowerInput.includes("internship")) {
    reply = "Logesh has hands-on experience through major personal and academic projects.";
    } else if (lowerInput.includes("about")) {
    reply = "Check out the About section to learn more about Logesh's journey.";
    } else if (lowerInput.includes("portfolio") || lowerInput.includes("sections")) {
    reply = "This portfolio includes Home, About, Skills, Projects, Certifications, and AI Assistant.";
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    reply = "Hello there! I’m Logesh’s AI Assistant. Ask me anything!";
    }else if (lowerInput.includes("recommendation") ||lowerInput.includes("product recommendation")) {
    reply = "The 'Personalized Recommendation System' is a hybrid AI project that combines collaborative and content-based filtering to suggest products tailored to user preferences. Built with Python, Pandas, and Scikit-learn, it's ideal for e-commerce platforms.";
    }else if (lowerInput.includes("portfolio") &&lowerInput.includes("project")) {
    reply = "This portfolio is built with React.js, custom CSS, React Three Fiber, and features cool animations like glitch text, comet underlines, and a custom AI assistant.";
    }else if (lowerInput.includes("top projects")) {
    reply = "Some of Logesh's top projects include:\n1. Personalized Recommendation System\n2. Code Interview Prep Platform (MERN)\n3. AI Portfolio with integrated Assistant";
    }else if (lowerInput.includes("chatbot") ||lowerInput.includes("ai assistant")) {
    reply = "The AI Assistant you're speaking to is built using rule-based logic in React. It simulates a chatbot experience without external APIs.";
    }else if (lowerInput.includes("tech stack") ||lowerInput.includes("technologies used")) {
    reply = "This portfolio uses React.js, React Three Fiber for 3D, Lucide Icons, custom CSS, and Vite as the build tool.";
    }
    const botReply = { text: reply, sender: 'bot' };
    setMessages(prev => [...prev, userMsg, botReply]);
    setInput('');
};



  return (
    <div className={`ai-container ${open ? 'open' : ''}`}>
        
      {!open && (
        <div className="ai-toggle" onClick={() => setOpen(true)}>
          <Bot size={30} />
        </div>
      )}

      {/* Chat Box */}
      {open && (
        <div className="ai-chatbox">
          <div className="ai-close-btn" onClick={() => setOpen(false)}>
            <span className="x-symbol">×</span>
          </div>

          <div className="ai-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-input-area">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
