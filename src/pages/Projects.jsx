import { useRef } from 'react';

const projects = [
  { title: 'Project 1', description: 'Description 1' },
  { title: 'Project 2', description: 'Description 2' },
  { title: 'Project 3', description: 'Description 3' },
  { title: 'Project 4', description: 'Description 4' },
];

export default function Projects() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section>
      <h2>Projects</h2>
      <div className="carousel-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>⬅</button>
        <div className="carousel" ref={carouselRef}>
          {projects.map((project, index) => (
            <div key={index} className="carousel-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll('right')}>⮕</button>
      </div>
    </section>
  );
}