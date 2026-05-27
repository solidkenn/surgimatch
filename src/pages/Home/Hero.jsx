const whoItems = [
  { strong: 'Busy professionals', sub: 'who need fast access to the right care' },
  { strong: 'Private patients', sub: 'seeking shorter wait times' },
  { strong: 'People', sub: 'overwhelmed by too many choices' },
  { strong: 'Anyone wanting', sub: 'guidance they can trust' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-cross">
        <div
          style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '50%',
            padding: '52px',
            boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="/SurgiMatchLogo.png" alt="SurgiMatch" style={{ width: '520px', maxWidth: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">Trusted Surgeon Matching</div>
        <h1>
          Connect with the <em>right surgeon</em> for your care
        </h1>
        <div className="hero-who" id="who-its-for" aria-labelledby="who-heading">
          <h2 id="who-heading">Who This Is For</h2>
          <p className="hero-who-lead">SurgiMatch is designed for people who want:</p>
          <ul className="hero-who-list">
            {whoItems.map((item) => (
              <li key={item.strong}>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4 12 14.01l-3-3" />
                </svg>
                <div>
                  <strong>{item.strong}</strong>
                  <span className="sub">{item.sub}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-cta">
          <button type="button" className="btn-white" onClick={() => scrollTo('match-form')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 12l2 2 4-4" />
              <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
            </svg>
            Get Matched Now
          </button>
          <button type="button" className="btn-ghost" onClick={() => scrollTo('how-it-works')}>
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}
