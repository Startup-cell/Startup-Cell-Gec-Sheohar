import "./EventDetails.css";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function EventDetails() {
  const { id } = useParams();

  const events = {
    "mystery-startup-challenge": {
      title: "Mystery Startup Challenge",
      date: "15 June 2026",
      time: "11:00 AM",
      venue: "Seminar Hall, GEC Sheohar",
      description:
        "Participants receive a mystery problem statement and create a startup solution. Teams pitch their ideas before a jury panel and compete for recognition and prizes.",
    },

    "founders-tale": {
      title: "The Founder’s Tale",
      date: "04 July 2026",
      time: "02:00 PM",
      venue: "Auditorium, GEC Sheohar",
      description:
        "A storytelling competition where students present inspiring startup journeys, challenges, failures, and lessons learned from successful entrepreneurs.",
    },

    "case-study-presentation": {
      title: "Case Study Presentation",
      date: "20 August 2026",
      time: "10:00 AM",
      venue: "Computer Centre, GEC Sheohar",
      description:
        "Participants analyze real-world business problems and present innovative solutions through structured presentations before judges and faculty members.",
    },
  };

  const event = events[id];

  if (!event) {
    return (
      <>
        <Navbar />
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          Event Not Found
        </div>
        <Footer />
      </>
    );
  }

 return (
  <>
    <Navbar />

    <section className="event-details">

      <div className="event-card">

        <span className="event-badge">
          EVENT DETAILS
        </span>

        <h1>{event.title}</h1>

        <div className="event-info">

          <div className="info-box">
            <h4>Date</h4>
            <p>{event.date}</p>
          </div>

          <div className="info-box">
            <h4>Time</h4>
            <p>{event.time}</p>
          </div>

          <div className="info-box">
            <h4>Venue</h4>
            <p>{event.venue}</p>
          </div>

        </div>

        <div className="event-description">
          {event.description}
        </div>

      </div>

    </section>

    <Footer />
  </>
);
}

export default EventDetails;