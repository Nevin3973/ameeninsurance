import React, { useState } from "react";
import { Search, Eye, ArrowRight, X, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCatalog({ onBookConsultation, onSelectProduct }) {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [enquireSubmittedToast, setEnquireSubmittedToast] = useState(false);


  const products = [
    {
      id: "star-super-star",
      name: "Star Super Star",
      company: "Star Health and Allied Insurance Company Limited",
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
      id: "health-assure",
      name: "Health Assure",
      company: "Aditya Birla Health Insurance Company Limited",
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
      id: "womens-care",
      name: "Womens Care",
      company: "Star Health and Allied Insurance Company Limited",
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
      id: "activ-one-max",
      name: "Activ One Max",
      company: "Aditya Birla Health Insurance Company Limited",
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
      name: "Activ Yuva",
      company: "Aditya Birla Health Insurance Company Limited",
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
      name: "Family Medicare",
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
      id: "yuva-bharat",
      name: "Yuva Bharat",
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
        "Cashless facility across 3,000+ government and private hospitals"
      ],
      idealFor: "First-time insurance buyers and young earners"
    }
  ];

  const categories = [
    { id: "all", label: lang === 'ml' ? "എല്ലാ പ്ലാനുകളും" : "All Plans" },
    { id: "individual", label: lang === 'ml' ? "വ്യക്തിഗത പ്ലാനുകൾ" : "Individual" },
    { id: "family", label: lang === 'ml' ? "ഫാമിലി ഫ്ലോട്ടർ" : "Family Floater" },
    { id: "women", label: lang === 'ml' ? "വനിതാ പ്ലാനുകൾ" : "Womens Plans" },
    { id: "young", label: lang === 'ml' ? "യുവാക്കൾക്കുള്ള പ്ലാൻ" : "Young Adults" }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleEnquire = (productName) => {
    setEnquireSubmittedToast(productName);
    setTimeout(() => setEnquireSubmittedToast(false), 3000);
  };

  return (
    <section id="products" className="section-padding" style={{ background: "#ffffff" }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "0.6rem" }}>
            {t('catalogTitle', 'Insurance Products')}
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            {t('catalogSubtitle', 'Health and life plans from trusted insurers, matched to your exact needs.')}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem", marginBottom: "2.8rem" }}>
          {/* Search Box */}
          <div style={{ position: "relative", width: "100%", maxWidth: "460px" }}>
            <input
              type="text"
              placeholder={lang === 'ml' ? "കമ്പനി അല്ലെങ്കിൽ പ്ലാൻ തിരയുക..." : "Search by product or insurance company..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.6rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-light)",
                fontSize: "0.92rem",
                outline: "none"
              }}
            />
            <Search size={16} color="var(--text-subtle)" style={{ position: "absolute", top: "50%", left: "0.9rem", transform: "translateY(-50%)" }} />
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "0.45rem 1.15rem",
                  borderRadius: "var(--radius-full)",
                  border: selectedCategory === cat.id ? "none" : "1px solid var(--border-light)",
                  background: selectedCategory === cat.id ? "var(--primary-blue)" : "#ffffff",
                  color: selectedCategory === cat.id ? "#ffffff" : "var(--text-dark)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid-3" style={{ gap: "1.8rem" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="clean-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 0, overflow: "hidden" }}>
              {/* Product Sample Image Header */}
              <div style={{ height: "180px", overflow: "hidden", position: "relative", background: "var(--bg-card-alt)" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain", padding: "0.5rem", background: "#f8fafc", objectPosition: "center" }}
                />
                <span style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  background: "rgba(15, 23, 42, 0.75)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.6rem",
                  borderRadius: "9999px"
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
                    <span style={{ color: "var(--text-subtle)" }}>{lang === 'ml' ? 'ഇൻഷുറൻസ് തുക: ' : 'SUM INSURED: '}</span>
                    <strong style={{ color: "var(--primary-blue)" }}>{product.sumInsured}</strong>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <button
                      onClick={() => onSelectProduct ? onSelectProduct(product) : setActiveModalProduct(product)}
                      className="btn-secondary"
                      style={{ padding: "0.6rem", fontSize: "0.85rem" }}
                    >
                      {t('viewDetails', 'View Details')}
                    </button>
                    <button
                      onClick={() => handleEnquire(product.name)}
                      className="btn-primary"
                      style={{ padding: "0.6rem", fontSize: "0.85rem" }}
                    >
                      {lang === 'ml' ? 'ക്വോട്ട് ചോദിക്കുക' : 'Enquire Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModalProduct && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.6)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem"
        }}>
          <div style={{
            maxWidth: "580px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "2rem",
            background: "#ffffff",
            borderRadius: "var(--radius-md)",
            position: "relative"
          }}>
            <button
              onClick={() => setActiveModalProduct(null)}
              style={{ position: "absolute", top: "1rem", right: "1rem", background: "transparent", border: "none", cursor: "pointer", fontSize: "1.2rem" }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.2rem" }}>{activeModalProduct.name}</h3>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--primary-blue)", marginBottom: "1rem" }}>
              {activeModalProduct.company}
            </p>

            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.4rem" }}>
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
              <button
                onClick={() => {
                  handleEnquire(activeModalProduct.name);
                  setActiveModalProduct(null);
                }}
                className="btn-primary"
              >
                Enquire Now
              </button>
              <button onClick={() => setActiveModalProduct(null)} className="btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {enquireSubmittedToast && (
        <div style={{
          position: "fixed",
          bottom: "80px",
          right: "24px",
          background: "#ffffff",
          border: "2px solid var(--primary-blue)",
          borderRadius: "var(--radius-sm)",
          padding: "1rem 1.4rem",
          boxShadow: "var(--shadow-md)",
          zIndex: 1000
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
