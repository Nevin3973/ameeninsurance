import React from 'react';
import GlossaryAndFaq from '../components/GlossaryAndFaq';
import BlogSection from '../components/BlogSection';
import { HelpCircle, BookOpen, Search } from 'lucide-react';

export default function FaqPage({ onNavigate }) {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Sub-Page Banner Header */}
      <div style={{
        background: 'linear-gradient(180deg, var(--bg-hero) 0%, #ffffff 100%)',
        padding: '3.5rem 0 2.5rem',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="pill-badge">
              <HelpCircle size={15} color="var(--primary-blue)" /> KNOWLEDGE & FAQ HUB
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Insurance Terminology & FAQ
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Understand insurance terms, pre-existing waiting periods, room rent sub-limits, claim procedures, and tax savings under Section 80D.
          </p>
        </div>
      </div>

      {/* Main Glossary and FAQ Section */}
      <GlossaryAndFaq />

      {/* Educational Articles & Guides */}
      <BlogSection />
    </div>
  );
}
