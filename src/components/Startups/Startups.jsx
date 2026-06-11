import "./Startups.css";
import { startups } from "../../data/siteData";

function Startups() {
  return (
    <section className="startups" id="startups">

      <span className="section-tag">
        PORTFOLIO
      </span>

      <h2>Our Startups</h2>

      <div className="startup-grid">

        {startups.map((startup,index)=>(
          <div className="startup-card" key={index}>

            <h3>{startup.name}</h3>

            <span>
              Founder: {startup.founder}
            </span>

            <p>{startup.description}</p>

            <a href={startup.website}>
              Visit Website →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Startups;