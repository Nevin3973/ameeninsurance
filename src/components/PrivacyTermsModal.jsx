import React, { useState } from 'react';
import { X, ShieldCheck, Lock, MessageSquare, CheckCircle2, FileText } from 'lucide-react';

export default function PrivacyTermsModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{
          maxWidth: '720px',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '2.2rem',
          borderRadius: 'var(--radius-md)',
          background: '#ffffff'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'var(--bg-card-alt)',
            border: 'none',
            borderRadius: '50%',
            padding: '0.45rem',
            cursor: 'pointer',
            color: 'var(--text-dark)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--accent-sky-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <ShieldCheck size={24} color="var(--primary-blue)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)' }}>
              Legal Information & Policies
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Ameen Nellikkunnan Insurance Advisory • IRDAI Reg. #129/153
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.6rem', borderBottom: '1px solid var(--border-light)', marginBottom: '1.5rem', paddingBottom: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('privacy')}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeTab === 'privacy' ? 'var(--primary-blue)' : 'var(--bg-card-alt)',
              color: activeTab === 'privacy' ? '#ffffff' : 'var(--text-dark)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <Lock size={14} style={{ display: 'inline', marginRight: '0.4rem' }} /> Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeTab === 'terms' ? 'var(--primary-blue)' : 'var(--bg-card-alt)',
              color: activeTab === 'terms' ? '#ffffff' : 'var(--text-dark)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <FileText size={14} style={{ display: 'inline', marginRight: '0.4rem' }} /> Terms of Service
          </button>
        </div>

        {/* Tab 1: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>1. Data Collection & Usage</h4>
            <p style={{ marginBottom: '1rem' }}>
              Ameen Nellikkunnan Insurance Advisory respects your privacy. We collect personal information (including Full Name, Mobile Phone Number, Postal Pincode, City, and Insurance Interest) solely to evaluate your health insurance options and provide authorized policy consultation across our partner insurers (Star Health, Aditya Birla, United India, and New India Assurance).
            </p>

            <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>2. Data Protection & Zero Third-Party Sharing</h4>
            <p style={{ marginBottom: '1rem' }}>
              Your personal data is encrypted in transit and at rest. We strictly prohibit selling, renting, or leasing your contact information to third-party telemarketers or external lead brokers. Your information is only shared with authorized insurance underwriters when you formally request a policy issuance.
            </p>

            <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>3. Pincode & Geo-Location Data</h4>
            <p style={{ marginBottom: '1rem' }}>
              We use postal pincode API verification to identify local network hospital availability in your district (e.g. Palakkad, Malappuram, Ernakulam) to recommend policies with nearby cashless admission facilities.
            </p>
          </div>
        )}

        {/* Tab 3: Terms of Service */}
        {activeTab === 'terms' && (
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>1. IRDAI Advisory Scope</h4>
            <p style={{ marginBottom: '1rem' }}>
              Ameen Nellikkunnan is an independent health insurance consultant authorized under IRDAI regulations (License #129/153). All policy terms, sum insured limits, room-rent caps, waiting periods, and exclusions are governed by the respective insurance company's official policy bond.
            </p>

            <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>2. Zero Commission Markup Disclaimer</h4>
            <p style={{ marginBottom: '1rem' }}>
              All premium quotes displayed or provided via consultation match the official filed rates of Star Health, Aditya Birla, United India, and New India Assurance. We charge zero extra fees or broker markups for consultation or hospital claim assistance.
            </p>

            <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>3. Hospital Cashless Assistance Scope</h4>
            <p style={{ marginBottom: '1rem' }}>
              Cashless hospital admission authorization is subject to the Third Party Administrator (TPA) and network hospital desk approval. Ameen Insurance Advisory provides advocacy and paperwork assistance to expedite valid claims.
            </p>
          </div>
        )}

        <div style={{ marginTop: '1.8rem', textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
          <button
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '0.7rem 2rem', fontSize: '0.9rem' }}
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
}
