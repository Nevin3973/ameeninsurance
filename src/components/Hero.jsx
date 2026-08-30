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
    pincode: '',
    location: '',
    insuranceType: 'Health Insurance'
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handlePincodeChange = async (e) => {
    const val = e.target.value;
    setLeadForm((prev) => ({ ...prev, pincode: val }));

    if (val.trim().length === 6) {
      const pinNum = val.trim();
      const knownPincodes = {
        '678001': 'Palakkad Town, Kerala',
        '678002': 'Palakkad Fort / Stadium Bypass, Kerala',
        '678004': 'Kottayi, Palakkad, Kerala',
        '678101': 'Chittur, Palakkad, Kerala',
        '678501': 'Alathur, Palakkad, Kerala',
        '679101': 'Ottapalam, Palakkad, Kerala',
        '682001': 'Kochi (Cochin), Kerala',
        '682011': 'Kaloor, Ernakulam, Kerala',
        '682016': 'MG Road, Ernakulam, Kerala',
        '682030': 'Edappally, Kochi, Kerala',
        '682031': 'Kalamassery, Kochi, Kerala',
        '695001': 'Trivandrum (Thiruvananthapuram), Kerala',
        '695011': 'Vellayambalam, Trivandrum, Kerala',
        '670001': 'Kannur, Kerala',
        '680001': 'Thrissur, Kerala',
        '686001': 'Kottayam, Kerala',
        '689101': 'Tiruvalla, Pathanamthitta, Kerala',
        '691001': 'Kollam, Kerala',
        '671121': 'Kasaragod, Kerala',
        '676505': 'Malappuram, Kerala',
        '685602': 'Munnar, Idukki, Kerala',
        '673576': 'Kalpetta, Wayanad, Kerala',
        '110001': 'New Delhi',
        '400001': 'Mumbai, Maharashtra',
        '560001': 'Bengaluru, Karnataka',
        '600001': 'Chennai, Tamil Nadu'
      };

      if (knownPincodes[pinNum]) {
        setLeadForm((prev) => ({ ...prev, location: knownPincodes[pinNum] }));
        return;
      }

      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pinNum}`);
        const data = await res.json();
        if (data && data[0] && data[0].Status === 'Success' && data[0].PostOffice && data[0].PostOffice.length > 0) {
          const po = data[0].PostOffice[0];
          const locStr = `${po.District || po.Name}, ${po.State}`;
          setLeadForm((prev) => ({ ...prev, location: locStr }));
        }
      } catch (err) {
        console.error('Pincode lookup error:', err);
      }
    }
  };

  const claimsWaUrl = `https://wa.me/917025984646?text=${encodeURIComponent("Hi Ameen Nellikkunnan, I need emergency assistance with a hospital claim.")}`;

  const heroSlides = [
    {
      id: 'maternity-care',
      image: '/hero-maternity-indian.png',
      mobileImage: '/hero-maternity-indian.png',
      badge: t('heroBadge1', 'Star Women Care & Maternity Protection • Day-1 Newborn Cover'),
      title: t('heroTitle1', 'Maternity & Family Health Protection in Kerala'),
      subtitle: t('heroSubtitle1', 'Normal & C-Section delivery cover, Day-1 newborn hospitalisation, ART coverage & vaccination benefits with zero hassle.'),
      primaryBtnText: t('heroBtnMaternity', 'Explore Maternity Cover'),
      primaryBtnTarget: 'products',
      secondaryBtnText: t('heroBtnBook', 'Talk to Ameen'),
      secondaryBtnTarget: 'booking',
      pills: lang === 'ml' ? ['പ്രസവ ചികിത്സാ പരിരക്ഷ', 'നവജാത ശിശു കവറേജ്'] : ['Maternity Delivery Cover', 'Day-1 Newborn Protection']
    },
    {
      id: 'accident-care',
      image: '/hero-accident-care-indian.png',
      mobileImage: '/hero-accident-care-indian.png',
      badge: t('heroBadge2', '24/7 Personal Accident & Emergency Care Desk Support'),
      title: t('heroTitle2', 'Accident Trauma & Hospitalization Cover: Direct Claim Support'),
      subtitle: t('heroSubtitle2', 'Instant cashless admission at 14,000+ network hospital helpdesks during accidental emergencies & critical medical trauma.'),
      primaryBtnText: t('heroBtnAccident', 'Emergency Claim Help'),
      primaryBtnTarget: 'claims',
      secondaryBtnText: t('heroBtnWhatsapp', 'WhatsApp Ameen'),
      secondaryBtnTarget: claimsWaUrl,
      isExternalSecondary: true,
      pills: lang === 'ml' ? ['അപകട ചികിത്സാ സുരക്ഷ', 'ക്ലെയിം അടിയന്തര സഹായം'] : ['Accident & Trauma Cover', '24/7 Claim Desk Support']
    },
    {
      id: 'family-protection',
      image: '/family-hero-notext.png',
      mobileImage: '/family-hero-notext.png',
      badge: t('heroBadge4', 'Family Floater & Senior Citizen Health Coverage'),
      title: t('heroTitle4', 'Protect Your Entire Family: Parents, Spouse & Children in One Policy'),
      subtitle: t('heroSubtitle4', '100% restoration of sum insured, zero room-rent capping, and pre-existing disease coverage designed for Indian families.'),
      primaryBtnText: t('heroBtnFamily', 'Compare Family Plans'),
      primaryBtnTarget: 'products',
      secondaryBtnText: t('heroBtnRoomRent', 'Check Room Rent Limits'),
      secondaryBtnTarget: 'products',
      pills: lang === 'ml' ? ['100% റീസ്റ്റോറേഷൻ അലവൻസ്', 'റൂം റെന്റ് ക്യാപ്പിംഗ് ഇല്ല'] : ['100% Unlimited Restore', 'Zero Room Rent Capping']
    },
    {
      id: 'nri-expats',
      image: '/hero-slide-3.png',
      mobileImage: '/hero-slide-3.png',
      badge: t('heroBadge5', 'GCC Expat & NRI Health Advisory (UAE, KSA, Qatar, Oman)'),
      title: t('heroTitle5', 'Exclusive 15% - 25% NRI Discounts on Health Insurance for Parents'),
      subtitle: t('heroSubtitle5', 'Special Aditya Birla Health Assure & Star Health policy packages for non-resident Indians protecting parents in Kerala.'),
      primaryBtnText: t('heroBtnNri', 'Claim NRI Discount'),
      primaryBtnTarget: 'nri',
      secondaryBtnText: t('heroBtnWhatsapp', 'WhatsApp Advisory'),
      secondaryBtnTarget: claimsWaUrl,
      isExternalSecondary: true,
      pills: lang === 'ml' ? ['25% വരെ NRI ഡിസ്കൗണ്ട്', 'കേരളത്തിൽ ക്യാഷ്‌ലെസ്സ് സൗകര്യം'] : ['Up to 25% NRI Discount', 'Cashless Care in Kerala']
    },
    {
      id: 'unbiased-advisory',
      image: '/hero-banner.png',
      mobileImage: '/hero-banner.png',
      badge: t('heroBadge3', 'IRDAI Licensed Health Insurance Specialist #129/153 (Palakkad)'),
      title: t('heroTitle3', 'Compare Star Health, Aditya Birla & Government PSU Policies'),
      subtitle: t('heroSubtitle3', '15+ years of honest 1-on-1 advice for families & GCC NRIs with zero sales pressure or hidden commission markups.'),
      primaryBtnText: t('heroBtnCompare', 'Compare All Partners'),
      primaryBtnTarget: 'partners',
      secondaryBtnText: t('heroBtnBook', 'Book Free Consultation'),
      secondaryBtnTarget: 'booking',
      pills: lang === 'ml' ? ['15+ വർഷത്തെ വിശ്വസ്തത', 'സുതാര്യമായ താരതമ്യം'] : ['15+ Years Trust in Palakkad', 'Unbiased 1-on-1 Guidance']
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
    <section id="hero" style={{ background: '#f8fafc', padding: '0 0 3.5rem', marginTop: '-90px' }}>
      {/* FULL-WIDTH DYNAMIC AD BANNER CAROUSEL */}
      <div style={{
        position: 'relative',
        width: '100%',
        background: '#0f172a',
        overflow: 'hidden',
        paddingTop: '90px'
      }}>
        {/* Ad Banner Image Display Container */}
        <div className="hero-banner-container">
          {heroSlides.map((slide, idx) => (
            <picture
              key={slide.id}
              className="hero-banner-picture"
              style={{
                display: idx === currentSlide ? 'block' : 'none'
              }}
            >
              <source media="(max-width: 768px)" srcSet={slide.mobileImage || slide.image} />
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-banner-img"
              />
            </picture>
          ))}
        </div>

        {/* Dedicated Control Bar Directly Below Ad Banner (0% Overlap) */}
        <div style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="container" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Round Checkbox Indicators */}
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {idx === currentSlide ? (
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 10px rgba(96, 165, 250, 0.7)'
                    }}>
                      <CheckCircle2 size={14} color="#ffffff" />
                    </div>
                  ) : (
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.25s ease'
                    }} />
                  )}
                </button>
              ))}
            </div>

            {/* Side-by-Side Small Action Buttons */}
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <button
                onClick={() => handleNavClick(activeSlideData.primaryBtnTarget)}
                className="btn-primary"
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  height: '36px',
                  whiteSpace: 'nowrap',
                  background: '#1d4ed8',
                  boxShadow: '0 3px 10px rgba(29, 78, 216, 0.4)'
                }}
              >
                {activeSlideData.primaryBtnText} <ArrowRight size={14} />
              </button>

              {activeSlideData.isExternalSecondary ? (
                <a
                  href={activeSlideData.secondaryBtnTarget}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    height: '36px',
                    whiteSpace: 'nowrap',
                    background: '#ffffff',
                    color: '#058340',
                    border: 'none',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {activeSlideData.secondaryBtnText}
                </a>
              ) : (
                <button
                  onClick={() => handleNavClick(activeSlideData.secondaryBtnTarget)}
                  className="btn-secondary"
                  style={{
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    height: '36px',
                    whiteSpace: 'nowrap',
                    background: '#ffffff',
                    color: '#0f172a',
                    border: 'none',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {activeSlideData.secondaryBtnText}
                </button>
              )}
            </div>
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
          <div className={leadSubmitted ? "" : "grid-2"} style={{ gap: '3rem', alignItems: 'flex-start' }}>
            {!leadSubmitted && (
              <div>
                <span className="pill-badge" style={{ marginBottom: '1rem', background: 'var(--accent-sky-light)', border: 'none' }}>
                  <ShieldCheck size={16} color="var(--primary-blue)" /> {lang === 'ml' ? 'നേരിട്ടുള്ള ഉപദേശം' : 'Direct Advisor Contact'}
                </span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                  {t('leadFormTitle', 'Request a Personal Callback')}
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {t('leadFormSubtitle', "Share your details and I'll personally review policy options for your family. No obligation, no spam calls.")}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="var(--primary-blue)" />
                    <span>{lang === 'ml' ? 'മികച്ച കമ്പനികളിൽ നിന്നുള്ള സുതാര്യമായ വിവരങ്ങൾ' : 'Side-by-side comparison across Star, Aditya Birla & PSU insurers'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="var(--primary-blue)" />
                    <span><strong>{lang === 'ml' ? 'ഇഎംഐ സൗകര്യം ലഭ്യമാണ്' : 'EMI Available'}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="var(--primary-blue)" />
                    <span>{lang === 'ml' ? 'ആശുപത്രി ക്ലെയിമുകളിൽ സമ്പൂർണ്ണ സഹായം' : 'Direct hospital claim desk assistance when admitted'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Lead Form Box / Post Consultation Offers View */}
            <div style={{
              background: 'var(--bg-card-alt)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              border: '1px solid var(--border-light)',
              width: '100%'
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

                  {/* Pincode Input with Auto Location Update */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        placeholder="e.g. 673001"
                        value={leadForm.pincode}
                        onChange={handlePincodeChange}
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
                        Location / City
                      </label>
                      <input
                        type="text"
                        readOnly
                        placeholder="Auto-updated via pincode"
                        value={leadForm.location}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                          background: '#f1f5f9',
                          color: '#0f172a',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          outline: 'none'
                        }}
                      />
                    </div>
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
                      <option value="Health Insurance">Health Insurance</option>
                      <option value="Life Insurance">Life Insurance</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem', marginTop: '0.4rem' }}>
                    {t('leadFormSubmit', 'Get My Free Quote')} <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                /* Post Consultation Plan Offers & Details Section */
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border-light)' }}>
                    <CheckCircle2 size={48} color="var(--primary-blue)" style={{ margin: '0 auto 0.8rem' }} />
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem', color: 'var(--text-dark)' }}>{t('leadFormSuccessTitle', 'Thank You, ' + (leadForm.fullName || 'Valued Customer') + '!')}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                      Ameen Nellikkunnan has received your details for <strong>{leadForm.location ? leadForm.location : 'your area'}</strong> and will call you back shortly. In the meantime, explore our top featured health insurance plan offers below:
                    </p>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: 'var(--primary-blue)', textAlign: 'center' }}>
                    🔥 Top Health Insurance Offers & Details
                  </h4>

                  <div className="grid-3" style={{ gap: '1.2rem' }}>
                    {/* Offer Card 1 */}
                    <div style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, background: '#dbeafe', color: 'var(--primary-blue)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>STAR HEALTH</span>
                      <h5 style={{ fontSize: '1.1rem', margin: '0.5rem 0 0.3rem' }}>Star Super Star</h5>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                        100% Cashless Hospitalization, Zero Room Rent Capping, Automatic 100% Restoration.
                      </p>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '0.8rem' }}>
                        Sum Insured: ₹5L - ₹1 Crore
                      </div>
                      <button onClick={() => handleNavClick('products')} className="btn-secondary" style={{ width: '100%', padding: '0.55rem', fontSize: '0.8rem' }}>
                        Explore Offer Details
                      </button>
                    </div>

                    {/* Offer Card 2 - Aditya Birla with NRI discount highlight */}
                    <div style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '12px', border: '2px solid #058340', boxShadow: '0 4px 12px rgba(5, 131, 64, 0.1)', position: 'relative' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, background: '#dcfce7', color: '#058340', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>ADITYA BIRLA</span>
                      <span style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '0.68rem', fontWeight: 800, background: '#fef08a', color: '#854d0e', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        ✨ NRI Special Discount
                      </span>
                      <h5 style={{ fontSize: '1.1rem', margin: '0.5rem 0 0.3rem' }}>Health Assure</h5>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                        HealthReturns™ wellness rewards plus <strong>exclusive discounts for NRIs & expat families</strong>.
                      </p>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#058340', marginBottom: '0.8rem' }}>
                        Sum Insured: ₹3L - ₹2 Crore
                      </div>
                      <button onClick={() => handleNavClick('products')} className="btn-primary" style={{ width: '100%', padding: '0.55rem', fontSize: '0.8rem', background: '#058340' }}>
                        Claim NRI Offer
                      </button>
                    </div>

                    {/* Offer Card 3 */}
                    <div style={{ background: '#ffffff', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, background: '#fae8ff', color: '#a21caf', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>WOMEN & MATERNITY</span>
                      <h5 style={{ fontSize: '1.1rem', margin: '0.5rem 0 0.3rem' }}>Star Womens Care</h5>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                        Normal & C-Section delivery cover, Day-1 Newborn cover, and vaccination allowance.
                      </p>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#a21caf', marginBottom: '0.8rem' }}>
                        Sum Insured: ₹5L - ₹25L
                      </div>
                      <button onClick={() => handleNavClick('products')} className="btn-secondary" style={{ width: '100%', padding: '0.55rem', fontSize: '0.8rem' }}>
                        View Maternity Cover
                      </button>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <button onClick={() => setLeadSubmitted(false)} className="btn-secondary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
                      Submit Another Consultation Request
                    </button>
                  </div>
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
