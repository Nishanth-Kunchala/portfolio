import React, { useState, useEffect } from 'react';
import resumePDF from '../assets/resume.pdf';

// Define the mobile break point (should match your CSS media queries)
const MOBILE_BREAKPOINT = 768; // 768px is a standard break for tablets/desktop

export default function Resume() {
  // State to track if the current view is considered "desktop"
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > MOBILE_BREAKPOINT);

  // Function to update the state based on window width
  const checkScreenSize = () => {
    setIsDesktop(window.innerWidth > MOBILE_BREAKPOINT);
  };

  useEffect(() => {
    // 1. Initial check when the component mounts
    checkScreenSize(); 

    // 2. Attach the event listener to handle resizing
    window.addEventListener('resize', checkScreenSize);

    // 3. Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  // --- PDF Source with the iframe fix (if you want to try it one last time on desktop) ---
  // If your desktop browser works better, you can include the zoom parameter
  const embeddedPDFSrc = `${resumePDF}#zoom=fit&navpanes=0&toolbar=0`;
  // OR just use 'resumePDF' if the parameters cause issues on desktop too
  
  // --- Common Download/View Links ---
  const DownloadLinks = (
    <div style={{ marginTop: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: isDesktop ? 'flex-start' : 'center' }}>
      <a
        href={resumePDF} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="download-button"
        style={{ 
            backgroundColor: '#0077cc', 
            padding: '12px 24px'
        }}
      >
        📄 Open in New Tab
      </a>
      <a
        href={resumePDF}
        download
        className="download-button"
        style={{ 
            backgroundColor: '#001f3f', 
            padding: '12px 24px'
        }}
      >
        ⬇ Download PDF
      </a>
    </div>
  );

  // --- Main Render ---
  return (
    <section>
      <h2>Resume</h2>
      
      {/* 🔑 CONDITIONAL RENDERING */}
      {isDesktop ? (
        /* DESKTOP VIEW: Embedded Iframe Viewer */
        <div 
          style={{
            width: '100%',
            // If the iframe causes issues, you might need a dedicated CSS class 
            // with a specified height, e.g., 'resume-embed-container'
            height: '80vh', 
            border: 'none',
            borderRadius: '0',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={resumePDF} // Use the simple path for maximum desktop compatibility
            title="Resume"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              outline: 'none',
            }}
          />
        </div>
      ) : (
        /* MOBILE VIEW: Download/View Links Only */
        <p style={{ 
            fontSize: '1.1rem', 
            color: '#444',
            textAlign: 'center' 
        }}>
          For the best experience on mobile, please open or download my resume's PDF file directly.
        </p>
      )}

      {DownloadLinks}
    </section>
  );
}