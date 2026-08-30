import React from 'react';

export default function Footer({ onNavigate, onOpenPrivacyModal }) {
  const handleLinkClick = (tabId) => {
    if (onNavigate) {
      onNavigate(tabId);
    }
  };

  const handleOpenLegal = (tab = 'privacy') => {
    if (onOpenPrivacyModal) {
      onOpenPrivacyModal(tab);
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
              Independent IRDAI authorized health and life insurance advisory (Reg. #129/153), offering unbiased plan comparisons and 24/7 cashless hospital claim assistance.
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
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1rem' }}>Contact & Support</h4>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
              Phone: +91 70259 84646<br />
              Email: info@ameeninsurance.com<br />
              Address: Stadium Bypass Road, Palakkad, Kerala 678001<br />
              Hours: Mon - Sat, 8:00 AM - 9:00 PM
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.8rem' }}>
              <button onClick={() => handleOpenLegal('privacy')} style={{ background: 'none', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>Privacy Policy</button>
              <span style={{ color: '#475569' }}>•</span>
              <button onClick={() => handleOpenLegal('terms')} style={{ background: 'none', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>Terms of Service</button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.8rem'
        }}>
          © 2026 Ameen Nellikkunnan Insurance Advisory. All rights reserved. • Licensed under IRDAI Reg. #129/153.
        </div>
      </div>
    </footer>
  );
}
