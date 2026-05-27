import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import LegalHero from '../components/LegalHero.jsx';

export default function About() {
  return (
    <>
      <Nav />
      <LegalHero
        label="About"
        title="The people behind SurgiMatch"
        subtitle="Clinical experience and a patient-first approach guide everything we do."
        titleId="about-hero-title"
      />
      <div className="legal-wrap">
        <div className="about-content">
          <div className="about-narrative">
            <section className="about-section" aria-labelledby="about-surgimatch-heading">
              <h2 id="about-surgimatch-heading">About SurgiMatch</h2>
              <p>
                Choosing the right surgeon or clinic shouldn&apos;t feel overwhelming, confusing, or risky. At SurgiMatch, we simplify that process—connecting patients with the right medical professionals based on their needs, goals, and circumstances.
              </p>
              <p>We are not just a directory. We are a guided matching service built to help patients make confident, informed decisions.</p>
            </section>
            <section className="about-section" aria-labelledby="why-exists-heading">
              <h2 id="why-exists-heading">Why SurgiMatch Exists</h2>
              <p>SurgiMatch was created after years of working inside the healthcare system and seeing the same problem again and again:</p>
              <p>
                Patients are often left to navigate complex medical decisions on their own—without clear guidance, trusted recommendations, or a proper understanding of their options.
              </p>
              <p>
                <strong>This leads to:</strong>
              </p>
              <ul>
                <li>Uncertainty</li>
                <li>Mismatched expectations</li>
                <li>Delayed or poor decisions</li>
              </ul>
              <p>We built SurgiMatch to change that.</p>
              <p>
                <strong>Our goal is simple:</strong> to make the journey from enquiry to treatment safer, clearer, and more personalised.
              </p>
            </section>
            <section className="about-section" aria-labelledby="differently-heading">
              <h2 id="differently-heading">What We Do Differently</h2>
              <p>Unlike online directories or referral platforms, SurgiMatch takes a patient-first, tailored approach.</p>
              <p>
                <strong>We:</strong>
              </p>
              <ul>
                <li>Take the time to understand each patient&apos;s needs</li>
                <li>Match them with suitable clinics and surgeons</li>
                <li>Help streamline the process from enquiry to consultation</li>
              </ul>
              <p>Every match is made with intention—not just availability.</p>
            </section>
            <section className="about-section" aria-labelledby="clinical-exp-heading">
              <h2 id="clinical-exp-heading">Built by Clinical Experience</h2>
              <p>SurgiMatch is founded by professionals with deep, real-world experience in surgical care.</p>
            </section>
          </div>
          <div className="about-profiles">
            <article className="about-profile" id="yasser">
              <div className="about-avatar" role="img" aria-label="Photo placeholder, Yasser — image coming soon">
                Y
              </div>
              <div className="about-profile-text">
                <h2>Yasser</h2>
                <p className="about-role">Founder</p>
                <p>
                  Yasser, the founder of SurgiMatch, brings over 21 years of nursing experience to the business. For 18 of those years, he worked as a highly skilled scrub scout nurse, beginning his career in the Philippines before continuing his professional journey in the United Kingdom and now Australia. Throughout his career, Yasser has built strong, trusted relationships with surgeons and medical professionals, while developing deep expertise in the surgical field. His extensive hands-on experience and industry insight are the foundation of SurgiMatch&apos;s commitment to connecting patients with the right specialists.
                </p>
              </div>
            </article>
            <article className="about-profile" id="genevieve">
              <div className="about-avatar about-avatar--g" role="img" aria-label="Photo placeholder, Genevieve — image coming soon">
                G
              </div>
              <div className="about-profile-text">
                <h2>Genevieve</h2>
                <p className="about-role">CEO</p>
                <p>
                  Genevieve, CEO of SurgiMatch, brings valuable clinical experience and a patient-focused approach to the business. With a background in nursing across the perioperative setting, endoscopy theatres, and pain management procedures, she has developed a well-rounded understanding of surgical care from preparation through recovery. Her hands-on experience allows her to understand patient needs, concerns, and expectations on a deeper level. This insight plays a key role in helping patients find the right specialist, ensuring they feel informed, supported, and confident throughout their surgical journey.
                </p>
              </div>
            </article>
          </div>
          <div className="about-after-profiles">
            <p className="about-bridge">Together, they combine clinical insight with patient advocacy—bridging the gap between patients and providers.</p>
            <section className="about-section" aria-labelledby="commitment-heading">
              <h2 id="commitment-heading">Our Commitment</h2>
              <p>
                <strong>We are committed to:</strong>
              </p>
              <ul>
                <li>Patient-first recommendations</li>
                <li>Confidential and respectful handling of information</li>
                <li>Clear, honest communication</li>
              </ul>
              <p>Your trust is the foundation of everything we do.</p>
            </section>
            <section className="about-section about-journey" aria-labelledby="journey-heading">
              <h2 id="journey-heading">Your Journey, Matched Right</h2>
              <p>At SurgiMatch, we believe the right match makes all the difference.</p>
              <p className="about-journey-lines">
                Because when patients are guided properly,
                <br />
                they don&apos;t just make decisions faster—
                <br />
                they make better ones.
              </p>
            </section>
          </div>
          <div className="about-cta">
            <p className="about-cta-title">Ready to get matched?</p>
            <p>Tell us what you need and we&apos;ll help you find the right specialist.</p>
            <Link to="/#match-form" className="btn-primary">
              Find a Surgeon
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
