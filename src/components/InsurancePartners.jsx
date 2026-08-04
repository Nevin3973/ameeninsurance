import React from 'react';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InsurancePartners() {
  const partners = [
    {
      id: 'star-health',
      brandName: 'Star Health Insurance',
      legalName: 'Star Health and Allied Insurance Company Limited',
      logo: '/star-health.png',
      overview: "India's first standalone health insurance company with over 14,000 network hospitals.",
      hospitals: '14,000+ Hospitals',
      tag: 'Standalone Health Leader',
      logoHeight: '52px'
    },
    {
      id: 'aditya-birla',
      brandName: 'Aditya Birla Health Insurance',
      legalName: 'Aditya Birla Health Insurance Company Limited',
      logo: '/aditya-birla.webp',
      overview: 'Pioneer of HealthReturns™ incentivised wellness programs with 10,000+ cashless healthcare providers.',
      hospitals: '10,000+ Hospitals',
      tag: 'Wellness & Rewards Pioneer',
      logoHeight: '50px'
    },
    {
      id: 'united-india',
      brandName: 'United India Insurance',
      legalName: 'United India Insurance Company Limited',
      logo: '/united-india.webp',
      overview: 'Leading Public Sector Undertaking (PSU) insurer offering high financial security & family floater plans.',
      hospitals: '7,500+ Hospitals',
      tag: 'Govt. PSU Insurer',
      logoHeight: '54px'
    },
    {
      id: 'new-india',
      brandName: 'New India Assurance',
      legalName: 'The New India Assurance Company Limited',
      logo: '/NewIndiaAssurance.svg',
      overview: "India's largest multinational public sector general insurance company rated A- (Excellent) by AM Best.",
      hospitals: '8,000+ Hospitals',
      tag: 'Multinational PSU Giant',
      logoHeight: '50px'
    },
    {
      id: 'national-insurance',
      brandName: 'National Insurance',
      legalName: 'National Insurance Company Limited',
      logo: '/National.svg',
      overview: "India's oldest public sector general insurance company providing comprehensive health, floater & personal cover.",
      hospitals: '6,500+ Hospitals',
      tag: 'Govt. PSU Pioneer',
      logoHeight: '52px'
    }
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partners" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem', background: '#ffffff' }}>
            <Award size={16} color="var(--primary-blue)" /> IRDAI Licensed Partner Insurers
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>
            Our Trusted Insurance Partners
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            We work directly with India's top health & PSU general insurance companies to bring you unbiased policy choices and 100% claim settlement advocacy.
          </p>
        </div>

        {/* 5 Partner Cards Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="clean-card"
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                {/* Logo & Tag Header Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{
                    minHeight: '68px',
                    minWidth: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.05)'
                  }}>
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={`${partner.brandName} Logo`}
                        style={{
                          height: partner.logoHeight || '50px',
                          maxWidth: '180px',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    ) : (
                      partner.customLogo
                    )}
                  </div>

                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    background: 'var(--bg-hero)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    border: '1px solid #bae6fd'
                  }}>
                    {partner.tag}
                  </span>
                </div>

                {/* Partner Details */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.3rem', color: 'var(--text-dark)' }}>
                  {partner.brandName}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', fontWeight: 600, marginBottom: '1rem' }}>
                  {partner.legalName}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {partner.overview}
                </p>
              </div>

              <div>
                {/* Highlights bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-card-alt)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  marginBottom: '1.2rem',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  <CheckCircle2 size={16} color="var(--primary-blue)" />
                  <span>Cashless Network: <strong>{partner.hospitals}</strong></span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="btn-secondary"
                    style={{ padding: '0.7rem', fontSize: '0.88rem' }}
                  >
                    View Plans
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="btn-primary"
                    style={{ padding: '0.7rem', fontSize: '0.88rem' }}
                  >
                    Get Consultation <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

