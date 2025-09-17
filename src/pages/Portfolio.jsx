import { useState } from 'react';
import './portfolio.css';

const projects = [
  { 
    title: 'Autonomous coupler for in orbit cryo-fuel transfer', 
    description: 'Awarded "best prototype" in NASA\'s 2025 Human Lander Challenge Conference, I worked on robotics, computer vision and CFD validation', 
    details: 'Here, you can see the CAD of the latching mechanism, as well as a live demo of the autonomous tracking:',
    media: [
      { type: 'image', src: '/coupler_cad.png' },
      { type: 'video', src: '/Coupling_Video.mp4' }
    ]
  },
  { 
    title: 'NASA internship at Glenn Research Center', 
    description: 'During my internship at GRC, I contributed to extending Aviary...', 
    details: 'Here, you can learn more about the work I did:',
    media: [
      { type: 'image', src: '/aviary_concept.webp' },
      { type: 'image', src: '/aviary_ui.png' }
    ]
  },
  {
    title: 'Research in drone-based wildfire detection',
    description: 'I currently work in Dr. Kumar\'s lab at OSU...',
    details: 'Here, you can leanprn about our AI model and preprocessing techniques:',
    media: [
      { type: 'image', src: '/caccpda.png' }
    ]
  },
  {
    title: 'Avionics at the Buckeye Space Launch Initiative',
    description: 'I currently work on the implementation of an airbrakes system...',
    details: 'Here, you can learn about how our mechanism functions:',
    media: [
      { type: 'image', src: '/airbrakes.png' },
      { type: 'video', src: '/airbrakes_demo.mp4' }
    ]
  }
];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);

  const openModal = (index) => {
    setSelectedIndex(index);
    setFadeOut(false);
  };

  const closeModal = () => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedIndex(null);
      setFadeOut(false);
    }, 75);
  };

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section>
      <h2>Projects and Experience</h2>
      <p1>Click each card to learn more</p1>

      {/* Grid layout */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(index)}
          >
            {/* Thumbnail image */}
            {project.media && project.media.length > 0 && (
              <img
                src={project.media[0].src}
                alt={project.title}
                className="card-thumbnail"
              />
            )}
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className={`project-modal ${fadeOut ? 'fade-out' : ''}`} 
          onClick={closeModal}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>×</button>
            
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.details}</p>

            {/* Multiple media support */}
            <div className="modal-media">
              {selectedProject.media.map((item, i) => (
                item.type === 'video' ? (
                  <video
                    key={i}
                    src={item.src}
                    controls
                    autoPlay
                    loop
                    muted
                    className="modal-image"
                  />
                ) : (
                  <img
                    key={i}
                    src={item.src}
                    alt={`Media ${i + 1}`}
                    className="modal-image"
                  />
                )
              ))}
            </div>

            <div className="modal-links">
              <a href="#" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer">💻 GitHub Repo</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}