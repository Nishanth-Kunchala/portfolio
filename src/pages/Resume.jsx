import '../pdfWorker';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section>
      <h2>Resume</h2>

      <div className="pdf-scroll-container">
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={1.2} // slight default zoom for readability
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>

      <a href="/resume.pdf" download className="download-button" style={{ marginTop: '20px', display: 'inline-block' }}>
        ⬇ Download Resume
      </a>
    </section>
  );
}