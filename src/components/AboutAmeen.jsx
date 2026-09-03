import React, { useState } from 'react';
import { Award, ShieldCheck, PhoneCall, CheckCircle2, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function AboutAmeen() {
  const [showFullAboutMobile, setShowFullAboutMobile] = useState(false);

  const achievements = [
    { value: '15+', label: 'Years Experience', desc: 'Dedicated health insurance advisory' },
    { value: '5,000+', label: 'Families Protected', desc: 'Individual & family floater plans' },
    { value: '₹50+ Cr', label: 'Claims Assisted', desc: 'Hands-on hospital settlement' },
    { value: '99.2%', label: 'Client Retention', desc: 'Trusted long-term relationships' }
  ];

  const coreValues = [
    { title: '100% Unbiased Advice', desc: 'We represent your interests across Star Health, Aditya Birla, United India, and New India Assurance, rather than a single insurer.' },
    { title: 'Zero Service Fees', desc: 'Our consultancy services, policy comparison, and ongoing support are provided at zero extra cost to you.' },
    { title: 'Dedicated Claim Advocacy', desc: 'From cashless hospital admission to reimbursement auditing, we stand with you when you need help most.' }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Main 2-Column About Layout */}
        <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center', marginBottom: '3rem' }}>
          
          {/* Left Column: Consultant Profile Card */}
          <div className="clean-card" style={{
            background: 'linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%)',
            border: '1px solid #bae6fd',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 1.8rem',
            textAlign: 'center'
          }}>
            {/* Organic Capsule Oval Portrait */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '200px',
              height: '240px',
              margin: '0 auto 1.2rem',
              borderRadius: '110px',
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(30, 64, 175, 0.16)',
              background: 'linear-gradient(180deg, #dbeafe 0%, #ffffff 100%)'
            }}>
              <img
                src="/Ameen.webp"
                alt="Ameen Nellikkunnan - Independent Insurance Consultant"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.7rem', marginBottom: '0.3rem', color: 'var(--text-dark)' }}>
              Ameen Nellikkunnan
            </h3>

            <p style={{ color: 'var(--primary-blue)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '1rem' }}>
              Independent Health Insurance Consultant
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span className="pill-badge" style={{ background: '#ffffff', border: 'none', fontSize: '0.78rem' }}>
                <Award size={14} /> 15 Years Expertise
              </span>
              <span className="pill-badge" style={{ background: '#ffffff', border: 'none', fontSize: '0.78rem' }}>
                <ShieldCheck size={14} /> IRDAI Authorized
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href="tel:+917025984646"
                className="btn-primary"
                style={{ width: '100%', padding: '0.8rem' }}
              >
                <PhoneCall size={18} /> Call +91 70259 84646
              </a>
              <a
                href="https://wa.me/917025984646"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ width: '100%', padding: '0.8rem', color: '#058340', borderColor: '#bbf7d0' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Biography & Value Proposition */}
          <div>
            <span className="pill-badge" style={{ marginBottom: '0.8rem', background: 'var(--accent-sky-light)', border: 'none' }}>
              <UserCheck size={16} /> Trusted Advisory
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '1rem', lineHeight: 1.25 }}>
              About Ameen Nellikkunnan
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
              With over 15 years of dedicated experience in health insurance and financial protection, <strong>Ameen Nellikkunnan</strong> has guided more than 5,000 families and individuals in choosing the right insurance cover for their unique medical and financial goals.
            </p>

            {/* Mobile Collapsible Wrapper */}
            <div className={`about-extended-content ${showFullAboutMobile ? 'mobile-visible' : 'mobile-hidden'}`}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                Unlike direct sales agents representing a single company, Ameen operates as an independent advisor across India's top 4 insurers (<em>Star Health, Aditya Birla Health, United India, and New India Assurance</em>) to ensure zero hidden capping and 100% claim settlement support.
              </p>

              {/* Personal Human Quote Block */}
              <blockquote style={{
                margin: '0 0 1.5rem',
                padding: '1.1rem 1.3rem',
                background: '#f8fafc',
                borderLeft: '4px solid var(--primary-blue)',
                borderRadius: '0 12px 12px 0',
                fontSize: '0.92rem',
                fontStyle: 'italic',
                color: 'var(--text-dark)',
                lineHeight: 1.6
              }}>
                "When a client calls me at 11 PM because their family member was admitted to emergency care, they don't want insurance jargon or call-center menus. They need someone local who understands the hospital desk, knows policy terms inside out, and gets the paperwork cleared. That is what I do every single day."
                <footer style={{ marginTop: '0.5rem', fontWeight: 700, fontStyle: 'normal', fontSize: '0.84rem', color: 'var(--primary-blue)' }}>
                  - Ameen Nellikkunnan (Palakkad, Kerala)
                </footer>
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.2rem' }}>
                {coreValues.map((val, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'var(--accent-sky-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '0.2rem',
                      flexShrink: 0
                    }}>
                      <CheckCircle2 size={16} color="var(--primary-blue)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.15rem' }}>{val.title}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Read More / Show Less Toggle Button */}
            <button
              onClick={() => setShowFullAboutMobile(!showFullAboutMobile)}
              className="about-mobile-toggle-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                width: '100%',
                padding: '0.65rem 1rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-card-alt)',
                color: 'var(--primary-blue)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              <span>{showFullAboutMobile ? 'Show Less Details' : 'Read Full Biography & Values'}</span>
              {showFullAboutMobile ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-mobile-toggle-btn { display: flex !important; }
            .about-extended-content.mobile-hidden { display: none !important; }
            .about-extended-content.mobile-visible { display: block !important; }
          }
          @media (min-width: 769px) {
            .about-extended-content { display: block !important; }
            .about-mobile-toggle-btn { display: none !important; }
          }
        `}</style>

        {/* 4 Achievements & Stats Bar */}
        <div className="grid-4" style={{ gap: '1.5rem', width: '100%', alignItems: 'stretch' }}>
          {achievements.map((item, idx) => (
            <div key={idx} className="clean-card" style={{
              textAlign: 'center',
              padding: '1.8rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%'
            }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '0.3rem' }}>
                {item.value}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--text-dark)' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
