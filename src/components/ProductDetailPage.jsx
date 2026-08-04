import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Calendar, PhoneCall, Send, Award, Clock, FileText, Check, AlertCircle } from 'lucide-react';

export default function ProductDetailPage({ product, onBack, onBookConsultation }) {
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    sumInsured: product.sumInsured || '₹10 Lakhs'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enquiryForm.fullName && enquiryForm.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Top Sticky Breadcrumb Bar */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--border-light)',
        padding: '1rem 0',
        position: 'sticky',
        top: '74px',
        zIndex: 90
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={onBack}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary-blue)',
              fontWeight: 700,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={18} /> Back to All Insurance Plans
          </button>

          <span className="pill-badge" style={{ fontSize: '0.8rem' }}>
            <ShieldCheck size={14} color="var(--primary-blue)" /> IRDAI Approved Policy
          </span>
        </div>
      </div>

      {/* Main Sub-Page Hero / Title Header */}
      <div style={{ background: 'var(--bg-hero)', padding: '3rem 0 2.5rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="pill-badge" style={{ background: '#ffffff', color: 'var(--primary-blue)' }}>
              {product.category.toUpperCase()} PLAN
            </span>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
              • {product.company}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.6rem', color: 'var(--text-dark)' }}>
            {product.name}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            {product.desc}
          </p>
        </div>
      </div>

      {/* Main Sub-Page Body Grid */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div className="grid-3" style={{ gridTemplateColumns: '2fr 1fr', gap: '2.5rem' }}>

          {/* Left Main Column: Detailed Policy Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Quick Specs 4-Box Summary */}
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div className="clean-card" style={{ background: '#ffffff', padding: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Award size={20} color="var(--primary-blue)" />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 700 }}>SUM INSURED TIERS</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-blue)' }}>
                  {product.sumInsured}
                </div>
              </div>

              <div className="clean-card" style={{ background: '#ffffff', padding: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Clock size={20} color="var(--primary-blue)" />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 700 }}>ENTRY AGE ELIGIBILITY</span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                  {product.eligibility}
                </div>
              </div>

              <div className="clean-card" style={{ background: '#ffffff', padding: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <FileText size={20} color="var(--primary-blue)" />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 700 }}>INITIAL WAITING PERIOD</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                  {product.waitingPeriod}
                </div>
              </div>

              <div className="clean-card" style={{ background: '#ffffff', padding: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <ShieldCheck size={20} color="var(--primary-blue)" />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 700 }}>CASHLESS NETWORK</span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                  10,000+ Hospitals
                </div>
              </div>
            </div>

            {/* Key Benefits List */}
            <div className="clean-card">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 color="var(--primary-blue)" size={22} /> Key Advisory Benefits & Features
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {product.benefits.map((b, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                    <div style={{
                      background: 'var(--accent-sky-light)',
                      borderRadius: '50%',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>
                      <Check size={14} color="var(--primary-blue)" strokeWidth={3} />
                    </div>
                    <span style={{ fontWeight: 600, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Breakdown */}
            <div className="clean-card">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem' }}>
                Comprehensive Coverage Breakdown
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-card-alt)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-blue)' }}>
                  <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '0.3rem' }}>INPATIENT HOSPITALISATION</strong>
                  <p style={{ color: 'var(--text-muted)' }}>Covers room rent, ICU charges, nursing care, surgeon fees, OT expenses, and anesthetist charges without sub-limits.</p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--bg-card-alt)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-blue)' }}>
                  <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '0.3rem' }}>PRE & POST HOSPITALISATION</strong>
                  <p style={{ color: 'var(--text-muted)' }}>Pre-hospitalisation medical expenses covered for 60 days and post-hospitalisation follow-up expenses covered for 90 days.</p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--bg-card-alt)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-blue)' }}>
                  <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '0.3rem' }}>DAY CARE PROCEDURES</strong>
                  <p style={{ color: 'var(--text-muted)' }}>All modern day-care treatments requiring less than 24 hours hospital stay (dialysis, chemotherapy, eye surgery) covered up to sum insured.</p>
                </div>
              </div>
            </div>

            {/* Ideal Customer Profile */}
            <div style={{
              background: 'var(--bg-hero)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <AlertCircle size={28} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Advisor Recommendation</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {product.idealFor}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Dedicated Plan Enquiry Form Card */}
          <div style={{ position: 'sticky', top: '140px', height: 'fit-content' }}>
            <div className="clean-card" style={{ boxShadow: 'var(--shadow-md)', border: '1px solid var(--primary-blue)' }}>
              <div style={{ marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-blue)', letterSpacing: '0.05em' }}>
                  DIRECT ADVISORY ENQUIRY
                </span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '0.2rem' }}>
                  Enquire About {product.name}
                </h3>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={enquiryForm.fullName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit phone number"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      PREFERRED SUM INSURED
                    </label>
                    <input
                      type="text"
                      value={enquiryForm.sumInsured}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, sumInsured: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                    Request Callback for Plan <Send size={16} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <CheckCircle2 size={46} color="var(--primary-blue)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>Enquiry Sent!</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Muhammed Ameen will review the details for <strong>{product.name}</strong> and call you back shortly.
                  </p>
                </div>
              )}

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--border-light)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', marginBottom: '0.4rem' }}>
                  Need Immediate Guidance?
                </div>
                <a
                  href="tel:+919812345678"
                  style={{
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.95rem'
                  }}
                >
                  <PhoneCall size={16} /> Call Ameen: +91 98123 45678
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
