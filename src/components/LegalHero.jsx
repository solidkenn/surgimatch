export default function LegalHero({ label, title, subtitle, titleId }) {
  return (
    <section className="legal-hero" aria-labelledby={titleId}>
      <div className="legal-hero-grid" aria-hidden="true" />
      <div className="legal-hero-inner">
        <div className="section-label">{label}</div>
        <h1 className="section-title" id={titleId}>
          {title}
        </h1>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
