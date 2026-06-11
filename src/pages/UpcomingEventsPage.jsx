import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./UpcomingEventsPage.css";

function UpcomingEventsPage() {

  const events = [
    {
      title: "Startup Awareness Session",
      date: "15 July 2026",
      venue: "Seminar Hall, GEC Sheohar"
    },
    {
      title: "Innovation & Idea Pitching Competition",
      date: "28 July 2026",
      venue: "Auditorium, GEC Sheohar"
    },
    {
      title: "Entrepreneurship Development Workshop",
      date: "10 August 2026",
      venue: "Startup Cell Conference Room"
    },
    {
      title: "Bihar Startup Policy Awareness Program",
      date: "22 August 2026",
      venue: "Online + Offline"
    }
  ];

  return (
    <>
      <Navbar />

      <section className="upcoming-page">

        <div className="upcoming-header">

          <span>EVENT CALENDAR</span>

          <h1>Upcoming Events</h1>

          <p>
            Stay updated with upcoming Startup Cell activities,
            workshops, competitions and innovation programs.
          </p>

        </div>

        <div className="events-grid">

          {events.map((event, index) => (
            <div className="event-card" key={index}>

              <div className="event-date">
                {event.date}
              </div>

              <h3>{event.title}</h3>

              <p>
                <strong>Venue:</strong> {event.venue}
              </p>

              <button>
                Register Now →
              </button>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default UpcomingEventsPage;