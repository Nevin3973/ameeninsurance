import React, { useState } from 'react';
import ProductCatalog from '../components/ProductCatalog';
import PlanComparison from '../components/PlanComparison';
import QuoteCalculator from '../components/QuoteCalculator';
import ProductDetailPage from '../components/ProductDetailPage';
import { ShieldCheck, Search, Scale, Calculator, Sparkles } from 'lucide-react';

export default function PlansPage({ onNavigate, onOpenWizard }) {
  const [activePlanTab, setActivePlanTab] = useState('catalog');
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <ProductDetailPage
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onBookConsultation={() => onNavigate('booking')}
      />
    );
  }

  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Sub-Page Banner Header */}
      <div style={{
        background: 'linear-gradient(180deg, var(--bg-hero) 0%, #ffffff 100%)',
        padding: '3.5rem 0 2rem',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="pill-badge">
              <ShieldCheck size={15} color="var(--primary-blue)" /> IRDAI APPROVED PRODUCTS
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Health & Life Insurance Plans
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6, marginBottom: '2rem' }}>
            Explore IRDAI licensed health policies, family floater plans, maternity benefits, and term life insurance with transparent room rent caps and restoration benefits.
          </p>

          {/* Sub-Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenWizard}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'linear-gradient(135deg, var(--primary-blue), #2563eb)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(30, 64, 175, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <Sparkles size={16} color="#fde047" /> Find My Ideal Plan (Wizard)
            </button>

            <button
              onClick={() => setActivePlanTab('catalog')}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activePlanTab === 'catalog' ? 'none' : '1px solid var(--border-light)',
                background: activePlanTab === 'catalog' ? 'var(--primary-blue)' : '#ffffff',
                color: activePlanTab === 'catalog' ? '#ffffff' : 'var(--text-dark)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Search size={16} /> Browse All Products
            </button>

            <button
              onClick={() => setActivePlanTab('comparison')}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activePlanTab === 'comparison' ? 'none' : '1px solid var(--border-light)',
                background: activePlanTab === 'comparison' ? 'var(--primary-blue)' : '#ffffff',
                color: activePlanTab === 'comparison' ? '#ffffff' : 'var(--text-dark)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Scale size={16} /> Side-by-Side Comparison
            </button>

            <button
              onClick={() => setActivePlanTab('calculator')}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activePlanTab === 'calculator' ? 'none' : '1px solid var(--border-light)',
                background: activePlanTab === 'calculator' ? 'var(--primary-blue)' : '#ffffff',
                color: activePlanTab === 'calculator' ? '#ffffff' : 'var(--text-dark)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Calculator size={16} /> Premium Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Tab Body */}
      {activePlanTab === 'catalog' && (
        <ProductCatalog onSelectProduct={(p) => setSelectedProduct(p)} />
      )}

      {activePlanTab === 'comparison' && (
        <PlanComparison />
      )}

      {activePlanTab === 'calculator' && (
        <QuoteCalculator />
      )}
    </div>
  );
}
