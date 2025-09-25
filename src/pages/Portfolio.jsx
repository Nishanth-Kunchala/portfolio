import { useState } from 'react';
import './portfolio.css';

const projects = [
  { 
    title: 'Autonomous In-Orbit Cryogenic Fuel Coupler', 
    description: 'Awarded "Best Prototype" at NASA’s 2025 Human Lander Challenge, I developed the computer vision and robotic control system for an autonomous orbital refueling coupler, alongside CFD validation of cryogenic flow.', 
    details: `This project addressed the risks astronauts face during in-orbit refueling by creating an autonomous cryogenic coupler concept. Our design supported NASA’s vision of Gateway acting as a refueling depot, reducing reliance on costly Earth returns and enabling sustainable lunar and Martian missions. 
    I developed the computer vision pipeline to detect and track a target port, then linked it to the Stewart platform controller. The control chain involved a python script running the computer vision algorithm, using the pose of the coupler in the camera's frame to calculate the length each actuator needed to be. 
    These lengths are then written to a serial port on our computer, which is then accessed by our arduino, which is running a script in C++ that converts these lengths to pwm outputs, send to each actuator's designated microcontroller. I also worked on CFD validation of cryogenic flow inside the coupler. 
    I set up and ran multiple flow simulations to evaluate leakage, pressure drop, and flow uniformity under microgravity conditions. Results showed leakage reduced to just 0.24% while maintaining stable flow characteristics across the interface, supporting the feasibility of cryogenic propellant transfer in microgravity. 
    These findings demonstrated that our design could meet NASA’s safety and efficiency requirements for autonomous in-orbit refueling. `, 
    media: [
      { 
        type: 'image', 
        src: '/coupler_cad.png', 
        caption: `` 
      },
      { 
        type: 'video', 
        src: '/Coupling_Video.mp4', 
        caption: `CAD rendering of the coupler assembly. The design combined a magnet-based alignment system for coarse docking, a spring-loaded latch for capture, and a servo-driven clamp to secure a sealed connection under cryogenic conditions. This design featured triple redundancy, but a potential issue with it was the risk of the coupler getting stuck in the locked position.
        The judges brought up concerns, since triple redundancy in this case, could also mean that if one system fails to unlock, the spacechip would be stuck to Gateway, which would be undesireable. The solution was to propose stronger linear actuators. This would allow the coupler to rip off, and with some minor redesigns, we could make it such that all the damage would occur on the spaceship's side of the coupler intergace.
        This way repairs could happen via a spacewalk at a later time, after refueling, and the Gateway side of the interface would remain unharmed.` 
      },
      { 
        type: 'image', 
        src: '/Stewart_Platform_CAD.png', 
        caption: `CAD rendering of our prototyped Stewart platform. The six-actuator Stewart platform served as the motion base for the coupler, enabling precise six-degree-of-freedom positioning during docking. I integrated the computer vision pipeline with this platform by developing control software that converted camera detections into actuator commands. 
        The hardware chain included an Arduino Uno for central control, six microcontroller-driven linear actuators for motion, and a custom Spiderboard interface to handle wiring and signal routing. This setup allowed us to demonstrate autonomous alignment and approach maneuvers, a critical step toward hands-free orbital refueling. ` 
      },
      { 
        type: 'video', 
        src: '/hulc_live_demo.mp4', 
        caption: `Live demonstration of the vision-guided tracking system. I trained the CV model to lock onto the target and autonomously guide the Stewart platform. While only the magnetic alignment was integrated at this stage, the demo showed the viability of autonomous docking control — a feature that NASA judges highlighted in awarding us “Best Prototype.”` 
      }
    ]
  },

  { 
    title: 'Aviary Internship – NASA Glenn Research Center', 
    description: 'During my internship at NASA Glenn Research Center, I extended Aviary, NASA’s open-source aircraft conceptual design framework, focusing on mass and geometry subsystems for small-scale UAVs.', 
    details: `Aviary is a multidisciplinary conceptual aircraft design tool built on OpenMDAO. It allows engineers to model and optimize aircraft configurations across aerodynamics, propulsion, structures, and systems, while supporting gradient-based optimization for fast, reliable design exploration. The framework is modular, with clearly defined subsystems for geometry, mass, propulsion, and flight performance, enabling full system-level simulations even at the conceptual stage. The current limitations in Aviary stem from how it calculates certain parameters: using historical empirical data collected by NASA over decades of research. This means that Aviary wouldn't work for unorthodox aircraft design (due to the lack of data), something commonly seen in small-scale UAVs.`,
    media: [
      { 
        type: 'image', 
        src: '/aviary_logo.png', 
        caption: `` 
      }, 
      { 
        type: 'image', 
        src: '/aviary_logo.png', 
        caption: `During my internship, I developed new mass subsystems for wings, tails, and fuselage that calculate rib, spar, and skin mass based on geometry and material properties. This allows for conceptual aircraft design via Aviary to no longer require empirical data, and instead utlize simple geometric paramaters instead. An upside of doing things this way, is that the computation time is significantly reduced. This happens because doing things analytically meant that I could hand-derive the partial derivatives of every variable needed for the gradient descent (over 30+ variables!). Having these partial derivatives meant that Aviary no longer needed to finite difference or complex step over unknown gradient landscapes. I also implemented a flexible geometry generator using OpenVSP, which takes parameters like wing span, root chord, airfoil profile, and fuselage dimensions to produce accurate 3D geometries for downstream analysis. These subsystems were integrated with existing propulsion models, enabling UAV-level mission simulations for climb, cruise, and descent, and allowing for design studies that combine structural, mass, and propulsion considerations. This work improved Aviary’s capability to handle small-scale UAVs with accurate, gradient-compatible mass and geometry modeling, supporting both conceptual design and system-level optimization within a single framework.`, 
      },      
      { 
        type: 'image', 
        src: '/OpenVSP_demo.png', 
        caption: `Above is a CFD mesh, outputted by the OpenVSP-based geometry generator I created. OpenVSP is NASA’s parametric aircraft geometry tool, capable of creating detailed 3D models of wings, fuselage, tails, and control surfaces from simple input parameters. I integrated OpenVSP directly into Aviary as an optional subsystem: users can choose to generate full 3D geometries for downstream analysis, or bypass it for a lightweight workflow using only abstract geometric inputs. This integration allows the generated geometries to feed directly into my mass subsystems for accurate rib, spar, and skin mass calculations, while remaining fully compatible with propulsion models for system-level UAV simulations. By making it modular, the feature enhances flexibility for designers while maintaining gradient-based optimization capability within Aviary.` 
      }
    ]
  },

  {
    title: 'Avionics – Buckeye Space Launch Initiative',
    description: `I contributed to the design and implementation of a deployable airbrakes system for a 12-foot supersonic Student Researched And Designed (SRAD) rocket, built for the International Rocket Engineering Competition (IREC). 
    The mission goal was to precisely hit a 30,000 ft apogee, with penalties for both overshooting and undershooting.`,
    details: `I worked on a 3–5 person airbrakes team within the 25-member avionics subteam, designing a system that would deploy in the subsonic regime. My contributions spanned both mechanical and software design, including CAD modeling, control system programming, and systems integration across avionics, structures, aerodynamics, and propulsion.`,
    media: [
      { 
        type: 'image', 
        src: '/airbrakes.png', 
        caption: `` 
      },
      { 
        type: 'video', 
        src: '/airbrakes_movement.mov', 
        caption: `Above is an animation of our most recent airbrakes design. I contributed to both the CAD modeling and the embedded control system. The blades are actuated via a rack-and-pinion system mounted on linear rails, with torque provided by a servo motor equipped with an encoder for slip detection. I helped refine multiple iterations of this design in SolidWorks and Onshape, transitioning from 3D-printed prototypes to final CNC-machined aluminum hardware.` 
      },
      { 
        type: 'image', 
        src: '/first_airbrakes.jpg', 
        caption: `Our first prototype, 3D-printed in PLA before moving on to CNC'd aluminum, served as a proof-of-concept for blade motion. However, it revealed major issues with blade friction along the sides and poor drag generation, driving us to rethink the design. We had initially thought that lubricating the bottom and side surfaces of each blade would be enough to overcome the friction force. Instead we found that this force, caused by the drag created when the airbrakes were deployed, was much higher than anticipated, forcing us to rethink how we could reduce friction in our next design:` 
      },
      { 
        type: 'image', 
        src: '/second_airbrakes.jpg', 
        caption: `The second iteration introduced dual blades on linear rails, which eliminated the friction from the first design and increased drag. However, it introduced new issues with linkage joint friction and exposed limitations in our stepper motor torque, which we later addressed by upgrading to a servo motor and strategically placing bearings along high friction points along the wall. Our current design (the very first video), solves the aforementioned issues in our prior designs, but as we test further, we expect to find more improvements to be made. We anticipate issues with ensuring constant contact between the rack and pinion, since we currently have no failsafe if slippage occurs there.` 
      },
    ]
  },

  {
    title: 'Research in Drone-Based Wildfire Detection',
    description: 'In Dr. Kumar’s lab at Ohio State, I work on developing a wildfire detection pipeline using drone imagery, U-Net segmentation, and an preprocessing method called CA-CCPDA. My work focuses on preprocessing, training, evaluation, and explainability, with the goal of enabling earlier wildfire detection and prediction.',
    details: `This research seeks to improve early wildfire detection, providing inputs for downstream models of fire spread using CFD. I constructed the full pipeline — from data preprocessing through U-Net segmentation training to evaluation. A key contribution was developing the CA-CCPDA preprocessing and semantic choice method, which improved both interpretability and model accuracy.
    One final thing to note: In this section, whenever I refer to data or images as "unique", what I mean is that these images are new to the dataset. A significant roadblock in our work was the lack of data, since we cannot do random burns in forests whenever we feel like it. "unique" data simply refers to artificially generated images added to our dataset of "real" data.`,
    media: [
      { 
        type: 'image', 
        src: '/mavic3.webp', 
        caption: `` 
      },
      { 
        type: 'image', 
        src: '/mavic3.webp', 
        caption: `Our dataset was collected with a DJI Mavic 3 drone during controlled burns performed by the Columbus Fire Department, providing high-resolution RGB imagery of wildfire conditions. I handled preprocessing, applying techniques such as Gaussian noise injection, smoke dehazing, and random rotations to increase robustness and realism. 
        As part of the preprocessing pipeline, the CA-CCPDA method was developed in order to further improve the small size of the dataset we wore working on.` 
      },
      { 
        type: 'image', 
        src: '/caccpda_flowchart.png', 
        caption: `Architecture of our CA-CCPDA (Context-Aware Centralized Copy Paste Data Augmentation) method. I introduced the semantic choice mechanism, which uses euclidian distance in the Ash-Vegetation percentage plane, to identify the shortest path correlating to the highest class similarity. 
        This provided clearer, more reliable, unique images for wildfire detection.` 
      },
      { 
        type: 'image', 
        src: '/caccpda.png', 
        caption: `Above is a result from the previous, non-semantic version of our CA-CCPDA method (formerly CCPDA), compared with the same result generated by our current CA-CCPDA method. Here you can see the stark difference in production of realistic, meaningful, unique data, and how much of a difference taking semantic context into account actually makes.` 
      },
      { 
        type: 'image', 
        src: '/caccpda_results.png', 
        caption: `Results from wildfire segmentation using U-Net with CA-CCPDA preprocessing. Compared to baseline preprocessing methods, our pipeline achieved higher accuracy and improved region-level detection, with activation maps better aligned to fire features such as fire clusters and ash regions. These improvements support downstream fire-spread modeling efforts in the lab.` 
      }
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

  {
    title: 'Lunar Orbit Simulation at The Ohio State University',
    description: 'Me and my roommate thought it would be fun to enter into Ohio State\'s First Year Engineering design showcase competition. We ended up winning second in our category!',
    details: 'We decided to make an interactive simulator, that allowed users to design missions utilizing the moon\'s gravity to assist the spaceship back to earth, only using one delta v burn.',
    media: [
      { type: 'image', src: '/lunar_orbit_sim.png', caption: '' },
      { type: 'video', src: '/lunar_orbit_sim.mp4', caption: 'Above, is an example usecase of our simulator. If I did this project again, I\'d want to use a faster method than explicit euler step. In hindsight, Newton Rhapson or explicit Runge Kutta would\'ve probably been better, but we didn\'t learn about that for another year or so.' },
      { type: 'image', src: '/lunar_orbit_sim_eq.png', caption: 'Here are the equations we used to model the orbits of the moon and spacecraft, relative to earth. As you can see, they are pretty simplified, and only in 2D, but they were able to give freshman me some insight into how orbital maneuvers actually function.' },
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