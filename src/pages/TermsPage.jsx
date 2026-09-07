import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, CheckCircle2, Phone, Mail, MapPin, AlertCircle, Scale } from 'lucide-react';

export default function TermsPage({ onNavigate }) {
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
              <ShieldCheck size={15} color="var(--primary-blue)" /> GREENADS REFERENCE ALIGNED • IRDAI LICENSED TERMS
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Terms of Service for ameenhealthinsurance.com
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '850px', lineHeight: 1.6 }}>
            Welcome to <strong>Ameen Nellikkunnan Insurance Advisory</strong> (<a href="https://www.ameenhealthinsurance.com" style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>https://www.ameenhealthinsurance.com</a>). These Terms of Service outline the rules, regulations, and advisory disclaimers governing the use of our website, consultation booking services, quote calculators, and WhatsApp Business API messaging channels.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.6rem' }}>
            IRDAI Registered Advisory #129/153 • Effective Date: January 1, 2026 • Last Updated: September 7, 2026
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div className="responsive-grid-2-1" style={{ gap: '2.5rem' }}>
          
          {/* Main Legal Content Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Section 1: Acceptance of Terms */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 color="var(--primary-blue)" size={22} /> 1. Acceptance of Terms & Services
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                By accessing <a href="https://www.ameenhealthinsurance.com">www.ameenhealthinsurance.com</a>, submitting consultation inquiry forms, utilizing our interactive plan comparison tools, or communicating with us via WhatsApp Business API, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of our website and services.
              </p>
            </div>

            {/* Section 2: IRDAI Licensing & Advisory Scope */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FileText color="var(--primary-blue)" size={22} /> 2. IRDAI Advisory Scope & Policy Precedence
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Ameen Nellikkunnan is an independent, IRDAI licensed health insurance consultant operating under Registration #129/153 in Palakkad, Kerala.
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>Independent Representation:</strong> We offer impartial advisory and side-by-side policy comparisons across IRDAI-authorized partner insurers (Star Health Insurance, Aditya Birla Health Insurance, United India Insurance, and The New India Assurance Company Limited).</li>
                <li><strong>Official Insurer Policy Bond Precedence:</strong> All health insurance policy coverage limits, room-rent sub-limits, co-payments, waiting periods, pre-existing condition terms, and exclusions are strictly governed by the official policy prospectus, Customer Information Sheet (CIS), and policy bond issued by the underwriting insurance company.</li>
              </ul>
            </div>

            {/* Section 3: Zero Commission Markup Guarantee */}
            <div className="clean-card" style={{ borderLeft: '4px solid var(--primary-blue)' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                3. Zero Commission Markup & Rate Guarantee
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We guarantee complete financial transparency for all policyholders:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Official Insurer Rates:</strong> Premium rates quoted on <code>ameenhealthinsurance.com</code> or during direct consultation strictly match the official filed rates of Star Health, Aditya Birla, United India, and New India Assurance.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Zero Advisory Markup:</strong> We charge zero extra broker fees, consultation markups, or service charges to clients for policy selection, paperwork support, or hospital claim advocacy.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: WhatsApp Business API & Electronic Communication Terms */}
            <div className="clean-card" style={{ borderLeft: '4px solid #25D366', background: '#f0fdf4' }}>
              <h2 style={{ fontSize: '1.35rem', color: '#166534', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>💬</span> 4. WhatsApp Business API Messaging Terms
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#15803d', lineHeight: 1.7, marginBottom: '1rem' }}>
                By submitting your contact number on <code>ameenhealthinsurance.com</code>:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: '#166534' }}>
                <li>You agree to receive electronic communications including WhatsApp messages, emails, SMS, and phone calls regarding requested health insurance quotes, comparisons, and policy advisory updates.</li>
                <li>WhatsApp communications are dispatched via authorized WhatsApp Business API service providers.</li>
                <li>You maintain the right to revoke messaging consent at any time by replying <strong>"STOP"</strong> or emailing <code>optout@ameenhealthinsurance.com</code>.</li>
              </ul>
            </div>

            {/* Section 5: Hospital Cashless Assistance Scope */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                5. Hospital Cashless Assistance Scope & TPA Terms
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                While Ameen Nellikkunnan Insurance Advisory provides 24/7 direct hospital desk advocacy:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>Cashless Approval Authority:</strong> Cashless hospital admission authorizations and Pre-Auth approvals are strictly subject to the final approval of the Third Party Administrator (TPA) and underwriting insurance company's hospital desk based on medical necessity and policy terms.</li>
                <li><strong>Advocacy Role:</strong> Our role is to assist policyholders in compiling medical documents, clarifying hospital queries, and expediting valid claim processing.</li>
              </ul>
            </div>

            {/* Section 6: User Responsibilities & Accuracy */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                6. User Responsibilities & Medical Declarations
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Users are responsible for providing accurate age, pre-existing medical condition, and contact details during consultation. Non-disclosure of material pre-existing health conditions may lead to claim rejection by insurer underwriters as per IRDAI guidelines.
              </p>
            </div>

            {/* Section 7: Intellectual Property */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                7. Intellectual Property Rights
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Unless otherwise stated, Ameen Nellikkunnan Insurance Advisory owns the intellectual property rights for all material, text, design, and branding on <a href="https://www.ameenhealthinsurance.com">www.ameenhealthinsurance.com</a>. All intellectual property rights are reserved.
              </p>
            </div>

            {/* Section 8: Governing Law */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Scale color="var(--primary-blue)" size={22} /> 8. Governing Law & Jurisdiction
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                These Terms of Service are governed by and construed in accordance with the laws of India and IRDAI regulations. Any legal disputes arising out of the use of <a href="https://www.ameenhealthinsurance.com">ameenhealthinsurance.com</a> or our advisory services shall be subject to the exclusive jurisdiction of the courts in Palakkad, Kerala, India.
              </p>
            </div>

          </div>

          {/* Right Sidebar: Office Information */}
          <div className="sticky-column">
            <div className="clean-card" style={{ border: '1px solid var(--primary-blue)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                Authorized Advisory Office
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ShieldCheck size={18} color="var(--primary-blue)" />
                  <div>
                    <strong>Ameen Nellikkunnan</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>IRDAI Reg. #129/153</div>
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
                  <a href="mailto:info@ameenhealthinsurance.com" style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'none' }}>
                    info@ameenhealthinsurance.com
                  </a>
                </div>
              </div>

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
  );
}
