import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function ClaimsAssistant() {
  return (
    <section id="claims" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.8rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.6rem' }}>
            Claims Assistance
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Personalized, hands-on claim support from Muhammed Ameen — guiding you through every step for cashless and reimbursement claims.
          </p>
        </div>

        {/* Clean Static Overview Grid */}
        <div className="grid-2" style={{ gap: '2rem', maxWidth: '980px', margin: '0 auto' }}>
          {/* Cashless Claims Box */}
          <div className="clean-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <ShieldCheck size={28} color="var(--primary-blue)" />
              <h3 style={{ fontSize: '1.3rem' }}>Cashless Claims</h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
              Get treated at network hospitals without paying out of pocket. Show your digital insurance e-Card at admission, and Ameen Insurance coordinates direct bill settlement with the hospital.
            </p>
            <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-card-alt)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
              <strong style={{ color: 'var(--primary-blue)' }}>Requirements:</strong> Policy Number & Photo ID Card
            </div>
          </div>

          {/* Reimbursement Claims Box */}
          <div className="clean-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <FileText size={28} color="var(--primary-blue)" />
              <h3 style={{ fontSize: '1.3rem' }}>Reimbursement Claims</h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
              Hospitalized at a non-network facility? Submit your medical bills, lab reports, and discharge summary. We audit and process your reimbursement directly into your bank account.
            </p>
            <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-card-alt)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
              <strong style={{ color: 'var(--primary-blue)' }}>Assistance:</strong> Direct document verification & filing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
