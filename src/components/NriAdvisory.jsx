import React, { useState } from 'react';
import { Plane, ShieldCheck, CreditCard, Clock, PhoneCall, CheckCircle2, ArrowRight, MessageSquare, Building2, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NriAdvisory({ onBookConsultation, onOpenWizard }) {
  const { lang, t } = useLanguage();

  const nriBenefits = [
    {
      icon: Heart,
      title: 'Parent Health Protection in Kerala',
      desc: 'Comprehensive medical insurance for elderly parents living in Kerala with zero room rent capping, cashless hospitalization at 14,000+ hospitals, and pre-existing disease cover.'
    },
    {
      icon: CreditCard,
      title: 'NRE / NRO & International Card Payments',
      desc: 'Pay policy premiums seamlessly via NRE/NRO bank accounts, international debit/credit cards, or online UPI with instant e-policy issuance to your email.'
    },
    {
      icon: Clock,
      title: 'Gulf & Worldwide Time-Zone Support',
      desc: 'Schedule 1-on-1 consultations or WhatsApp chats suited to UAE, Qatar, Saudi Arabia, Oman, Kuwait, Bahrain, and US/UK time zones.'
    },
    {
      icon: ShieldCheck,
      title: 'Section 80D Tax Savings in India',
      desc: 'Avail Indian income tax deductions under Section 80D up to ₹75,000 for premiums paid towards dependent parents\' health insurance.'
    }
  ];

  const nriWhatsAppMsg = encodeURIComponent("Hi Muhammed Ameen, I am an NRI looking for health insurance for my parents in Kerala. Please guide me.");
  const nriWhatsAppUrl = `https://wa.me/919812345678?text=${nriWhatsAppMsg}`;

  return (
    <section id="nri" className="section-padding" style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem', background: '#ffffff', color: 'var(--primary-blue)' }}>
            <Plane size={16} /> EXPAT & NRI HEALTH ADVISORY
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Dedicated Insurance Advisory for NRIs & Gulf Families
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.6 }}>
            Protect your parents back home in Kerala with top-tier cashless health coverage, seamless NRE/NRO payments, and 24/7 hospital claim advocacy from Muhammed Ameen.
          </p>
        </div>

        {/* Highlight Banner Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          color: '#ffffff',
          marginBottom: '3.5rem',
          boxShadow: '0 16px 40px rgba(15, 23, 42, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(96, 165, 250, 0.1)',
            pointerEvents: 'none'
          }} />

          <div className="responsive-grid-2-1" style={{ alignItems: 'center' }}>
            <div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#60a5fa',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                GULF & OVERSEAS EXPAT SPECIAL
              </span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#ffffff', marginBottom: '0.8rem', lineHeight: 1.25 }}>
                Peace of Mind for Your Parents in Kerala While You Are Overseas
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Whether you live in Dubai, Abu Dhabi, Doha, Riyadh, Muscat, or London, ensure your family has instant cashless admission at Kerala’s premier hospitals (Aster, KIMS, VPS Lakeshore, Baby Memorial) without out-of-pocket delays.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={nriWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '0.85rem 1.8rem',
                    fontSize: '0.95rem'
                  }}
                >
                  <MessageSquare size={18} /> Chat on Gulf WhatsApp
                </a>
                <button
                  onClick={onBookConsultation}
                  className="btn-secondary"
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '0.85rem 1.8rem',
                    fontSize: '0.95rem'
                  }}
                >
                  <Clock size={18} /> Schedule Video Call
                </button>
              </div>
            </div>

            {/* Right Side Stats / Highlights Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 'var(--radius-md)',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Building2 size={24} color="#60a5fa" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>14,000+ Hospitals</div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Cashless Network Across India</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <ShieldCheck size={24} color="#60a5fa" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>100% Direct Advocacy</div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Ameen Coordinates Hospital Desk</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <CreditCard size={24} color="#60a5fa" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>NRE / NRO Cards Accepted</div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Instant e-Policy Issuance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core NRI Benefits Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {nriBenefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="clean-card" style={{ background: '#ffffff', padding: '2rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--accent-sky-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem'
                }}>
                  <Icon size={24} color="var(--primary-blue)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wizard CTA Bar */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          background: 'var(--bg-hero)',
          padding: '2.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Not sure which plan suits your family best?</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
            Use our 3-step Plan Finder Wizard to receive tailored policy recommendations in under 60 seconds.
          </p>
          <button onClick={onOpenWizard} className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
            Launch Plan Finder Wizard <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
