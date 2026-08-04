import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PlanComparison({ onSelectPlan }) {
  const { lang, t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlanToast, setSelectedPlanToast] = useState(null);

  const plans = [
    {
      id: 'silver',
      name: lang === 'ml' ? 'സിൽവർ എസ്സൻഷ്യൽ' : 'Silver Essential',
      monthlyPrice: 49,
      annualPrice: 42,
      desc: lang === 'ml' ? 'വ്യക്തികൾക്കുള്ള സുരക്ഷിതമായ അടിസ്ഥാന ആശുപത്രി സംരക്ഷണം.' : 'Ideal for individuals seeking reliable core hospital protection.',
      popular: false,
      features: {
        maxCoverage: lang === 'ml' ? '₹15 ലക്ഷം / വർഷം' : '$150,000 / Year',
        networkHospitals: lang === 'ml' ? '2,000+ ആശുപത്രികൾ' : '2,000+ Hospitals',
        deductible: '₹10,000',
        inpatient: true,
        outpatient: false,
        cashless: true,
        worldwideTravel: false
      }
    },
    {
      id: 'gold',
      name: lang === 'ml' ? 'ഗോൾഡ് പ്രിഫേർഡ്' : 'Gold Preferred',
      monthlyPrice: 89,
      annualPrice: 75,
      desc: lang === 'ml' ? 'കുടുംബങ്ങൾക്കുള്ള സമഗ്രമായ കവറേജും ഔട്ട്‌പേഷ്യന്റ് ക്ലിനിക്ക് സഹായവും.' : 'Comprehensive coverage for families with outpatient & clinic consults included.',
      popular: true,
      badge: lang === 'ml' ? 'ഏറ്റവും ജനപ്രിയം' : 'MOST POPULAR',
      features: {
        maxCoverage: lang === 'ml' ? '₹50 ലക്ഷം / വർഷം' : '$500,000 / Year',
        networkHospitals: lang === 'ml' ? '4,500+ ആശുപത്രികൾ' : '4,500+ Hospitals',
        deductible: '₹5,000',
        inpatient: true,
        outpatient: true,
        cashless: true,
        worldwideTravel: true
      }
    },
    {
      id: 'platinum',
      name: lang === 'ml' ? 'പ്ലാറ്റിനം എക്സിക്യൂട്ടീവ്' : 'Platinum Executive',
      monthlyPrice: 149,
      annualPrice: 126,
      desc: lang === 'ml' ? 'സീറോ ഡിഡക്റ്റബിളോട് കൂടിയ വിഐപി ആഗോള ആശുപത്രി ചികിത്സാ കവറേജ്.' : 'VIP global protection with zero deductibles and private hospital room access.',
      popular: false,
      badge: lang === 'ml' ? 'വിഐപി എക്സിക്യൂട്ടീവ്' : 'VIP EXECUTIVE',
      features: {
        maxCoverage: lang === 'ml' ? '₹2 കോടി / വർഷം' : '$2,000,000 / Year',
        networkHospitals: lang === 'ml' ? 'ഗ്ലോബൽ വിഐപി നെറ്റ്‌വർക്ക്' : 'Global VIP Network',
        deductible: lang === 'ml' ? '₹0 (സീറോ ഡിഡക്റ്റബിൾ)' : '$0 (Zero Deductible)',
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
            {t('planCompareTitle', 'Compare Ameen Protection Plans')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            {t('planCompareSubtitle', 'Choose the plan that fits your family\'s needs. All plans feature instant digital e-Cards.')}
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
              {t('monthlyBilling', 'Monthly Billing')}
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
              {t('annualBilling', 'Annual (Save 15%)')}
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
