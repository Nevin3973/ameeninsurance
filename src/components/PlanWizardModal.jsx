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
    // Recommendation Logic based on User Answers
    let matches = [];

    if (finalAnswers.target === 'women') {
      matches.push({
        id: 'womens-care',
        name: 'Star Womens Care',
        company: 'Star Health Insurance',
        matchPercent: '98% Match',
        desc: 'Dedicated women policy with maternity, delivery, newborn baby cover from Day 1, and assisted reproduction benefits.',
        sumInsured: '₹5 Lakhs to ₹25 Lakhs',
        highlight: 'Ideal for expecting mothers & maternity planning'
      });
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star',
        company: 'Star Health Insurance',
        matchPercent: '92% Match',
        desc: 'Complete family healthcare protection featuring 100% automatic restoration and zero room caps.',
        sumInsured: '₹5 Lakhs to ₹1 Crore',
        highlight: 'Comprehensive family floater protection'
      });
    } else if (finalAnswers.target === 'parents') {
      matches.push({
        id: 'family-medicare',
        name: 'Family Medicare (PSU)',
        company: 'United India Insurance',
        matchPercent: '96% Match',
        desc: 'Trusted PSU policy covering dependent parents with no co-payment up to age 60 and Section 80D tax benefits.',
        sumInsured: '₹3 Lakhs to ₹25 Lakhs',
        highlight: 'PSU Trust for Elderly Parents in Kerala'
      });
      matches.push({
        id: 'activ-one-max',
        name: 'Activ One Max',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '91% Match',
        desc: 'Chronic management program for Diabetes & Hypertension from Day 1 with single private room access.',
        sumInsured: '₹10 Lakhs to ₹6 Crore',
        highlight: 'Day-1 Pre-existing chronic care'
      });
    } else if (finalAnswers.coverage === 'high') {
      matches.push({
        id: 'activ-one-max',
        name: 'Activ One Max VIP',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '99% Match',
        desc: 'VIP healthcare insurance featuring worldwide emergency cover, executive suite upgrade, and organ donor cover.',
        sumInsured: '₹10 Lakhs to ₹6 Crore',
        highlight: 'Global VIP Hospital Protection'
      });
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star Premium',
        company: 'Star Health Insurance',
        matchPercent: '94% Match',
        desc: 'No capping on room rent & ICU charges with annual cumulative bonus up to 100%.',
        sumInsured: '₹10 Lakhs to ₹1 Crore',
        highlight: 'High sum assured family cover'
      });
    } else {
      matches.push({
        id: 'star-super-star',
        name: 'Star Super Star',
        company: 'Star Health Insurance',
        matchPercent: '97% Match',
        desc: 'Complete family healthcare protection featuring annual cumulative bonus and zero sub-limits on ICU rooms.',
        sumInsured: '₹5 Lakhs to ₹1 Crore',
        highlight: 'Top-rated family floater plan'
      });
      matches.push({
        id: 'health-assure',
        name: 'Health Assure',
        company: 'Aditya Birla Health Insurance',
        matchPercent: '93% Match',
        desc: 'Earn up to 100% premium back as HealthReturns rewards for active living plus AYUSH treatment cover.',
        sumInsured: '₹3 Lakhs to ₹2 Crore',
        highlight: 'HealthReturns rewards & AYUSH cover'
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
                const waUrl = `https://wa.me/919812345678?text=${waMsg}`;

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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
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
