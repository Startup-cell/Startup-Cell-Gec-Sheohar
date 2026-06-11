import "./Navbar.css";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <div className="logo-icon">
          <FaRocket />
        </div>

        <div className="logo-text">
          <h3>Startup Cell</h3>
          <span>Government Engineering College Sheohar</span>
        </div>

      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#events">Events</a>
        </li>

        <li>
          <Link to="/notices">Notices</Link>
        </li>

        <li>
          <Link to="/news">News</Link>
        </li>

        <li>
          <Link to="/albums">Albums</Link>
        </li>

        <li>
          <Link to="/upcoming-events">
            Upcoming Events
          </Link>
        </li>

      </ul>

      <div className="nav-actions">

        <a
          href="https://chat.whatsapp.com/HorJgGYG04qBfYCM5LoWGj"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
        >
          Join Us
        </a>

        <a
          href="https://forms.gle/HpdcnFSXyn4uVYzk6"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
        >
          Mentorship
        </a>

      </div>

    </nav>
  );
}

export default Navbar;