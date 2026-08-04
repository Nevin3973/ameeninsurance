import React, { useState } from 'react';
import { MessageSquare, PhoneCall, X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FloatingWidgets({ onBookConsultation }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    place: '',
    phone: '',
    description: '',
    insuranceType: 'Health Insurance'
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (enquiryForm.name && enquiryForm.phone) {
      setEnquirySubmitted(true);
      setTimeout(() => {
        setEnquirySubmitted(false);
        setEnquiryOpen(false);
        setEnquiryForm({ name: '', place: '', phone: '', description: '', insuranceType: 'Health Insurance' });
      }, 3000);
    }
  };

  const whatsappMessage = encodeURIComponent("Hi, I would like to know more about your health insurance plans.");
  const whatsappUrl = `https://wa.me/919812345678?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating Action Buttons Container (Bottom Right) */}
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '24px',
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}>
        {/* Floating Enquiry Button */}
        <button
          onClick={() => setEnquiryOpen(true)}
          className="glass-panel"
          style={{
            background: 'linear-gradient(135deg, var(--primary-600), var(--teal-600))',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.92rem',
            padding: '0.8rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(5, 150, 105, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.25s ease'
          }}
        >
          <MessageSquare size={18} /> Enquire Now
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
            textDecoration: 'none',
            transition: 'all 0.25s ease'
          }}
          title="Chat on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 2c-5.517 0-9.997 4.48-9.997 9.998 0 1.763.459 3.479 1.33 4.996l-1.413 5.161 5.28-1.385c1.463.799 3.111 1.22 4.8 1.22h.004c5.518 0 9.998-4.48 9.998-9.998 0-2.67-1.04-5.18-2.929-7.07-1.89-1.89-4.4-2.93-7.073-2.93zm5.72 14.364c-.244.688-1.42 1.309-1.961 1.393-.497.077-1.144.11-1.844-.117-.427-.138-.977-.318-1.698-.632-2.996-1.298-4.945-4.341-5.096-4.542-.149-.2-1.227-1.635-1.227-3.119 0-1.484.773-2.215 1.046-2.516.273-.301.597-.377.796-.377.199 0 .399.002.574.01.187.008.438-.071.686.525.249.596.847 2.07.922 2.221.075.15.124.326.025.525-.099.201-.149.326-.298.502-.149.176-.314.394-.448.528-.149.149-.305.311-.131.61.174.299.773 1.275 1.657 2.062 1.137 1.012 2.096 1.326 2.395 1.476.299.15.474.125.649-.075.174-.201.747-.87.946-1.17.199-.301.399-.251.672-.15.273.101 1.742.822 2.041.972.299.15.498.225.573.351.075.126.075.728-.169 1.416z"/>
          </svg>
        </a>
      </div>

      {/* Sticky Mobile Call Bar */}
      <div className="mobile-call-bar" style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 890,
        background: 'var(--bg-dark-accent)',
        padding: '0.8rem 1rem',
        borderTop: '1px solid var(--border-light)',
        textAlign: 'center'
      }}>
        <a
          href="tel:+919812345678"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            color: '#ffffff',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          <PhoneCall size={20} color="var(--primary-500)" />
          Call Now: +91 98123 45678
        </a>
      </div>

      {/* Popup Enquiry Modal */}
      {enquiryOpen && (
        <div className="modal-overlay" onClick={() => setEnquiryOpen(false)}>
          <div className="glass-panel modal-content" style={{ maxWidth: '460px' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setEnquiryOpen(false)}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-subtle)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {!enquirySubmitted ? (
              <form onSubmit={handleEnquirySubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                  <ShieldCheck size={26} color="var(--primary-600)" />
                  <div>
                    <h3 style={{ fontSize: '1.3rem' }}>Request Free Callback</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Muhammed Ameen • Independent Insurance Consultant</p>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-gradient)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    PLACE / CITY *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Kochi, Trivandrum, Calicut"
                    value={enquiryForm.place}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, place: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-gradient)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your 10-digit phone number"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-gradient)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    INSURANCE INTEREST
                  </label>
                  <select
                    value={enquiryForm.insuranceType}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, insuranceType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-gradient)',
                      color: 'var(--text-main)',
                      fontWeight: 600
                    }}
                  >
                    <option value="Health Insurance">Health Insurance (Family & Individual)</option>
                    <option value="Life Insurance">Term Life & Pension Insurance</option>
                    <option value="General Enquiry">General Insurance Enquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.4rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    DESCRIPTION (OPTIONAL)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Briefly describe family size, budget or coverage requirement..."
                    value={enquiryForm.description}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, description: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-gradient)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  Submit Enquiry <Send size={16} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle2 size={46} color="var(--primary-600)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>Thank You!</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Your enquiry has been received. Muhammed Ameen will reach out to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-call-bar { display: block !important; }
        }
      `}</style>
    </>
  );
}
