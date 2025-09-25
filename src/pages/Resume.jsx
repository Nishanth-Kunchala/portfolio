import resumePDF from '../assets/resume.pdf';

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>

      <div
        style={{
          width: '100%',
          height: '80vh',
          border: 'none',          // remove the container border
          borderRadius: '0',       // optional, remove rounded corners
          overflow: 'hidden',      // ensure no scrollbars outside iframe
        }}
      >
        <iframe
          src={resumePDF}
          title="Resume"
          width="100%"
          height="100%"
          style={{
            border: 'none',        // remove iframe border
            outline: 'none',       // remove focus outline
          }}
        />
      </div>

      <a
        href="/resume.pdf"
        download
        className="download-button"
        style={{ marginTop: '20px', display: 'inline-block' }}
      >
        ⬇ Download Resume
      </a>
    </section>
  );
}