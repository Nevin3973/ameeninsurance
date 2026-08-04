import React from 'react';
import InsurancePartners from '../components/InsurancePartners';
import { Award, ShieldCheck, CheckCircle2, Building2, Hospital } from 'lucide-react';

export default function PartnersPage({ onNavigate, onSelectPartner }) {
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
              <Award size={15} color="var(--primary-blue)" /> IRDAI LICENSED PARTNER NETWORK
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Our Trusted Insurance Partners
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Muhammed Ameen represents your best interests by offering unbiased comparison across India's leading Standalone Health specialists and Public Sector Undertaking (PSU) insurers.
          </p>
        </div>
      </div>

      {/* Main Partners Listing */}
      <InsurancePartners onSelectPartner={onSelectPartner} />

      {/* In-depth Advisory Comparison Stats */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.8rem', textAlign: 'center' }}>
          Why Compare Across Multiple Insurers?
        </h2>

        <div className="grid-3" style={{ gap: '1.8rem' }}>
          <div className="clean-card">
            <Hospital size={36} color="var(--primary-blue)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>14,000+ Cashless Hospitals</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Every insurer has specific tie-up hospitals. We check which insurer covers your preferred local and specialty hospitals for cashless admission.
            </p>
          </div>

          <div className="clean-card">
            <ShieldCheck size={36} color="var(--primary-blue)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>High Claim Ratios</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              We partner exclusively with insurers maintaining 97%+ incurred claim ratios, ensuring hassle-free cashless approval during emergencies.
            </p>
          </div>

          <div className="clean-card">
            <Building2 size={36} color="var(--primary-blue)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>PSU & Private Options</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Choose between sovereign-backed PSU general insurers (United India, New India, National Insurance) or feature-rich standalone specialists (Star Health, Aditya Birla).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
