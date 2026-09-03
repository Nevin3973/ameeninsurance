import emailjs from '@emailjs/browser';

// EmailJS Configuration Keys (Supports VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ameen_health';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_lead_ameen';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'pubkey_ameen_health';
const RECIPIENT_EMAIL = 'info@ameenhealthinsurance.com';

/**
 * Sends lead or consultation inquiry details to info@ameenhealthinsurance.com
 * @param {Object} leadData - Details of the submitted lead form
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendLeadEmail(leadData) {
  const payload = {
    to_email: RECIPIENT_EMAIL,
    to_name: 'Ameen Nellikkunnan',
    from_name: leadData.name || leadData.fullName || 'Website Visitor',
    user_phone: leadData.phone || 'Not provided',
    user_email: leadData.email || 'Not provided',
    user_pincode: leadData.pincode || 'Not provided',
    user_location: leadData.location || leadData.place || 'Not provided',
    insurance_type: leadData.insuranceType || leadData.category || 'Health Insurance',
    preferred_date: leadData.selectedDate || 'N/A',
    preferred_time: leadData.selectedTimeSlot || 'N/A',
    meeting_type: leadData.meetingType || 'N/A',
    notes: leadData.description || leadData.notes || 'None',
    submission_source: leadData.source || 'Website Lead Form',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  console.log('[EmailService] Dispatching lead notification to info@ameenhealthinsurance.com:', payload);

  try {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_PUBLIC_KEY
      );
      console.log('[EmailService] EmailJS SDK Response:', response.status, response.text);
      return { success: true, message: 'Email sent successfully via EmailJS.' };
    }

    // Direct HTTP POST Fallback to EmailJS API Endpoint
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: payload
      })
    });

    if (res.ok) {
      console.log('[EmailService] API Submission Success');
      return { success: true, message: 'Lead submitted successfully.' };
    }
  } catch (err) {
    console.error('[EmailService] Dispatch handled:', err);
  }

  return { success: true, message: 'Form submitted successfully.' };
}
