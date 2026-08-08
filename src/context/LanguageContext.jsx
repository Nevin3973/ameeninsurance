import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Language Context
const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About Us',
    navProducts: 'Insurance Plans',
    navPartners: 'Insurance Partners',
    navClaims: 'Claims Assistance',
    navFaq: 'FAQ',
    navBookConsultation: 'Book a Consultation',
    langToggleLabel: 'മലയാളം',
    langToggleAlt: 'Switch to Malayalam',

    // Hero Section
    heroBadge1: 'Ameen Nellikkunnan • Independent Insurance Consultant',
    heroTitle1: 'Protect Your Family with the Right Health & Life Cover',
    heroSubtitle1: "15 years of independent guidance across India's top 4 insurance partners.",
    heroBtnCompare: 'Compare Plans',
    heroBtnBook: 'Book Consultation',

    heroBadge2: '100% Dedicated Claim Settlement Support',
    heroTitle2: 'Hassle-Free Cashless Admission & 24/7 Claim Support',
    heroSubtitle2: 'Direct hospital desk coordination across 14,000+ network hospitals.',
    heroBtnClaims: 'Claims Assistance',
    heroBtnWhatsapp: 'WhatsApp Ameen',

    heroBadge3: 'IRDAI Licensed Partner Advisory',
    heroTitle3: 'Compare Plans Across Star Health, Aditya Birla & PSU Insurers',
    heroSubtitle3: 'Zero hidden capping & transparent room rent guidance.',
    heroBtnPartners: 'View Partners',
    heroBtnCalculate: 'Calculate Premium',

    // Hero Form
    leadFormTitle: 'Get a Free Consultation',
    leadFormSubtitle: 'Share a few details and Ameen Nellikkunnan will get back to you with the right health insurance options with zero obligation or pressure.',
    leadFormName: 'Full Name *',
    leadFormPhone: 'Phone Number *',
    leadFormEmail: 'Email Address',
    leadFormType: 'Insurance Type of Interest',
    leadFormSubmit: 'Get My Free Quote',
    leadFormSuccessTitle: 'Thank You!',
    leadFormSuccessDesc: 'Ameen Nellikkunnan will contact you shortly regarding your inquiry.',

    // Stats
    statClaims: '₹150+ Cr Claims Settled',
    statFamilies: '5,000+ Families Protected',
    statExperience: '15+ Years IRDAI Experience',
    statRating: '4.9 ★ / 5 Client Rating',

    // Product Catalog
    catalogTitle: 'Explore Comprehensive Insurance Solutions',
    catalogSubtitle: 'Tailored policies from top IRDAI certified partners with zero hidden terms.',
    viewDetails: 'View Details & Benefits',
    getQuote: 'Get Instant Quote',

    // Product Names & Descriptions
    healthTitle: 'Health Insurance & Family Floater',
    healthDesc: 'Cashless hospital admission, zero room rent capping, pre & post hospitalization coverage up to ₹1 Crore.',
    motorTitle: 'Motor & Two-Wheeler Insurance',
    motorDesc: 'Instant renewal, zero-depreciation coverage, engine protect, and 24x7 roadside breakdown assistance.',
    termLifeTitle: 'Term Life Insurance',
    termLifeDesc: 'Secure your family\'s financial future with high life cover up to ₹2 Crore at affordable premiums with critical illness rider.',
    businessTitle: 'Commercial & Property Insurance',
    businessDesc: 'Comprehensive coverage for shops, offices, inventory, fire hazards, and business interruption liabilities.',
    pensionTitle: 'Retirement & Savings Plans',
    pensionDesc: 'Guaranteed returns, tax savings under 80C, pension plans for a stress-free senior living.',

    // Common Buttons & Labels
    backToHome: '← Back to Overview',
    bookConsultationNow: 'Book Consultation Now',
    submit: 'Submit',
    cancel: 'Cancel',
    callNow: 'Call Now: +91 98123 45678',
    whatsappUs: 'WhatsApp Support',

    // Plan Comparison
    planCompareTitle: 'Compare Ameen Protection Plans',
    planCompareSubtitle: 'Choose the plan that fits your family\'s needs. All plans feature instant digital e-Cards.',
    monthlyBilling: 'Monthly Billing',
    annualBilling: 'Annual (Save 15%)',
    selectPlan: 'Select Plan',

    // Footer
    footerDesc: 'Ameen Nellikkunnan is a certified independent insurance consultant dedicated to providing unbiased guidance across India\'s leading insurance providers.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    address: 'Calicut & Cochin Offices, Kerala, India',
    rights: 'All rights reserved.'
  },
  ml: {
    // Navigation (Malayalam)
    navHome: 'ഹോം',
    navAbout: 'ഞങ്ങളെക്കുറിച്ച്',
    navProducts: 'ഇൻഷുറൻസ് പ്ലാനുകൾ',
    navPartners: 'ഇൻഷുറൻസ് പങ്കാളികൾ',
    navClaims: 'ക്ലെയിം സഹായം',
    navFaq: 'ചോദ്യോത്തരങ്ങൾ',
    navBookConsultation: 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക',
    langToggleLabel: 'English',
    langToggleAlt: 'ഇംഗ്ലീഷിലേക്ക് മാറ്റുക',

    // Hero Section (Malayalam)
    heroBadge1: 'അമീൻ നെല്ലിക്കുന്നൻ • അംഗീകൃത ഇൻഷുറൻസ് ഉപദേശകൻ',
    heroTitle1: 'നിങ്ങളുടെ കുടുംബത്തിന് ഏറ്റവും മികച്ച ആരോഗ്യ, ജീവൻ രക്ഷാ ഇൻഷുറൻസ്',
    heroSubtitle1: 'ഇന്ത്യയിലെ മുൻനിര ഇൻഷുറൻസ് കമ്പനികളിലൂടെ 15 വർഷത്തിലേറെയുള്ള സുതാര്യമായ സേവനം.',
    heroBtnCompare: 'Compare Plans',
    heroBtnBook: 'Book Consultation',

    heroBadge2: '100% വിശ്വസനീയമായ ക്ലെയിം സെറ്റിൽമെന്റ് സഹായം',
    heroTitle2: 'ക്യാഷ്‌ലെസ് അഡ്മിഷനും 24/7 ക്ലെയിം പിന്തുണയും',
    heroSubtitle2: '14,000+ നെറ്റ്‌വർക്ക് ആശുപത്രികളിൽ നേരിട്ടുള്ള സഹായം ലഭിക്കുന്നു.',
    heroBtnClaims: 'Claims Assistance',
    heroBtnWhatsapp: 'WhatsApp Ameen',

    heroBadge3: 'IRDAI ലൈസൻസുള്ള വിശ്വസ്ത ഉപദേശകൻ',
    heroTitle3: 'സ്റ്റാർ ഹെൽത്ത്, ആദിത്യ ബിർള തുടങ്ങിയ മികച്ച പ്ലാനുകൾ താരതമ്യം ചെയ്യുക',
    heroSubtitle3: 'ഒളിഞ്ഞിരിക്കുന്ന നിബന്ധനകളില്ലാതെ മുറി വാടക പരിധികൾ വ്യക്തമായി മനസ്സിലാക്കൂ.',
    heroBtnPartners: 'View Partners',
    heroBtnCalculate: 'Calculate Premium',

    // Hero Form (Malayalam)
    leadFormTitle: 'സൗജന്യ കൺസൾട്ടേഷൻ നേടുക',
    leadFormSubtitle: 'ചില വിവരങ്ങൾ പങ്കുവെക്കൂ, അമീൻ നെല്ലിക്കുന്നൻ നേരിട്ട് നിങ്ങളെ ബന്ധപ്പെട്ട് ഏറ്റവും അനുയോജ്യമായ പോളിസികൾ നിർദ്ദേശിക്കും.',
    leadFormName: 'മുഴുവൻ പേര് *',
    leadFormPhone: 'ഫോൺ നമ്പർ *',
    leadFormEmail: 'ഇമെയിൽ വിലാസം',
    leadFormType: 'ആവശ്യമുള്ള ഇൻഷുറൻസ്',
    leadFormSubmit: 'Get Free Quote',
    leadFormSuccessTitle: 'നന്ദി!',
    leadFormSuccessDesc: 'അമീൻ നെല്ലിക്കുന്നൻ ഉടൻ തന്നെ നിങ്ങളെ ഫോണിൽ ബന്ധപ്പെടുന്നതാണ്.',

    // Stats (Malayalam)
    statClaims: '₹150+ കോടി ക്ലെയിം സെറ്റിൽമെന്റ്',
    statFamilies: '5,000+ സംതൃപ്ത കുടുംബങ്ങൾ',
    statExperience: '15+ വർഷത്തെ IRDAI പ്രവൃത്തിപരിചയം',
    statRating: '4.9 ★ / 5 ഉപഭോക്തൃ റേറ്റിംഗ്',

    // Product Catalog (Malayalam)
    catalogTitle: 'ഞങ്ങളുടെ ഇൻഷുറൻസ് സേവനങ്ങൾ',
    catalogSubtitle: 'സുതാര്യവും വിശ്വസനീയവുമായ ഇൻഷുറൻസ് പദ്ധതികൾ ഒരു കുടക്കീഴിൽ.',
    viewDetails: 'വിശദാംശങ്ങൾ കാണുക',
    getQuote: 'ക്വോട്ട് ലഭ്യമാക്കുക',

    // Product Names & Descriptions (Malayalam)
    healthTitle: 'ആരോഗ്യ ഇൻഷുറൻസ് (Health Insurance)',
    healthDesc: 'ക്യാഷ്‌ലെസ് ആശുപത്രി അഡ്മിഷൻ, റൂം റെന്റ് പരിധിയില്ലാത്ത കവറേജ്, ₹1 കോടി വരെയുള്ള ചികിത്സാ സംരക്ഷണം.',
    motorTitle: 'മോട്ടോർ & വാഹനം ഇൻഷുറൻസ്',
    motorDesc: 'വേഗത്തിലുള്ള പോളിസി പുതുക്കൽ, സീറോ ഡെപ്രിസിയേഷൻ സംരക്ഷണം, 24x7 റോഡ്‌സൈഡ് അസിസ്റ്റൻസ്.',
    termLifeTitle: 'ലൈഫ് & ടേം ഇൻഷുറൻസ്',
    termLifeDesc: 'കുടുംബത്തിന്റെ സാമ്പത്തിക ഭാവിക്കായി കുറഞ്ഞ പ്രീമിയത്തിൽ ₹2 കോടി വരെയുള്ള ആകർഷകമായ ലൈഫ് കവർ.',
    businessTitle: 'ബിസിനസ് & പ്രോപ്പർട്ടി ഇൻഷുറൻസ്',
    businessDesc: 'കടകൾ, ഓഫീസുകൾ, സ്റ്റോക്ക്, തീപിടുത്തം, ബിസിനസ്സ് സുരക്ഷ എന്നിവയ്ക്കുള്ള ഇൻഷുറൻസ്.',
    pensionTitle: 'പെൻഷൻ & സമ്പാദ്യ പദ്ധതികൾ',
    pensionDesc: 'ഉറപ്പുള്ള ലാഭവും നികുതി ഇളവുകളും നൽകുവാൻ സഹായിക്കുന്ന സുരക്ഷിത പെൻഷൻ പ്ലാനുകൾ.',

    // Common Buttons & Labels (Malayalam)
    backToHome: '← മുൻ പേജിലേക്ക് മടങ്ങുക',
    bookConsultationNow: 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക',
    submit: 'സമർപ്പിക്കുക',
    cancel: 'റദ്ദാക്കുക',
    callNow: 'വിളിക്കൂ: +91 98123 45678',
    whatsappUs: 'വാട്ട്‌സ്ആപ്പ് സഹായം',

    // Plan Comparison (Malayalam)
    planCompareTitle: 'അമീൻ ഇൻഷുറൻസ് പ്ലാനുകൾ താരതമ്യം ചെയ്യുക',
    planCompareSubtitle: 'നിങ്ങളുടെ കുടുംബത്തിന് അനുയോജ്യമായ പ്ലാൻ തിരഞ്ഞെടുക്കുക. എല്ലാ പ്ലാനുകളിലും ഡിജിറ്റൽ ഇ-കാർഡ് ലഭ്യമാണ്.',
    monthlyBilling: 'പ്രതിമാസ തവണകൾ',
    annualBilling: 'വാർഷിക അടവ് (15% ലാഭിക്കൂ)',
    selectPlan: 'പ്ലാൻ തിരഞ്ഞെടുക്കുക',

    // Footer (Malayalam)
    footerDesc: 'അമീൻ നെല്ലിക്കുന്നൻ കേരളത്തിലെ പ്രമുഖ സ്വതന്ത്ര ഇൻഷുറൻസ് ഉപദേശകനാണ്.',
    quickLinks: 'പ്രധാന ലിങ്കുകൾ',
    contactUs: 'ബന്ധപ്പെടാൻ',
    address: 'കോഴിക്കോട് & കൊച്ചി ഓഫീസുകൾ, കേരളം, ഇന്ത്യ',
    rights: 'എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.'
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ameen_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('ameen_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ml' : 'en'));
  };

  const t = (key, defaultText) => {
    return translations[lang]?.[key] || defaultText || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
