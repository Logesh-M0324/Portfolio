import React, { useState } from 'react';
import './Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: "160 Days Of Data Structures And Algorithm",
    image: "/certificates/g-f-g certificate-1.png",
    description: "Successfully completed the 160 Days DSA Challenge by GeeksforGeeks, strengthening problem-solving skills and mastering core data structures and algorithms through consistent daily practice.",
    issuer:"Geeks for Geeks",
    year:"2024-2025",
  },
  {
    id: 2,
    title: "MERN-STACK web Developement",
    image: "/certificates/MERN_STACK_cert_page-0001.jpg",
    description: "Successfully completed a MERN Stack Development course on Udemy, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js for full-stack web development.",
    issuer:"Udemy",
    year:"2024",
  },
  {
    id: 3,
    title: "Introduction to Data Analystics",
    image: "/certificates/Data_Analystics_cert_page-0001.jpg",
    description: "Successfully completed the \"Introduction to Data Analytics\" course by Simplilearn, gaining foundational knowledge in data analysis, statistical techniques, and data-driven decision-making using real-world examples.",
    issuer:"Simplilearn",
    year:"2025",
  },
  // Add more certificates as needed
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-heading-glow">Certifications</h2>
      <br /><br />
      <div className="certification-grid">
        {certificationsData.map((cert) => (
          <div className="cert-card" key={cert.id} onClick={() => openModal(cert)}>
            <div className="cert-card-inner">
              <div className="cert-card-front">
                <img src={cert.image} alt={cert.title} className="cert-img" />
              </div>
              <div className="cert-card-back">
                <h3>{cert.title}</h3>
                <p>Click to view</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-text">
              <h2>{selectedCert.title}</h2>
              <p className="cert-description">{selectedCert.description}</p>
              <div className="cert-code">
                Certificate ID: <strong>{selectedCert.id}</strong><br />
                Issuer: <strong>{selectedCert.issuer}</strong><br />
                Year: <strong>{selectedCert.year}</strong>
              </div>
            </div>
            <div className="cert-modal-image">
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
        )}  
    </section>
  );
};

export default Certifications;
