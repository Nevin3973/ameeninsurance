import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Insurance Plans' },
    { id: 'partners', label: 'Insurance Partners' },
    { id: 'claims', label: 'Claims Assistance' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <header style={{
      position: 'sticky',
      top: '12px',
      zIndex: 100,
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '50px',
        border: '1px solid var(--border-light)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
        height: '74px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.8rem'
      }}>
        {/* Brand Logo Text on Far Left */}
        <div
          onClick={() => handleNavClick('hero')}
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.48rem',
            letterSpacing: '-0.02em',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            marginRight: '1.5rem',
            color: '#0f172a'
          }}
        >
          Ameen <span style={{ color: '#1d4ed8' }}>Insurance</span>
        </div>

        {/* Equally Spaced Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.8rem',
          flex: 1
        }} className="desktop-only">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--primary-blue)' : 'var(--text-dark)',
                  borderBottom: isActive ? '2px solid var(--primary-blue)' : '2px solid transparent',
                  padding: '0.4rem 0.2rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Rounded "Book a Consultation" Button on the Far Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            onClick={() => handleNavClick('booking')}
            className="btn-primary nav-book-btn"
            style={{
              padding: '0.75rem 1.8rem',
              fontSize: '0.92rem',
              fontWeight: 700,
              borderRadius: '9999px',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--primary-blue)',
              boxShadow: '0 4px 14px rgba(30, 64, 175, 0.25)'
            }}
          >
            <Calendar size={17} color="#ffffff" /> Book a Consultation
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            style={{
              display: 'none',
              background: 'var(--bg-card-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: '12px',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              padding: '0.5rem',
              width: '42px',
              height: '42px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '1rem',
          right: '1rem',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid var(--border-light)',
          padding: '1.2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                padding: '0.7rem 0',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeTab === item.id ? 'var(--primary-blue)' : 'var(--text-dark)',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border-light)'
              }}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick('booking')}
            className="btn-primary"
            style={{ width: '100%', padding: '0.85rem', marginTop: '0.6rem' }}
          >
            <Calendar size={18} /> Book a Consultation
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-only { display: none !important; }
          .nav-book-btn { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

