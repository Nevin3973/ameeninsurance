import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onStartQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leadForm, setLeadForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    insuranceType: 'Health Insurance'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const heroSlides = [
    {
      id: 'family-protection',
      image: '/family-hero-notext.png',
      badge: 'Muhammed Ameen • Independent Insurance Consultant',
      title: 'Protect Your Family with the Right Health & Life Cover',
      subtitle: '15 years of independent guidance across India\'s top 5 insurance partners.',
      primaryBtnText: 'Compare Plans',
      primaryBtnTarget: 'products',
      secondaryBtnText: 'Book Consultation',
      secondaryBtnTarget: 'booking',
      pills: ['15+ Years Experience', 'Free 1-on-1 Advice']
    },
    {
      id: 'claim-advocacy',
      image: '/hero-slide-3.png',
      badge: '100% Dedicated Claim Settlement Support',
      title: 'Hassle-Free Cashless Admission & 24/7 Claim Support',
      subtitle: 'Direct hospital desk coordination across 14,000+ network hospitals.',
      primaryBtnText: 'Claims Assistance',
      primaryBtnTarget: 'claims',
      secondaryBtnText: 'WhatsApp Ameen',
      secondaryBtnTarget: 'https://wa.me/919812345678',
      isExternalSecondary: true,
      pills: ['14,000+ Hospitals', '24/7 Emergency Support']
    },
    {
      id: 'unbiased-partners',
      image: '/hero-banner.png',
      badge: 'IRDAI Licensed Partner Advisory',
      title: 'Compare Plans Across Star Health, Aditya Birla & PSU Insurers',
      subtitle: 'Zero hidden capping & transparent room rent guidance.',
      primaryBtnText: 'View Partners',
      primaryBtnTarget: 'partners',
      secondaryBtnText: 'Calculate Premium',
      secondaryBtnTarget: 'products',
      pills: ['Unbiased Comparison', 'Zero Extra Cost']
    }
  ];

  // Auto-slide effect every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (leadForm.fullName && leadForm.phone) {
      setLeadSubmitted(true);
    }
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlideData = heroSlides[currentSlide];

  return (
    <section id="hero" style={{ background: '#ffffff', padding: '0 0 4rem', marginTop: '-90px' }}>
      {/* FULL-WIDTH DYNAMIC HERO CAROUSEL */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '640px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: '3.5rem',
        paddingTop: '110px'
      }}>
        {/* Carousel Slide Images (Crossfade Animation & 100% Fit Visibility) */}
        {heroSlides.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="hero-slide-img"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              zIndex: idx === currentSlide ? 1 : 0,
              opacity: idx === currentSlide ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out'
            }}
          />
        ))}

        {/* Rich Dark Gradient Overlay for Maximum Text Contrast */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.88) 100%)',
          zIndex: 2
        }} />

        {/* Left Arrow Navigation Button */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          style={{
            position: 'absolute',
            left: '20px',
            top: '55%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          onClick={handleNextSlide}
          aria-label="Next Slide"
          style={{
            position: 'absolute',
            right: '20px',
            top: '55%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Overlaid Slide Content & Actions */}
        <div className="container" style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: '#ffffff',
          padding: '3rem 1.5rem 4.5rem'
        }}>
          <div className="pill-badge" style={{
            marginBottom: '1.2rem',
            background: 'rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <Award size={16} color="#60a5fa" /> {activeSlideData.badge}
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5.2vw, 3.5rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            marginBottom: '1.2rem',
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
            maxWidth: '920px',
            margin: '0 auto 1.2rem'
          }}>
            {activeSlideData.title}
          </h1>

          <p style={{
            fontSize: '1.18rem',
            lineHeight: 1.6,
            color: '#f1f5f9',
            marginBottom: '2.2rem',
            maxWidth: '740px',
            margin: '0 auto 2.2rem',
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.35)'
          }}>
            {activeSlideData.subtitle}
          </p>

          {/* Action Buttons Overlaid on Banner */}
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              onClick={() => handleNavClick(activeSlideData.primaryBtnTarget)}
              className="btn-primary"
              style={{
                padding: '0.95rem 2.4rem',
                fontSize: '1.05rem',
                background: '#1d4ed8',
                boxShadow: '0 4px 14px rgba(29, 78, 216, 0.4)'
              }}
            >
              {activeSlideData.primaryBtnText} <ArrowRight size={18} />
            </button>

            {activeSlideData.isExternalSecondary ? (
              <a
                href={activeSlideData.secondaryBtnTarget}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{
                  padding: '0.95rem 2.4rem',
                  fontSize: '1.05rem',
                  background: '#ffffff',
                  color: '#058340',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                  textDecoration: 'none'
                }}
              >
                {activeSlideData.secondaryBtnText}
              </a>
            ) : (
              <button
                onClick={() => handleNavClick(activeSlideData.secondaryBtnTarget)}
                className="btn-secondary"
                style={{
                  padding: '0.95rem 2.4rem',
                  fontSize: '1.05rem',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)'
                }}
              >
                {activeSlideData.secondaryBtnText}
              </button>
            )}
          </div>

          {/* Dynamic Highlight Badges */}
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.8rem' }}>
            {activeSlideData.pills.map((pill, idx) => (
              <div key={idx} className="pill-badge" style={{ background: 'rgba(255, 255, 255, 0.16)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.28)' }}>
                {pill}
              </div>
            ))}
          </div>

          {/* Carousel Slide Indicators (Dots) */}
          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', alignItems: 'center' }}>
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlide ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  background: idx === currentSlide ? '#60a5fa' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Free Consultation Lead Capture Form Card */}
      <div className="container">
        <div style={{
          maxWidth: '1060px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="pill-badge" style={{ marginBottom: '1rem', background: 'var(--accent-sky-light)', border: 'none' }}>
                <ShieldCheck size={16} color="var(--primary-blue)" /> Direct Consultancy
              </span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Get a Free Consultation
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Share a few details and Muhammed Ameen will get back to you with the right health or life insurance options — no obligation, no pressure.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span>Unbiased recommendations from 4 top insurers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span>Zero service fees or commission markups</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span>Hands-on claim settlement assistance</span>
                </div>
              </div>
            </div>

            {/* Lead Form Box */}
            <div style={{
              background: 'var(--bg-card-alt)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              border: '1px solid var(--border-light)'
            }}>
              {!leadSubmitted ? (
                <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={leadForm.fullName}
                      onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Insurance Type of Interest
                    </label>
                    <select
                      value={leadForm.insuranceType}
                      onChange={(e) => setLeadForm({ ...leadForm, insuranceType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                    >
                      <option value="Health Insurance">Health Insurance</option>
                      <option value="Life Insurance">Life Insurance</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem', marginTop: '0.4rem' }}>
                    Get My Free Quote <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={46} color="var(--primary-blue)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>Thank You!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Muhammed Ameen will contact you shortly regarding your {leadForm.insuranceType} inquiry.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Trust Metrics Bar */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 'var(--radius-md)',
          padding: '1.8rem 2rem',
          color: '#ffffff',
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.15)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          textAlign: 'center'
        }} className="grid-4">
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.2rem' }}>₹150+ Cr</div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Claims Settlement Advocacy</div>
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.2rem' }}>5,000+</div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Families Protected Across India</div>
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.2rem' }}>15+ Years</div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>IRDAI Advisory Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', marginBottom: '0.2rem' }}>4.9 ★ / 5</div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>450+ Verified Client Reviews</div>
          </div>
        </div>
      </div>


      <style>{`
        @media (max-width: 768px) {
          .hero-slide-img {
            object-fit: cover !important;
            object-position: center top !important;
          }
          #hero .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
