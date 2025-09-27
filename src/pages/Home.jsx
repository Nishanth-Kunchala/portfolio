import hikingImage from '../assets/hiking_better.jpg'
import rockClimbing from '../assets/rock_climbing.mov'
import bannerImage from '../assets/banner.jpg'
import benchPr from '../assets/bench_pr.mov'

export default function Home() {
  return (
    <section className="hero">
      <img
        src={bannerImage}
        alt="Nishanth Kunchala"
        className="banner"
        style={{ maxWidth: '600px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
      />
      <div className="intro">
      <h1 style={{ margin: '0 0 8px 0' }}>Hi, I’m Nishanth Kunchala!</h1>
        <p>
        I’m a rising senior pursuing a Bachelor’s degree of science in Aerospace Engineering at The Ohio State University. 
        Passionate about space systems and embedded software, I have hands-on experience in avionics design, AI-driven vision systems, and robotics integration. 
        My technical journey includes projects ranging from machine learning model development to flight hardware prototyping, with a focus on real-world aerospace applications.
        </p>
        <p style={{ margin: '0 0 0 0' }}>
        Beyond engineering, I’m an Eagle Scout with a strong foundation in leadership, discipline, and teamwork, which I bring to every project and collaboration. 
        I thrive in challenging environments where I can merge my software skills and aerospace knowledge to innovate solutions for next-generation space missions.
        </p>
      </div>
      <div className="secondary">
      <h1 style={{ margin: '0 0 8px 0' }}>What I do for fun:</h1>
        <p>
          I’ve always loved being outdoors—whether it’s hiking, camping, or just spending time with friends and family in nature. 
          Staying active is also a big part of who I am. I enjoy working out, playing tennis & 
          volleyball, and rock climbing. For me, it’s about keeping my body moving, and trying out new things. I also love to cook
          and bake in my free time, and I love eating even more.
        </p>
      </div>

      <div
    // 🔑 CORRECTION: We removed the inline 'display: flex', 'gap', etc. 
    // and replaced them with the CSS class.
    className="media-gallery" 
  >
    {/* First video */}
    <div
      style={{
        flex: '1 1 30%',
        maxWidth: '400px',
        // 🔑 Forces the height for desktop/tablet layout
        height: '500px', 
        boxSizing: 'border-box',
      }}
    >
      <video
        src={benchPr}
        controls
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          // 🔑 Forces the video to fill the 500px container
          height: '100%', 
          display: 'block',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Image in the middle */}
    <div
      style={{
        flex: '1 1 30%',
        maxWidth: '400px',
        // 🔑 Forces the height for desktop/tablet layout
        height: '500px', 
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={hikingImage}
        alt="Hiking"
        style={{
          width: '100%',
          // 🔑 Fills the 500px height of the parent
          height: '100%',     
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Second video */}
    <div
      style={{
        flex: '1 1 30%',
        // 🔑 Forces the height for desktop/tablet layout
        height: '500px',
        maxWidth: '400px',
        boxSizing: 'border-box',
      }}
    >
      <video
        src={rockClimbing}
        controls
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          // 🔑 Forces the video to fill the 500px container
          height: '100%', 
          display: 'block',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
    </div>
  </div>

    </section>
  );
}