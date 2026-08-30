import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe, PhoneCall, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activeTab, setActiveTab, onOpenWizard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNotice, setShowMobileNotice] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show mobile top notification popup 1 second after page load, then auto-disappear after 3 seconds max
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMobileNotice(true);

      const hideTimer = setTimeout(() => {
        setShowMobileNotice(false);
      }, 3000); // 3 seconds max

      return () => clearTimeout(hideTimer);
    }, 1000); // 1 second delay after load

    return () => clearTimeout(showTimer);
  }, []);

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
      {/* 1. Sleek Utility Notification & Helpline Bar */}
      <div className="top-utility-bar" style={{
        background: '#0f172a',
        color: '#ffffff',
        fontSize: '0.82rem',
        padding: '0.4rem 1.2rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.6rem'
        }}>
          {/* Left Side: IRDAI License Badge & EMI Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#93c5fd', fontWeight: 600, fontSize: '0.78rem' }}>
              <ShieldCheck size={14} color="#60a5fa" /> IRDAI Licensed Advisory
            </span>
            <span style={{ background: 'rgba(37, 99, 235, 0.25)', color: '#93c5fd', padding: '0.15rem 0.65rem', borderRadius: '9999px', fontSize: '0.74rem', fontWeight: 700 }}>
              💳 {lang === 'ml' ? 'ഇഎംഐ സൗകര്യം ലഭ്യമാണ്' : 'EMI Options Available'}
            </span>
          </div>

          {/* Right Side: Phone Number Helpline & Desktop Language Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', whiteSpace: 'nowrap', marginLeft: 'auto' }}>
            <a
              href="tel:+917025984646"
              title="Call Helpline"
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              <PhoneCall size={14} color="#60a5fa" /> Helpline: +91 70259 84646
            </a>

            <div className="desktop-top-lang" style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={toggleLanguage}
                title={lang === 'en' ? 'Switch to Malayalam' : 'Switch to English'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.25rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Globe size={13} color="#93c5fd" />
                <span>{lang === 'en' ? 'മലയാളം' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Full-Width Edge-to-Edge Navigation Header */}
      <header style={{
        width: '100%',
        position: 'relative',
        background: isScrolled ? 'rgba(255, 255, 255, 0.96)' : '#ffffff',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease-in-out'
      }}>
        <div className="nav-container" style={{
          maxWidth: '1600px',
          margin: '0 auto',
          height: isScrolled ? '58px' : '66px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          transition: 'all 0.3s ease-in-out'
        }}>
          {/* Brand Logo Text */}
          <div
            onClick={() => handleNavClick('hero')}
            className="brand-logo"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.4rem',
              letterSpacing: '-0.02em',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              marginRight: '0.8rem',
              color: 'var(--text-dark)',
              flexShrink: 0
            }}
          >
            Ameen <span style={{ color: 'var(--primary-blue)' }}>Insurance</span>
          </div>

          {/* Navigation Links + Book Consultation CTA Group (Desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', marginLeft: 'auto' }} className="desktop-only">
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem'
            }}>
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

            <button
              onClick={() => handleNavClick('booking')}
              className="btn-primary nav-book-btn"
              style={{
                height: '40px',
                padding: '0 1.3rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                borderRadius: '9999px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                background: 'var(--primary-blue)',
                boxShadow: '0 4px 14px rgba(1, 58, 222, 0.28)',
                flexShrink: 0
              }}
            >
              <Calendar size={15} color="#ffffff" /> Book Consultation
            </button>
          </div>

          {/* Mobile Right Controls: Compact Malayalam Language Pill + Hamburger */}
          <div className="mobile-controls" style={{ display: 'none', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
            <button
              onClick={toggleLanguage}
              title={lang === 'en' ? 'Switch to Malayalam' : 'Switch to English'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--primary-blue)',
                background: lang === 'ml' ? 'var(--accent-sky-light)' : '#ffffff',
                color: 'var(--primary-blue)',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              <Globe size={13} color="var(--primary-blue)" />
              <span>{lang === 'en' ? 'മലയാളം' : 'ENG'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation"
              style={{
                background: 'var(--bg-card-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '10px',
                color: 'var(--text-dark)',
                cursor: 'pointer',
                padding: 0,
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-hamburger"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Anchored directly under header) */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0.75rem',
            right: '0.75rem',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.16)',
            zIndex: 1000
          }}>
            {/* Mobile Language Switcher Row in Drawer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '0.6rem',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '0.2rem'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Language Preference:
              </span>
              <button
                onClick={toggleLanguage}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  height: '34px',
                  padding: '0 0.85rem',
                  borderRadius: '9999px',
                  border: '1.5px solid var(--primary-blue)',
                  background: lang === 'ml' ? 'var(--accent-sky-light)' : '#ffffff',
                  color: 'var(--primary-blue)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <Globe size={14} color="var(--primary-blue)" />
                <span>{lang === 'en' ? 'മലയാളം' : 'English'}</span>
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.6rem 0',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: activeTab === item.id ? 'var(--primary-blue)' : 'var(--text-dark)',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('booking')}
              className="btn-primary"
              style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', fontSize: '0.9rem' }}
            >
              <Calendar size={16} /> Book Consultation
            </button>
          </div>
        )}

        {/* Auto-disappearing Center Rectangular Notification Card Modal */}
        {showMobileNotice && (
          <div
            className="center-utility-overlay"
            onClick={() => setShowMobileNotice(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 1200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            <div
              className="center-utility-card"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '400px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
                padding: '1.6rem',
                borderRadius: '16px',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMobileNotice(false)}
                aria-label="Dismiss notification"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: 'none',
                  borderRadius: '50%',
                  color: '#ffffff',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>

              {/* IRDAI Header Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(96, 165, 250, 0.18)',
                color: '#60a5fa',
                padding: '0.3rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '0.8rem'
              }}>
                <ShieldCheck size={15} color="#60a5fa" /> IRDAI Authorized #129/153
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.3rem', fontWeight: 800 }}>
                Ameen Nellikkunnan Insurance Advisory
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', marginBottom: '1.1rem', fontWeight: 600 }}>
                Palakkad, Kerala • 15+ Years Trust
              </p>

              {/* Feature Highlights Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <span style={{ color: '#60a5fa', fontWeight: 800 }}>💳</span>
                  <span><strong>EMI Available</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <span style={{ color: '#34d399', fontWeight: 800 }}>🛡️</span>
                  <span>Unbiased Multi-Insurer Comparisons</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 800 }}>🏥</span>
                  <span>24/7 Cashless Hospital Claim Assistance</span>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                <a
                  href="https://wa.me/917025984646?text=Hi%20Ameen,%20I%20would%20like%20to%20get%20a%20free%20health%20insurance%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '0.75rem',
                    fontSize: '0.88rem',
                    textAlign: 'center',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  💬 WhatsApp Ameen for Quick Quote
                </a>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @media (max-width: 960px) {
            .desktop-only, .desktop-top-lang { display: none !important; }
            .mobile-controls { display: flex !important; }
            .nav-container { padding: 0 1rem !important; }
            .brand-logo { font-size: 1.25rem !important; }
          }
          @media (max-width: 768px) {
            .top-utility-bar {
              padding: 0.35rem 0.8rem !important;
              font-size: 0.76rem !important;
            }
          }
          @media (max-width: 480px) {
            .brand-logo { font-size: 1.15rem !important; }
          }
        `}</style>
      </header>
    </div>
  );
}
