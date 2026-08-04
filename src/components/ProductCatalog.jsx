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
      tagline: "India's #1 Standalone Health Insurance Specialist",
      desc: "Specialized in fast in-house claim settlement without Third Party Administrators (TPA). Offers 100% restoration benefits and comprehensive maternity protection."
    },
    "aditya-birla": {
      name: "Aditya Birla Health Insurance",
      fullName: "Aditya Birla Health Insurance Company Limited",
      regNo: "IRDAI Reg. No. 153",
      hospitals: "11,000+ Cashless Hospitals",
      tagline: "HealthReturns & Active Wellness Pioneer",
      desc: "Earn up to 100% of your premium back as HealthReturns by staying active. Features zero room rent capping and global emergency hospitalisation cover."
    },
    "united-india": {
      name: "United India Insurance",
      fullName: "United India Insurance Company Limited",
      regNo: "Public Sector Undertaking (PSU)",
      hospitals: "7,500+ Network Hospitals",
      tagline: "Sovereign PSU Security & Joint Family Protection",
      desc: "Established Public Sector Undertaking providing government-backed health insurance security with high tax deduction limits under Section 80D."
    },
    "new-india": {
      name: "New India Assurance",
      fullName: "The New India Assurance Company Limited",
      regNo: "Government of India Enterprise",
      hospitals: "8,200+ Network Hospitals",
      tagline: "India's Premier & Largest Public Sector General Insurer",
      desc: "Over 100 years of trusted legacy offering high claim-settlement credibility, low co-payments, and flexible individual/family floater covers."
    },
    "national-insurance": {
      name: "National Insurance",
      fullName: "National Insurance Company Limited",
      regNo: "Public Sector Undertaking (PSU)",
      hospitals: "6,800+ Network Hospitals",
      tagline: "Reliable Public Sector Health & Family Cover",
      desc: "Pioneer PSU health insurer delivering reliable medical protection for families, senior citizens, and corporate employees across India."
    }
  };

  const products = [
    {
      id: "star-super-star",
      name: "Star Super Star",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "family",
      image: "/prod-family.png",
      desc: "Complete family healthcare protection featuring annual cumulative bonus and zero sub-limits on ICU rooms.",
      eligibility: "18 Yrs - 65 Yrs (Children from 16 days)",
      sumInsured: "₹5 Lakhs to ₹1 Crore",
      coverage: "Inpatient, Day Care Procedures, Pre/Post Hospitalisation",
      waitingPeriod: "30 Days Initial (24 Months Pre-existing)",
      benefits: [
        "Automatic 100% restoration of sum insured",
        "No capping on room rent and ICU charges",
        "Annual health checkups for all covered members",
        "Organ donor expenses covered up to sum insured"
      ],
      idealFor: "Families looking for high-cover cashless medical protection"
    },
    {
      id: "womens-care",
      name: "Star Womens Care",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "women",
      image: "/prod-women.png",
      desc: "Dedicated women and maternity insurance covering delivery, newborn care, and congenital disease cover.",
      eligibility: "18 Yrs - 45 Yrs (Maternity specific)",
      sumInsured: "₹5 Lakhs to ₹25 Lakhs",
      coverage: "Maternity, Delivery, Newborn Baby, Assisted Reproduction",
      waitingPeriod: "12 Months for Maternity Coverage",
      benefits: [
        "Normal and C-section delivery expenses covered",
        "Newborn baby coverage from Day 1 up to sum insured",
        "Vaccination expenses for newborn up to 12 months",
        "Assisted reproduction treatment benefits"
      ],
      idealFor: "Expectant mothers and young couples planning a family"
    },
    {
      id: "star-senior-carpet",
      name: "Star Senior Citizens Red Carpet",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "individual",
      image: "/prod-family.png",
      desc: "No pre-insurance medical test required for senior citizens aged 60 to 75 years.",
      eligibility: "60 Yrs - 75 Yrs",
      sumInsured: "₹1 Lakh to ₹25 Lakhs",
      coverage: "Inpatient Hospitalisation, Outpatient Consultations",
      waitingPeriod: "12 Months Pre-existing Cover",
      benefits: [
        "No pre-policy medical screening test required",
        "Day care procedures and medical consultations included",
        "Co-payment option for flexible affordable premiums",
        "Cover for pre-existing medical conditions after 1 year"
      ],
      idealFor: "Senior citizen parents seeking immediate cashless coverage"
    },
    {
      id: "star-comprehensive",
      name: "Star Comprehensive Health Policy",
      partnerKey: "star-health",
      company: "Star Health Insurance",
      category: "family",
      image: "/prod-family.png",
      desc: "All-in-one comprehensive cover with zero capping, OPD consultations, and air ambulance assistance.",
      eligibility: "18 Yrs - 65 Yrs",
      sumInsured: "₹5 Lakhs to ₹1 Crore",
      coverage: "Inpatient, Outpatient OPD, Dental & Ophthalmic",
      waitingPeriod: "30 Days Initial",
      benefits: [
        "Outpatient dental and ophthalmic treatments covered",
        "100% reload of sum insured once exhausted",
        "Hospital daily cash allowance included",
        "Air ambulance emergency transportation"
      ],
      idealFor: "Comprehensive zero-gap family medical security"
    },
    {
      id: "health-assure",
      name: "Aditya Birla Health Assure",
      partnerKey: "aditya-birla",
      company: "Aditya Birla Health Insurance",
      category: "family",
      image: "/prod-young.png",
      desc: "Comprehensive medical coverage with HealthReturns rewards for maintaining an active healthy lifestyle.",
      eligibility: "91 Days to Lifetime Renewability",
      sumInsured: "₹3 Lakhs to ₹2 Crore",
      coverage: "Hospitalisation, Ayush Treatment, Domiciliary Care",
      waitingPeriod: "30 Days Initial (36 Months Pre-existing)",
      benefits: [
        "Earn up to 100% premium back as HealthReturns",
        "Unlimited refill of sum insured for unrelated illnesses",
        "In-patient AYUSH (Ayurveda/Homeopathy) treatment cover",
        "Mental health hospitalisation cover included"
      ],
      idealFor: "Health-conscious families seeking lifestyle rewards"
    },
    {
      id: "activ-one-max",
      name: "Aditya Birla Activ One Max",
      partnerKey: "aditya-birla",
      company: "Aditya Birla Health Insurance",
      category: "individual",
      image: "/prod-family.png",
      desc: "VIP healthcare insurance offering single private room, global emergency cover, and 100% Reload benefit.",
      eligibility: "18 Yrs - 70 Yrs",
      sumInsured: "₹10 Lakhs to ₹6 Crore",
      coverage: "Worldwide Emergency, Executive Suite, Organ Donor",
      waitingPeriod: "30 Days Initial (12 Months Reduced Waiting option)",
      benefits: [
        "Single Private AC Room and Suite upgrade allowed",
        "International emergency medical treatment cover",
        "Chronic management program for Diabetes and Hypertension from Day 1",
        "Personal health coach and nutritionist assigned"
      ],
      idealFor: "Executives and HNWIs desiring VIP global hospital care"
    },
    {
      id: "activ-yuva",
      name: "Aditya Birla Activ Yuva",
      partnerKey: "aditya-birla",
      company: "Aditya Birla Health Insurance",
      category: "young",
      image: "/prod-young.png",
      desc: "Tailored for young active professionals with wearable step-tracking discounts and low starter premiums.",
      eligibility: "18 Yrs - 35 Yrs",
      sumInsured: "₹5 Lakhs to ₹50 Lakhs",
      coverage: "Inpatient, Accident Emergency, OPD Wellness",
      waitingPeriod: "30 Days Initial",
      benefits: [
        "Connect Apple Watch / Fitbit for up to 30% renewal discount",
        "Zero deductible on first claim",
        "Emergency ambulance and air ambulance assistance",
        "Diagnostic lab tests and virtual doctor consults"
      ],
      idealFor: "Young professionals and college graduates seeking affordable health cover"
    },
    {
      id: "family-medicare",
      name: "United India Family Medicare",
      partnerKey: "united-india",
      company: "United India Insurance Company Limited",
      category: "family",
      image: "/prod-family.png",
      desc: "Government-backed PSU family floater plan with trusted wide network coverage and tax savings under Sec 80D.",
      eligibility: "18 Yrs - 65 Yrs (Parents and Grandparents eligible)",
      sumInsured: "₹3 Lakhs to ₹25 Lakhs",
      coverage: "All Medical Expenses, Pre/Post Hospitalisation",
      waitingPeriod: "30 Days Initial (36 Months Pre-existing)",
      benefits: [
        "Trusted Public Sector Undertaking (PSU) security",
        "Covers dependent parents and in-laws in a single floater policy",
        "No co-payment up to age 60",
        "Income Tax deduction under Section 80D up to ₹75,000"
      ],
      idealFor: "Joint families seeking PSU reliability and tax benefits"
    },
    {
      id: "individual-mediclassic-psu",
      name: "United India Individual Health Policy",
      partnerKey: "united-india",
      company: "United India Insurance Company Limited",
      category: "individual",
      image: "/prod-young.png",
      desc: "Classic public sector individual medical insurance with sovereign security and economical premiums.",
      eligibility: "18 Yrs - 65 Yrs",
      sumInsured: "₹2 Lakhs to ₹15 Lakhs",
      coverage: "Hospitalisation, Surgery, ICU",
      waitingPeriod: "30 Days Initial",
      benefits: [
        "Sovereign government PSU backing",
        "Covers Ayurvedic & Unani hospitalisation",
        "Cumulative bonus of 5% for every claim-free year",
        "Seamless cashless admission in government and private hospitals"
      ],
      idealFor: "Individual policyholders preferring PSU reliability"
    },
    {
      id: "yuva-bharat",
      name: "New India Yuva Bharat",
      partnerKey: "new-india",
      company: "The New India Assurance Company Limited",
      category: "young",
      image: "/prod-young.png",
      desc: "Affordable modern health policy for India workforce with high claim settlement ratios.",
      eligibility: "18 Yrs - 45 Yrs",
      sumInsured: "₹5 Lakhs to ₹50 Lakhs",
      coverage: "Hospitalisation, Road Accident, Roadside Ambulance",
      waitingPeriod: "30 Days Initial",
      benefits: [
        "India largest public sector health insurer guarantee",
        "Cumulative bonus of 10% for every claim-free year",
        "Modern day-care treatments and cataract surgery cover",
        "Cashless facility across 8,200+ government and private hospitals"
      ],
      idealFor: "First-time insurance buyers and young earners"
    },
    {
      id: "new-india-asha-kiran",
      name: "New India Asha Kiran Policy",
      partnerKey: "new-india",
      company: "The New India Assurance Company Limited",
      category: "family",
      image: "/prod-women.png",
      desc: "Specialized floater policy for families with girl child benefits and personal accident cover.",
      eligibility: "18 Yrs - 65 Yrs",
      sumInsured: "₹3 Lakhs to ₹15 Lakhs",
      coverage: "Family Floater, Personal Accident, Girl Child Discount",
      waitingPeriod: "30 Days Initial",
      benefits: [
        "5% discount on premium if policy includes a girl child",
        "Built-in Personal Accident benefit for primary earner",
        "No room rent cap on selected sum insured options",
        "Lifetime policy renewability"
      ],
      idealFor: "Families seeking PSU safety with special girl child protection"
    },
    {
      id: "national-parivar",
      name: "National Parivar Mediclaim",
      partnerKey: "national-insurance",
      company: "National Insurance Company Limited",
      category: "family",
      image: "/prod-family.png",
      desc: "Comprehensive family floater policy backed by National Insurance PSU heritage.",
      eligibility: "18 Yrs - 65 Yrs",
      sumInsured: "₹6 Lakhs to ₹50 Lakhs",
      coverage: "Hospitalisation, Critical Illness Add-on, Organ Donor",
      waitingPeriod: "30 Days Initial",
      benefits: [
        "Pioneer PSU insurer with deep presence across India",
        "Recharge benefit up to 100% of sum insured",
        "Coverage for modern robotic and cyberknife surgeries",
        "Tax savings under Section 80D"
      ],
      idealFor: "Families looking for high sum insured PSU coverage"
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
    { id: "aditya-birla", label: "Aditya Birla" },
    { id: "united-india", label: "United India (PSU)" },
    { id: "new-india", label: "New India Assurance (PSU)" },
    { id: "national-insurance", label: "National Insurance (PSU)" }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesPartner = selectedPartner === "all" || p.partnerKey === selectedPartner;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesPartner && matchesSearch;
  });

  const handleEnquire = (productName) => {
    setEnquireSubmittedToast(true);
    setTimeout(() => setEnquireSubmittedToast(false), 4500);
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
            Muhammed Ameen helps you select transparent policies from India's leading Standalone Health specialists and Public Sector Undertaking (PSU) insurers.
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
              {/* Product Full Opaque Cover Image Header */}
              <div style={{ aspectRatio: "16 / 9", minHeight: "190px", overflow: "hidden", position: "relative", background: "#ffffff" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    display: "block",
                    background: "#ffffff",
                    transition: "transform 0.4s ease"
                  }}
                  className="product-card-img"
                />
                <span style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "14px",
                  background: "var(--primary-blue)",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                  zIndex: 2
                }}>
                  {product.category.toUpperCase()}
                </span>
              </div>

              {/* Card Content Body */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.3rem" }}>{product.name}</h3>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "0.8rem" }}>
                    {product.company}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: "1.2rem" }}>
                    {product.desc}
                  </p>
                </div>

                <div>
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
                href={`https://wa.me/919812345678?text=${encodeURIComponent(`Hi Muhammed Ameen, I would like to get a quote and details for ${activeModalProduct.name} (${activeModalProduct.company}).`)}`}
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
