import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, UserCheck } from 'lucide-react';

export default function BlogSection() {
  const [selectedArticleModal, setSelectedArticleModal] = useState(null);

  const articles = [
    {
      id: 'family-guide',
      title: 'How to Choose the Right Family Health Insurance Plan in 2026',
      category: 'Family Insurance',
      readTime: '5 Min Read',
      date: 'July 2026',
      author: 'Muhammed Ameen',
      snippet: 'Selecting a family floater policy requires looking at room rent sub-limits, restoration benefits, and network hospital availability.',
      content: `Medical inflation is rising by 12-14% annually in India. A hospitalization that cost ₹2 Lakhs five years ago can easily exceed ₹5 Lakhs today.

Key factors when selecting family floater policies:
1. Restoration Benefit: Ensure your plan offers 100% automatic restore of sum insured.
2. Room Rent Capping: Choose plans with ZERO room rent capping so your claim isn't proportionally deducted.
3. Network Hospitals: Check that top hospitals near your locality offer cashless admission with Star Health or Aditya Birla.`
    },
    {
      id: 'tax-benefits',
      title: 'Section 80D Income Tax Savings: Maximize Deductions up to ₹75,000',
      category: 'Tax Benefits',
      readTime: '4 Min Read',
      date: 'July 2026',
      author: 'Muhammed Ameen',
      snippet: 'Under Income Tax Section 80D, health insurance premiums paid for self, family, and senior citizen parents can save substantial tax.',
      content: `Section 80D of the Income Tax Act provides tax deduction benefits on medical insurance premiums:

• Self, Spouse & Children: Up to ₹25,000 deduction per financial year.
• Parents (below 60 years): Additional ₹25,000 deduction.
• Parents (Senior Citizens 60+): Deduction increases to ₹50,000.
• Total Maximum Benefit: Up to ₹75,000 annually when insuring senior citizen parents alongside your family.`
    },
    {
      id: 'cashless-guide',
      title: 'Cashless vs Reimbursement Hospital Claims: A Step-by-Step Guide',
      category: 'Cashless Claims',
      readTime: '6 Min Read',
      date: 'July 2026',
      author: 'Muhammed Ameen',
      snippet: 'Understanding the pre-authorization process for cashless hospital admission prevents last-minute out-of-pocket stress.',
      content: `Emergency vs Planned Hospitalization:

• Cashless Claims: Present your e-Card at the network hospital Insurance/TPA desk at least 48 hours prior for planned procedures, or within 24 hours of emergency admission.
• Reimbursement Claims: If admitted to a non-network hospital, collect original discharge summary, itemized pharmacy bills, and diagnostic reports to submit within 15 days of discharge.`
    }
  ];

  return (
    <section id="blog" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          <div className="glow-pill" style={{ marginBottom: '1rem' }}>
            <BookOpen size={16} /> SEO Insurance Insights
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.8rem' }}>
            Insurance Advisory Articles & Guides
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Expert advice from Muhammed Ameen on health coverage, tax saving strategies, and cashless hospital procedures.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {articles.map((art) => (
            <div
              key={art.id}
              className="glass-card-interactive"
              style={{
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-surface)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span className="glow-pill" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
                    {art.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} /> {art.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                  {art.snippet}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                  By {art.author}
                </span>
                <button
                  onClick={() => setSelectedArticleModal(art)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--primary-600)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  Read Guide <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticleModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '640px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '2.2rem',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <span className="glow-pill" style={{ marginBottom: '0.8rem' }}>{selectedArticleModal.category}</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', lineHeight: 1.3 }}>{selectedArticleModal.title}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', marginBottom: '1.5rem' }}>
              By {selectedArticleModal.author} • {selectedArticleModal.date} • {selectedArticleModal.readTime}
            </p>

            <div style={{
              whiteSpace: 'pre-line',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'var(--text-main)',
              marginBottom: '2rem'
            }}>
              {selectedArticleModal.content}
            </div>

            <button onClick={() => setSelectedArticleModal(null)} className="btn-primary" style={{ width: '100%' }}>
              Close Article
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
