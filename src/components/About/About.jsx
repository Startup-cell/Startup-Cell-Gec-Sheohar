import "./About.css";
import { FaRocket, FaUsers, FaHandshake, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <span className="section-tag">ABOUT US</span>

        <h2>Building the Innovation Ecosystem</h2>

        <p>
          Startup Cell GEC Sheohar fosters innovation,
          entrepreneurship, and startup culture among students
          through mentorship, workshops, incubation support,
          networking opportunities, and industry collaborations.
        </p>
      </div>

      <div className="about-right">

        <div className="feature-card">
          <FaRocket />
          <h3>Startup Registration</h3>
          <p>Support and guidance for aspiring founders.</p>
        </div>

        <div className="feature-card">
          <FaUsers />
          <h3>Mentorship</h3>
          <p>Workshops and expert sessions for growth.</p>
        </div>

        <div className="feature-card">
          <FaHandshake />
          <h3>Industry Networks</h3>
          <p>Connect with professionals and innovators.</p>
        </div>

        <div className="feature-card">
          <FaLightbulb />
          <h3>Funding Support</h3>
          <p>Access startup opportunities and resources.</p>
        </div>

      </div>

    </section>
  );
}

export default About;