import lectureImg from "../assets/images/Entrepreneurship Lecture.png";
import iprImg from "../assets/images/IPR Awareness Program.png";
import mentorshipImg from "../assets/images/Mentorship Program.jpeg";
import msmeImg from "../assets/images/MSME.jpeg";
import pitchingImg from "../assets/images/Pitching Competition.jpeg";
import orientationImg from "../assets/images/Prientation Programme.jpeg";
import prizeImg from "../assets/images/Prize Distribution.jpeg";
import webinarImg from "../assets/images/Webinar on “How to Build a Startup from Scratch”.png";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Albums.css";

function Albums() {
  const albums = [
    {
      title: "Entrepreneurship Lecture",
      image: lectureImg,
    },
    {
      title: "IPR Awareness Program",
      image: iprImg,
    },
    {
      title: "Mentorship Program",
      image: mentorshipImg,
    },
    {
      title: "MSME",
      image: msmeImg,
    },
    {
      title: "Pitching Competition",
      image: pitchingImg,
    },
    {
      title: "Orientation Programme",
      image: orientationImg,
    },
    {
      title: "Prize Distribution",
      image: prizeImg,
    },
    {
      title: "Webinar on How to Build a Startup from Scratch",
      image: webinarImg,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="albums-page">
        <div className="albums-header">
          <span>PHOTO GALLERY</span>

          <h1>Startup Cell Albums</h1>

          <p>
            Explore moments from workshops, startup events,
            competitions, mentorship sessions and innovation activities.
          </p>
        </div>

        <div className="albums-grid">
          {albums.map((album, index) => (
            <div className="album-card" key={index}>
              <div className="album-image">
                <img
                  src={album.image}
                  alt={album.title}
                />
              </div>

              <div className="album-content">
                <h3>{album.title}</h3>

                <p>
                  Photos from Startup Cell GEC Sheohar activities.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Albums;