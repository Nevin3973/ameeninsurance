import React from 'react';
import { ShieldCheck, Lock, Mail, Phone, MapPin, ArrowLeft, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

export default function PrivacyPage({ onNavigate }) {
  const handleBack = () => {
    if (onNavigate) {
      onNavigate('hero');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Sub-Page Header Banner */}
      <div style={{
        background: 'linear-gradient(180deg, var(--bg-hero) 0%, #ffffff 100%)',
        padding: '3.5rem 0 2.5rem',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <button
            onClick={handleBack}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary-blue)',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="pill-badge">
              <ShieldCheck size={15} color="var(--primary-blue)" /> WHATSAPP BUSINESS API & IRDAI COMPLIANT
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Privacy Policy & Data Protection
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Ameen Nellikkunnan Insurance Advisory (IRDAI Reg. #129/153) is committed to protecting your personal data, health information, and messaging privacy in compliance with Indian regulatory frameworks and Meta WhatsApp Cloud API standards.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.5rem' }}>
            Effective Date: January 1, 2026 • Last Updated: September 7, 2026
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div className="responsive-grid-2-1" style={{ gap: '2.5rem' }}>
          
          {/* Main Legal Content Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Section 1: Overview */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Lock color="var(--primary-blue)" size={22} /> 1. Data Collection Scope
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We collect personal information that you voluntarily provide when requesting insurance quotes, booking consultations, or submitting claim assistance forms on this website. This information includes:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>Full Name & Contact Details:</strong> Mobile phone number, WhatsApp phone number, and email address.</li>
                <li><strong>Geographic Data:</strong> Postal pincode and city/district (used to identify nearby cashless hospital networks in Kerala and across India).</li>
                <li><strong>Insurance Requirements:</strong> Sum insured preferences, family coverage scope, age tier, and policy categories (Family Floater, Maternity, Senior Citizen, NRI Expat cover).</li>
                <li><strong>Communication Logs:</strong> Inquiry notes, consultation preferences, and preferred call times.</li>
              </ul>
            </div>

            {/* Section 2: WhatsApp Business API Messaging Consent */}
            <div className="clean-card" style={{ borderLeft: '4px solid #25D366' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>💬</span> 2. WhatsApp Business API Messaging & User Consent
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                In compliance with Meta Business Messaging Policies and WhatsApp Cloud API terms:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#25D366" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Explicit User Consent:</strong> By submitting your name and phone number through any lead form, quote calculator, or consultation booking widget on this website, you explicitly grant consent for Ameen Nellikkunnan Insurance Advisory to contact you via WhatsApp messages, transactional updates, policy brochures, and phone calls.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#25D366" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Purpose of WhatsApp Communications:</strong> WhatsApp messages sent by us are strictly limited to requested health insurance policy comparisons, official premium quotes, hospital cashless guidance, renewal reminders, and direct consultation scheduling.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#25D366" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>No Unsolicited Marketing / Zero Spam:</strong> We do not send promotional broadcast spam or sell lead data to external marketing agencies.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Data Deletion & Opt-Out Policy */}
            <div className="clean-card" style={{ borderLeft: '4px solid var(--primary-blue)' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <AlertCircle color="var(--primary-blue)" size={22} /> 3. Data Retention & User Data Deletion Request Process
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Under the Digital Personal Data Protection (DPDP) Act 2023 of India and Meta Privacy Guidelines, you retain complete rights over your personal data.
              </p>
              
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', margin: '1rem 0 0.5rem' }}>A. How to Request Data Deletion</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                If you wish to permanently delete your personal information, phone number, and inquiry records from our system:
              </p>
              <div style={{ background: 'var(--bg-card-alt)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.2rem' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.4rem', fontWeight: 700 }}>Send an email request to our Data Protection Desk:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.9rem', color: 'var(--primary-blue)', fontWeight: 600 }}>
                  <span>📧 Email: privacy@ameenhealthinsurance.com</span>
                  <span>📧 Secondary Email: ameen.nellikkunnan@gmail.com</span>
                  <span style={{ color: 'var(--text-dark)', fontWeight: 400, marginTop: '0.4rem' }}>Subject Line: <strong>Data Deletion Request - [Your Phone Number]</strong></span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.6rem' }}>
                  Our team will process your request and permanently erase your contact records within <strong>30 business days</strong>, notifying you via confirmation email.
                </p>
              </div>

              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', margin: '1rem 0 0.5rem' }}>B. How to Opt-Out of WhatsApp Messages</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                You can opt-out of receiving WhatsApp updates at any time by replying <strong>"STOP"</strong> or <strong>"UNSUBSCRIBE"</strong> directly in the WhatsApp conversation, or by emailing <code>optout@ameenhealthinsurance.com</code>.
              </p>
            </div>

            {/* Section 4: Data Sharing & Third-Party Protection */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                4. Zero Third-Party Sale & Insurer Sharing Policy
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We strictly pledge:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>No Commercial Sale:</strong> We NEVER sell, trade, rent, or lease customer contact lists or personal data to third-party telemarketers, credit card issuers, or external lead aggregators.</li>
                <li><strong>Authorized Underwriting Sharing Only:</strong> Your health details and proposal information are shared exclusively with IRDAI-authorized partner insurers (Star Health, Aditya Birla Health, United India, and New India Assurance) strictly when you formally request policy issuance or claim processing.</li>
                <li><strong>Legal Disclosures:</strong> Information may be disclosed only if mandatory under court orders or statutory government regulations.</li>
              </ul>
            </div>

            {/* Section 5: Data Security Standards */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                5. Security & Encryption Standards
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                All data transmitted through our website forms is encrypted using 256-bit SSL/TLS protocol. Access to customer inquiry records is restricted exclusively to certified insurance advisors bound by non-disclosure agreements.
              </p>
            </div>

          </div>

          {/* Right Sidebar: Quick Contact & Officer Info */}
          <div className="sticky-column">
            <div className="clean-card" style={{ border: '1px solid var(--primary-blue)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                Data Privacy Officer
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                For any questions, data deletion requests, or privacy concerns, feel free to contact Ameen Nellikkunnan directly:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ShieldCheck size={18} color="var(--primary-blue)" />
                  <div>
                    <strong>Ameen Nellikkunnan</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>IRDAI Licensed Specialist #129/153</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <MapPin size={18} color="var(--primary-blue)" />
                  <div>
                    <span>Mannarkkad Road, Ariyambavu, Palakkad, Kerala 678583</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Phone size={18} color="var(--primary-blue)" />
                  <a href="tel:+917025984646" style={{ color: 'var(--text-dark)', fontWeight: 700, textDecoration: 'none' }}>
                    +91 70259 84646
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={18} color="var(--primary-blue)" />
                  <a href="mailto:privacy@ameenhealthinsurance.com" style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'none' }}>
                    privacy@ameenhealthinsurance.com
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
                <button
                  onClick={handleBack}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.75rem' }}
                >
                  Return to Main Website
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
