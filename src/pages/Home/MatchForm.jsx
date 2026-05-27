import { useState } from 'react';
import { useToast } from '../../components/Toast.jsx';
import { FORM_SPECIALTY_OPTIONS } from '../../data/specialties.js';

function isValidEmail(value) {
  const v = value.trim();
  if (!/^[^\s@]+@[^@\s]+$/.test(v)) return false;
  const domain = v.slice(v.indexOf('@') + 1);
  if (!domain.includes('.') || /\s/.test(domain) || domain.startsWith('.') || domain.endsWith('.')) return false;
  const tld = domain.split('.').pop();
  return tld.length >= 2;
}

function nationalPhoneDigitCount(national) {
  return (String(national).match(/\d/g) || []).length;
}

export default function MatchForm() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [specialties, setSpecialties] = useState([]);

  const toggleSpecialty = (value) => {
    setSpecialties((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);

    const required = ['fullName', 'email', 'phoneNational', 'age', 'location', 'urgency', 'servicePlan'];
    for (const name of required) {
      const val = fd.get(name);
      if (!val || !String(val).trim()) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }
    }

    if (!isValidEmail(fd.get('email'))) {
      showToast('Enter a full email with @ and a domain, e.g. you@email.com', 'error');
      form.email.focus();
      return;
    }

    const phoneNational = String(fd.get('phoneNational')).replace(/\s+/g, ' ').trim();
    if (nationalPhoneDigitCount(phoneNational) < 6) {
      showToast('Please enter a valid phone number (at least 6 digits).', 'error');
      form.phoneNational.focus();
      return;
    }

    if (specialties.length === 0) {
      showToast('Please select at least one procedure.', 'error');
      return;
    }

    const data = {
      timestamp: new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' }),
      fullName: String(fd.get('fullName')).trim(),
      email: String(fd.get('email')).trim(),
      phone: `${fd.get('phoneCountry')} ${phoneNational}`.replace(/\s+/g, ' ').trim(),
      age: String(fd.get('age')).trim(),
      gender: fd.get('gender') || '',
      location: String(fd.get('location')).trim(),
      specialty: specialties.join(', '),
      urgency: fd.get('urgency'),
      insurance: String(fd.get('insurance') || '').trim(),
      servicePlan: fd.get('servicePlan'),
      additional: String(fd.get('additional') || '').trim(),
    };

    setLoading(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submit failed');
      showToast("✓ Submitted! We'll match you within 24 hours.", 'success');
      form.reset();
      setSpecialties([]);
    } catch (err) {
      console.error(err);
      showToast('Submission failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="match-form">
      <div className="form-inner">
        <div className="form-header">
          <div className="section-label">Start Your Journey</div>
          <div className="section-title">Find Your Surgeon Match</div>
          <p className="section-sub">
            Complete the form below and we&apos;ll connect you with the most suitable surgeons for your needs — usually within 24 hours.
          </p>
        </div>
        <div className="form-card">
          <form id="surgimatch-form" noValidate onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="full-name">Full Name *</label>
                <input type="text" id="full-name" name="fullName" placeholder="Jane Smith" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="jane@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone-national">Phone Number *</label>
                <div className="phone-row">
                  <select id="phone-country" name="phoneCountry" aria-label="Country code" defaultValue="+61">
                    <option value="+61">+61 (AU)</option>
                    <option value="+64">+64 (NZ)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+60">+60 (MY)</option>
                    <option value="+63">+63 (PH)</option>
                    <option value="+852">+852 (HK)</option>
                  </select>
                  <input type="tel" id="phone-national" name="phoneNational" placeholder="4XX XXX XXX" inputMode="tel" autoComplete="tel-national" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input type="number" id="age" name="age" placeholder="e.g. 35" min="1" max="120" required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Biological Sex</label>
                <select id="gender" name="gender" defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">City / Location *</label>
                <input type="text" id="location" name="location" placeholder="Brisbane, Queensland" required />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group full">
                <label>Procedure Need *</label>
                <div className="checkbox-group" id="specialty-group">
                  {FORM_SPECIALTY_OPTIONS.map((value) => (
                    <label key={value} className="checkbox-item">
                      <input
                        type="checkbox"
                        name="specialty"
                        value={value}
                        checked={specialties.includes(value)}
                        onChange={() => toggleSpecialty(value)}
                      />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="urgency">Urgency Level *</label>
                <select id="urgency" name="urgency" required defaultValue="">
                  <option value="" disabled>
                    Select urgency…
                  </option>
                  <option value="Elective – within 6 months">Elective – within 6 months</option>
                  <option value="Semi-urgent – 1 to 3 months">Semi-urgent – 1 to 3 months</option>
                  <option value="Urgent – within 2 weeks">Urgent – within 2 weeks</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="insurance">Health Insurance / HMO</label>
                <input type="text" id="insurance" name="insurance" placeholder="Medicare, Bupa, Medibank, none…" />
              </div>
              <fieldset className="form-fieldset--plans form-group full" aria-labelledby="plan-title">
                <span className="plan-legend" id="plan-title">
                  Services &amp; Pricing *
                </span>
                <p className="plan-sub">Choose the level of support that suits you</p>
                <div className="plan-pick">
                  <label className="plan-card" htmlFor="plan-basic">
                    <input className="plan-card-input" type="radio" name="servicePlan" id="plan-basic" value="basic" required />
                    <h4>Basic Match (Free)</h4>
                    <ul className="plan-card-list">
                      <li>
                        <svg className="plan-check-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Curated list of suitable surgeons</span>
                      </li>
                      <li>
                        <svg className="plan-check-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>General guidance</span>
                      </li>
                      <li>
                        <svg className="plan-check-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>You handle booking</span>
                      </li>
                    </ul>
                    <p className="plan-card-foot">Perfect if you&apos;re happy to organise things yourself</p>
                  </label>
                  <label className="plan-card" htmlFor="plan-premium">
                    <input className="plan-card-input" type="radio" name="servicePlan" id="plan-premium" value="premium" />
                    <h4>Premium Concierge (Paid)</h4>
                    <ul className="plan-card-list">
                      <li>
                        <svg className="plan-check-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Priority matching</span>
                      </li>
                      <li>
                        <svg className="plan-check-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>We contact clinics on your behalf</span>
                      </li>
                      <li>
                        <svg className="plan-check-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Fast-tracked appointment booking</span>
                      </li>
                    </ul>
                    <p className="plan-card-foot">Ideal if you want speed, ease, and zero hassle</p>
                  </label>
                </div>
              </fieldset>
              <div className="form-group full">
                <label htmlFor="additional">Additional Notes or Preferences</label>
                <textarea id="additional" name="additional" style={{ minHeight: 80 }} placeholder="Preferred hospital, language preference, specific surgeon request, etc." />
              </div>
            </div>
            <div className="form-submit">
              <p className="form-note">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Your data is stored securely and used only for matching.
              </p>
              <button type="submit" className="btn-submit" disabled={loading}>
                <span>{loading ? 'Submitting…' : 'Submit & Find My Surgeon'}</span>
                <div className="spinner" style={{ display: loading ? 'block' : 'none' }} />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ display: loading ? 'none' : 'block' }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
