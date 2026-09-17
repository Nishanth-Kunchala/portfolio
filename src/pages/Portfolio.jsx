import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import './portfolio.css';
import couplerCAD from '../assets/coupler_cad.png';
import stewartPlatform from '../assets/Stewart_Platform_CAD.png';
import hulcDemo from '../assets/hulc_live_demo.mp4';
import couplingVideo from '../assets/Coupling_Video.mp4';
import hulcNozzleSection from '../assets/hulc_nozzle_section.png';
import hulcThermalSolidFluid from '../assets/hulc_thermal_solid_fluid.png';
import hulcThermalFluidOnly from '../assets/hulc_thermal_fluid_only.png';
import hulcBoiloffOxygen from '../assets/hulc_boiloff_oxygen.png';
import hulcMliChart from '../assets/hulc_mli_chart.png';
import hulcCfdVelocity from '../assets/hulc_cfd_velocity.png';

import aviaryLogo from '../assets/aviary_logo.png';
import openvspDemo from '../assets/OpenVSP_demo.png';

import airbrakesImg1 from '../assets/airbrakes.png';
import airbrakesMovement from '../assets/airbrakes_movement.mov';
import airbrakesImg2 from '../assets/first_airbrakes.jpg';
import airbrakesImg3 from '../assets/second_airbrakes.jpg';

import mavic3Img from '../assets/mavic3.webp';
import caccpdaFlowchart from '../assets/caccpda_flowchart.png';
import caccpdaImg from '../assets/caccpda.png';
import caccpdaResults from '../assets/caccpda_results.png';

import airfoilThumbnail from '../assets/airfoil_thumbnail.jpg';
import airfoilCad from '../assets/airfoil_cad.jpg';
import airfoilPrint from '../assets/airfoil_print.jpg';
import airfoilTestSetup from '../assets/airfoil_test_setup.jpg';

import lunarOrbitSim from '../assets/lunar_orbit_sim.png';
import lunarOrbitVideo from '../assets/lunar_orbit_sim.mp4';
import lunarOrbitEq from '../assets/lunar_orbit_sim_eq.png';

import capstone_experimental_thumbnail from '../assets/capstone_experimental_thumbnail.png';
import capstone_experimental_manifold_positioning from '../assets/capstone_experimental_manifold_positioning.png';
import capstone_experimental_internal from '../assets/capstone_experimental_internal.png';
import capstone_experimental_single_manifold from '../assets/capstone_experimental_single_manifold.png';
import capstone_experimental_test_rig_cad from '../assets/capstone_experimental_test_rig_cad.png';
import capstone_experimental_test_rig from '../assets/capstone_experimental_test_rig.png';

export const projects = [
  {
    title: 'Senior Experimental Capstone: Cold Gas CO2 Micropropulsion for a 1U CubeSat',
    description: 'Designed a novel Cycling PWPF-modulated LQR control allocation scheme for an over-actuated, shared-tank 1U CubeSat, enabling precise maneuvering while preventing simultaneous actuation on shared fuel lines.',
    details: `The CubeSat's propulsion hardware is a 12-thruster CO2 cold-gas system built by our team (with industry support from Sierra Lobo) — four thrusters per axis grouped into shared manifolds, each fed through Clippard 2-way valves and a PolyJet resin 3D-printed manifold optimized with a 0.4mm converging nozzle. Because thrusters on a shared manifold can't fire simultaneously without disturbing each other's flow, I designed a cycling Pulse-Width Pulse-Frequency (PWPF) modulation scheme layered on top of an LQR controller to allocate commands across the 12 actuators while enforcing that constraint.
    I evaluated the control methodology and actuator dynamics using high-fidelity physics-based simulations in NVIDIA Isaac Sim, validating controller stability and tracking accuracy against a baseline model. The approach achieved a 70% reduction in propellant consumption and bounded steady-state pointing error to within ±0.015°, with findings accepted for publication and presentation at the 2026 AIAA Region III Student Conference.
    I also coauthored a companion paper on the propulsion hardware itself, which was single-thruster tested to ~25 mN of thrust and 25.5s of specific impulse, benchmarked against the industry-standard VACCO micro-propulsion system.`,
    media: [
      { type: 'image', src: capstone_experimental_thumbnail, caption: `` },
      { type: 'image', src: capstone_experimental_manifold_positioning, caption: `The propulsion module was required to fit entirely within two of the CubeSat's six faces, each a 100 by 100 by 10 millimeter envelope reserved for propulsion so that the remaining four faces could be dedicated to Sierra Lobo's robotic appendage and its avionics. Within this footprint, four manifolds were installed, two per panel, with each manifold feeding three thrusters for a total of twelve thrust vectors, shown highlighted in yellow above. This is more than double the five thrust vectors present on the VACCO cold gas module used as the industry benchmark, and this additional actuation was the central design decision behind the system. Twelve thrust vectors provided enough redundant, non-orthogonal thrust directions to independently command all six degrees of freedom, three translational and three rotational, rather than relying on the satellite drifting or tumbling between corrections. The tradeoff for this authority was routing complexity, since twelve separate valve and nozzle assemblies had to be plumbed and wired into a 10 millimeter thick slab without interfering with the CubeSat's internal electronics.` },
      { type: 'image', src: capstone_experimental_internal, caption: `Routing twelve independent CO2 lines back to a single tank would have required twelve regulators worth of tubing, fittings, and potential leak points within an already constrained 1U frame. To avoid this, thrusters were grouped into manifolds. Each manifold accepts a single CO2 inlet and internally branches the flow to three Clippard SV-2C-12-3-V solenoid valves, one per thruster, so that a single feed line supports three thrusters. The image above shows how two of these manifolds mirror one another to form a complete side panel of the CubeSat. This sharing arrangement is efficient from a plumbing standpoint, but it is also the source of the primary control challenge in this project. Three thrusters drawing from the same internal plenum cannot fire simultaneously without one valve opening and transiently starving or spiking the pressure available to the other two, distorting their thrust output. This no simultaneous actuation constraint within a shared manifold directly motivated the cycling PWPF scheme layered on top of the LQR controller, which allocates firing commands across all twelve thrusters while explicitly serializing any commands assigned to the same manifold.` },
      { type: 'image', src: capstone_experimental_single_manifold, caption: `Each manifold was produced as a single Stratasys PolyJet resin print rather than a machined or bolted assembly, and this was a deliberate manufacturing decision rather than a matter of convenience. Internally, the gas path is not a straight bore. It consists of three curved channels that sweep from each valve seat down to a single common CO2 inlet, fully enclosed within one solid body, as shown in the cross section above. Producing this geometry through conventional machining would require drilling straight intersecting bores and plugging the resulting extra holes, or stacking gasketed plates bolted together, both of which introduce additional leak paths and neither of which fits within a 10 millimeter envelope. PolyJet printing builds the part by jetting a UV cured photopolymer resin layer by layer, using a soluble support material that fills the internal channels during printing and is later washed out, allowing fully enclosed curved internal plumbing to be produced in a single print. Threads for the nozzle, the valve retaining screws, and the CO2 inlet, all labeled above, were then tapped directly into the resin. The primary limitation of this approach, noted explicitly as future work, is that the resin used is not flight qualified. It was appropriate for a semester of rapid iteration and ground testing, but a flight unit would require a machined or metal printed manifold instead. Nozzle sizing was determined empirically. Nozzles ranging from 0.2 to 1.0 millimeters in bore diameter were tested, with diameters below 0.5 millimeters unable to be reliably printed due to the resolution limits of the process. A 0.4 millimeter bore produced the best result at 25.4 mN of thrust, small enough to avoid the pressure losses observed in the larger, under expanded nozzles, while remaining large enough to print consistently. Leaks discovered at the nozzle and tubing interfaces during testing were resolved by wrapping PTFE tape around each threaded insert into the manifold body.` },
      { type: 'image', src: capstone_experimental_test_rig_cad, caption: `Once the flight-like hardware was complete, a supporting rig was needed to carry it onto the University of Cincinnati's frictionless granite air table without introducing drift or torque of its own. The design divides the assembly into three levels for this reason. The bottom level carries the battery along with the air bearing reservoir and holders that interface with UC's air bearing sled, since these components needed to sit as low and centered as possible to keep the assembly's center of mass from shifting off the bearing's support point. The middle level holds the CubeSat itself, raised on a stand so that its manifolds have unobstructed exhaust paths on every face. The top level isolates the 16 gram CO2 canister, pressure regulator, valve driver circuit, and the Arduino and Wi-Fi card, keeping the pressurized gas supply and its plumbing physically separated from, and above, the satellite it supplies. This layout also kept wiring and gas line runs short and vertical between adjacent levels rather than routed around the CubeSat.` },
      { type: 'image', src: capstone_experimental_test_rig, caption: `The completed rig weighed 2.7 kilograms and was built from plywood decks on standoffs, with 3D printed brackets holding the manifolds and regulator in place, and it was bonded to UC's air bearing sled with adhesive rather than a bolted joint to avoid concentrating stress on the sled. Looking beyond this test campaign, the next iteration of this rig and of the propulsion module itself would focus heavily on compressing the design. The current electronics, an Arduino, a separate valve driver board, and a regulator wired together on a test bench, would be consolidated onto a custom PCB handling both signal routing and power distribution, removing much of the wiring and volume visible in the photo above. Similarly, rather than routing four separate CO2 feed lines out from a single regulator to each manifold, a custom distribution manifold could be designed to split the canister's output internally into all four propulsion manifolds, reducing both tubing length and the number of external fittings that could leak.
      The propulsion manifolds themselves would also need to move away from resin for any real flight consideration. A strong candidate is laser powder bed fusion in titanium, which would resolve the temperature limitations of the resin used in this project while preserving the same fully enclosed, curved channel geometry that made the resin print worthwhile in the first place. For a CO2 based system like this one, titanium poses no material compatibility concerns. At larger scale, or with more volatile propellants, this would need to be reconsidered, since hydrogen based propellants are known to embrittle titanium over time. A future manifold intended for a hydrogen based system would likely require a different alloy or a protective barrier, though titanium remains a suitable choice for the CO2 system described here.` },
    ]
  },

  {
    title: 'Autonomous In-Orbit Cryogenic Fuel Coupler (AMCC-AAC)',
    description: 'Awarded "Best Prototype" at NASA’s 2025 Human Lander Challenge, I led the thermal and fluid analysis of an autonomous cryogenic propellant coupler, modeling boil-off, insulation, and LOX/LCH4 flow through the interface, and developed the computer vision and robotic control system used to dock it.',
    details: `Our team of ten designed AMCC-AAC (Autonomous Magnetized Cryo-Couplers with Active Alignment Control), a reusable coupler intended to let a SpaceX Starship-class lander autonomously dock with and transfer cryogenic propellant to NASA's Gateway. This addresses a capability NASA has identified as a critical gap on the path to sustained lunar operations, since no spacecraft has ever executed a closed-loop cryogenic propellant transfer in microgravity. Our full technical paper was submitted to NASA as part of the competition.
    My primary contribution was the cryogenic side of the design: sizing the coupler's internal flow path, running the thermal simulations that drove our insulation and material choices, and validating that cryogenic propellant could actually move through the geometry we designed without excessive pressure loss or boil-off.
    Working from the mission's propulsion requirements (up to 25 kg/s of flow sustained for 12 hours to move the 865 kg descent and 525 kg ascent propellant loads), I sized the coupler's internal bore to 5 inches to keep static pressure and lead times low, which in turn limits leak risk at the sealing interface. I then built a CFD model in Ansys Fluent of cryogenic methane flowing through that geometry (entering at 100 m/s, 91 K), using a poly-hex core mesh with inflation layers at the wall and sealing zones, and the SST k-omega turbulence model paired with a pressure-based solver given the very low Reynolds numbers typical of cryogens. The resulting velocity field stayed smooth through the full passage with minimal recirculation, confirming the internal geometry supports steady flow with negligible pressure loss.
    In parallel, I built a thermal model of the coupler pipe in ANSYS Thermal Desktop to predict boil-off under lunar orbital conditions, using a Ti-6Al-2Sn-2Zr-2Mo titanium pipe wall, liquid/gaseous oxygen in the fluid domain via the Lee vaporization model, and a uniform 1368 W/m² solar heat flux on the outer wall to represent direct lunar sun exposure. The results showed the expected radial temperature gradient from the ~90 K propellant core out through the wall, and let us map where oxygen vapor fraction, and therefore boil-off, concentrates along the coupler length. That map directly shaped where we added insulation.
    That thermal risk is why multi-layer insulation (MLI) was central to the design. I used measured heat-transfer data for 37-layer MLI to size the insulation stack, since heat leak scales with the hot-side temperature to roughly the 4.67 power, meaning even small exposed gaps dominate boil-off losses. The flight design layers aluminized Kapton (for its -269°C to 400°C range and vacuum durability) over alternating Mylar/Dacron/Nomex, the same layup NASA uses to hit effective emissivities near 0.005 in vacuum.
    Material selection was driven by the same cryogenic constraints. The team chose Ti-6Al-4V for the flight housing over aluminum for its low coefficient of thermal expansion, which minimizes thermal-cycling stress and mismatch at the sealing surfaces as the coupler runs from ambient down to LOX/LCH4 temperatures. We manufactured it via Laser Powder Bed Fusion followed by CNC finishing of the sealing surfaces to Ra < 0.8 µm, the surface finish needed for the o-ring interface to stay leak-tight over repeated cryogenic cycles. I also sized the magnetic capture ring (N52 neodymium magnets), which needed to work reliably at cryogenic temperature. NdFeB retains over 90% of its room-temperature magnetization at 90 K, with remanence actually increasing slightly as temperature drops, which gave us margin at LOX/LCH4 conditions.
    On the robotics side, I developed the computer vision pipeline used to guide the coupler into alignment: a python script tracking the target port's pose in the camera frame, converting that pose into the six actuator lengths needed by our Stewart platform, and writing those lengths to an Arduino over serial, which then converted them to PWM outputs for each actuator's microcontroller. This vision-guided approach paired with the coupler's passive magnetic alignment to relax precision requirements during final capture, and it was one of the features NASA judges highlighted when they awarded us "Best Prototype."`,
    media: [
      { type: 'image', src: couplerCAD, caption: `` },
      { type: 'image', src: hulcNozzleSection, caption: `Section view of the coupler's internal flow path. The 5-inch inner diameter was sized around the mission's propellant transfer requirement of up to 25 kg/s sustained for 12 hours. A large bore keeps static pressure low, which reduces lead times and the risk of leaks at the sealing interface. This is the geometry I later modeled in CFD and thermal analysis.` },
      { type: 'image', src: hulcCfdVelocity, caption: `Velocity contour from my Ansys Fluent CFD model of cryogenic methane (100 m/s, 91 K) flowing through the coupler under simulated microgravity. I used a poly-hex core mesh with inflation layers at the wall and sealing zones, and the SST k-omega turbulence model given the very low Reynolds numbers typical of cryogenic flow. The smooth, stable color gradient across the passage, with minimal recirculation or turbulent mixing, confirmed the internal geometry supports steady cryogenic flow with negligible pressure loss.` },
      { type: 'image', src: hulcThermalSolidFluid, caption: `Static temperature distribution from my ANSYS Thermal Desktop model of the coupler pipe, showing both the titanium wall (Ti-6Al-2Sn-2Zr-2Mo) and the ~90 K liquid/gaseous oxygen core. A uniform 1368 W/m² solar heat flux was applied to the outer wall to represent direct lunar sun exposure, and the plot captures the resulting radial heat diffusion from the warm exterior down to the cryogenic fluid.` },
      { type: 'image', src: hulcThermalFluidOnly, caption: `The same thermal simulation isolated to just the fluid domain, making the axial temperature gradient along the propellant path easier to read. This result, together with the boil-off map below, directly informed how much insulation the design needed and where.` },
      { type: 'image', src: hulcBoiloffOxygen, caption: `Oxygen gas-phase volume fraction along the coupler, modeled with the Lee vaporization model to predict where boil-off concentrates under the applied solar heat flux. Streaks of higher vapor fraction mark the regions most exposed to external heating, exactly the areas the multi-layer insulation (MLI) design needed to prioritize.` },
      { type: 'image', src: hulcMliChart, caption: `Measured heat transfer through 37-layer MLI versus hot-side temperature, which I used to size the insulation stack. Heat leak scales with hot-side temperature to roughly the 4.67 power, so even small uninsulated gaps dominate boil-off losses. That is why the flight design layers aluminized Kapton over alternating Mylar, Dacron mesh, and Nomex felt spacers, the standard NASA MLI layup used to reach effective emissivities near 0.005 in vacuum.` },
      { type: 'video', src: couplingVideo, caption: `CAD rendering of the coupler assembly. The design combined a magnet-based alignment system for coarse docking, a spring-loaded latch for capture, and a servo-driven clamp to secure a sealed connection under cryogenic conditions. This design featured triple redundancy, but a potential issue with it was the risk of the coupler getting stuck in the locked position.
      The judges brought up concerns, since triple redundancy in this case, could also mean that if one system fails to unlock, the spacechip would be stuck to Gateway, which would be undesireable. The solution was to propose stronger linear actuators. This would allow the coupler to rip off, and with some minor redesigns, we could make it such that all the damage would occur on the spaceship's side of the coupler intergace.
      This way repairs could happen via a spacewalk at a later time, after refueling, and the Gateway side of the interface would remain unharmed.` },
      { type: 'image', src: stewartPlatform, caption: `CAD rendering of our prototyped Stewart platform. The six-actuator Stewart platform served as the motion base for the coupler, enabling precise six-degree-of-freedom positioning during docking. I integrated the computer vision pipeline with this platform by developing control software that converted camera detections into actuator commands.
      The hardware chain included an Arduino Uno for central control, six microcontroller-driven linear actuators for motion, and a custom Spiderboard interface to handle wiring and signal routing. This setup allowed us to demonstrate autonomous alignment and approach maneuvers, a critical step toward hands-free orbital refueling.` },
      { type: 'video', src: hulcDemo, caption: `Live demonstration of the vision-guided tracking system. I trained the CV model to lock onto the target and autonomously guide the Stewart platform. While only the magnetic alignment was integrated at this stage, the demo showed the viability of autonomous docking control, a feature that NASA judges highlighted in awarding us “Best Prototype.”` }
    ]
  },

  {
    title: 'Aviary Internship – NASA Glenn Research Center',
    description: 'During my internship at NASA Glenn Research Center, I extended Aviary, NASA’s open-source aircraft conceptual design framework, focusing on mass and geometry subsystems for small-scale UAVs.',
    details: `Aviary is a multidisciplinary conceptual aircraft design tool built on OpenMDAO. It allows engineers to model and optimize aircraft configurations across aerodynamics, propulsion, structures, and systems, while supporting gradient-based optimization for fast, reliable design exploration. The framework is modular, with clearly defined subsystems for geometry, mass, propulsion, and flight performance, enabling full system-level simulations even at the conceptual stage. The current limitations in Aviary stem from how it calculates certain parameters: using historical empirical data collected by NASA over decades of research. This means that Aviary wouldn't work for unorthodox aircraft design (due to the lack of data), something commonly seen in small-scale UAVs.`,
    media: [
      { type: 'image', src: aviaryLogo, caption: `` },
      { type: 'image', src: aviaryLogo, caption: `During my internship, I developed new mass subsystems for wings, tails, and fuselage that calculate rib, spar, and skin mass based on geometry and material properties. This allows for conceptual aircraft design via Aviary to no longer require empirical data, and instead utlize simple geometric paramaters instead. An upside of doing things this way, is that the computation time is significantly reduced. This happens because doing things analytically meant that I could hand-derive the partial derivatives of every variable needed for the gradient descent (over 30+ variables!). Having these partial derivatives meant that Aviary no longer needed to finite difference or complex step over unknown gradient landscapes. I also implemented a flexible geometry generator using OpenVSP, which takes parameters like wing span, root chord, airfoil profile, and fuselage dimensions to produce accurate 3D geometries for downstream analysis. These subsystems were integrated with existing propulsion models, enabling UAV-level mission simulations for climb, cruise, and descent, and allowing for design studies that combine structural, mass, and propulsion considerations. This work improved Aviary’s capability to handle small-scale UAVs with accurate, gradient-compatible mass and geometry modeling, supporting both conceptual design and system-level optimization within a single framework.` },
      { type: 'image', src: openvspDemo, caption: `Above is a CFD mesh, outputted by the OpenVSP-based geometry generator I created. OpenVSP is NASA’s parametric aircraft geometry tool, capable of creating detailed 3D models of wings, fuselage, tails, and control surfaces from simple input parameters. I integrated OpenVSP directly into Aviary as an optional subsystem: users can choose to generate full 3D geometries for downstream analysis, or bypass it for a lightweight workflow using only abstract geometric inputs. This integration allows the generated geometries to feed directly into my mass subsystems for accurate rib, spar, and skin mass calculations, while remaining fully compatible with propulsion models for system-level UAV simulations. By making it modular, the feature enhances flexibility for designers while maintaining gradient-based optimization capability within Aviary.` }
    ]
  },

  {
    title: 'Avionics – Buckeye Space Launch Initiative',
    description: `I contributed to the design and implementation of a deployable airbrakes system for a 12-foot supersonic Student Researched And Designed (SRAD) rocket, built for the International Rocket Engineering Competition (IREC). 
    The mission goal was to precisely hit a 30,000 ft apogee, with penalties for both overshooting and undershooting.`,
    details: `I worked on a 3–5 person airbrakes team within the 25-member avionics subteam, designing a system that would deploy in the subsonic regime. My contributions spanned both mechanical and software design, including CAD modeling, control system programming, and systems integration across avionics, structures, aerodynamics, and propulsion.`,
    media: [
      { type: 'image', src: airbrakesImg1, caption: `` },
      { type: 'video', src: airbrakesMovement, caption: `Above is an animation of our most recent airbrakes design. I contributed to both the CAD modeling and the embedded control system. The blades are actuated via a rack-and-pinion system mounted on linear rails, with torque provided by a servo motor equipped with an encoder for slip detection. I helped refine multiple iterations of this design in SolidWorks and Onshape, transitioning from 3D-printed prototypes to final CNC-machined aluminum hardware.` },
      { type: 'image', src: airbrakesImg2, caption: `Our first prototype, 3D-printed in PLA before moving on to CNC'd aluminum, served as a proof-of-concept for blade motion. However, it revealed major issues with blade friction along the sides and poor drag generation, driving us to rethink the design. We had initially thought that lubricating the bottom and side surfaces of each blade would be enough to overcome the friction force. Instead we found that this force, caused by the drag created when the airbrakes were deployed, was much higher than anticipated, forcing us to rethink how we could reduce friction in our next design:` },
      { type: 'image', src: airbrakesImg3, caption: `The second iteration introduced dual blades on linear rails, which eliminated the friction from the first design and increased drag. However, it introduced new issues with linkage joint friction and exposed limitations in our stepper motor torque, which we later addressed by upgrading to a servo motor and strategically placing bearings along high friction points along the wall. Our current design (the very first video), solves the aforementioned issues in our prior designs, but as we test further, we expect to find more improvements to be made. We anticipate issues with ensuring constant contact between the rack and pinion, since we currently have no failsafe if slippage occurs there.` }
    ]
  },

  {
    title: 'Research in Drone-Based Wildfire Detection',
    description: 'In Dr. Kumar’s lab at Ohio State, I work on developing a wildfire detection pipeline using drone imagery, U-Net segmentation, and an preprocessing method called CA-CCPDA. My work focuses on preprocessing, training, evaluation, and explainability, with the goal of enabling earlier wildfire detection and prediction.',
    details: `This research seeks to improve early wildfire detection, providing inputs for downstream models of fire spread using CFD. I constructed the full pipeline — from data preprocessing through U-Net segmentation training to evaluation. A key contribution was developing the CA-CCPDA preprocessing and semantic choice method, which improved both interpretability and model accuracy.
    One final thing to note: In this section, whenever I refer to data or images as "unique", what I mean is that these images are new to the dataset. A significant roadblock in our work was the lack of data, since we cannot do random burns in forests whenever we feel like it. "unique" data simply refers to artificially generated images added to our dataset of "real" data.`,
    media: [
      { type: 'image', src: mavic3Img, caption: `` },
      { type: 'image', src: mavic3Img, caption: `Our dataset was collected with a DJI Mavic 3 drone during controlled burns performed by the Columbus Fire Department, providing high-resolution RGB imagery of wildfire conditions. I handled preprocessing, applying techniques such as Gaussian noise injection, smoke dehazing, and random rotations to increase robustness and realism. 
      As part of the preprocessing pipeline, the CA-CCPDA method was developed in order to further improve the small size of the dataset we wore working on.` },
      { type: 'image', src: caccpdaFlowchart, caption: `Architecture of our CA-CCPDA (Context-Aware Centralized Copy Paste Data Augmentation) method. I introduced the semantic choice mechanism, which uses euclidian distance in the Ash-Vegetation percentage plane, to identify the shortest path correlating to the highest class similarity. 
      This provided clearer, more reliable, unique images for wildfire detection.` },
      { type: 'image', src: caccpdaImg, caption: `Above is a result from the previous, non-semantic version of our CA-CCPDA method (formerly CCPDA), compared with the same result generated by our current CA-CCPDA method. Here you can see the stark difference in production of realistic, meaningful, unique data, and how much of a difference taking semantic context into account actually makes.` },
      { type: 'image', src: caccpdaResults, caption: `Results from wildfire segmentation using U-Net with CA-CCPDA preprocessing. Compared to baseline preprocessing methods, our pipeline achieved higher accuracy and improved region-level detection, with activation maps better aligned to fire features such as fire clusters and ash regions. These improvements support downstream fire-spread modeling efforts in the lab.` }
    ]
  },
    
  {
    title: 'Airfoil Design Project at The Ohio State University',
    description: 'For one of my classes, we were tasked with creating an airfoil shape, optimized for maximum stall angle.',
    details: 'I started with a NACA 0012 airfoil, and then started adjusting its camber line, and then the t/c ratio. I used XFLR5 for the design and simulation, followed by testing in a small-scale subsonic wind tunnel.',
    media: [
      { type: 'image', src: airfoilThumbnail, caption: '' },
      { type: 'image', src: airfoilCad, caption: 'Above, you can see the CAD for my final airfoil design' },
      { type: 'image', src: airfoilPrint, caption: 'Above, you can see the scaled down, 3D printed model of the designed airfoil. This was my first time using a 3D printer, and honestly, I had to reprint at least 3 times, because I kept messing up the sizing of the airfoil, and it wasnt fitting in my test setup.' },
      { type: 'image', src: airfoilTestSetup, caption: 'Above, you can see the setup used for testing the stall angle of the airfoil. Using tufts attached across various points on the airfoils surface, I slowly adjusted the angle of attack until i visibly saw the flow transition from laminar to turbulent, indicating flow detachment.' }
    ]
  },

  {
    title: 'Lunar Orbit Simulation at The Ohio State University',
    description: 'Me and my roommate thought it would be fun to enter into Ohio State\'s First Year Engineering design showcase competition. We ended up winning second in our category!',
    details: 'We decided to make an interactive simulator, that allowed users to design missions utilizing the moon\'s gravity to assist the spaceship back to earth, only using one delta v burn.',
    media: [
      { type: 'image', src: lunarOrbitSim, caption: '' },
      { type: 'video', src: lunarOrbitVideo, caption: 'Above, is an example usecase of our simulator. If I did this project again, I\'d want to use a faster method than explicit euler step. In hindsight, Newton Rhapson or explicit Runge Kutta would\'ve probably been better, but we didn\'t learn about that for another year or so.' },
      { type: 'image', src: lunarOrbitEq, caption: 'Here are the equations we used to model the orbits of the moon and spacecraft, relative to earth. As you can see, they are pretty simplified, and only in 2D, but they were able to give freshman me some insight into how orbital maneuvers actually function.' }
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

  // Triple the project list so the track can loop infinitely in either direction.
  const loopedProjects = [...projects, ...projects, ...projects];

  const trackRef = useRef(null);
  const setWidthRef = useRef(0);
  const pausedUntilRef = useRef(0); // timestamp (ms) until which idle auto-scroll is suppressed
  const lastFrameTimeRef = useRef(null);
  const scrollAccumRef = useRef(0); // fractional sub-pixel carry, since scrollLeft only stores whole pixels

  const AUTO_SCROLL_SPEED = 30; // px per second while idle
  const RESUME_DELAY = 5000; // ms to wait after an interaction before auto-scroll resumes

  const pauseAutoScroll = (duration = RESUME_DELAY) => {
    pausedUntilRef.current = Date.now() + duration;
  };

  const calibrate = () => {
    const el = trackRef.current;
    if (!el) return;
    const setWidth = el.scrollWidth / 3;
    setWidthRef.current = setWidth;
    // Start scrolled into the middle copy so users can scroll either direction immediately.
    if (el.scrollLeft < setWidth * 0.5 || el.scrollLeft > setWidth * 1.5) {
      el.scrollLeft = setWidth;
    }
  };

  useLayoutEffect(() => {
    calibrate();
    window.addEventListener('resize', calibrate);
    return () => window.removeEventListener('resize', calibrate);
  }, []);

  const handleTrackScroll = () => {
    const el = trackRef.current;
    const setWidth = setWidthRef.current;
    if (!el || !setWidth) return;
    if (el.scrollLeft < setWidth * 0.5) {
      el.scrollLeft += setWidth;
    } else if (el.scrollLeft > setWidth * 1.5) {
      el.scrollLeft -= setWidth;
    }
  };

  // Slow, self-playing scroll that runs whenever the user hasn't interacted recently.
  useEffect(() => {
    let rafId;
    const step = (timestamp) => {
      if (lastFrameTimeRef.current === null) lastFrameTimeRef.current = timestamp;
      const dt = Math.min(timestamp - lastFrameTimeRef.current, 50);
      lastFrameTimeRef.current = timestamp;

      const el = trackRef.current;
      if (el && Date.now() >= pausedUntilRef.current) {
        scrollAccumRef.current += AUTO_SCROLL_SPEED * (dt / 1000);
        const wholePixels = Math.floor(scrollAccumRef.current);
        if (wholePixels > 0) {
          el.scrollLeft += wholePixels;
          scrollAccumRef.current -= wholePixels;
        }
      } else {
        scrollAccumRef.current = 0;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Convert vertical wheel/trackpad scrolling into horizontal carousel movement.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      el.scrollLeft += delta;
      pauseAutoScroll();
      e.preventDefault();
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleTouchStart = () => {
    // Hold off auto-scroll for as long as the finger is on the track.
    pausedUntilRef.current = Infinity;
  };

  const handleTouchEnd = () => {
    pauseAutoScroll();
  };

  // Snaps to the nearest card and moves one card over, then pauses auto-scroll briefly.
  const scrollToRelativeCard = (direction) => {
    const el = trackRef.current;
    const card = el && el.querySelector('.project-card');
    if (!el || !card) return;
    const gap = parseFloat(window.getComputedStyle(el).columnGap || '0') || 0;
    const cardWidth = card.getBoundingClientRect().width + gap;
    const nearestIndex = Math.round(el.scrollLeft / cardWidth);
    el.scrollTo({ left: (nearestIndex + direction) * cardWidth, behavior: 'smooth' });
    pauseAutoScroll();
  };

  return (
    <section>
      <h2>Projects and Experience</h2>
      <p1>Click each card to learn more</p1>

      {/* Infinite horizontal carousel */}
      <div className="projects-carousel-wrapper">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          aria-label="Scroll projects left"
          onClick={() => scrollToRelativeCard(-1)}
        >
          ‹
        </button>

        <div
          className="projects-grid"
          ref={trackRef}
          onScroll={handleTrackScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {loopedProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(index % projects.length)}
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

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          aria-label="Scroll projects right"
          onClick={() => scrollToRelativeCard(1)}
        >
          ›
        </button>
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