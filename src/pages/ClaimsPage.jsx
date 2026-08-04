import React, { useState } from 'react';
import ClaimsAssistant from '../components/ClaimsAssistant';
import { ShieldCheck, PhoneCall, FileText, CheckCircle2, AlertCircle, HelpCircle, Send } from 'lucide-react';

export default function ClaimsPage({ onNavigate }) {
  const [claimHelpForm, setClaimHelpForm] = useState({
    patientName: '',
    phone: '',
    hospitalName: '',
    policyNumber: '',
    claimType: 'Cashless Admission'
  });
  const [helpSubmitted, setHelpSubmitted] = useState(false);

  const handleHelpSubmit = (e) => {
    e.preventDefault();
    if (claimHelpForm.patientName && claimHelpForm.phone) {
      setHelpSubmitted(true);
    }
  };

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
              <ShieldCheck size={15} color="var(--primary-blue)" /> 24/7 CLAIM ADVOCACY DESK
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Hassle-Free Claims Assistance
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Muhammed Ameen provides direct hospital insurance desk coordination, Pre-Auth authorization management, and 100% claim settlement support for your family.
          </p>
        </div>
      </div>

      {/* Interactive Claims Assistant Component */}
      <ClaimsAssistant />

      {/* Mandatory Document Checklist & Emergency Help Form Grid */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <div className="grid-2" style={{ gap: '2.5rem' }}>

          {/* Left Column: Required Documents Checklist */}
          <div className="clean-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FileText color="var(--primary-blue)" size={22} /> Mandatory Claim Documents Checklist
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Health Card & Government ID:</strong> Original health insurance card and Aadhar / PAN Card of the patient.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Hospital Pre-Auth Request Form:</strong> Duly filled Pre-Authorization request signed by treating doctor at hospital insurance desk.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Discharge Summary & Itemized Bills:</strong> Original hospital discharge card, itemized pharmacy bills, diagnostic reports, and payment receipts.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="var(--primary-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Cancelled Cheque:</strong> Cancelled cheque with printed account holder name for NEFT direct claim credit into your bank account.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Priority Emergency Claim Assistance Form */}
          <div className="clean-card" style={{ border: '1px solid var(--primary-blue)' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span className="pill-badge" style={{ marginBottom: '0.5rem', background: 'var(--accent-sky-light)', border: 'none' }}>
                <PhoneCall size={14} color="var(--primary-blue)" /> PRIORITY CLAIM DESK
              </span>
              <h3 style={{ fontSize: '1.4rem' }}>Request Immediate Claim Support</h3>
            </div>

            {!helpSubmitted ? (
              <form onSubmit={handleHelpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    PATIENT NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter patient full name"
                    value={claimHelpForm.patientName}
                    onChange={(e) => setClaimHelpForm({ ...claimHelpForm, patientName: e.target.value })}
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
                    CONTACT PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    value={claimHelpForm.phone}
                    onChange={(e) => setClaimHelpForm({ ...claimHelpForm, phone: e.target.value })}
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
                    HOSPITAL / CITY NAME
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aster Medcity, Kochi"
                    value={claimHelpForm.hospitalName}
                    onChange={(e) => setClaimHelpForm({ ...claimHelpForm, hospitalName: e.target.value })}
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

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  Connect with Ameen Claim Desk <Send size={16} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle2 size={46} color="var(--primary-blue)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>Request Received!</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Muhammed Ameen has received your priority claim assistance request and will call you immediately.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
