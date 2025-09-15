import { useRef, useState, useEffect } from 'react';
import './portfolio.css';

const projects = [
  { 
    title: 'Autonomous cryogenic coupler for in orbit fuel transfer', 
    description: 'Awarded "best prototype" in NASA\'s 2025 Human Lander Challenge Conference, I worked on robotics, computer vision and CFD validation', 
    details: 'Here, you can see the CAD of the latching mechanism, as well as a live demo of the autonomous tracking:',
    mediaType: 'video',
    mediaSrc: '/Coupling_Video.mp4'
  },
  { 
    title: 'NASA internship at Glenn Research Center', 
    description: 'During my internship at GRC, I contributed to extending Aviary: NASA’s open-source aircraft and mission design and optimization software, by enhancing its capabilities to support small-scale UAVs.', 
    details: 'Here, you can learn more about the work I did:',
    mediaType: 'image',
    mediaSrc: '/aviary_concept.webp'
  },
  { 
    title: 'Research in drone-based wildfire detection', 
    description: 'I currently work in Dr. Kumar\'s lab at The Ohio State University to implement a U-Net AI model into drone-based wildfire detection, as well as creating novel preprocessing methods to increase dataset size.', 
    details: 'Here, you can learn about our AI model and the preprocessing techniques we used',
    mediaType: 'image',
    mediaSrc: '/caccpda.png'
  },
  { 
    title: 'Buckeye Space Launch Initiative', 
    description: 'I currently work on the implementation of an airbrakes system to be used in controlling rocket apogee for the 30,000 ft. category in the IREC 2022-2025 competitions', 
    details: 'Here, you can learn about how our mechanism functions, and what purpose it serves:',
    mediaType: 'image',
    mediaSrc: '/airbrakes.png'
  },
];

export default function Projects() {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    setFadeOut(false);
  };

  const closeModal = () => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedIndex(null);
      setFadeOut(false);
    }, 75); // match CSS transition duration
  };

  useEffect(() => {
    updateScrollButtons();
    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener('scroll', updateScrollButtons);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', updateScrollButtons);
      }
    };
  }, []);

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section>
      <h2>Projects and Experience</h2>
      <p1>Click each card to learn more</p1>
      <div className="carousel-wrapper">
        {canScrollLeft && (
          <button className="scroll-button left" onClick={() => scroll('left')}>⬅</button>
        )}

        <div className="carousel" ref={carouselRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-card"
              onClick={() => openModal(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button className="scroll-button right" onClick={() => scroll('right')}>⮕</button>
        )}
      </div>

      {selectedProject && (
        <div 
          className={`project-modal ${fadeOut ? 'fade-out' : ''}`} 
          onClick={closeModal}   // click outside to close
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>

            {selectedProject.mediaType === 'video' ? (
              <video
                src={selectedProject.mediaSrc}
                className="modal-image"
                controls
                autoPlay
                loop
                muted
                style={{ maxWidth: '600px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            ) : (
              <img
                src={selectedProject.mediaSrc}
                alt="Project Screenshot"
                className="modal-image"
                style={{ maxWidth: '600px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            )}

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              facilisis velit at justo faucibus, sed fermentum libero gravida.
              Vivamus ut nisi nec massa tincidunt pharetra at nec risus.
            </p>

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