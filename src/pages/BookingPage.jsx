import React from 'react';
import AgentBooking from '../components/AgentBooking';
import { Calendar, ShieldCheck, Clock, UserCheck } from 'lucide-react';

export default function BookingPage({ onNavigate }) {
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
              <Calendar size={15} color="var(--primary-blue)" /> 1-ON-1 ADVISORY SESSION
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>
            Schedule Your Consultation Slot
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Book a dedicated consultation slot directly with Ameen Nellikkunnan. Get impartial policy reviews, family health floater comparisons, or term insurance guidance.
          </p>
        </div>
      </div>

      {/* Main Interactive Slot Booking Component */}
      <AgentBooking />
    </div>
  );
}
