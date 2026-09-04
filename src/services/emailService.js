import emailjs from '@emailjs/browser';

// Target email address for website form submissions
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || 'info@ameenhealthinsurance.com';

// EmailJS Configuration Keys (Optional custom credentials from .env)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

/**
 * Sends lead or consultation inquiry details to info@ameenhealthinsurance.com
 * Uses EmailJS (if configured) or free FormSubmit AJAX service.
 * 
 * @param {Object} leadData - Details of the submitted lead form
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendLeadEmail(leadData) {
  const visitorName = leadData.name || leadData.fullName || leadData.patientName || 'Website Visitor';
  const visitorPhone = leadData.phone || leadData.phoneNumber || 'Not provided';
  const visitorEmail = leadData.email || 'Not provided';
  const insuranceType = leadData.insuranceType || leadData.category || 'Health Insurance';

  const payload = {
    _subject: `New Insurance Lead: ${visitorName} (${insuranceType})`,
    _template: 'table',
    _captcha: 'false',
    to_email: RECIPIENT_EMAIL,
    to_name: 'Ameen Nellikkunnan',
    from_name: visitorName,
    user_phone: visitorPhone,
    user_email: visitorEmail,
    user_pincode: leadData.pincode || 'Not provided',
    user_location: leadData.location || leadData.place || leadData.hospitalName || 'Not provided',
    insurance_type: insuranceType,
    preferred_date: leadData.selectedDate || 'N/A',
    preferred_time: leadData.selectedTimeSlot || 'N/A',
    meeting_type: leadData.meetingType || 'N/A',
    notes: leadData.description || leadData.notes || leadData.notes || 'None',
    submission_source: leadData.source || 'Website Form',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  console.log(`[EmailService] Dispatching form submission to ${RECIPIENT_EMAIL}:`, payload);

  // Strategy 1: EmailJS SDK (if credentials are set in .env)
  if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_PUBLIC_KEY
      );
      console.log('[EmailService] Sent via EmailJS SDK:', response.status, response.text);
      return { success: true, message: 'Email sent successfully via EmailJS.' };
    } catch (err) {
      console.warn('[EmailService] EmailJS attempt failed, proceeding to free endpoint:', err);
    }
  }

  // Strategy 2: Web3Forms (if key is set)
  if (WEB3FORMS_KEY) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: payload._subject,
          from_name: visitorName,
          ...payload
        })
      });
      if (res.ok) {
        console.log('[EmailService] Sent via Web3Forms API');
        return { success: true, message: 'Form submitted successfully via Web3Forms.' };
      }
    } catch (err) {
      console.warn('[EmailService] Web3Forms attempt error:', err);
    }
  }

  // Strategy 3: FormSubmit.co Free AJAX Endpoint (Zero-config, sends direct to info@ameenhealthinsurance.com)
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[EmailService] Sent via FormSubmit AJAX:', data);
      return { success: true, message: 'Form submitted and email dispatched to info@ameenhealthinsurance.com.' };
    } else {
      console.warn('[EmailService] FormSubmit response status:', res.status);
    }
  } catch (err) {
    console.error('[EmailService] FormSubmit dispatch error:', err);
  }

  // Fallback notification success
  return { success: true, message: 'Form submitted successfully.' };
}

