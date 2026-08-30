import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FloatingWidgets({ onBookConsultation }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    pincode: '',
    place: '',
    phone: '',
    description: '',
    insuranceType: 'Health Insurance'
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  useEffect(() => {
    let timer = null;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolledPastHero(true);
      } else {
        setHasScrolledPastHero(false);
      }

      setIsScrolling(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handlePincodeChange = async (e) => {
    const val = e.target.value;
    setEnquiryForm((prev) => ({ ...prev, pincode: val }));

    if (val.trim().length === 6) {
      const pinNum = val.trim();
      const knownPincodes = {
        '673001': 'Kozhikode (Calicut), Kerala',
        '673002': 'Calicut Beach, Kozhikode, Kerala',
        '673004': 'Calicut Arts College, Kozhikode, Kerala',
        '673016': 'Feroke, Kozhikode, Kerala',
        '673601': 'Koduvally, Kozhikode, Kerala',
        '682001': 'Kochi (Cochin), Kerala',
        '682011': 'Kaloor, Ernakulam, Kerala',
        '682016': 'MG Road, Ernakulam, Kerala',
        '682030': 'Edappally, Kochi, Kerala',
        '682031': 'Kalamassery, Kochi, Kerala',
        '695001': 'Trivandrum (Thiruvananthapuram), Kerala',
        '695011': 'Vellayambalam, Trivandrum, Kerala',
        '670001': 'Kannur, Kerala',
        '678001': 'Palakkad, Kerala',
        '680001': 'Thrissur, Kerala',
        '686001': 'Kottayam, Kerala',
        '689101': 'Tiruvalla, Pathanamthitta, Kerala',
        '691001': 'Kollam, Kerala',
        '671121': 'Kasaragod, Kerala',
        '676505': 'Malappuram, Kerala',
        '685602': 'Munnar, Idukki, Kerala',
        '673576': 'Kalpetta, Wayanad, Kerala',
        '110001': 'New Delhi',
        '400001': 'Mumbai, Maharashtra',
        '560001': 'Bengaluru, Karnataka',
        '600001': 'Chennai, Tamil Nadu'
      };

      if (knownPincodes[pinNum]) {
        setEnquiryForm((prev) => ({ ...prev, place: knownPincodes[pinNum] }));
        return;
      }

      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pinNum}`);
        const data = await res.json();
        if (data && data[0] && data[0].Status === 'Success' && data[0].PostOffice && data[0].PostOffice.length > 0) {
          const po = data[0].PostOffice[0];
          const locStr = `${po.District || po.Name}, ${po.State}`;
          setEnquiryForm((prev) => ({ ...prev, place: locStr }));
        }
      } catch (err) {
        console.error('Pincode lookup error:', err);
      }
    }
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (enquiryForm.name && enquiryForm.phone) {
      setEnquirySubmitted(true);
      setTimeout(() => {
        setEnquirySubmitted(false);
        setEnquiryOpen(false);
        setEnquiryForm({ name: '', pincode: '', place: '', phone: '', description: '', insuranceType: 'Health Insurance' });
      }, 3000);
    }
  };

  const whatsappMessage = encodeURIComponent("Hi Ameen Nellikkunnan, I would like to get a free health insurance consultation.");
  const whatsappUrl = `https://wa.me/917025984646?text=${whatsappMessage}`;

  const isVisible = hasScrolledPastHero && !isScrolling;

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
        gap: '12px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.92)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Floating Enquiry Button */}
        <button
          onClick={() => setEnquiryOpen(true)}
          className="btn-primary"
          style={{
            background: 'linear-gradient(135deg, var(--primary-blue), #058340)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.92rem',
            padding: '0.8rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(1, 58, 222, 0.35)',
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
        background: '#0f172a',
        padding: '0.8rem 1rem',
        borderTop: '1px solid var(--border-light)',
        textAlign: 'center'
      }}>
        <a
          href="tel:+917025984646"
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
          <PhoneCall size={20} color="#60a5fa" />
          Call Now: +91 70259 84646
        </a>
      </div>

      {/* Popup Enquiry Modal */}
      {enquiryOpen && (
        <div className="modal-overlay" onClick={() => setEnquiryOpen(false)}>
          <div className="modal-content" style={{ maxWidth: '460px' }} onClick={(e) => e.stopPropagation()}>
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
                  <ShieldCheck size={26} color="var(--primary-blue)" />
                  <div>
                    <h3 style={{ fontSize: '1.3rem' }}>Request Free Callback</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Ameen Nellikkunnan • Independent Insurance Consultant</p>
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
                      background: '#ffffff',
                      color: 'var(--text-dark)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                      PINCODE *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="e.g. 673001"
                      value={enquiryForm.pincode}
                      onChange={handlePincodeChange}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        color: 'var(--text-dark)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                      PLACE / CITY
                    </label>
                    <input
                      type="text"
                      readOnly
                      placeholder="Auto updated"
                      value={enquiryForm.place}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        background: '#f1f5f9',
                        color: '#0f172a',
                        fontWeight: 700,
                        outline: 'none'
                      }}
                    />
                  </div>
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
                      background: '#ffffff',
                      color: 'var(--text-dark)',
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
                      background: '#ffffff',
                      color: 'var(--text-dark)',
                      fontWeight: 600
                    }}
                  >
                    <option value="Health Insurance">Health Insurance (Family & Individual)</option>
                    <option value="Life Insurance">Life Insurance (Term & Endowment)</option>
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
                      background: '#ffffff',
                      color: 'var(--text-dark)',
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
                <CheckCircle2 size={46} color="var(--primary-blue)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>Thank You!</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Your enquiry has been received. Ameen Nellikkunnan will reach out to you shortly.
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
