import React, { useState, useEffect } from 'react';
import { Heart, ShieldAlert, Check, ArrowRight, Printer, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendLeadEmail } from '../services/emailService';

export default function QuoteCalculator({ initialConfig }) {
  const [category, setCategory] = useState(initialConfig?.category || 'health');
  const [age, setAge] = useState(initialConfig?.age || 32);
  const [coverageAmount, setCoverageAmount] = useState(250000);
  const [deductible, setDeductible] = useState(500);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    if (initialConfig?.category) setCategory(initialConfig.category);
    if (initialConfig?.age) setAge(initialConfig.age);
  }, [initialConfig]);

  const categories = [
    { id: 'health', label: 'Health Insurance (Family & Individual)', icon: Heart }
  ];

  // Simple Premium Formula
  const calculatePrice = () => {
    const base = 40 + (coverageAmount / 10000) * 1.5 + (age * 0.8) - (deductible * 0.02);
    const monthly = Math.max(20, Math.round(base));
    return billingCycle === 'monthly' ? monthly : Math.round(monthly * 12 * 0.85 / 12);
  };

  const currentMonthlyPrice = calculatePrice();

  const handleApply = () => {
    sendLeadEmail({
      insuranceType: 'Calculator Quote Application',
      notes: `Coverage: $${coverageAmount.toLocaleString()}, Insured Age: ${age}, Deductible: $${deductible}, Est. Premium: $${currentMonthlyPrice}/mo`,
      source: 'Instant Quote Calculator'
    });
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setShowQuoteModal(true);
  };

  return (
    <section id="quote" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.6rem' }}>
            Instant Quote Calculator
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Customize your sum assured and deductibles to view transparent rate estimates.
          </p>
        </div>

        {/* Category Selection Tabs */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.3rem',
                  borderRadius: 'var(--radius-sm)',
                  border: isSelected ? 'none' : '1px solid var(--border-light)',
                  background: isSelected ? 'var(--primary-blue)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--text-dark)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={18} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Calculator Main Grid */}
        <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
          {/* Left Controls */}
          <div className="clean-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Adjust Parameters</h3>

            {/* Slider 1: Sum Assured */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Sum Assured / Coverage</span>
                <span style={{ color: 'var(--primary-blue)', fontWeight: 800 }}>${coverageAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="25000"
                max="1000000"
                step="25000"
                value={coverageAmount}
                onChange={(e) => setCoverageAmount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-blue)' }}
              />
            </div>

            {/* Slider 2: Age */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Insured Age</span>
                <span style={{ color: 'var(--primary-blue)', fontWeight: 800 }}>{age} Years</span>
              </div>
              <input
                type="range"
                min="18"
                max="75"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-blue)' }}
              />
            </div>

            {/* Slider 3: Deductible */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>Annual Deductible</span>
                <span style={{ color: 'var(--primary-blue)', fontWeight: 800 }}>${deductible}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2500"
                step="250"
                value={deductible}
                onChange={(e) => setDeductible(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-blue)' }}
              />
            </div>
          </div>

          {/* Right Pricing Summary */}
          <div className="clean-card" style={{ border: '2px solid var(--primary-blue)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 700, textTransform: 'uppercase' }}>
              ESTIMATED MONTHLY PREMIUM
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', margin: '0.5rem 0 1.2rem' }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--primary-blue)' }}>
                ${currentMonthlyPrice}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>/ month</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={16} color="var(--primary-blue)" />
                <span>Max Sum Assured: <strong>${coverageAmount.toLocaleString()}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={16} color="var(--primary-blue)" />
                <span>Selected Deductible: <strong>${deductible}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={16} color="var(--primary-blue)" />
                <span>Cashless Hospital Guarantee</span>
              </div>
            </div>

            <button onClick={handleApply} className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Apply Online & Lock Rate <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Quote Summary Modal */}
      {showQuoteModal && (
        <div className="modal-overlay" onClick={() => setShowQuoteModal(false)}>
          <div className="modal-content" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowQuoteModal(false)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', textAlign: 'center' }}>Quote Certificate</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1.2rem' }}>
              Reference ID: <strong>AMN-2026-8942</strong>
            </p>

            <div style={{ background: 'var(--bg-card-alt)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <p>Coverage: <strong>${coverageAmount.toLocaleString()}</strong></p>
              <p>Locked Premium: <strong style={{ color: 'var(--primary-blue)' }}>${currentMonthlyPrice}/month</strong></p>
              <p>Rate Guarantee: <strong>30 Days</strong></p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              <button onClick={() => window.print()} className="btn-secondary">
                <Printer size={16} /> Print PDF
              </button>
              <button onClick={() => setShowQuoteModal(false)} className="btn-primary">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
