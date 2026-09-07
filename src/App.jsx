import React, { useState, useEffect } from 'react';
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
import PrivacyTermsModal from './components/PrivacyTermsModal';
import AboutAmeen from './components/AboutAmeen';

// Dedicated Sub-Pages
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage';
import PartnersPage from './pages/PartnersPage';
import ClaimsPage from './pages/ClaimsPage';
import FaqPage from './pages/FaqPage';
import BookingPage from './pages/BookingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { ArrowRight } from 'lucide-react';

const tabPathMap = {
  hero: '/',
  about: '/about',
  products: '/plans',
  partners: '/partners',
  nri: '/nri',
  claims: '/claims',
  faq: '/faq',
  booking: '/booking',
  privacy: '/privacy-policy',
  terms: '/terms-of-service'
};

const getTabFromLocation = () => {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const hash = window.location.hash.toLowerCase();

  if (path === '/privacy' || path === '/privacy-policy' || path === '/privacy.html' || path === '/privacy-policy.html' || hash === '#privacy' || hash === '#privacy-policy') {
    return 'privacy';
  }
  if (path === '/terms' || path === '/terms-of-service' || path === '/terms.html' || path === '/terms-of-service.html' || hash === '#terms' || hash === '#terms-of-service') {
    return 'terms';
  }
  if (path === '/about' || hash === '#about') return 'about';
  if (path === '/plans' || path === '/products' || hash === '#plans' || hash === '#products') return 'products';
  if (path === '/partners' || hash === '#partners') return 'partners';
  if (path === '/nri' || hash === '#nri') return 'nri';
  if (path === '/claims' || hash === '#claims') return 'claims';
  if (path === '/faq' || hash === '#faq') return 'faq';
  if (path === '/booking' || hash === '#booking') return 'booking';

  return 'hero';
};

export default function App() {
  const [activeTab, setActiveTab] = useState(() => getTabFromLocation());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPartnerFilter, setSelectedPartnerFilter] = useState('all');
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [privacyModalTab, setPrivacyModalTab] = useState('privacy');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const newTab = getTabFromLocation();
      setActiveTab(newTab);
      setSelectedProduct(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPartner = (partnerId) => {
    setSelectedPartnerFilter(partnerId);
    setSelectedProduct(null);
    handleNavigate('products');
  };

  const handleNavigate = (tabId) => {
    setSelectedProduct(null);
    if (tabId === 'products' && activeTab !== 'products') {
      setSelectedPartnerFilter('all');
    }
    setActiveTab(tabId);

    const path = tabPathMap[tabId] || '/';
    if (window.location.pathname !== path) {
      window.history.pushState({ tabId }, '', path);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO Title & Meta Description Manager
  React.useEffect(() => {
    let title = "Ameen Nellikkunnan Insurance Advisory | Health Insurance Specialist";
    let metaDesc = "Ameen Nellikkunnan is an independent IRDAI licensed health insurance consultant with 15+ years expertise guiding families and NRIs across Star Health, Aditya Birla, United India & New India Assurance.";

    if (selectedProduct) {
      title = `${selectedProduct.name} - ${selectedProduct.company} | Ameen Insurance Advisory`;
      metaDesc = `${selectedProduct.desc} Sum Insured: ${selectedProduct.sumInsured}. Get unbiased advisory from Ameen Nellikkunnan.`;
    } else {
      switch (activeTab) {
        case 'about':
          title = "About Ameen Nellikkunnan | 15+ Years IRDAI Health Insurance Specialist";
          metaDesc = "Learn about Ameen Nellikkunnan's 15+ years of independent health insurance consultancy, ₹150+ Cr claim advocacy, and client reviews.";
          break;
        case 'products':
          title = "Compare Health Insurance Plans | Star Health, Aditya Birla & PSU Insurers";
          metaDesc = "Compare Star Health Super Star, Star Assure, Women Care, Aditya Birla Activ Yuva, Activ One MAX, and PSU policies with zero hidden capping.";
          break;
        case 'partners':
          title = "IRDAI Authorized Partner Insurers & 14,000+ Cashless Hospital Network";
          metaDesc = "Explore network hospital counts and claim settlement credibility of Star Health, Aditya Birla, United India, and New India Assurance.";
          break;
        case 'nri':
          title = "NRI Health Insurance Advisory | Exclusive 15%-25% Discounts for GCC & Expats";
          metaDesc = "Specialized health insurance guidance for NRIs in GCC, UAE, Saudi Arabia, Qatar & overseas. Claim up to 25% NRI discount on Aditya Birla plans.";
          break;
        case 'claims':
          title = "24/7 Emergency Cashless Hospital Claim Support | Ameen Insurance Advisory";
          metaDesc = "Direct hospital desk coordination and 100% claim settlement advocacy across 14,000+ cashless network hospitals.";
          break;
        case 'faq':
          title = "Health Insurance FAQs & Guidance | Ameen Nellikkunnan";
          metaDesc = "Find answers to top health insurance questions regarding maternity waiting periods, cashless admission, PED cover, and NRI discounts.";
          break;
        case 'booking':
          title = "Book Free 1-on-1 Health Insurance Consultation | Ameen Nellikkunnan";
          metaDesc = "Schedule a direct phone or WhatsApp consultation with independent IRDAI consultant Ameen Nellikkunnan for unbiased policy recommendations.";
          break;
        case 'privacy':
          title = "Privacy Policy & WhatsApp Data Protection | Ameen Insurance Advisory";
          metaDesc = "Official Privacy Policy for Ameen Nellikkunnan Insurance Advisory. Aligned with WhatsApp Business API compliance, data deletion request procedure & DPDP Act 2023.";
          break;
        case 'terms':
          title = "Terms of Service & Advisory Disclosure | Ameen Insurance Advisory";
          metaDesc = "Terms of Service for Ameen Nellikkunnan Insurance Advisory (IRDAI Reg #129/153). Learn about zero commission markups, WhatsApp messaging terms & claim advocacy.";
          break;
        default:
          break;
      }
    }

    document.title = title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', metaDesc);
    }
  }, [activeTab, selectedProduct]);

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
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'hero':
      default:
        return (
          <main>
            {/* 1. Hero Image Carousel, Direct Lead Capture & Trust Bar */}
            <Hero onNavigate={handleNavigate} onOpenWizard={() => setIsWizardOpen(true)} />

            {/* 2. Ameen Nellikkunnan's Consultant Profile & Credentials */}
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
                <InsurancePartners onSelectPartner={handleSelectPartner} />

                {/* Sub-page Navigation CTA */}
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button
                    onClick={() => handleNavigate('partners')}
                    className="btn-secondary"
                    style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', color: 'var(--text-dark)' }}
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
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacyModal={(tab) => {
          handleNavigate(tab === 'terms' ? 'terms' : 'privacy');
        }}
      />

      {/* Global Floating WhatsApp, Quick Enquiry & AI Assistant Widgets */}
      <FloatingWidgets />

      {/* Interactive 3-Step Plan Finder Wizard Modal */}
      <PlanWizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onSelectProduct={handleSelectProduct}
        onBookConsultation={() => handleNavigate('booking')}
      />

      {/* WhatsApp Business API Compliance & Privacy Modal */}
      <PrivacyTermsModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        initialTab={privacyModalTab}
      />
    </div>
  );
}
