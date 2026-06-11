import "./Events.css";
import { organisedEvents } from "../../data/siteData";
import { Link } from "react-router-dom";

function Events() {
  return (
    <section className="events-section" id="events">

      <div className="events-header">

        <span className="section-tag">
          WHAT WE DO
        </span>

        <h2>Events We Have Organised</h2>

        <p>
          Promoting innovation and entrepreneurship through
          engaging competitions, workshops, and startup activities.
        </p>

      </div>

      <div className="events-grid">

        {organisedEvents.map((event, index) => (

          <div className="event-card" key={index}>

            <h3>{event.title}</h3>

            <p>{event.description}</p>

            <Link
              to={`/event/${event.id}`}
              className="event-btn"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Events;