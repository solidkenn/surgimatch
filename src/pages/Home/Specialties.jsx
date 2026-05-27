import { useState } from 'react';
import { SPECIALTIES } from '../../data/specialties.js';

export default function Specialties() {
  const [active, setActive] = useState(SPECIALTIES[0]);

  return (
    <section id="specialties">
      <div className="spec-inner">
        <div className="spec-header">
          <div className="section-label">Coverage Areas</div>
          <div className="section-title">Surgical Specialties We Cover</div>
          <p className="section-sub">
            From routine procedures to complex interventions, our network spans the full spectrum of surgical care. Hover a specialty to learn more.
          </p>
        </div>
        <div className="spec-split">
          <div className="spec-list" id="spec-list">
            {SPECIALTIES.map((item) => (
              <div
                key={item.name}
                className={`spec-item ${active.name === item.name ? 'active' : ''}`}
                onMouseEnter={() => setActive(item)}
                onClick={() => setActive(item)}
                onFocus={() => setActive(item)}
                tabIndex={0}
                role="button"
              >
                {item.name} <span className="spec-item-arrow">→</span>
              </div>
            ))}
          </div>
          <div className="spec-detail" id="spec-detail">
            <div className="spec-detail-content visible">
              <div className="spec-detail-tag">Surgical Specialty</div>
              <div className="spec-detail-img-wrap">
                <img src={`/${active.image}`} alt={active.name} />
              </div>
              <div className="spec-detail-title">{active.name}</div>
              <div className="spec-detail-divider" />
              <div className="spec-detail-desc">{active.desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
