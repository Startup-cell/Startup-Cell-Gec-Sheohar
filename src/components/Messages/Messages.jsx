import "./Messages.css";

import principalImage from "../../assets/images/principal.png";
import coordinatorImage from "../../assets/images/coordinator.png";

function Messages() {
  return (
    <>
      {/* Principal Message */}

      <section className="message-section">

        <div className="message-card">

          <div className="message-image">
            <img
              src={principalImage}
              alt="Dr. Keshavendra Choudhary"
            />
          </div>

          <div className="message-content">

            <span className="section-tag">
              PRINCIPAL'S MESSAGE
            </span>

            <h2>Dr. Keshavendra Choudhary</h2>

            <h4>Principal, GEC Sheohar</h4>

            <p>
              "At GEC Sheohar, we believe innovation and entrepreneurship are
              key drivers of progress. The Startup Cell provides a platform
              for students to think creatively, solve real-world challenges,
              and transform ideas into meaningful ventures. I encourage every
              student to embrace innovation, develop an entrepreneurial
              mindset, and contribute towards building a brighter future."
            </p>

          </div>

        </div>

      </section>

      {/* District Coordinator Message */}

      <section className="message-section">

        <div className="message-card reverse">

          <div className="message-content">

            <span className="section-tag">
              DISTRICT COORDINATOR'S MESSAGE
            </span>

            <h2>Shreya Shah</h2>

            <h4>District Coordinator</h4>

            <p>
              "The Startup Cell at GEC Sheohar serves as a catalyst for
              innovation and entrepreneurial growth among students. It is
              encouraging to see young minds exploring creative ideas,
              solving real-world challenges, and developing the confidence
              to become future leaders and job creators. I extend my best
              wishes to all aspiring innovators and entrepreneurs on their
              journey toward success."
            </p>

          </div>

          <div className="message-image">
            <img
              src={coordinatorImage}
              alt="Shreya Shah"
            />
          </div>

        </div>

      </section>
    </>
  );
}

export default Messages;