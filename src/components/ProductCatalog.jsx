import React, { useState } from "react";
import { Search, Eye, ArrowRight, X, Check, Building2, Hospital, ShieldCheck, PhoneCall } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCatalog({ onBookConsultation, onSelectProduct, initialPartnerFilter }) {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPartner, setSelectedPartner] = useState(initialPartnerFilter || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [enquireSubmittedToast, setEnquireSubmittedToast] = useState(false);

  const partnerProfiles = {
    "star-health": {
      name: "Star Health Insurance",
      fullName: "Star Health and Allied Insurance Company Limited",
      regNo: "IRDAI Reg. No. 129",
      hospitals: "14,000+ Cashless Hospitals",
      logo: "/star-health.png",
      tagline: "India's #1 Standalone Health Specialist",
      desc: "Comprehensive health insurance with in-house claim settlement, unlimited automatic restoration, Package A home nursing & consumables, and dedicated women & senior citizen coverage."
    },
    "aditya-birla": {
      name: "Aditya Birla Health Insurance",
      fullName: "Aditya Birla Health Insurance Company Limited",
      regNo: "IRDAI Reg. No. 153",
      hospitals: "11,000+ Cashless Hospitals",
      logo: "/aditya-birla.webp",
      tagline: "HealthReturns™ & Active Wellness Pioneer • Exclusive NRI Discounts",
      desc: "Earn up to 100% of your premium back through HealthReturns™ (EAT • MOVE • HEAL). Offers up to 11X cover boost, Yuva Reload, and tiered NRI discounts up to 25%."
    },
    "united-india": {
      name: "United India Insurance",
      fullName: "United India Insurance Company Limited",
      regNo: "Public Sector Undertaking (PSU)",
      hospitals: "7,500+ Network Hospitals",
      logo: "/united-india.webp",
      tagline: "Sovereign PSU Security & Joint Family Protection",
      desc: "Government-backed Public Sector Undertaking offering Family Medicare with AYUSH treatment, donor expenses, optional restoration, optional maternity, and Section 80D tax benefits."
    },
    "new-india": {
      name: "New India Assurance",
      fullName: "The New India Assurance Company Limited",
      regNo: "Government of India Enterprise",
      hospitals: "8,200+ Network Hospitals",
      logo: "/NewIndiaAssurance.svg",
      tagline: "India's Premier & Largest Public Sector General Insurer",
      desc: "Over 100 years of trusted legacy. Features Yuva Bharat Health Policy with Base, Gold, and Platinum tiers, Mother & Well-Baby benefits, and healthy parameter premium discounts."
    }
  };

  const products = [
    {
      id: "star-super-star",
      name: "Star Super Star (Secure)",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "family",
      categories: ["family", "individual", "women"],
      image: "/prod-star-super-star.png",
      membersCovered: "Individual / Nuclear Family (Self, Spouse & Children)",
      desc: "Comprehensive protection with unlimited SI restoration, zero room rent capping (₹7.5L+), Package A consumables & Freeze Your Age premium lock.",
      descMl: "അൺലിമിറ്റഡ് റീസ്റ്റോറേഷൻ, നോ റൂം റെന്റ് ലിമിറ്റ്, Package A കൺസ്യൂമബിൾസ് & ഫ്രീസ് യുവർ ഏജ് പ്രീമിയം ലോക്ക് ആനുകൂല്യം.",
      eligibility: "18 Yrs - 65 Yrs (Individual / Floater)",
      sumInsured: "₹7.5 Lakhs to ₹1 Crore+",
      coverage: "Inpatient, Air & Road Ambulance, Day Care, AYUSH, Modern Treatments",
      waitingPeriod: "30 Days Initial (24 Months Pre-existing)",
      nriDiscount: false,
      tierOptions: ["Essential", "Value Plus"],
      benefits: [
        "Automatic 100% SI restoration (unlimited times for related & unrelated illnesses)",
        "Zero room-rent limit on ₹7.5L+ sum insured plans (Single Private AC room)",
        "Package A: Nursing at Home (₹1,000/day), Durable Medical Equipment (up to ₹1L) & Consumables cover",
        "Freeze Your Age: Premium locked at entry age until first claim",
        "Air Ambulance up to ₹5 Lakhs & 10+ Modern Treatments (Robotic Surgery, etc.)",
        "STAR Wellness Program discounts & AI-driven face scan health checks"
      ],
      optionalCovers: ["Limitless Care (Unlimited SI for 1 claim)", "Mamta Women Wellness", "In-Clinic Consultation", "Stay Fit Fitness"],
      idealFor: "Individual adults & nuclear families seeking high-cover protection with zero room limits and home care"
    },
    {
      id: "star-health-assure",
      name: "Star Health Assure",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "family",
      categories: ["family", "individual", "women"],
      image: "/prod-united-family.png",
      membersCovered: "Individual / Joint Family & Dependent Parents",
      desc: "Family-floater & individual indemnity policy featuring automatic restoration, home care treatment, preventive checkup limits, and maternity cover.",
      descMl: "വ്യക്തികൾക്കും കുടുംബങ്ങൾക്കും ഹോം കെയർ ചികിത്സ, ഓട്ടോമാറ്റിക് റീസ്റ്റോറേഷൻ, ഹെൽത്ത് ചെക്കപ്പ് & പ്രസവ ചെലവുകൾ നൽകുന്ന പ്ലാൻ.",
      eligibility: "18 Yrs - 75 Yrs (Individual / Floater)",
      sumInsured: "₹5 Lakhs to ₹2 Crore",
      coverage: "Hospitalisation, Home Care, AYUSH, Maternity, Organ Donor",
      waitingPeriod: "30 Days Initial (24 Months Maternity)",
      nriDiscount: false,
      benefits: [
        "Home Care Treatment up to 10% of SI (max ₹5 Lakhs per policy year)",
        "Air Ambulance up to 10% of Sum Insured per year",
        "Preventive Health Check-up limits up to ₹15,000 (floater) / ₹8,000 (individual)",
        "Maternity Expenses up to 10% of SI after 24-month waiting period",
        "Accompanying Person Accommodation allowance (₹1,000/day up to 10 days)",
        "Unlimited Tele-consultation via STAR Health App"
      ],
      optionalCovers: ["Value Network 15% co-pay discount", "Hospital Daily Cash Allowance", "Personal Accident Cover"],
      idealFor: "Individual adults & joint families wanting broad hospitalisation with home care and preventive health checkups"
    },
    {
      id: "womens-care",
      name: "Star Women Care",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "women",
      categories: ["women", "family"],
      image: "/prod-womens-care.png",
      membersCovered: "Women, Expecting Mothers & Newborns",
      desc: "Dedicated women-centric policy covering maternity, assisted reproduction (ART), newborn vaccination, ante-natal care, and STAR Mother cover.",
      descMl: "വനിതകൾക്കായി ഡെലിവറി, അസിസ്റ്റഡ് റീപ്രൊഡക്ഷൻ (ART), ന്യൂബോൺ വാക്സിനേഷൻ & മദർ കവർ അടങ്ങിയ പ്രത്യേക പോളിസി.",
      eligibility: "18 Yrs - 75 Yrs (Individual / Floater)",
      sumInsured: "₹5 Lakhs to ₹1 Crore",
      coverage: "Maternity, Assisted Reproduction, Newborn Care, In-Utero Surgery",
      waitingPeriod: "24 Months for Voluntary Sterilisation & Specific Covers",
      nriDiscount: false,
      benefits: [
        "Assisted Reproduction Treatment (ART) up to ₹3 Lakhs (based on SI)",
        "Newborn Vaccination (up to ₹3,500) & Paediatrician consults (4/yr up to 12 yrs)",
        "Ante-Natal / Pregnancy care & Delivery Expenses up to ₹1 Lakh",
        "STAR Mother Cover: Accommodation for mother when child under 12 is in ICU",
        "In-Utero Fetal Surgery, Bariatric Surgery & Miscarriage due to accident cover",
        "Metabolic Screening for newborn up to ₹3,500"
      ],
      optionalCovers: ["Lump Sum on Diagnosis of Cancer for female insureds"],
      idealFor: "Women, expecting mothers, and young families prioritizing maternity & child healthcare"
    },
    {
      id: "activ-yuva",
      name: "Aditya Birla Activ Yuva",
      partnerKey: "aditya-birla",
      company: "Aditya Birla Health Insurance",
      category: "young",
      categories: ["young", "women"],
      image: "/prod-activ-yuva.png",
      membersCovered: "Single Active Adults (Age 18-35)",
      desc: "Healthy Har Din - Zindagi Win-Win. Earn up to 100% premium back via EAT•MOVE•HEAL, 11X cover boost, Yuva Reload & Travel ON/OFF.",
      descMl: "യുവാക്കൾക്ക് EAT•MOVE•HEAL വഴി 100% പ്രീമിയം തിരികെ, 11X കവർ ബൂസ്റ്റ് & ട്രാവൽ ON/OFF ഫീച്ചർ.",
      eligibility: "18 Yrs - 35 Yrs",
      sumInsured: "₹5 Lakhs to ₹50 Lakhs (Unlimited SI Option)",
      coverage: "Inpatient, Day Care, Mental Illness, HIV/AIDS, Obesity, OPD",
      waitingPeriod: "30 Days Initial",
      nriDiscount: true,
      benefits: [
        "HealthReturns™: Earn up to 100% Base Premium back via EAT • MOVE • HEAL activities",
        "Yuva Credit: Base SI increases by 100% per renewal up to 11X cover in 11 years",
        "Yuva Reload: 2X cover on 1st claim; unlimited refill for subsequent claims",
        "Worldwide Maternity Cover option even when single",
        "Pause Policy ON/OFF while travelling abroad (up to 15% premium back)",
        "Optional OPD Cover up to 5X Base Premium & Income Protect Cover"
      ],
      optionalCovers: ["Worldwide Maternity", "OPD Cover (5X base premium)", "Income Protect Cover"],
      idealFor: "Young active professionals wanting health rewards, high coverage multipliers & global flex"
    },
    {
      id: "activ-one-max",
      name: "Aditya Birla Activ One MAX",
      partnerKey: "aditya-birla",
      company: "Aditya Birla Health Insurance",
      category: "individual",
      categories: ["individual", "family", "women"],
      image: "/prod-activ-one-max.png",
      membersCovered: "Executives, NRIs & High Net-Worth Individuals",
      desc: "VIP healthcare plan with HealthReturns™, Super Credit up to 500% (max ₹3 Cr), Super Reload unlimited refills & tiered NRI discounts up to 25%.",
      descMl: "100% പ്രീമിയം ഹെൽത്ത് റിട്ടേൺസ്, 500% സൂപ്പർ ക്രഡിറ്റ്, അൺലിമിറ്റഡ് സൂപ്പർ റീലോഡ് & പ്രവാസി സ്പെഷ്യൽ ഡിസ്കൗണ്ട്.",
      eligibility: "18 Yrs - 70 Yrs",
      sumInsured: "₹10 Lakhs to ₹6 Crore",
      coverage: "Any Room, Worldwide Emergency, Super Credit, Super Reload",
      waitingPeriod: "30 Days Initial (Option for Reduced PED Waiting)",
      nriDiscount: true,
      nriTierText: "15% (₹10L-15L SI) | 20% (₹15L-25L SI) | 25% (₹25L+ SI)",
      benefits: [
        "Special Tiered NRI Discount: 15% (₹10L-15L SI), 20% (₹15L-25L SI), 25% (₹25L+ SI)",
        "Super Credit: Base SI increases by 100%/year up to 500% (max ₹3 Crore)",
        "Super Reload: Unlimited refills up to 100% SI from 2nd claim onwards",
        "HealthReturns™: Earn up to 100% premium back through active lifestyle tracking",
        "Any Room category choice with zero capping on major hospitalisation expenses",
        "Claim Protect cover for listed non-medical / non-payable consumables"
      ],
      optionalCovers: ["International Emergency Cover", "Chronic Management Program (Diabetes/Hypertension)"],
      idealFor: "Executives, NRIs, and families seeking high SI multipliers, premium returns & suite room access"
    },
    {
      id: "family-medicare",
      name: "United India Family Medicare",
      partnerKey: "united-india",
      company: "United India Insurance Company Limited",
      category: "family",
      image: "/prod-united-family.png",
      membersCovered: "Parents, Spouse & Dependent Children",
      desc: "Sovereign government PSU family floater policy covering inpatient hospitalisation, AYUSH systems, day care, and optional maternity benefits.",
      descMl: "കേന്ദ്ര സർക്കാർ PSU കമ്പനിയായ United India യുടെ കുടുംബ സുരക്ഷാ പോളിസി (AYUSH & ടാക്സ് ബെനഫിറ്റ്).",
      eligibility: "18 Yrs - 65 Yrs (Up to 6 family members)",
      sumInsured: "₹3 Lakhs to ₹25 Lakhs",
      coverage: "Inpatient, Day Care, AYUSH, Pre/Post, Donor Expenses, Road Ambulance",
      waitingPeriod: "30 Days Initial (36 Months Pre-existing)",
      nriDiscount: false,
      benefits: [
        "Sovereign Public Sector Undertaking (PSU) backing with 7,500+ network hospitals",
        "Inpatient hospitalisation, Day Care Procedures & Road Ambulance covered",
        "AYUSH Treatment: Inpatient Ayurvedic, Homeopathic & Unani covered",
        "Donor Expenses & Organ Donor Benefit included",
        "Cost of annual preventive health check-up included",
        "Tax Deduction under Section 80D up to ₹75,000"
      ],
      optionalCovers: ["Restoration of Sum Insured", "Maternity Expenses & Newborn Cover", "Daily Cash Allowance"],
      idealFor: "Families preferring trusted government PSU backing with flexible floater coverage"
    },
    {
      id: "united-individual-medicare",
      name: "United India Individual Health Policy",
      partnerKey: "united-india",
      company: "United India Insurance Company Limited",
      category: "individual",
      image: "/prod-young.png",
      membersCovered: "Individual Adult Policyholder",
      desc: "Classic public sector individual medical plan offering sovereign reliability, cumulative bonus, and low co-payment options.",
      descMl: "ലളിതമായ പ്രീമിയത്തിൽ ഗവൺമെന്റ് സുരക്ഷ നൽകുന്ന യുണൈറ്റഡ് ഇന്ത്യ ഇൻഡിവിജ്വൽ പോളിസി.",
      eligibility: "18 Yrs - 65 Yrs",
      sumInsured: "₹2 Lakhs to ₹15 Lakhs",
      coverage: "Hospitalisation, Surgery, ICU, AYUSH, Day Care",
      waitingPeriod: "30 Days Initial",
      nriDiscount: false,
      benefits: [
        "Sovereign Government of India PSU protection",
        "5% Cumulative Bonus for every claim-free policy year",
        "Covers Ayurvedic & Unani inpatient hospitalisation",
        "Modern treatment methods and technological advancement coverage",
        "Direct cashless treatment across government and private network hospitals"
      ],
      optionalCovers: ["Sum Insured Restoration", "Daily Hospital Cash"],
      idealFor: "Individual policyholders seeking economical PSU security"
    },
    {
      id: "yuva-bharat",
      name: "New India Yuva Bharat Health Policy",
      partnerKey: "new-india",
      company: "The New India Assurance Company Limited",
      category: "young",
      categories: ["young", "family", "women"],
      image: "/prod-new-india-yuva-bharat.png",
      membersCovered: "Young Couples & Newborn Babies",
      desc: "Empowering Better Health for young adults & families with Base, Gold, and Platinum tier plans, Mother & Well-Baby benefits, and health parameter discounts.",
      descMl: "Base, Gold & Platinum പ്ലാനുകളിൽ വരുന്ന New India Assurance യുവ ഭാരത് ഹെൽത്ത് പോളിസി.",
      eligibility: "18 Yrs - 45 Yrs (Children 91 days - 25 Yrs)",
      sumInsured: "₹5 Lakhs to ₹1 Crore",
      coverage: "Base / Gold / Platinum Tiers, Critical Illness, Maternity, Air Ambulance",
      waitingPeriod: "30 Days Initial (24 Months PED / Mental / Genetic)",
      nriDiscount: false,
      tierOptions: ["Base Plan", "Gold Plan", "Platinum Plan"],
      benefits: [
        "3 Tiered Plans: Base (Hospital Cash, Shared Room), Gold (Air Ambulance, Critical Illness), Platinum (Mother & Well-Baby)",
        "Platinum Plan: Infertility Treatment, Maternity Benefit, Pre-term Birth & Newborn Vaccination",
        "Up to 10% discount for healthy parameters (BMI, Blood Sugar & Blood Pressure)",
        "2.5% Loyalty Discount, 10% Digital Discount & up to 15% Floater Discount",
        "Pre-hospitalisation 60 days & Post-hospitalisation 90 days",
        "AYUSH Treatment covered up to 100% of Sum Insured"
      ],
      optionalCovers: ["Gold: Air Ambulance & Critical Illness", "Platinum: Infertility & Birth Right Benefit"],
      idealFor: "Young families wanting flexible tier options (Base/Gold/Platinum) from India's largest PSU insurer"
    },
    {
      id: "new-india-asha-kiran",
      name: "New India Asha Kiran Policy",
      partnerKey: "new-india",
      company: "The New India Assurance Company Limited",
      category: "family",
      image: "/prod-new-india-asha-kiran.png",
      membersCovered: "Families with a Girl Child",
      desc: "Specialized floater policy for families with girl child premium discounts and built-in personal accident cover for primary earner.",
      descMl: "പെൺകുട്ടികളുള്ള കുടുംബങ്ങൾക്ക് പ്രീമിയത്തിൽ 5% സ്പെഷ്യൽ ഡിസ്കൗണ്ടും പേഴ്സണൽ ആക്സിഡന്റ് പരിരക്ഷയും.",
      eligibility: "18 Yrs - 65 Yrs",
      sumInsured: "₹3 Lakhs to ₹15 Lakhs",
      coverage: "Family Floater, Personal Accident, Girl Child Discount",
      waitingPeriod: "30 Days Initial",
      nriDiscount: false,
      benefits: [
        "5% Special Discount on premium if policy includes a girl child",
        "Built-in Personal Accident benefit for the primary earning member",
        "No room rent cap on selected sum insured options",
        "Lifetime policy renewability with broad public-sector network access"
      ],
      optionalCovers: ["Auto Top-Up", "Hospital Cash Allowance"],
      idealFor: "Families with daughters looking for PSU reliability with extra girl-child savings"
    }
  ];

  const categories = [
    { id: "all", label: "All Plans" },
    { id: "individual", label: "Individual" },
    { id: "family", label: "Family Floater" },
    { id: "women", label: "Womens Plans" },
    { id: "young", label: "Young Adults" }
  ];

  const partners = [
    { id: "all", label: "All Insurers" },
    { id: "star-health", label: "Star Health" },
    { id: "aditya-birla", label: "Aditya Birla (NRI Discount)" },
    { id: "united-india", label: "United India (PSU)" },
    { id: "new-india", label: "New India Assurance (PSU)" }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === "all" || 
      p.category === selectedCategory || 
      (Array.isArray(p.categories) && p.categories.includes(selectedCategory));
    const matchesPartner = selectedPartner === "all" || p.partnerKey === selectedPartner;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesPartner && matchesSearch;
  });

  const handleEnquire = (productName) => {
    setEnquireSubmittedToast(productName);
    setTimeout(() => setEnquireSubmittedToast(null), 4500);
  };

  const currentPartnerInfo = partnerProfiles[selectedPartner];

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 2.5rem" }}>
          <span className="pill-badge" style={{ marginBottom: "0.8rem" }}>
            <Building2 size={15} color="var(--primary-blue)" /> IRDAI AUTHORIZED PRODUCTS
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "0.8rem" }}>
            Compare & Explore Insurance Plans
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Ameen Nellikkunnan helps you select transparent policies from India's leading Standalone Health specialists and Public Sector Undertaking (PSU) insurers.
          </p>
        </div>

        {/* Insurer Partner Filter Pills Row */}
        <div style={{ marginBottom: "1.2rem" }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "center" }}>
            Filter By Insurer:
          </div>
          <div className="scrollable-tabs-wrapper" style={{ justifyContent: "center" }}>
            {partners.map((pt) => (
              <button
                key={pt.id}
                onClick={() => setSelectedPartner(pt.id)}
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: "9999px",
                  border: selectedPartner === pt.id ? "none" : "1px solid var(--border-light)",
                  background: selectedPartner === pt.id ? "var(--primary-blue)" : "#ffffff",
                  color: selectedPartner === pt.id ? "#ffffff" : "var(--text-dark)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  boxShadow: selectedPartner === pt.id ? "0 4px 12px rgba(1, 58, 222, 0.25)" : "none",
                  transition: "all 0.2s ease"
                }}
              >
                {pt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills & Search Input Row */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          {/* Search Box */}
          <div style={{ position: "relative", maxWidth: "420px", width: "100%", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Search plan name (e.g. Star Womens Care, Health Assure)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.6rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-light)",
                fontSize: "0.9rem",
                outline: "none",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
              }}
            />
            <Search size={16} color="var(--text-subtle)" style={{ position: "absolute", top: "50%", left: "0.9rem", transform: "translateY(-50%)" }} />
          </div>

          {/* Category Filter Pills */}
          <div className="scrollable-tabs-wrapper" style={{ justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "var(--radius-full)",
                  border: selectedCategory === cat.id ? "none" : "1px solid var(--border-light)",
                  background: selectedCategory === cat.id ? "#1e293b" : "rgba(241, 245, 249, 0.8)",
                  color: selectedCategory === cat.id ? "#ffffff" : "var(--text-dark)",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.2s ease"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Partner Header Banner (Shown when a specific partner is selected) */}
        {currentPartnerInfo && (
          <div style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            color: "#ffffff",
            borderRadius: "var(--radius-md)",
            padding: "1.8rem 2rem",
            marginBottom: "2.2rem",
            boxShadow: "0 8px 25px rgba(15, 23, 42, 0.15)",
            borderLeft: "5px solid var(--primary-blue)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(96, 165, 250, 0.15)", color: "#60a5fa", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  <ShieldCheck size={14} /> DEDICATED PARTNER SHOWCASE
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "#ffffff", marginBottom: "0.2rem" }}>{currentPartnerInfo.name}</h3>
                <p style={{ fontSize: "0.88rem", color: "#94a3b8", marginBottom: "0.8rem", fontWeight: 600 }}>{currentPartnerInfo.fullName} • {currentPartnerInfo.regNo}</p>
                <p style={{ fontSize: "0.95rem", color: "#cbd5e1", maxWidth: "750px", lineHeight: 1.55 }}>
                  {currentPartnerInfo.desc}
                </p>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "1rem 1.4rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.12)", textAlign: "center", flexShrink: 0 }}>
                <Hospital size={24} color="#60a5fa" style={{ margin: "0 auto 0.3rem" }} />
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>{currentPartnerInfo.hospitals}</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>Cashless Claim Counter</div>
              </div>
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid-3" style={{ gap: "1.8rem" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="clean-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 0, overflow: "hidden" }}>
              {/* Completely Clean & Unobscured Product Image (0% Overlapping Elements) */}
              <div style={{ aspectRatio: "16 / 9", minHeight: "195px", overflow: "hidden", position: "relative", background: "#f8fafc" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    transition: "transform 0.4s ease"
                  }}
                  className="product-card-img"
                />
              </div>

              {/* Card Content Body */}
              <div style={{ padding: "1.4rem", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                <div>
                  {/* Badges & Insurer Logo Header Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{
                        background: "var(--primary-blue)",
                        color: "#ffffff",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.03em",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px"
                      }}>
                        {Array.isArray(product.categories)
                          ? product.categories.map(c => c.toUpperCase()).join(" & ")
                          : product.category.toUpperCase()}
                      </span>
                      <span style={{
                        background: "#e0f2fe",
                        color: "#0369a1",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        border: "1px solid #bae6fd"
                      }}>
                        💳 EMI AVAILABLE
                      </span>
                      <span style={{
                        background: "#f0fdf4",
                        color: "#15803d",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        border: "1px solid #bbf7d0"
                      }}>
                        🗓️ 1, 2 & 3 YR PLANS
                      </span>
                      {product.nriDiscount && (
                        <span style={{
                          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                          color: "#ffffff",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          padding: "0.2rem 0.65rem",
                          borderRadius: "9999px"
                        }}>
                          ✈️ NRI DISCOUNT
                        </span>
                      )}
                      {product.tierOptions && (
                        <span style={{
                          background: "#0f172a",
                          color: "#fbbf24",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          padding: "0.2rem 0.65rem",
                          borderRadius: "9999px"
                        }}>
                          ⭐ {product.tierOptions.join("/")}
                        </span>
                      )}
                    </div>

                    {/* Insurer Partner Brand Logo */}
                    {partnerProfiles[product.partnerKey]?.logo && (
                      <div style={{ background: "#f8fafc", padding: "0.25rem 0.5rem", borderRadius: "6px", border: "1px solid var(--border-light)", display: "flex", alignItems: "center" }}>
                        <img
                          src={partnerProfiles[product.partnerKey].logo}
                          alt={product.company}
                          style={{ height: "20px", width: "auto", objectFit: "contain", display: "block" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Members Covered Pill Badge */}
                  {product.membersCovered && (
                    <div style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--primary-blue)",
                      background: "var(--accent-sky-light)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "8px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.8rem",
                      border: "1px solid #dbeafe"
                    }}>
                      <span>👨‍👩‍👧‍👦 Covered Members:</span>
                      <strong style={{ color: "var(--text-dark)" }}>{product.membersCovered}</strong>
                    </div>
                  )}

                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.2rem" }}>{product.name}</h3>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.7rem" }}>
                    {product.company}
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: "0.8rem" }}>
                    {product.desc}
                  </p>

                  {lang === 'ml' && product.descMl && (
                    <div className="ml-box" style={{
                      background: "linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%)",
                      borderLeft: "3px solid var(--primary-blue)",
                      padding: "0.55rem 0.85rem",
                      borderRadius: "8px",
                      fontSize: "0.84rem",
                      color: "#0369a1",
                      marginBottom: "0.8rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-malayalam)"
                    }}>
                      💡 {product.descMl}
                    </div>
                  )}
                </div>

                <div>
                  {/* Subtle Ideal For Line */}
                  <div style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.8rem",
                    lineHeight: 1.45,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.35rem"
                  }}>
                    <span style={{ color: "var(--primary-blue)", fontWeight: 700, flexShrink: 0 }}>Ideal for:</span>
                    <span>{product.idealFor}</span>
                  </div>

                  <div style={{
                    padding: "0.75rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-card-alt)",
                    border: "1px solid var(--border-light)",
                    fontSize: "0.82rem",
                    marginBottom: "1.2rem"
                  }}>
                    <span style={{ color: "var(--text-subtle)" }}>SUM INSURED: </span>
                    <strong style={{ color: "var(--primary-blue)" }}>{product.sumInsured}</strong>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <button
                      onClick={() => onSelectProduct ? onSelectProduct(product) : setActiveModalProduct(product)}
                      className="btn-secondary"
                      style={{ padding: "0.6rem", fontSize: "0.85rem", color: "var(--text-dark)", background: "#ffffff", border: "1px solid var(--border-light)", fontWeight: 700 }}
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleEnquire(product.name)}
                      className="btn-primary"
                      style={{ padding: "0.6rem", fontSize: "0.85rem", background: "var(--primary-blue)", color: "#ffffff", border: "none", fontWeight: 700, boxShadow: "0 3px 10px rgba(1, 58, 222, 0.28)" }}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              No insurance policies found matching your filter criteria.
            </p>
            <button
              onClick={() => { setSelectedCategory("all"); setSelectedPartner("all"); setSearchQuery(""); }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Plan Details Modal */}
      {activeModalProduct && (
        <div className="modal-overlay" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveModalProduct(null)}
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.2rem",
                background: "var(--bg-card-alt)",
                border: "none",
                borderRadius: "50%",
                padding: "0.4rem",
                cursor: "pointer"
              }}
            >
              <X size={18} />
            </button>

            <span className="pill-badge" style={{ marginBottom: "0.8rem" }}>
              {activeModalProduct.company}
            </span>

            <h3 style={{ fontSize: "1.6rem", marginBottom: "0.4rem" }}>{activeModalProduct.name}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
              {activeModalProduct.desc}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.2rem", fontSize: "0.85rem" }}>
              <div style={{ padding: "0.75rem", background: "var(--bg-card-alt)", borderRadius: "var(--radius-sm)" }}>
                <strong>ELIGIBILITY:</strong>
                <p>{activeModalProduct.eligibility}</p>
              </div>
              <div style={{ padding: "0.75rem", background: "var(--bg-card-alt)", borderRadius: "var(--radius-sm)" }}>
                <strong>SUM INSURED:</strong>
                <p style={{ color: "var(--primary-blue)", fontWeight: 700 }}>{activeModalProduct.sumInsured}</p>
              </div>
            </div>

            <h4 style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>Key Benefits</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem", fontSize: "0.88rem" }}>
              {activeModalProduct.benefits.map((b, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Check size={16} color="var(--primary-blue)" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              <a
                href={`https://wa.me/917025984646?text=${encodeURIComponent(`Hi Ameen Nellikkunnan, I would like to get a quote and details for ${activeModalProduct.name} (${activeModalProduct.company}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: "#25D366", color: "#ffffff", textAlign: "center" }}
              >
                WhatsApp Ameen
              </a>
              <button
                onClick={() => {
                  handleEnquire(activeModalProduct.name);
                  setActiveModalProduct(null);
                }}
                className="btn-secondary"
                style={{ background: "#ffffff", color: "var(--text-dark)", border: "1px solid var(--border-light)" }}
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {enquireSubmittedToast && (
        <div style={{
          position: "fixed",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#0f172a",
          color: "#ffffff",
          padding: "0.85rem 1.6rem",
          borderRadius: "9999px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          zIndex: 1100,
          fontWeight: 600,
          fontSize: "0.9rem"
        }}>
          <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary-blue)" }}>Enquiry Sent!</p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            We will contact you shortly regarding <strong>{enquireSubmittedToast}</strong>.
          </p>
        </div>
      )}
    </section>
  );
}
