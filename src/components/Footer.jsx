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
            <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Independent IRDAI authorized health insurance advisory (Reg. #129/153), offering unbiased plan comparisons and 24/7 cashless hospital claim assistance.
            </p>
            {/* Social Media Icons Section */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect With Us
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/share/1CGyEQGvc4/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Profile"
                  title="Facebook"
                  className="social-icon-btn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/ameenhealthinsurance/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  title="Instagram"
                  className="social-icon-btn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Google Business Profile Icon */}
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Business Profile"
                  title="Google Business Profile (Updating soon)"
                  className="social-icon-btn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </a>
              </div>
            </div>
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
              Phone: <a href="tel:+917025984646" style={{ color: '#ffffff', textDecoration: 'none' }}>+91 70259 84646</a><br />
              Email: <a href="mailto:info@ameenhealthinsurance.com" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}>info@ameenhealthinsurance.com</a><br />
              Address: Mannarkkad Road, Ariyambavu, Palakkad, Kerala 678583<br />
              Hours: Mon - Sun, 9:00 AM - 6:00 PM
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

      <style>{`
        .social-icon-btn:hover {
          background: #2563eb !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
        }
      `}</style>
    </footer>
  );
}

