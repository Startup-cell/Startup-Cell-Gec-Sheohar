import "./Policy.css";

function Policy() {
  return (
    <section className="policy-section">

      <div className="policy-header">

        <span className="section-tag">
          BIHAR STARTUP POLICY
        </span>

        <h2>
          Empowering Entrepreneurs Across Bihar
        </h2>

        <p>
          The Bihar Startup Policy is a flagship initiative of the
          Government of Bihar designed to promote innovation,
          entrepreneurship, and startup development across the state.
        </p>

      </div>

      <div className="benefits-grid">

        <div className="benefit-card">
          ₹10 Lakh Interest-Free Seed Funding
        </div>

        <div className="benefit-card">
          Women & SC/ST Incentives
        </div>

        <div className="benefit-card">
          ₹3 Lakh Accelerator Grants
        </div>

        <div className="benefit-card">
          Free Company Valuation Support
        </div>

        <div className="benefit-card">
          Angel Investment Success Fee Support
        </div>

        <div className="benefit-card">
          Mentorship & Co-working Access
        </div>

      </div>

      <div className="eligibility-box">

        <h3>Eligibility Criteria</h3>

        <ul>
          <li>Private Limited, LLP or Partnership Firm</li>
          <li>Registered Office in Bihar</li>
          <li>Less than 10 Years Old</li>
          <li>Annual Turnover Below ₹100 Crore</li>
          <li>Innovation & Job Creation Focus</li>
        </ul>

      </div>

      <a
  href="/pdf/Bihar-Startup-Policy.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="policy-btn"
>
  Download Startup Policy
</a>

    </section>
  );
}

export default Policy;