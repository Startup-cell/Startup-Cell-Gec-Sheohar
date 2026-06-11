import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function NoticeDetails() {
  const { id } = useParams();

  const notices = {
    "student-representative": {
      title: "Applications Open for Student Representatives",
      date: "20 May 2026",

      content: `
Startup Cell, GEC Sheohar invites applications from 2nd and 3rd Year students for the position of Student Representative. This is an excellent opportunity to gain hands-on experience in startup activities, event management, social media handling, and designing.

Benefits
 Monthly Stipend: ₹2,500
 Practical exposure to startup ecosystem and leadership activities

How to Apply
 Submit a soft copy of the Character Certificate signed by your Mentor and HoD.

Important Dates
 Last Date to Apply: 23 May 2026, 5:00 PM
 Interview Date: 24 May 2026

Interested students are encouraged to apply and become a part of the Startup Cell team.
      `,

      pdf: "/pdf/Advertisement for Student Representatives for Startup Cell.pdf",
      applyLink: "https://forms.gle/t5gxQH1z1ymoTzEN8"
    },

    "legal-compliance": {
      title: "Online Session on Legal & Compliance Clinics",
      date: "18 May 2026",

      content: `
Startup Cell, Government Engineering College Sheohar is organizing an informative online session on Legal & Compliance Clinics for students interested in startups, entrepreneurship, and business management.

Session Highlights
 Startup Incorporation & Legal Structure
 Startup Taxation
 Regulatory Compliance for Startups

Speaker
 CA Pallavi Jha

Event Details
📅 Date: 20 May 2026
⏰ Time: 11:00 AM onwards

Students are encouraged to participate and gain valuable insights into the legal and compliance aspects of building and managing startups.
      `,

      pdf: "/pdf/Notice Legal & Compliance Clinics.pdf",
      applyLink: "#"
    },

    "ipr-awareness": {
      title: "IPR Awareness Program (MSME)",
      date: "23 March 2026",

      content: `
Startup Cell, Government Engineering College Sheohar invites all students to attend the IPR Awareness Program (MSME), an insightful session focused on Intellectual Property Rights, innovation, startups, and entrepreneurship.

Distinguished Speakers
 Mr. Amburi Salemu Rajulu – Assistant Director, Ministry of MSME, Government of India
 Mr. Ritesh Singh – Consultant, Ministry of MSME, Government of India
 Mr. Saurabh Kumar – Advocate, Patna High Court & IPR Expert
 Mr. Shivendra Kumar – General Manager, District Industries Centre (DIC), Sheohar

Why Attend?
 Learn the fundamentals of Intellectual Property Rights (IPR)
 Understand patents, trademarks, and legal protection for innovations
 Explore government schemes and support available for startups
 Gain practical insights into entrepreneurship and business development

Event Details
📅 Date: 21 May 2026
⏰ Time: 10:00 AM onwards

Don't miss this valuable opportunity to interact with experts and gain knowledge that can help shape your entrepreneurial journey.
      `,

      pdf: "/pdf/IPR Awareness Program.pdf",
      applyLink: "#"
    },

    "startup-from-scratch": {
      title: "Webinar on How to Build a Startup from Scratch",
      date: "19 March 2026",

      content: `
Startup Cell, Government Engineering College Sheohar is pleased to organize an insightful webinar on How to Build a Startup from Scratch – A Practical Session for College Students.

The session will provide practical guidance on transforming innovative ideas into successful ventures, covering the essential stages of startup development from ideation to execution.

Speaker
 Mr. Sachin Kr. Shukla
 Startup Mentor

Event Details
📅 Date: 20 March 2026 (Friday)
⏰ Time: 03:30 PM – 04:30 PM
📍 Venue: Computer Centre, Government Engineering College, Sheohar

Students are encouraged to participate in this informative session and enhance their entrepreneurial knowledge, skills, and understanding of the startup ecosystem.
      `,

      pdf: "/pdf/Webinar on How to build a startup from scratch.pdf",
      applyLink: "#"
    }
  };

  const notice = notices[id];

  if (!notice) {
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
            fontWeight: "700"
          }}
        >
          Notice Not Found
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "140px 10%",
          minHeight: "80vh",
          background: "#f8fafc"
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            background: "#fff",
            padding: "50px",
            borderRadius: "24px",
            boxShadow: "0 15px 40px rgba(15,23,42,.08)"
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "#eff6ff",
              color: "#2563eb",
              borderRadius: "30px",
              fontWeight: "600"
            }}
          >
            {notice.date}
          </span>

          <h1
            style={{
              marginTop: "20px",
              fontSize: "2.5rem",
              color: "#0f172a",
              lineHeight: "1.3"
            }}
          >
            {notice.title}
          </h1>

          <p
            style={{
              marginTop: "30px",
              lineHeight: "2",
              color: "#475569",
              fontSize: "1.05rem",
              whiteSpace: "pre-line"
            }}
          >
            {notice.content}
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "40px"
            }}
          >
            <a
              href={notice.pdf}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: "12px",
                background: "#0f172a",
                color: "#fff",
                fontWeight: "600"
              }}
            >
              Download PDF
            </a>

            <a
              href={notice.applyLink}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                padding: "14px 24px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#2563eb,#4f46e5)",
                color: "#fff",
                fontWeight: "600"
              }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NoticeDetails;