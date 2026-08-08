import React from 'react';
import { PhoneCall, ShieldCheck, CheckCircle2, Clock, Award, FileCheck } from 'lucide-react';

export default function AmeenExperience() {
  const steps = [
    {
      num: '01',
      title: 'Get Expert 1-on-1 Guidance',
      desc: 'Talk directly to Ameen Nellikkunnan with 15 years of independent insurance expertise. Get clear, unbiased advice tailored to your family without pushy sales tactics or spam calls.',
      highlights: [
        { label: '30-Min Consultation', icon: Clock },
        { label: 'Zero Cost & Zero Fee', icon: CheckCircle2 },
        { label: 'Zero Spam Guarantee', icon: ShieldCheck }
      ]
    },
    {
      num: '02',
      title: 'End-to-End Policy Assistance',
      desc: 'We evaluate plans across Star Health, Aditya Birla Health, United India, and New India Assurance. We handle proposal filing, pre-underwriting checks, and policy setup.',
      highlights: [
        { label: '4 Top Partner Insurers', icon: Building2 },
        { label: 'Transparent Capping Check', icon: FileCheck },
        { label: 'Instant Digital e-Card', icon: Award }
      ]
    },
    {
      num: '03',
      title: 'Lifetime Claim Advocacy',
      desc: 'When hospitalization occurs, you have a dedicated advocate. We coordinate cashless admission with hospital desks and ensure rapid reimbursement settlement within 24 to 48 hours.',
      highlights: [
        { label: '14,000+ Cashless Hospitals', icon: CheckCircle2 },
        { label: 'Direct Desk Support', icon: PhoneCall },
        { label: '24/7 Emergency Help', icon: Clock }
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ background: '#f8fafc', position: 'relative' }}>
      <div className="container">
        {/* Ditto-Style Sticky Pinning Layout Container */}
        <div className="responsive-grid-1-14">

          {/* LEFT COLUMN: STICKY PINNED SIDEBAR (STAYS PINNED WHILE SCROLLING) */}
          <div className="sticky-column" style={{
            background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f7ff 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid #bae6fd',
            boxShadow: '0 10px 30px rgba(2, 132, 199, 0.08)'
          }}>
            <span className="pill-badge" style={{ background: '#ffffff', color: 'var(--primary-blue)', marginBottom: '1.2rem', border: 'none' }}>
              <Award size={16} /> Why Choose Ameen
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--text-dark)' }}>
              The Ameen Insurance Experience
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Simple, transparent, and hassle-free insurance consultation from day one through every claim.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href="#booking"
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                Book a Free Call Now
              </a>
              <a
                href="https://wa.me/919812345678"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  background: '#ffffff',
                  color: '#058340',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: SCROLLING CARDS (01, 02, 03) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step) => (
              <div
                key={step.num}
                className="clean-card"
                style={{
                  padding: '2.2rem',
                  borderRadius: 'var(--radius-lg)',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                {/* Step Number Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--accent-sky-light)',
                  color: 'var(--primary-blue)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  marginBottom: '1.2rem'
                }}>
                  {step.num}
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {step.desc}
                </p>

                {/* Highlight Pills */}
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {step.highlights.map((h, idx) => {
                    const Icon = h.icon;
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0.9rem',
                          background: 'var(--bg-card-alt)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--text-dark)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        <Icon size={16} color="var(--primary-blue)" />
                        <span>{h.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Building2(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
