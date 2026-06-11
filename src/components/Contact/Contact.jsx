import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-container">

        <div className="contact-header">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h2>
            Send Us A Message
          </h2>

          <p>
            Have a startup idea, collaboration proposal,
            event suggestion, or innovation query?
            Connect with Startup Cell GEC Sheohar.
          </p>

        </div>

        <form className="contact-form">

          <div className="form-grid">

            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
              />
            </div>

            <div className="input-group">
              <label>Topic</label>

              <select>
                <option>Select Topic</option>
                <option>Startup Idea</option>
                <option>Mentorship</option>
                <option>Collaboration</option>
                <option>Event Query</option>
              </select>

            </div>

          </div>

          <div className="input-group full-width">

            <label>Message</label>

            <textarea
              rows="0"
              placeholder="Tell us how we can help..."
            ></textarea>

          </div>

          <button className="contact-btn">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;