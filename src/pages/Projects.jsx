export default function Projects() {
    return (
      <section>
        <h2>Projects</h2>
        <div class="project-grid">
          <div class="project-card">
            <h3>Vision-Based Docking System</h3>
            <p>Developed an AI-based keypoint detector for spacecraft refueling ports, fusing model outputs with AprilTag and LiDAR data across two Kalman Filter stages.</p>
          </div>
          <div class="project-card">
            <h3>Rocket Avionics Platform</h3>
            <p>Designed and tested a modular avionics stack using an ESP32, including telemetry, IMU-based orientation tracking, and real-time flight event control.</p>
          </div>
          <div class="project-card">
            <h3>ISS Docking Keypoint Tracker</h3>
            <p>Trained a MobileNetV3 model to predict ISS docking port keypoints from 2D images using soft heatmaps and KL divergence loss for precision alignment.</p>
          </div>
        </div>
      </section>
    );
  }