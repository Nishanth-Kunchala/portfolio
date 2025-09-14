import { useRef, useState, useEffect } from 'react';
import './portfolio.css';

const projects = [
  { title: 'Autonomous cryogenic coupler for in orbit fuel transfer', 
  description: 'Awarded "best prototype" in NASA\'s 2025 Human Lander Challenge Conference, I worked on robotics, computer vision and CFD validation', 
  details: '' },

  { title: 'NASA internship at Glenn Research Center', 
  description: 'Aircraft design and optimization via NASA\'s Aviary', 
  details: 'Here is more info about Project 2.' },

  { title: 'Research in drone-based wildfire detection', 
  description: 'I currently work in Dr. Kumar\'s lab at The Ohio State University to implement a U-Net AI model into drone-based wildfire detection', 
  details: 'Here is more info about Project 3.' },

  { title: 'Buckeye Space Launch Initiative', 
  description: 'I currently work on the implementation of an airbrakes system to be used in controlling rocket apogee for the 30,000 ft. category in the IREC 2022-2025 competitions', 
  details: 'Here is more info about Project 4.' },
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

      {selectedIndex == 0 && (
        <div className={`project-modal ${fadeOut ? 'fade-out' : ''}`}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h1>{projects[selectedIndex].title}</h1>
            <p>{projects[selectedIndex].details}</p>

            <img
              src="/headshot.jpg"
              alt="Project Screenshot"
              className="modal-image"
            />

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

      {selectedIndex == 1 && (
        <div className={`project-modal ${fadeOut ? 'fade-out' : ''}`}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{projects[selectedIndex].title}</h2>
            <p>{projects[selectedIndex].details}</p>

            <img
              src="/headshot.jpg"
              alt="Project Screenshot"
              className="modal-image"
            />

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

      {selectedIndex == 2 && (
        <div className={`project-modal ${fadeOut ? 'fade-out' : ''}`}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{projects[selectedIndex].title}</h2>
            <p>{projects[selectedIndex].details}</p>

            <img
              src="/headshot.jpg"
              alt="Project Screenshot"
              className="modal-image"
            />

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

      {selectedIndex == 3 && (
        <div className={`project-modal ${fadeOut ? 'fade-out' : ''}`}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{projects[selectedIndex].title}</h2>
            <p>{projects[selectedIndex].details}</p>

            <img
              src="/headshot.jpg"
              alt="Project Screenshot"
              className="modal-image"
            />

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