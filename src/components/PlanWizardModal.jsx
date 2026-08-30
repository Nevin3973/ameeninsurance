import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, ArrowLeft, RefreshCw, MessageSquare, Award, Sparkles, User, Users, HeartHandshake, Baby } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PlanWizardModal({ isOpen, onClose, onSelectProduct, onBookConsultation }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    target: '',
    coverage: '',
    priority: ''
  });
  const [recommendations, setRecommendations] = useState([]);

  if (!isOpen) return null;

  const handleSelectAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate Recommendations
      calculateRecommendations(updated);
      setCurrentStep(4); // Results step
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch (err) {
        // Fallback gracefully
      }
    }
  };

  const calculateRecommendations = (finalAnswers) => {
    // Recommendation Logic based on User Answers aligned with health_insurance_website_content_summary.md
    let matches = [];

    if (finalAnswers.target === 'women') {
      matches.push({
        id: 'womens-care',
        name: 'Star Women Care',
        company: 'Star Health Insurance',
        matchPercent: '99% Match',
        desc: 'Specialized women policy featuring Assisted Reproduction (ART up to ₹3L), delivery expenses, newborn vaccination & STAR Mother cover.',
        sumInsured: '₹5 Lakhs to ₹1 Crore',
        highlight: 'Women & Maternity Specialist Choice'
      });
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star (Secure)',
        company: 'Star Health Insurance',
        matchPercent: '96% Match',
        desc: 'Full protection with unlimited SI restoration, zero room rent capping, Package A consumables & Freeze Your Age premium lock. Women as proposer eligible.',
        sumInsured: '₹7.5 Lakhs to ₹1 Crore+',
        highlight: 'Zero Room Rent & Premium Lock for Women'
      });
      matches.push({
        id: 'star-health-assure',
        name: 'Star Health Assure',
        company: 'Star Health Insurance',
        matchPercent: '94% Match',
        desc: 'Individual & floater indemnity policy with automatic restoration, home care treatment, preventive checkups & maternity cover. Women as proposer eligible.',
        sumInsured: '₹5 Lakhs to ₹2 Crore',
        highlight: 'Home Care & Maternity for Women Proposers'
      });
      matches.push({
        id: 'activ-one-max',
        name: 'Aditya Birla Activ One MAX',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '92% Match',
        desc: 'VIP healthcare with Super Credit up to 500%, HealthReturns™ up to 100% premium back & NRI discounts. Women as proposer eligible.',
        sumInsured: '₹10 Lakhs to ₹6 Crore',
        highlight: 'VIP Super Credit for Women Proposers'
      });
      matches.push({
        id: 'activ-yuva',
        name: 'Aditya Birla Activ Yuva',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '90% Match',
        desc: 'Young women earn up to 100% premium back via HealthReturns™, 11X cover boost & Worldwide Maternity option. Women as proposer eligible.',
        sumInsured: '₹5 Lakhs to ₹50 Lakhs',
        highlight: 'HealthReturns™ & Maternity for Young Women'
      });
      matches.push({
        id: 'yuva-bharat',
        name: 'New India Yuva Bharat (Platinum)',
        company: 'The New India Assurance Company Limited',
        matchPercent: '88% Match',
        desc: 'PSU policy with Platinum plan Mother & Well-Baby benefits including infertility treatment, pre-term birth & vaccination. Women as proposer eligible.',
        sumInsured: '₹5 Lakhs to ₹1 Crore',
        highlight: 'PSU Mother & Well-Baby Protection'
      });
    } else if (finalAnswers.target === 'parents') {
      matches.push({
        id: 'star-health-assure',
        name: 'Star Health Assure',
        company: 'Star Health Insurance',
        matchPercent: '97% Match',
        desc: 'Family floater featuring Home Care treatment up to ₹5L, 100% automatic restoration, and preventive health checkups.',
        sumInsured: '₹5 Lakhs to ₹2 Crore',
        highlight: 'Home Care & Unlimited Automatic Restoration'
      });
      matches.push({
        id: 'family-medicare',
        name: 'United India Family Medicare',
        company: 'United India Insurance Company Limited',
        matchPercent: '94% Match',
        desc: 'Sovereign Government PSU policy covering dependent family members, AYUSH Ayurvedic treatment, and Section 80D tax savings.',
        sumInsured: '₹3 Lakhs to ₹25 Lakhs',
        highlight: 'Government PSU Security & AYUSH Cover'
      });
    } else if (finalAnswers.target === 'self') {
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star (Secure)',
        company: 'Star Health Insurance',
        matchPercent: '98% Match',
        desc: 'Full individual & floater protection with unlimited SI restoration, zero room rent capping (₹7.5L+), Package A consumables & Freeze Your Age premium lock.',
        sumInsured: '₹7.5 Lakhs to ₹1 Crore+',
        highlight: 'Zero Room Rent Capping & Individual Lock'
      });
      matches.push({
        id: 'star-health-assure',
        name: 'Star Health Assure',
        company: 'Star Health Insurance',
        matchPercent: '95% Match',
        desc: 'Individual & floater indemnity policy featuring automatic restoration, home care treatment, preventive checkups & tele-consultations.',
        sumInsured: '₹5 Lakhs to ₹2 Crore',
        highlight: 'Individual & Floater Home Care Cover'
      });
      matches.push({
        id: 'activ-yuva',
        name: 'Aditya Birla Activ Yuva',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '93% Match',
        desc: 'Healthy Har Din plan: earn up to 100% premium back as HealthReturns™, up to 11X cover boost in 11 years & travel ON/OFF.',
        sumInsured: '₹5 Lakhs to ₹50 Lakhs',
        highlight: 'Young & Active HealthReturns™ Rewards'
      });
    } else if (finalAnswers.priority === 'budget') {
      matches.push({
        id: 'activ-yuva',
        name: 'Aditya Birla Activ Yuva',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '98% Match',
        desc: 'Healthy Har Din plan: earn up to 100% premium back as HealthReturns™, up to 11X cover boost in 11 years & travel ON/OFF.',
        sumInsured: '₹5 Lakhs to ₹50 Lakhs',
        highlight: 'Young & Active HealthReturns™ Rewards'
      });
      matches.push({
        id: 'yuva-bharat',
        name: 'New India Yuva Bharat (Base/Gold)',
        company: 'The New India Assurance Company Limited',
        matchPercent: '92% Match',
        desc: 'Government PSU plan for age 18-45 with up to 10% healthy parameter discount (BMI/sugar/BP) & hospital cash.',
        sumInsured: '₹5 Lakhs to ₹1 Crore',
        highlight: 'Affordable PSU Starter Policy'
      });
    } else if (finalAnswers.coverage === 'high' || finalAnswers.priority === 'no_cap') {
      matches.push({
        id: 'activ-one-max',
        name: 'Aditya Birla Activ One MAX',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '99% Match',
        desc: 'VIP healthcare policy with Super Credit up to 500% (max ₹3 Cr), Super Reload unlimited refills, and up to 25% NRI discount.',
        sumInsured: '₹10 Lakhs to ₹6 Crore',
        highlight: 'VIP Super Credit & Exclusive NRI Discount'
      });
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star (Secure)',
        company: 'Star Health Insurance',
        matchPercent: '95% Match',
        desc: 'Unlimited restoration, Package A home nursing & consumables, zero room rent capping, and entry age premium lock.',
        sumInsured: '₹7.5 Lakhs to ₹1 Crore+',
        highlight: 'Zero Room Rent Limit & Package A Consumables'
      });
    } else {
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star (Secure)',
        company: 'Star Health Insurance',
        matchPercent: '97% Match',
        desc: 'Full protection featuring Package A consumables cover, unlimited restoration, and Freeze Your Age premium lock.',
        sumInsured: '₹7.5 Lakhs to ₹1 Crore+',
        highlight: 'Top-Rated Family Protection'
      });
      matches.push({
        id: 'activ-one-max',
        name: 'Aditya Birla Activ One MAX',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '93% Match',
        desc: 'Earn up to 100% HealthReturns™, Super Credit up to 500%, Super Reload, and NRI discounts up to 25%.',
        sumInsured: '₹10 Lakhs to ₹6 Crore',
        highlight: 'HealthReturns™ & Super Credit'
      });
    }

    setRecommendations(matches);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({ target: '', coverage: '', priority: '' });
    setRecommendations([]);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-subtle)',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>

        {/* Wizard Header Bar */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-blue)', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            <Sparkles size={16} /> PLAN FINDER WIZARD
          </div>
          <h2 style={{ fontSize: '1.6rem', marginTop: '0.2rem' }}>
            {currentStep === 4 ? 'Your Tailored Policy Matches' : 'Find Your Ideal Insurance Cover'}
          </h2>
          {currentStep < 4 && (
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Step {currentStep} of 3 • Answer 3 quick questions for instant policy matching
            </p>
          )}
        </div>

        {/* Step Progress Bar */}
        {currentStep < 4 && (
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '2rem' }}>
            {[1, 2, 3].map(step => (
              <div
                key={step}
                style={{
                  flex: 1,
                  height: '6px',
                  borderRadius: '9999px',
                  background: step <= currentStep ? 'var(--primary-blue)' : 'var(--border-light)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Who are you protecting? */}
        {currentStep === 1 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1.2rem', color: 'var(--text-dark)' }}>
              1. Who do you want to protect in this policy?
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="responsive-grid-equal">
              <button
                onClick={() => handleSelectAnswer('target', 'family')}
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="clean-card"
              >
                <Users size={24} color="var(--primary-blue)" style={{ marginBottom: '0.6rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>Family Floater</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Self, Spouse & Children</div>
              </button>

              <button
                onClick={() => handleSelectAnswer('target', 'parents')}
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="clean-card"
              >
                <HeartHandshake size={24} color="var(--primary-blue)" style={{ marginBottom: '0.6rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>Elderly Parents</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Senior Citizens / NRI Parents</div>
              </button>

              <button
                onClick={() => handleSelectAnswer('target', 'women')}
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="clean-card"
              >
                <Baby size={24} color="var(--primary-blue)" style={{ marginBottom: '0.6rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>Womens & Maternity</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Maternity, Delivery & Newborn</div>
              </button>

              <button
                onClick={() => handleSelectAnswer('target', 'self')}
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="clean-card"
              >
                <User size={24} color="var(--primary-blue)" style={{ marginBottom: '0.6rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>Individual Cover</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Single adult protection</div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Preferred Coverage Range */}
        {currentStep === 2 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1.2rem', color: 'var(--text-dark)' }}>
              2. What sum insured coverage range do you prefer?
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <button
                onClick={() => handleSelectAnswer('coverage', 'medium')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                className="clean-card"
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary-blue)' }}>₹15 Lakhs to ₹50 Lakhs (Most Popular)</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Recommended for comprehensive hospital protection in Kerala & Tier-1 cities</div>
                </div>
                <ArrowRight size={18} color="var(--primary-blue)" />
              </button>

              <button
                onClick={() => handleSelectAnswer('coverage', 'essential')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                className="clean-card"
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>₹5 Lakhs to ₹10 Lakhs</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Essential hospitalization cover with affordable annual premiums</div>
                </div>
                <ArrowRight size={18} color="var(--text-subtle)" />
              </button>

              <button
                onClick={() => handleSelectAnswer('coverage', 'high')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                className="clean-card"
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>₹1 Crore to ₹6 Crore VIP Cover</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>High-net-worth VIP global protection with private room upgrades</div>
                </div>
                <ArrowRight size={18} color="var(--text-subtle)" />
              </button>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
              <button
                onClick={() => setCurrentStep(1)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-subtle)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600 }}
              >
                <ArrowLeft size={16} /> Back to Step 1
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Priority Benefit */}
        {currentStep === 3 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1.2rem', color: 'var(--text-dark)' }}>
              3. What is your top priority benefit?
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="responsive-grid-equal">
              <button
                onClick={() => handleSelectAnswer('priority', 'no_cap')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                className="clean-card"
              >
                <ShieldCheck size={22} color="var(--primary-blue)" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>Zero Room Rent Cap</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>No sub-limits on ICU or rooms</div>
              </button>

              <button
                onClick={() => handleSelectAnswer('priority', 'cashless')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                className="clean-card"
              >
                <Award size={22} color="var(--primary-blue)" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>14,000+ Cashless Hospitals</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Wide network in Kerala</div>
              </button>

              <button
                onClick={() => handleSelectAnswer('priority', 'ayush')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                className="clean-card"
              >
                <Check size={22} color="var(--primary-blue)" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>AYUSH / Ayurveda Cover</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>In-patient holistic medical cover</div>
              </button>

              <button
                onClick={() => handleSelectAnswer('priority', 'budget')}
                style={{
                  padding: '1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                className="clean-card"
              >
                <Sparkles size={22} color="var(--primary-blue)" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>Affordable Starter Rate</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lowest starter premiums</div>
              </button>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
              <button
                onClick={() => setCurrentStep(2)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-subtle)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600 }}
              >
                <ArrowLeft size={16} /> Back to Step 2
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: RECOMMENDATION RESULTS */}
        {currentStep === 4 && (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '1.8rem' }}>
              {recommendations.map((rec, idx) => {
                const waMsg = encodeURIComponent(`Hi Ameen Nellikkunnan, I used your Plan Finder Wizard and was recommended the ${rec.name} (${rec.company}) policy. I would like to get a quote.`);
                const waUrl = `https://wa.me/917025984646?text=${waMsg}`;

                return (
                  <div
                    key={idx}
                    className="clean-card"
                    style={{
                      border: idx === 0 ? '2px solid var(--primary-blue)' : '1px solid var(--border-light)',
                      position: 'relative',
                      background: '#ffffff',
                      padding: '1.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{
                          background: idx === 0 ? 'var(--primary-blue)' : 'var(--bg-hero)',
                          color: idx === 0 ? '#ffffff' : 'var(--primary-blue)',
                          padding: '0.25rem 0.85rem',
                          borderRadius: '9999px',
                          fontSize: '0.78rem',
                          fontWeight: 800
                        }}>
                          {rec.matchPercent}
                        </span>
                        <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 800 }}>
                          💳 EMI Available
                        </span>
                        <span style={{ background: '#f0fdf4', color: '#15803d', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 800 }}>
                          🗓️ 1, 2 & 3 Yr Plans
                        </span>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 600 }}>{rec.sumInsured}</span>
                    </div>

                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{rec.name}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '0.6rem' }}>{rec.company}</p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>{rec.desc}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.65rem', fontSize: '0.88rem', background: '#25D366', color: '#ffffff' }}
                      >
                        <MessageSquare size={16} /> WhatsApp Ameen
                      </a>
                      <button
                        onClick={() => {
                          onClose();
                          if (onBookConsultation) onBookConsultation();
                        }}
                        className="btn-secondary"
                        style={{ padding: '0.65rem', fontSize: '0.88rem' }}
                      >
                        Book Call
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={handleReset}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-subtle)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                <RefreshCw size={15} /> Retake Wizard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
