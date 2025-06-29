import { useRef, useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  { title: 'Project 1', description: 'A full-stack app with React and Node', details: 'Here is more info about Project 1.' },
  { title: 'Project 2', description: 'An ML pipeline for classification', details: 'Here is more info about Project 2.' },
  { title: 'Project 3', description: 'A portfolio website', details: 'Here is more info about Project 3.' },
  { title: 'Project 4', description: 'A mobile app for task tracking', details: 'Here is more info about Project 4.' },
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
      <h2>Projects</h2>
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

      {selectedIndex !== null && (
        <div className={`project-modal ${fadeOut ? 'fade-out' : ''}`}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{projects[selectedIndex].title}</h2>
            <p>{projects[selectedIndex].details}</p>

            <img
              src="https://via.placeholder.com/600x300"
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