import "./Team.css";

function Team() {
  return (
    <section className="team-section" id="team">

      <div className="team-header">

        <span className="section-tag">
          PEOPLE
        </span>

        <h2>Our Team</h2>

        <p>
          Faculty coordinators and student representatives
          driving innovation and entrepreneurship at GEC Sheohar.
        </p>

      </div>

      {/* Top Row */}

      <div className="team-row top-row">

        <div className="team-card">
          <div className="avatar">NR</div>

          <div>
            <h3>Nischay Ranjan</h3>
            <p>Startup Cell Incharge</p>
          </div>
        </div>

        <div className="team-card">
          <div className="avatar">SS</div>

          <div>
            <h3>Shreya Shah</h3>
            <p>Startup Coordinator</p>
          </div>
        </div>

      </div>

      {/* Bottom Row */}

      <div className="team-row bottom-row">

        <div className="team-card">
          <div className="avatar">PR</div>

          <div>
            <h3>Prateek Raj</h3>
            <p>Student Representative</p>
          </div>
        </div>

        <div className="team-card">
          <div className="avatar">PK</div>

          <div>
            <h3>Prem Kumar</h3>
            <p>Student Representative</p>
          </div>
        </div>

        <div className="team-card">
          <div className="avatar">AK</div>

          <div>
            <h3>Ayanshu Kumari</h3>
            <p>Student Representative</p>
          </div>
        </div>

        <div className="team-card">
          <div className="avatar">AD</div>

          <div>
            <h3>Aditya Kumar</h3>
            <p>Student Representative</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Team;