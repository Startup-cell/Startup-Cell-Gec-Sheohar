import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Notices.css";

function Notices() {
  const notices = [
    {
      id: "student-representative",
      title:
        "Applications Open for Student Representatives Startup Cell, GEC Sheohar",
      date: "20 May 2026",
      description:
        "Startup Cell, GEC Sheohar is inviting 2nd & 3rd Year students to apply for the position of Student Representative — a great opportunity to gain experience in startups, events, social media & designing."
    },

    {
      id: "legal-compliance",
      title: "Online Session on Legal & Compliance Clinics",
      date: "18 May 2026",
      description:
        "Startup Cell, Government Engineering College Sheohar is organizing an informative online session on Legal & Compliance Clinics for students interested in startups, entrepreneurship, and business management."
    },

    {
      id: "ipr-awareness",
      title: "IPR Awareness Program (MSME)",
      date: "23 March 2026",
      description:
        "Startup Cell, Government Engineering College Sheohar invites all students to attend the IPR Awareness Program (MSME), an insightful session focused on Intellectual Property Rights, innovation, startups, and entrepreneurship."
    },

    {
      id: "startup-from-scratch",
      title: "Webinar on How to Build a Startup from Scratch",
      date: "19 March 2026",
      description:
        "Startup Cell, Government Engineering College Sheohar is pleased to organize an insightful webinar on How to Build a Startup from Scratch – A Practical Session for College Students."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="notices-page">

        <div className="notices-header">

          <span>NOTICE BOARD</span>

          <h1>Startup Cell Notices</h1>

          <p>
            Stay updated with the latest announcements,
            registrations, workshops, competitions and opportunities.
          </p>

        </div>

        <div className="notices-grid">

          {notices.map((notice) => (
            <div className="notice-card" key={notice.id}>

              <div className="notice-date">
                {notice.date}
              </div>

              <h3>{notice.title}</h3>

              <p>{notice.description}</p>

              <Link
                to={`/notice/${notice.id}`}
                className="notice-btn"
              >
                View Notice →
              </Link>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Notices;