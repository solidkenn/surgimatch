import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import LegalHero from '../components/LegalHero.jsx';
import { FAQ_ITEMS } from '../data/faq.js';

export default function FAQ() {
  return (
    <>
      <Nav />
      <LegalHero
        label="FAQ"
        title="SurgiMatch – Frequently Asked Questions"
        subtitle="Answers to common questions about how we match you, our fees, privacy, and what to expect."
        titleId="faq-hero-title"
      />
      <div className="legal-wrap">
        <div className="faq-content">
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.id} className="faq-item" id={item.id}>
                <summary>
                  <h3 className="faq-question">{item.question}</h3>
                </summary>
                <div className="faq-answer">
                  {item.id === 'faq-6' ? (
                    <p>
                      Yes. We take your privacy seriously and handle your information in accordance with Australian privacy laws. Your details are only shared with relevant clinics as part of the matching process after obtaining your consent. You can read more in our{' '}
                      <Link to="/privacy-policy">Privacy Policy</Link>.
                    </p>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                  )}
                </div>
              </details>
            ))}
          </div>
          <div className="faq-cta">
            <p className="faq-cta-title">Still have questions?</p>
            <p>Submit your details and we&apos;ll guide you through everything step-by-step.</p>
            <Link to="/#match-form" className="btn-primary">
              Get started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
