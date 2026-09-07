import React from 'react';
import { ShieldCheck, Lock, Mail, Phone, MapPin, ArrowLeft, CheckCircle2, AlertCircle, FileText, Globe, Eye, Server } from 'lucide-react';

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
              <ShieldCheck size={15} color="var(--primary-blue)" /> GREENADS REFERENCE ALIGNED • WHATSAPP API & IRDAI COMPLIANT
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Privacy Policy for ameenhealthinsurance.com
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '850px', lineHeight: 1.6 }}>
            At <strong>Ameen Nellikkunnan Insurance Advisory</strong> (accessible from <a href="https://www.ameenhealthinsurance.com" style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>https://www.ameenhealthinsurance.com</a>), one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information collected, recorded, and utilized by Ameen Nellikkunnan Insurance Advisory in full alignment with Meta WhatsApp Business API standards, the Digital Personal Data Protection (DPDP) Act 2023 of India, and IRDAI regulations.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.6rem' }}>
            Official Entity: Ameen Nellikkunnan Insurance Advisory (IRDAI Reg. #129/153) • Effective: January 1, 2026 • Last Updated: September 7, 2026
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div className="responsive-grid-2-1" style={{ gap: '2.5rem' }}>
          
          {/* Main Legal Content Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Section 1: Consent */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 color="var(--primary-blue)" size={22} /> 1. Consent & Agreement
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                By accessing or using our website <a href="https://www.ameenhealthinsurance.com">www.ameenhealthinsurance.com</a>, submitting consultation inquiry forms, utilizing our quote calculators, or requesting callback assistance, you hereby consent to our Privacy Policy and agree to all its terms.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                If you have additional questions or require more information about our Privacy Policy, please do not hesitate to contact our Data Protection Officer at <code>privacy@ameenhealthinsurance.com</code>.
              </p>
            </div>

            {/* Section 2: Information We Collect */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Lock color="var(--primary-blue)" size={22} /> 2. Information We Collect
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>Contact Identifiers:</strong> Full Name, Mobile Phone Number, WhatsApp Number, and Email Address.</li>
                <li><strong>Geographic Location Data:</strong> Postal Pincode and City/District (used to evaluate local cashless network hospital availability across Kerala and India).</li>
                <li><strong>Insurance Consultation Preferences:</strong> Insurance interest (Family Floater, Maternity & Women's Care, Senior Citizen, GCC NRI Expat Cover), sum insured preferences, age bracket, and notes.</li>
                <li><strong>Direct Communication Records:</strong> If you contact us directly via email, phone, or WhatsApp, we may receive additional information such as your message contents, attachments, or appointment date preferences.</li>
              </ul>
            </div>

            {/* Section 3: WhatsApp Business API Messaging & Consent Terms */}
            <div className="clean-card" style={{ borderLeft: '4px solid #25D366', background: '#f0fdf4' }}>
              <h2 style={{ fontSize: '1.35rem', color: '#166534', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>💬</span> 3. WhatsApp Business API Messaging & Opt-In Policy
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#15803d', lineHeight: 1.7, marginBottom: '1rem' }}>
                In strict compliance with Meta Business Messaging Policies and WhatsApp Cloud API provider standards (such as GreenAds Global / CPaaS frameworks):
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem', color: '#166534' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#25D366" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Explicit Opt-In:</strong> Submitting your mobile phone number via any form on <code>ameenhealthinsurance.com</code> constitutes your explicit opt-in consent to receive transactional messages, policy quote summaries, side-by-side comparison charts, hospital network details, and consultation updates via WhatsApp Business API, SMS, and telephone.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#25D366" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Strict Scope & Zero Spam:</strong> Messages sent via WhatsApp are strictly confined to insurance advisory services requested by you. We NEVER send unsolicited commercial spam or sell phone lists to third-party telemarketers.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#25D366" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong>Opt-Out Mechanism:</strong> You can revoke WhatsApp communication consent at any time by replying <strong>"STOP"</strong> or <strong>"UNSUBSCRIBE"</strong> in WhatsApp, or by emailing <code>optout@ameenhealthinsurance.com</code>.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: How We Use Your Information */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Server color="var(--primary-blue)" size={22} /> 4. How We Use Your Information
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We use the collected information in various ways, including to:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li>Provide, operate, and maintain our website <a href="https://www.ameenhealthinsurance.com">ameenhealthinsurance.com</a>.</li>
                <li>Evaluate, compare, and recommend suitable health insurance policies across partner underwriters (Star Health, Aditya Birla Health, United India, New India Assurance).</li>
                <li>Communicate with you directly or through our WhatsApp Business API channels to provide customer support, quote updates, and appointment scheduling.</li>
                <li>Coordinate 24/7 cashless hospital admission desk support and Pre-Auth document processing.</li>
                <li>Send renewal reminders and important IRDAI regulatory policy updates.</li>
                <li>Detect and prevent fraudulent activities or unauthorized form abuse.</li>
              </ul>
            </div>

            {/* Section 5: Log Files & Web Analytics */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Eye color="var(--primary-blue)" size={22} /> 5. Log Files, Cookies & Web Beacons
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                <a href="https://www.ameenhealthinsurance.com">ameenhealthinsurance.com</a> follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Like any other website, we use 'cookies' to store information including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type or other information.
              </p>
            </div>

            {/* Section 6: Data Retention & User Data Deletion Request Process */}
            <div className="clean-card" style={{ borderLeft: '4px solid var(--primary-blue)' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <AlertCircle color="var(--primary-blue)" size={22} /> 6. Data Retention & User Data Deletion Request Process
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Under Indian DPDP Act 2023 regulations and Meta Developer Data Policies, users retain full rights to request complete deletion of their personal data from our active databases.
              </p>

              <div style={{ background: 'var(--bg-card-alt)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.4rem' }}>Step-by-Step Data Deletion Request:</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.6rem' }}>
                  If you wish to permanently erase your phone number, lead record, or WhatsApp consultation history from our servers, send an email request to:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: 'var(--primary-blue)', fontWeight: 700 }}>
                  <span>📧 Primary Email: privacy@ameenhealthinsurance.com</span>
                  <span>📧 Secondary Email: ameen.nellikkunnan@gmail.com</span>
                  <span style={{ color: 'var(--text-dark)', fontWeight: 500, marginTop: '0.3rem' }}>Subject: <strong>Data Deletion Request - [Your 10-Digit Mobile Number]</strong></span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.6rem' }}>
                  Our Data Protection Officer will review and complete the deletion within <strong>30 business days</strong>, dispatching a formal confirmation email to you.
                </p>
              </div>
            </div>

            {/* Section 7: Third-Party Insurer Sharing & Zero Sale Pledge */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                7. Zero Third-Party Sale & Insurer Disclosure Pledge
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Ameen Nellikkunnan Insurance Advisory maintains a zero-tolerance policy against selling customer lead data:
              </p>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li><strong>No Commercial Data Sale:</strong> We NEVER sell, trade, rent, or lease your contact information or personal data to external lead aggregators, loan providers, or telemarketing agencies.</li>
                <li><strong>Authorized Underwriting Disclosures:</strong> Personal and medical details are shared ONLY with IRDAI-authorized partner insurers (Star Health, Aditya Birla Health, United India Insurance, New India Assurance) when you formally request policy proposal submission or claim reimbursement advocacy.</li>
              </ul>
            </div>

            {/* Section 8: Children's Information */}
            <div className="clean-card">
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                8. Children's Privacy Protection
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. <a href="https://www.ameenhealthinsurance.com">ameenhealthinsurance.com</a> does not knowingly collect any Personal Identifiable Information from children under the age of 18 without parental or legal guardian consent (e.g. for dependent family floater policies).
              </p>
            </div>

          </div>

          {/* Right Sidebar: DPO Office Credentials */}
          <div className="sticky-column">
            <div className="clean-card" style={{ border: '1px solid var(--primary-blue)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                Data Privacy Officer & Contact Us
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                If you have questions regarding this Privacy Policy or wish to exercise data rights:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem' }}>
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
