import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

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
              <ShieldCheck size={15} color="var(--primary-blue)" /> IRDAI AUTHORIZED ADVISORY TERMS
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Terms of Service & Advisory Disclosure
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Please read these Terms of Service carefully before utilizing the consultation services, comparison tools, or form submissions offered by Ameen Nellikkunnan Insurance Advisory.
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
            
            {/* Section 1: IRDAI Advisory Scope */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FileText color="var(--primary-blue)" size={22} /> 1. IRDAI Licensed Advisory Scope
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Ameen Nellikkunnan is an independent, IRDAI licensed health insurance consultant operating under Registration #129/153 in Palakkad, Kerala. 
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>Independent Representation:</strong> Advisory recommendations are offered across authorized partner insurance companies (Star Health Insurance, Aditya Birla Health Insurance, United India Insurance, and New India Assurance).</li>
                <li><strong>Policy Bond Precedence:</strong> All health insurance policy terms, sum insured limits, room-rent capping, waiting periods, sub-limits, and exclusions are strictly governed by the official policy schedule and bond issued by the respective underwriting insurance company.</li>
              </ul>
            </div>

            {/* Section 2: Zero Commission Markup Guarantee */}
            <div className="clean-card" style={{ borderLeft: '4px solid var(--primary-blue)' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                2. Zero Broker Markup & Rate Guarantee
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We guarantee complete premium transparency:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Official Insurer Filed Rates:</strong> All policy premium quotes, calculators, and comparisons match the official IRDAI-filed premium tables of the respective insurance company.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Zero Extra Fees:</strong> Ameen Nellikkunnan Insurance Advisory charges zero extra consultation fees, broker markups, or service charges to customers for policy selection, paperwork guidance, or claim advocacy.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: WhatsApp Business Messaging Terms */}
            <div className="clean-card" style={{ borderLeft: '4px solid #25D366' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>💬</span> 3. WhatsApp Business API & Electronic Communications
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                By submitting your contact details through quote forms, callback forms, or consultation booking widgets on this website:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li>You agree to receive electronic communications including WhatsApp messages, emails, SMS, and phone calls regarding requested health insurance quotes and advisory support.</li>
                <li>WhatsApp communications will be delivered via authorized WhatsApp Business API channels operated by Ameen Nellikkunnan Insurance Advisory.</li>
                <li>You maintain the right to revoke WhatsApp messaging consent at any time by replying "STOP" or notifying us via email.</li>
              </ul>
            </div>

            {/* Section 4: Hospital Cashless Assistance Scope */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                4. Cashless Hospital Assistance Scope
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                While Ameen Nellikkunnan provides direct 24/7 hospital desk advocacy and paperwork coordination:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>Cashless Approval Authority:</strong> Cashless hospital admission authorization and Pre-Authorization approvals are strictly granted or rejected by the respective Third Party Administrator (TPA) or insurer hospital desk based on medical admissibility and policy terms.</li>
                <li><strong>Advocacy Assistance:</strong> Our role is to assist policyholders in compiling medical records, resolving desk queries, and expediting valid claim processing.</li>
              </ul>
            </div>

            {/* Section 5: Governing Law */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                5. Governing Law & Jurisdiction
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                These Terms of Service and any advisory services provided are governed by and construed in accordance with the laws of India and IRDAI regulations. Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in Palakkad, Kerala, India.
              </p>
            </div>

          </div>

          {/* Right Sidebar: Contact & Credentials */}
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
