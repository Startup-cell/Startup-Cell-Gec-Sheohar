import "./Hero.css";
import collegeLogo from "../../assets/images/Hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-badge">
            🚀 Where Ideas Become Ventures
          </span>

          <h1>
            Empowering Students
            <br />
            To Build
            <span> Future Startups</span>
          </h1>

          <p>
            Startup Cell GEC Sheohar empowers students through
            innovation, entrepreneurship, mentorship,
            incubation support, and industry collaborations.
          </p>

          <div className="hero-buttons">

  <a
    href="https://startup.bihar.gov.in/startupregistration"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-btn"
  >
    Register Now
  </a>

  <a
    href="https://www.myscheme.gov.in/schemes/bsp"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-btn outline"
  >
    Learn More →
  </a>

</div>

          <div className="hero-stats">

            <div>
              <h3>10+</h3>
              <span>Incubated Startups</span>
            </div>

            <div>
              <h3>500+</h3>
              <span>Student Participants</span>
            </div>

            <div>
              <h3>100+</h3>
              <span>Events Organised</span>
            </div>

            <div>
              <h3>3+</h3>
              <span>Funding Support</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="glow-circle"></div>

          <img
            src={collegeLogo}
            alt="GEC Sheohar Logo"
            className="college-logo"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;