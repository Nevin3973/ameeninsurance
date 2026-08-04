import React, { useState } from 'react';
import { Calendar, Video, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AgentBooking() {
  const { lang, t } = useLanguage();
  const [meetingType, setMeetingType] = useState('video');
  const [selectedDate, setSelectedDate] = useState('2026-08-03');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:30 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section id="booking" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.6rem' }}>
            {lang === 'ml' ? 'മുഹമ്മദ് അമീനുമായി സമയം ബുക്ക് ചെയ്യുക' : 'Book Consultation with Muhammed Ameen'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            {lang === 'ml' ? 'നിങ്ങളുടെ ഇൻഷുറൻസ് സംശയങ്ങളും അനുയോജ്യമായ പോളിസികളും അറിയാൻ നേരിട്ട് സംസാരിക്കാം.' : 'Schedule a 1-on-1 session to evaluate health coverage options or compare partner policies.'}
          </p>
        </div>

        {!bookingConfirmed ? (
          <div className="clean-card" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <form onSubmit={handleBookingSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                  {lang === 'ml' ? '1. കൂടിക്കാഴ്ച രീതി തിരഞ്ഞെടുക്കുക' : '1. Select Consultation Method'}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                  <button
                    type="button"
                    onClick={() => setMeetingType('video')}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: meetingType === 'video' ? '2px solid var(--primary-blue)' : '1px solid var(--border-light)',
                      background: meetingType === 'video' ? 'var(--accent-sky-light)' : '#ffffff',
                      color: meetingType === 'video' ? 'var(--primary-blue)' : 'var(--text-dark)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Video size={18} /> {lang === 'ml' ? 'വീഡിയോ കോൾ' : 'Video Call'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType('in_person')}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: meetingType === 'in_person' ? '2px solid var(--primary-blue)' : '1px solid var(--border-light)',
                      background: meetingType === 'in_person' ? 'var(--accent-sky-light)' : '#ffffff',
                      color: meetingType === 'in_person' ? 'var(--primary-blue)' : 'var(--text-dark)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Building size={18} /> {lang === 'ml' ? 'ഓഫീസ് സന്ദർശനം' : 'Office Meeting'}
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                  {lang === 'ml' ? '2. തീയതി തിരഞ്ഞെടുക്കുക' : '2. Select Preferred Date'}
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.8rem' }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                  {lang === 'ml' ? '3. സൗകര്യപ്രദമായ സമയം (30 മിനിറ്റ്)' : '3. Select Time Slot (30 Mins)'}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      style={{
                        padding: '0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedTimeSlot === slot ? '2px solid var(--primary-blue)' : '1px solid var(--border-light)',
                        background: selectedTimeSlot === slot ? 'var(--primary-blue)' : '#ffffff',
                        color: selectedTimeSlot === slot ? '#ffffff' : 'var(--text-dark)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                {lang === 'ml' ? 'ബുക്കിംഗ് സ്ഥിരീകരിക്കുക' : 'Confirm Booking'} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div className="clean-card" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            <CheckCircle2 size={46} color="var(--primary-blue)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{lang === 'ml' ? 'ബുക്കിംഗ് വിജയകരമാണ്!' : 'Consultation Confirmed!'}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              {lang === 'ml'
                ? `മുഹമ്മദ് അമീൻ ${selectedDate}-ൽ ${selectedTimeSlot}-ന് നിങ്ങളെ ബന്ധപ്പെടുന്നതായിരിക്കും.`
                : `Muhammed Ameen will connect with you on ${selectedDate} at ${selectedTimeSlot} via ${meetingType === 'video' ? 'Google Meet Video Call' : 'Office Meeting'}.`}
            </p>
            <button onClick={() => setBookingConfirmed(false)} className="btn-secondary">
              {lang === 'ml' ? 'മറ്റൊരു സെഷൻ ബുക്ക് ചെയ്യുക' : 'Book Another Session'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
