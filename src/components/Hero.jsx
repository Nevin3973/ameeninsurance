import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onStartQuote, onOpenWizard, onNavigate }) {
  const { lang, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leadForm, setLeadForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    insuranceType: 'Health Insurance'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const claimsWaUrl = `https://wa.me/919812345678?text=${encodeURIComponent("Hi Muhammed Ameen, I need emergency assistance with a hospital claim.")}`;

  const heroSlides = [
    {
      id: 'family-protection',
      image: '/family-hero-notext.png',
      badge: t('heroBadge1', 'Muhammed Ameen • Independent Insurance Consultant'),
      title: t('heroTitle1', 'Protect Your Family with the Right Health & Life Cover'),
      subtitle: t('heroSubtitle1', "15 years of independent guidance across India's top 5 insurance partners."),
      primaryBtnText: t('heroBtnCompare', 'Compare Plans'),
      primaryBtnTarget: 'products',
      secondaryBtnText: t('heroBtnBook', 'Book Consultation'),
      secondaryBtnTarget: 'booking',
      pills: lang === 'ml' ? ['15+ വർഷത്തെ പ്രവൃത്തിപരിചയം', 'സൗജന്യ നേർക്കുനേർ ഉപദേശം'] : ['15+ Years Experience', 'Free 1-on-1 Advice']
    },
    {
      id: 'claim-advocacy',
      image: '/hero-slide-3.png',
      badge: t('heroBadge2', '100% Dedicated Claim Settlement Support'),
      title: t('heroTitle2', 'Hassle-Free Cashless Admission & 24/7 Claim Support'),
      subtitle: t('heroSubtitle2', 'Direct hospital desk coordination across 14,000+ network hospitals.'),
      primaryBtnText: t('heroBtnClaims', 'Claims Assistance'),
      primaryBtnTarget: 'claims',
      secondaryBtnText: t('heroBtnWhatsapp', 'WhatsApp Ameen'),
      secondaryBtnTarget: claimsWaUrl,
      isExternalSecondary: true,
      pills: lang === 'ml' ? ['14,000+ ആശുപത്രികൾ', '24/7 അടിയന്തര സഹായം'] : ['14,000+ Hospitals', '24/7 Emergency Support']
    },
    {
      id: 'unbiased-partners',
      image: '/hero-banner.png',
      badge: t('heroBadge3', 'IRDAI Licensed Partner Advisory'),
      title: t('heroTitle3', 'Compare Plans Across Star Health, Aditya Birla & PSU Insurers'),
      subtitle: t('heroSubtitle3', 'Zero hidden capping & transparent room rent guidance.'),
      primaryBtnText: t('heroBtnPartners', 'View Partners'),
      primaryBtnTarget: 'partners',
      secondaryBtnText: t('heroBtnCalculate', 'Calculate Premium'),
      secondaryBtnTarget: 'products',
      pills: lang === 'ml' ? ['സുതാര്യമായ താരതമ്യം', 'അധിക ചിലവുകളില്ല'] : ['Unbiased Comparison', 'Zero Extra Cost']
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
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
                <ShieldCheck size={16} color="var(--primary-blue)" /> {lang === 'ml' ? 'നേരിട്ടുള്ള സഹായം' : 'Direct Consultancy'}
              </span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                {t('leadFormTitle', 'Get a Free Consultation')}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {t('leadFormSubtitle', 'Share a few details and Muhammed Ameen will get back to you with the right health or life insurance options with zero obligation or pressure.')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span>{lang === 'ml' ? 'മികച്ച കമ്പനികളിൽ നിന്നുള്ള സുതാര്യമായ വിവരങ്ങൾ' : 'Unbiased recommendations from 4 top insurers'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span>{lang === 'ml' ? 'അധിക ചാർജുകളോ ഏജൻസി കമ്മീഷനുകളോ ഇല്ല' : 'Zero service fees or commission markups'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span>{lang === 'ml' ? 'ആശുപത്രി ക്ലെയിമുകളിൽ സമ്പൂർണ്ണ സഹായം' : 'Hands-on claim settlement assistance'}</span>
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
                      {t('leadFormName', 'Full Name *')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ml' ? 'നിങ്ങളുടെ പേര് നൽകുക' : 'Enter your name'}
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
                      {t('leadFormPhone', 'Phone Number *')}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'ml' ? 'ഫോൺ നമ്പർ നൽകുക' : 'Enter mobile number'}
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
                      {t('leadFormEmail', 'Email Address')}
                    </label>
                    <input
                      type="email"
                      placeholder={lang === 'ml' ? 'ഇമെയിൽ വിലാസം (ഓപ്ഷണൽ)' : 'Enter email address'}
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
                      {t('leadFormType', 'Insurance Type of Interest')}
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
                      <option value="Health Insurance">{lang === 'ml' ? 'ആരോഗ്യ ഇൻഷുറൻസ് (Health)' : 'Health Insurance'}</option>
                      <option value="Life Insurance">{lang === 'ml' ? 'ലൈഫ് ഇൻഷുറൻസ് (Life)' : 'Life Insurance'}</option>
                      <option value="General Enquiry">{lang === 'ml' ? 'പൊതുവിവരങ്ങൾ (General Enquiry)' : 'General Enquiry'}</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem', marginTop: '0.4rem' }}>
                    {t('leadFormSubmit', 'Get My Free Quote')} <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={46} color="var(--primary-blue)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{t('leadFormSuccessTitle', 'Thank You!')}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {t('leadFormSuccessDesc', 'Muhammed Ameen will contact you shortly regarding your inquiry.')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Full-Width Edge-to-Edge Trust Metrics Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        width: '100%',
        padding: '2.5rem 0',
        color: '#ffffff',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.15)',
        marginTop: '3.5rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container">
          <div className="grid-4" style={{ width: '100%', alignItems: 'stretch', gap: '1.8rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', width: '100%' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.2rem' }}>₹150+ Cr</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>{t('statClaims', 'Claims Settlement Advocacy')}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', width: '100%' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.2rem' }}>5,000+</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>{t('statFamilies', 'Families Protected Across India')}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', width: '100%' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#60a5fa', marginBottom: '0.2rem' }}>15+ Years</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>{t('statExperience', 'IRDAI Advisory Experience')}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', width: '100%' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b', marginBottom: '0.2rem' }}>4.9 ★ / 5</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>{t('statRating', '450+ Verified Client Reviews')}</div>
            </div>
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
