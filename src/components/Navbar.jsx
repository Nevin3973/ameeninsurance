import React, { useState } from 'react';
import { Menu, X, Calendar, Globe, PhoneCall, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activeTab, setActiveTab, onOpenWizard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Insurance Plans' },
    { id: 'partners', label: 'Insurance Partners' },
    { id: 'nri', label: 'NRI Advisory' },
    { id: 'claims', label: 'Claims Assistance' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      {/* 1. Top Star Health-Style Utility Notification & Contact Bar */}
      <div style={{
        background: '#0f172a',
        color: '#ffffff',
        fontSize: '0.82rem',
        padding: '0.45rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.6rem'
        }}>
          {/* Left Side: Direct Helpline & IRDAI License Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#93c5fd', fontWeight: 600 }}>
              <ShieldCheck size={14} color="#60a5fa" /> IRDAI Licensed Advisory
            </span>
            <a
              href="tel:+919812345678"
              style={{
                color: '#ffffff',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              <PhoneCall size={14} color="#60a5fa" /> Helpline: +91 98123 45678
            </a>
          </div>

          {/* Right Side: Language Toggle + Prominent Book Consultation Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={toggleLanguage}
              title={lang === 'en' ? 'Switch to Malayalam (മ)' : 'Switch to English (Eng)'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Globe size={13} color="#93c5fd" />
              <span>{lang === 'en' ? 'മ' : 'Eng'}</span>
            </button>

            <button
              onClick={() => handleNavClick('booking')}
              style={{
                background: 'var(--primary-blue)',
                color: '#ffffff',
                border: 'none',
                padding: '0.35rem 1.1rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 2px 10px rgba(1, 58, 222, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <Calendar size={14} color="#ffffff" /> Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header style={{
        maxWidth: '1600px',
        width: '100%',
        margin: '8px auto 0',
        padding: '0 1rem'
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '50px',
          border: '1px solid var(--border-light)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
          height: '66px',
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
              fontSize: '1.45rem',
              letterSpacing: '-0.02em',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              marginRight: '1rem',
              color: 'var(--text-dark)',
              flexShrink: 0
            }}
          >
            Ameen <span style={{ color: 'var(--primary-blue)' }}>Insurance</span>
          </div>

          {/* Navigation Links Group */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.6rem',
            marginLeft: 'auto'
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
              justifyContent: 'center',
              marginLeft: 'auto'
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '125px',
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
                  background: lang === 'ml' ? 'var(--accent-sky-light)' : '#ffffff',
                  color: 'var(--primary-blue)',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <Globe size={15} color="var(--primary-blue)" />
                <span>{lang === 'en' ? 'മ' : 'Eng'}</span>
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
              <Calendar size={18} /> Book Consultation
            </button>
          </div>
        )}

        <style>{`
          @media (max-width: 960px) {
            .desktop-only { display: none !important; }
            .mobile-hamburger { display: flex !important; }
          }
        `}</style>
      </header>
    </div>
  );
}
