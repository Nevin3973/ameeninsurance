import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

export default function PlanComparison({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlanToast, setSelectedPlanToast] = useState(null);

  const plans = [
    {
      id: 'silver',
      name: 'Silver Essential',
      monthlyPrice: 49,
      annualPrice: 42,
      desc: 'Ideal for individuals seeking reliable core hospital protection.',
      popular: false,
      features: {
        maxCoverage: '$150,000 / Year',
        networkHospitals: '2,000+ Hospitals',
        deductible: '$1,000',
        inpatient: true,
        outpatient: false,
        cashless: true,
        worldwideTravel: false
      }
    },
    {
      id: 'gold',
      name: 'Gold Preferred',
      monthlyPrice: 89,
      annualPrice: 75,
      desc: 'Comprehensive coverage for families with outpatient & clinic consults included.',
      popular: true,
      badge: 'MOST POPULAR',
      features: {
        maxCoverage: '$500,000 / Year',
        networkHospitals: '4,500+ Hospitals',
        deductible: '$500',
        inpatient: true,
        outpatient: true,
        cashless: true,
        worldwideTravel: true
      }
    },
    {
      id: 'platinum',
      name: 'Platinum Executive',
      monthlyPrice: 149,
      annualPrice: 126,
      desc: 'VIP global protection with zero deductibles and private hospital room access.',
      popular: false,
      badge: 'VIP EXECUTIVE',
      features: {
        maxCoverage: '$2,000,000 / Year',
        networkHospitals: 'Global VIP Network',
        deductible: '$0 (Zero Deductible)',
        inpatient: true,
        outpatient: true,
        cashless: true,
        worldwideTravel: true
      }
    }
  ];

  const handleSelect = (plan) => {
    setSelectedPlanToast(plan.name);
    setTimeout(() => setSelectedPlanToast(null), 3500);
    if (onSelectPlan) onSelectPlan(plan);
  };

  return (
    <section id="plans" className="section-padding" style={{ background: 'var(--bg-card-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.6rem' }}>
            Compare Ameen Protection Plans
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Choose the plan that fits your family's needs. All plans feature instant digital e-Cards.
          </p>

          {/* Billing Switcher */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#ffffff',
            padding: '0.35rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-light)',
            marginTop: '1.5rem'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: billingCycle === 'monthly' ? 'var(--primary-blue)' : 'transparent',
                color: billingCycle === 'monthly' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: billingCycle === 'annual' ? 'var(--primary-blue)' : 'transparent',
                color: billingCycle === 'annual' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer'
              }}
            >
              Annual (Save 15%)
            </button>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid-3" style={{ gap: '1.5rem', alignItems: 'stretch' }}>
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            return (
              <div
                key={plan.id}
                className="clean-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: plan.popular ? '2px solid var(--primary-blue)' : '1px solid var(--border-light)',
                  position: 'relative'
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary-blue)',
                    color: '#ffffff',
                    padding: '0.25rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: '1.2rem', minHeight: '38px' }}>
                    {plan.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '1.2rem' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-dark)' }}>${price}</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>/ month</span>
                  </div>

                  <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', marginBottom: '1.2rem' }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.8rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={16} color="var(--primary-blue)" />
                      <span>Max Cover: <strong>{plan.features.maxCoverage}</strong></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={16} color="var(--primary-blue)" />
                      <span>Hospitals: <strong>{plan.features.networkHospitals}</strong></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={16} color="var(--primary-blue)" />
                      <span>Deductible: <strong>{plan.features.deductible}</strong></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {plan.features.outpatient ? <Check size={16} color="var(--primary-blue)" /> : <X size={16} color="var(--text-subtle)" />}
                      <span style={{ color: plan.features.outpatient ? 'var(--text-dark)' : 'var(--text-subtle)' }}>Outpatient Clinic Consults</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleSelect(plan)}
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  style={{ width: '100%', padding: '0.8rem' }}
                >
                  Select Plan <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedPlanToast && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '24px',
          background: '#ffffff',
          border: '2px solid var(--primary-blue)',
          borderRadius: 'var(--radius-sm)',
          padding: '1rem 1.4rem',
          boxShadow: 'var(--shadow-md)',
          zIndex: 1000
        }}>
          <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-blue)' }}>Plan Selected!</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            You chose <strong>{selectedPlanToast}</strong>.
          </p>
        </div>
      )}
    </section>
  );
}
