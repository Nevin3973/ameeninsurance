import React from 'react';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (tabId) => {
    if (onNavigate) {
      onNavigate(tabId);
    }
  };

  return (
    <footer style={{
      background: '#0f172a',
      color: '#cbd5e1',
      padding: '4rem 0 2rem',
      fontSize: '0.88rem'
    }}>
      <div className="container">
        <div className="grid-3" style={{ gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.3rem',
              color: '#ffffff',
              marginBottom: '0.8rem'
            }}>
              Ameen <span style={{ color: '#60a5fa' }}>Insurance</span>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
              Independent insurance consultancy for health and life cover, backed by 15 years of industry experience.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#94a3b8' }}>
              <button onClick={() => handleLinkClick('hero')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Home</button>
              <button onClick={() => handleLinkClick('about')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>About Ameen</button>
              <button onClick={() => handleLinkClick('products')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Insurance Plans</button>
              <button onClick={() => handleLinkClick('partners')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Insurance Partners</button>
              <button onClick={() => handleLinkClick('nri')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>NRI Expat Advisory</button>
              <button onClick={() => handleLinkClick('claims')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Claims Assistance</button>
              <button onClick={() => handleLinkClick('faq')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>FAQ</button>
              <button onClick={() => handleLinkClick('booking')} style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Book Consultation</button>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
              Phone: +91 98123 45678<br />
              Email: contact@ameeninsurance.com<br />
              Business Hours: Mon - Sat, 10:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.8rem'
        }}>
          © 2026 Ameen Insurance. All rights reserved. • Privacy Policy • Terms & Conditions
        </div>
      </div>
    </footer>
  );
}
