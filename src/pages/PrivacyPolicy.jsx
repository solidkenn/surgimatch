import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import LegalHero from '../components/LegalHero.jsx';

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <LegalHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How SurgiMatch collects, uses, and protects your personal information under the Privacy Act 1988 (Australia)."
        titleId="privacy-hero-title"
      />
      <div className="legal-wrap">
        <article className="legal-card">
          <p>SurgiMatch is committed to protecting your privacy in accordance with the Australian Privacy Act 1988.</p>
          <h2>1. What information we collect</h2>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Location</li>
            <li>Procedure or treatment interests</li>
            <li>Any other information you voluntarily provide</li>
          </ul>
          <h2>2. How we collect information</h2>
          <p>We collect information when you:</p>
          <ul>
            <li>Submit a form on our website</li>
            <li>Contact us via social media, phone, or email</li>
          </ul>
          <h2>3. Why we collect your information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Match you with suitable surgeons or clinics</li>
            <li>Facilitate consultations and bookings</li>
            <li>Improve our services</li>
          </ul>
          <h2>4. Sharing your information</h2>
          <p>
            We may share your information with relevant clinics or healthcare providers only for the purpose of facilitating your enquiry or treatment, and only with your consent.
          </p>
          <h2>5. Data storage and security</h2>
          <p>
            We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure.
          </p>
          <h2>6. Access and correction</h2>
          <p>
            You may request access to or correction of your personal information by contacting us at{' '}
            <a href="mailto:info@surgimatch.com.au">info@surgimatch.com.au</a>.
          </p>
          <h2>7. Contact us</h2>
          <p>
            For any privacy-related questions, please contact:{' '}
            <a href="mailto:info@surgimatch.com.au">info@surgimatch.com.au</a>
          </p>
          <hr className="divider" />
          <p className="closing">
            By submitting your details through our website, you consent to the collection and use of your information as described in this policy.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
