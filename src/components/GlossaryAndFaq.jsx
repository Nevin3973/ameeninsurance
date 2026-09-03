import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function GlossaryAndFaq() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: 'How fast are medical claims processed?',
      a: 'Pre-approved cashless claims at Star Health or Aditya Birla network hospitals are settled directly with the hospital. Direct reimbursement claims are processed within 24 to 48 hours.'
    },
    {
      q: 'Why consult an independent insurance advisor instead of buying directly?',
      a: 'Ameen Nellikkunnan provides 15 years of impartial guidance across Star Health, Aditya Birla, United India, and New India Assurance. You get identical premiums with dedicated personal claim support.'
    },
    {
      q: 'Can I add family members to an existing policy later?',
      a: 'Yes, spouses and newborn babies can be added to an active family floater policy during policy renewal or mid-term upon life event notification.'
    },
    {
      q: 'What is the Section 80D tax benefit limit?',
      a: 'Under Section 80D, you can claim up to ₹25,000 deduction for family health premiums and an additional ₹50,000 for senior citizen parents, totaling up to ₹75,000 per year.'
    }
  ];

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-card-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.6rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Clear, honest answers to help you navigate your health insurance choices.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="clean-card"
                style={{ padding: 0, overflow: 'hidden' }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.1rem 1.4rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    color: 'var(--text-dark)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    color="var(--primary-blue)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.4rem 1.2rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '0.8rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
