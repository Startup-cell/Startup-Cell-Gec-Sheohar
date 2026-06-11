import "./UpcomingEvents.css";

function UpcomingEvents() {
  return (
    <section className="upcoming-events">

      <span className="section-tag">
        COMING SOON
      </span>

      <h2>Upcoming Events</h2>

      <p>
        Stay tuned for exciting events and startup opportunities.
      </p>

      <div className="upcoming-grid">

        <div className="upcoming-card">
          <h3>Innovation Summit</h3>
          <span>Coming Soon</span>
          <p>
            Entrepreneurship and innovation focused summit.
          </p>
        </div>

        <div className="upcoming-card">
          <h3>Startup Bootcamp</h3>
          <span>Coming Soon</span>
          <p>
            Intensive startup learning and mentorship program.
          </p>
        </div>

        <div className="upcoming-card">
          <h3>Founder Meetup</h3>
          <span>Coming Soon</span>
          <p>
            Meet founders and industry leaders.
          </p>
        </div>

      </div>

    </section>
  );
}

export default UpcomingEvents;