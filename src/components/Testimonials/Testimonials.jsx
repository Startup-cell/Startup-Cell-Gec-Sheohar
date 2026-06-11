import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="testimonials-header">

        <span className="section-tag">
          COMMUNITY VOICE
        </span>

        <h2>What Our Students Say</h2>

        <p>
          Experiences shared by students associated with Startup Cell GEC Sheohar.
        </p>

      </div>

      <div className="testimonials-grid">

        <div className="testimonial-card">

          <div className="quote">❝</div>

          <p>
            Being a part of Startup Cell GEC Sheohar has been a great learning
            experience. The activities and events organized by the cell help
            students gain practical knowledge about startups and business development.
          </p>

          <div className="student-info">
            <div className="student-avatar">NK</div>

            <div>
              <h4>Neha Kumari</h4>
              <span>CSE (2022–26)</span>
            </div>
          </div>

        </div>

        <div className="testimonial-card">

          <div className="quote">❝</div>

          <p>
            Startup Cell GEC Sheohar is an excellent platform for students who
            aspire to learn about entrepreneurship. It provides opportunities
            to develop innovative thinking, leadership, and teamwork skills.
          </p>

          <div className="student-info">
            <div className="student-avatar">VS</div>

            <div>
              <h4>Varsha Singh</h4>
              <span>CSE (2022–26)</span>
            </div>
          </div>

        </div>

        <div className="testimonial-card">

          <div className="quote">❝</div>

          <p>
            Startup Cell GEC Sheohar creates a supportive environment where
            students can transform their ideas into reality. It encourages
            creativity, problem-solving, and entrepreneurial thinking.
          </p>

          <div className="student-info">
            <div className="student-avatar">KK</div>

            <div>
              <h4>Khushi Kumari</h4>
              <span>CSE (2023–27)</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;