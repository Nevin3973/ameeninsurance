import React from 'react';
import AboutAmeen from '../components/AboutAmeen';
import AmeenExperience from '../components/AmeenExperience';
import { Award, ShieldCheck, CheckCircle2, UserCheck, Calendar } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Sub-Page Banner Header */}
      <div style={{
        background: 'linear-gradient(180deg, var(--bg-hero) 0%, #ffffff 100%)',
        padding: '3.5rem 0 2.5rem',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="pill-badge">
              <Award size={15} color="var(--primary-blue)" /> ABOUT OUR CONSULTANCY
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            15+ Years of Independent Insurance Guidance
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Muhammed Ameen provides transparent, unbiased advisory across India's premier health and life insurance companies to ensure your family gets maximum coverage with zero hidden capping.
          </p>
        </div>
      </div>

      {/* Profile Details & Credentials Section (Brought to Top) */}
      <AboutAmeen />

      {/* Main Experience & Advisory Philosophy Section */}
      <AmeenExperience />

      {/* Call to Action Banner */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{
          background: 'var(--bg-hero)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2.5rem',
          border: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <span className="pill-badge" style={{ marginBottom: '0.8rem', background: '#ffffff' }}>
              <ShieldCheck size={16} color="var(--primary-blue)" /> 1-on-1 Consultation
            </span>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>
              Ready to Protect Your Family’s Future?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '640px' }}>
              Book a free, zero-obligation advisory session with Muhammed Ameen to review your existing policy or compare top new plans.
            </p>
          </div>

          <button
            onClick={() => onNavigate('booking')}
            className="btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
          >
            <Calendar size={18} /> Schedule Free Call
          </button>
        </div>
      </div>
    </div>
  );
}
