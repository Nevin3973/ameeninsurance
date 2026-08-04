import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import InsurancePartners from './components/InsurancePartners';
import AgentBooking from './components/AgentBooking';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import ProductDetailPage from './components/ProductDetailPage';
import NriAdvisory from './components/NriAdvisory';
import PlanWizardModal from './components/PlanWizardModal';
import AboutAmeen from './components/AboutAmeen';

// Dedicated Sub-Pages
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage';
import PartnersPage from './pages/PartnersPage';
import ClaimsPage from './pages/ClaimsPage';
import FaqPage from './pages/FaqPage';
import BookingPage from './pages/BookingPage';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPartnerFilter, setSelectedPartnerFilter] = useState('all');
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPartner = (partnerId) => {
    setSelectedPartnerFilter(partnerId);
    setSelectedProduct(null);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tabId) => {
    setSelectedProduct(null);
    if (tabId === 'products' && activeTab !== 'products') {
      setSelectedPartnerFilter('all');
    }
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Sub-page based on active tab selection
  const renderSubPage = () => {
    if (selectedProduct) {
      return (
        <ProductDetailPage
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onBookConsultation={() => handleNavigate('booking')}
        />
      );
    }

    switch (activeTab) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'products':
        return <PlansPage onNavigate={handleNavigate} onOpenWizard={() => setIsWizardOpen(true)} initialPartnerFilter={selectedPartnerFilter} />;
      case 'partners':
        return <PartnersPage onNavigate={handleNavigate} onSelectPartner={handleSelectPartner} />;
      case 'nri':
        return <NriAdvisory onBookConsultation={() => handleNavigate('booking')} onOpenWizard={() => setIsWizardOpen(true)} />;
      case 'claims':
        return <ClaimsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingPage onNavigate={handleNavigate} />;
      case 'hero':
      default:
        return (
          <main>
            {/* 1. Hero Image Carousel, Direct Lead Capture & Trust Bar */}
            <Hero onOpenWizard={() => setIsWizardOpen(true)} />

            {/* 2. Muhammed Ameen's Consultant Profile & Credentials (Brought Up!) */}
            <AboutAmeen />

            {/* 3. Featured Insurance Plans Preview */}
            <section style={{ background: '#ffffff', padding: '3.5rem 0' }}>
              <div className="container">
                <ProductCatalog onSelectProduct={handleSelectProduct} />

                {/* Sub-page Navigation CTA */}
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                  <button
                    onClick={() => handleNavigate('products')}
                    className="btn-primary"
                    style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
                  >
                    View Comparison & Premium Calculators <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </section>

            {/* 3. IRDAI Licensed Partner Insurers Preview */}
            <section style={{ background: '#f8fafc', padding: '3.5rem 0' }}>
              <div className="container">
                <InsurancePartners />

                {/* Sub-page Navigation CTA */}
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button
                    onClick={() => handleNavigate('partners')}
                    className="btn-secondary"
                    style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
                  >
                    Explore Cashless Network & Partner Ratios <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </section>

            {/* 4. Direct 1-on-1 Consultation Slot Booking */}
            <AgentBooking />
          </main>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-surface)', overflowX: 'hidden' }}>
      {/* Sticky Rounded Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={handleNavigate} onOpenWizard={() => setIsWizardOpen(true)} />

      {/* Dynamic Main / Sub-Page Content Assembly */}
      <main style={{ minHeight: 'calc(100vh - 200px)', overflowX: 'hidden' }}>
        {renderSubPage()}
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Global Floating WhatsApp, Quick Enquiry & AI Assistant Widgets */}
      <FloatingWidgets />

      {/* Interactive 3-Step Plan Finder Wizard Modal */}
      <PlanWizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onSelectProduct={handleSelectProduct}
        onBookConsultation={() => handleNavigate('booking')}
      />
    </div>
  );
}
