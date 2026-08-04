import React, { useState } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activeTab, setActiveTab, onOpenWizard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'hero', label: t('navHome', 'Home') },
    { id: 'about', label: t('navAbout', 'About Us') },
    { id: 'products', label: t('navProducts', 'Insurance Plans') },
    { id: 'partners', label: t('navPartners', 'Insurance Partners') },
    { id: 'nri', label: t('navNri', 'NRI Advisory') },
    { id: 'claims', label: t('navClaims', 'Claims Assistance') },
    { id: 'faq', label: t('navFaq', 'FAQ') }
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
            marginRight: '1.2rem',
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
          gap: '1.4rem',
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

        {/* Language Toggle + Consultation CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* Compact Eng / Ma Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            title={lang === 'en' ? 'Switch to Malayalam (Ma)' : 'Switch to English (Eng)'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              height: '42px',
              padding: '0 1rem',
              borderRadius: '9999px',
              border: '1.5px solid var(--primary-blue)',
              background: lang === 'ml' ? '#eff6ff' : '#ffffff',
              color: '#1d4ed8',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              boxShadow: '0 2px 8px rgba(29, 78, 216, 0.1)'
            }}
          >
            <Globe size={16} color="#1d4ed8" />
            <span>{lang === 'en' ? 'Eng' : 'Ma'}</span>
          </button>

          <button
            onClick={() => handleNavClick('booking')}
            className="btn-primary nav-book-btn"
            style={{
              height: '42px',
              padding: '0 1.4rem',
              fontSize: '0.88rem',
              fontWeight: 700,
              borderRadius: '9999px',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              background: 'var(--primary-blue)',
              boxShadow: '0 4px 14px rgba(30, 64, 175, 0.25)'
            }}
          >
            <Calendar size={16} color="#ffffff" /> {t('navBookConsultation', 'Book Consultation')}
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
              padding: 0,
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
          {/* Mobile Language Switcher Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '0.8rem',
            borderBottom: '1px solid var(--border-light)'
          }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              Language:
            </span>
            <button
              onClick={toggleLanguage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                height: '38px',
                padding: '0 1rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--primary-blue)',
                background: lang === 'ml' ? '#eff6ff' : '#ffffff',
                color: '#1d4ed8',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Globe size={15} color="#1d4ed8" />
              <span>{lang === 'en' ? 'Eng' : 'Ma'}</span>
            </button>
          </div>

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
            <Calendar size={18} /> {t('navBookConsultation', 'Book a Consultation')}
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

