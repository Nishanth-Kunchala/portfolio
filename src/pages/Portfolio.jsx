import { useState } from 'react';
import './portfolio.css';

const projects = [
  { 
    title: 'Autonomous in Orbit Cryogenic Fuel Coupler', 
    description: 'Awarded "best prototype" in NASA\'s 2025 Human Lander Challenge Conference, I worked on robotics, computer vision and CFD validation', 
    details: 'Here, you can see the CAD of the latching mechanism, as well as a live demo of the autonomous tracking:',
    media: [
      { type: 'image', src: '/coupler_cad.png', caption: 'CAD model of the coupler' },
      { type: 'video', src: '/Coupling_Video.mp4', caption: 'CAD model of the coupler' },
      { type: 'video', src: '/hulc_live_demo.mp4', caption: 'CAD model of the coupler' }
    ]
  },
  { 
    title: 'NASA Internship at Glenn Research Center', 
    description: 'During my internship at GRC, I contributed to extending Aviary...', 
    details: 'Here, you can learn more about the work I did:',
    media: [
      { type: 'image', src: '/aviary_concept.webp', caption: 'CAD model of the coupler' },
      { type: 'image', src: '/aviary_concept.webp', caption: 'CAD model of the coupler' },
    ]
  },
  {
    title: 'Avionics at the Buckeye Space Launch Initiative',
    description: 'I currently work on the implementation of an airbrakes system for implementation in a 12 foot supersonic SRAD rocket.',
    details: 'Our current airbrakes design features a rack and pinion system, moving 2 sets of blades upon linear rails, and a servo motor powering the whole mechanism.',
    media: [
      { type: 'image', src: '/airbrakes.png', caption: '' },
      { type: 'video', src: '/airbrakes_movement.mov', caption: 'Above, you can see the CAD for our most recent airbrakes design.' },
      { type: 'image', src: '/first_airbrakes.jpg', caption: 'Above is the first prototype of the airbrakes that we made. It had really bad issues with friction along the sides and bottom face of the blade, and didn\'t produce a lot of drag.' },
      { type: 'image', src: '/second_airbrakes.jpg', caption: 'Above is the second iteration of our airbrakes. We made the decision to move to 2 blades, and linear rails, which got rid of the issues with the blade friction, as well as gave us more drag, but now we had issues with friction between the joints in the linkages.' },
    ]
  },
  {
    title: 'Research in Drone-Based Wildfire Detection',
    description: 'I currently work in Dr. Kumar\'s lab at OSU...',
    details: 'Here, you can leanprn about our AI model and preprocessing techniques:',
    media: [
      { type: 'image', src: '/caccpda.png', caption: 'CAD model of the coupler' },
      { type: 'image', src: '/caccpda.png', caption: 'CAD model of the coupler' },
      { type: 'image', src: '/caccpda_results.png', caption: 'CAD model of the coupler' },
    ]
  },
  {
    title: 'Airfoil Design Project at The Ohio State University',
    description: 'For one of my classes, we were tasked with creating an airfoil shape, optimized for maximum stall angle.',
    details: 'I started with a NACA 0012 airfoil, and then started adjusting its camber line, and then the t/c ratio. I used XFLR5 for the design and simulation, followed by testing in a small-scale subsonic wind tunnel.',
    media: [
      { type: 'image', src: '/airfoil_thumbnail.jpg', caption: '' },
      { type: 'image', src: '/airfoil_cad.jpg', caption: 'Above, you can see the CAD for my final airfoil design' },
      { type: 'image', src: '/airfoil_print.jpg', caption: 'Above, you can see the scaled down, 3D printed model of the designed airfoil. This was my first time using a 3D printer, and honestly, I had to reprint at least 3 times, because I kept messing up the sizing of the airfoil, and it wasnt fitting in my test setup.' },
      { type: 'image', src: '/airfoil_test_setup.jpg', caption: 'Above, you can see the setup used for testing the stall angle of the airfoil. Using tufts attached across various points on the airfoils surface, I slowly adjusted the angle of attack until i visibly saw the flow transition from laminar to turbulent, indicating flow detachment.' },
    ]
  },
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
            
            <h1>{selectedProject.title}</h1>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.details}</p>

            {/* Multiple media support */}
            <div className="modal-media">
              {selectedProject.media.slice(1).map((item, i) => (
                <div key={i} className="media-block">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      autoPlay
                      loop
                      muted
                      className={`modal-image ${item.src.includes('hulc_live_demo') ? 'small-video' : ''}`}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`Media ${i + 1}`}
                      className="modal-image"
                    />
                  )}
                  {item.caption && <p className="media-caption">{item.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}