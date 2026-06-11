import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Messages from "../components/Messages/Messages";
import Highlight from "../components/Highlight/Highlight";
import About from "../components/About/About";
import Policy from "../components/Policy/Policy";
import Startups from "../components/Startups/Startups";
import Contact from "../components/Contact/Contact";
import Events from "../components/Events/Events";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Messages />

      <Highlight />

      <About />

      <Policy />

      <Startups />

      <Contact />

      <Events />

      <UpcomingEvents />

      <Team />

      <Testimonials />

      <Footer />
    </>
  );
}

export default Home;