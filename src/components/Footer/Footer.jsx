import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>🚀 Startup Cell GEC Sheohar</h3>

          <p>
            Empowering innovators and future entrepreneurs through
            mentorship, networking, startup incubation, industry
            collaboration, and entrepreneurial opportunities.
          </p>

          <div className="socials">

            <a
              href="https://www.facebook.com/StartupCellGECSheohar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/startup_cell_gec_sheohar?igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/startup-cell-gec-sheohar-741b19308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com/@startupcellgecsheohar?si=wRPPIyfFTwi8-2CI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        <div>
          <h4>Quick Links</h4>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Notices</li>
            <li>News</li>
            <li>Albums</li>
          </ul>
        </div>

        <div>
  <h4>Contact</h4>

  <div className="contact-cards">

    <div className="contact-card">
      <span>📍</span>
      <div>
        <h5>Address</h5>
        <p>
          Government Engineering College Sheohar
          <br />
          Chhatauna Bisunpur, Block - Piprahi
          <br />
          Sheohar, Bihar - 843329
        </p>
      </div>
    </div>

    <div className="contact-card">
      <span>📞</span>
      <div>
        <h5>Phone</h5>
        <p>
          09031085516
          <br />
          09431811171 (Emergency)
        </p>
      </div>
    </div>

    <div className="contact-card">
      <span>✉️</span>
      <div>
        <h5>Email</h5>
        <p>startup@gecsheohar.ac.in</p>
      </div>
    </div>

  </div>
</div>

      </div>

      <div className="footer-bottom">

  <div>
    © 2026 Startup Cell GEC Sheohar. All Rights Reserved.
  </div>

  <div className="developer-credit">
    Designed & Developed by
    <strong>Prateek Raj</strong>
    <span className="batch">• CSE (2023-27)</span>
  </div>

</div>

    </footer>
  );
}

export default Footer;