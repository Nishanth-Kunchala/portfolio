export const publications = [
  {
    title: 'Centralized Copy-Paste: Enhanced Data Augmentation Strategy for Wildland Fire Semantic Segmentation',
    authors: 'Joon Tai Kim, Tianle Chen, Ziyu Dong, Nishanth Kunchala, Alexander Guller, Daniel Ospina Acero, Roger Williams, Mrinal Kumar',
    venue: 'AIAA SciTech 2026 Forum, Orlando, FL',
    date: 'Jan 2026',
    doi: '10.2514/6.2026-1763',
    doiUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-1763',
    altLink: { label: 'View preprint on arXiv', url: 'https://arxiv.org/abs/2507.06321' },
  },
  {
    title: 'Performance of a Cycling PWPF Control Allocation Scheme for Limited Mass Flow Propulsion Systems',
    authors: 'Nishanth Kunchala, Antonio Accardo, Max Cirino, Brody Booker, Varun Chitiveli',
    venue: 'AIAA Region III Student Conference, Ann Arbor, MI',
    date: 'June 2026',
    doi: '10.2514/6.2026-116368',
    doiUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-116368',
  },
  {
    title: 'Design, Testing, and Comparisons of a Carbon Dioxide Compressed Gas Propulsion Module for 1U CubeSat Platforms',
    authors: 'Varun Chitiveli, Brody Booker, Max Cirino, Antonio Accardo, Nishanth Kunchala',
    venue: 'AIAA Region III Student Conference, Ann Arbor, MI',
    date: 'June 2026',
    doi: '10.2514/6.2026-115043',
    doiUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-115043',
  },
];

export default function Publications() {
  return (
    <section>
      <h2>Publications</h2>
      <p1>Peer-reviewed and conference papers I’ve authored or coauthored</p1>

      <div className="publications-list">
        {publications.map((pub, i) => (
          <div className="publication-card" key={i}>
            <h3>{pub.title}</h3>
            <p style={{ fontStyle: 'italic', margin: '0 0 8px 0' }}>{pub.authors}</p>
            <p style={{ margin: '0 0 4px 0' }}>{pub.venue}</p>
            <p style={{ margin: '0 0 12px 0', color: '#666' }}>{pub.date}</p>

            <a
              href={pub.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
              style={{ padding: '8px 18px', fontSize: '0.9rem' }}
            >
              View via DOI: {pub.doi}
            </a>

            {pub.altLink && (
              <a
                href={pub.altLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', marginTop: '10px', color: '#0077cc' }}
              >
                {pub.altLink.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
