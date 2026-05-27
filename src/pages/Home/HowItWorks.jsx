const steps = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 12h6M9 16h4M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
        <rect x="9" y="2" width="6" height="4" rx="1" />
      </svg>
    ),
    title: 'Tell Us What You Need',
    desc: 'Fill out a short form with your contact details, procedure need, and location so we can find the right specialists for you.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 7v8M7 11h8" />
      </svg>
    ),
    title: 'We Find Your Match',
    desc: 'Our team reviews your submission and identifies FRACS-qualified surgeons whose expertise and availability align with your needs and location.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 16.92V19a2 2 0 01-2.18 2A19.79 19.79 0 013 4.18 2 2 0 015 2h2.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.355 1.845.562 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: 'Get Connected',
    desc: "Receive your surgeon recommendations within 24 hours. We'll help coordinate your initial consultation and guide you every step of the way.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="hiw-inner">
        <div className="hiw-header">
          <div className="section-label">Simple &amp; Fast</div>
          <div className="section-title">How SurgiMatch Works</div>
          <p className="section-sub">From your first concern to your surgeon consultation — we make the process clear, confident, and caring.</p>
        </div>
        <div className="hiw-steps">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
