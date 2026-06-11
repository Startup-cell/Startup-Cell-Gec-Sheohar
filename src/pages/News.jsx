import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./News.css";

function News() {
  const news = [
    {
      title: "Startup Cell Launches New Innovation Initiative",
      date: "24 May 2026",
      image: "https://via.placeholder.com/600x350",
      description:
        "Startup Cell GEC Sheohar has launched a new initiative to encourage student-led innovation and entrepreneurship."
    },
    {
      title: "Students Participate in Bihar Startup Workshop",
      date: "02 June 2026",
      image: "https://via.placeholder.com/600x350",
      description:
        "Students actively participated in a workshop focused on startup ecosystem, funding opportunities, and innovation."
    },
    {
      title: "Entrepreneurship Awareness Session Organized",
      date: "10 June 2026",
      image: "https://via.placeholder.com/600x350",
      description:
        "Industry experts shared insights on startup growth, business strategy, and leadership."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="news-page">

        <div className="news-header">
          <span>LATEST UPDATES</span>
          <h1>Startup Cell News</h1>

          <p>
            Explore the latest news, achievements,
            events, workshops and startup activities.
          </p>
        </div>

        <div className="news-grid">

          {news.map((item, index) => (
            <div className="news-card" key={index}>

              <div className="news-placeholder">

                </div>

              <div className="news-content">

                <span>{item.date}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default News;