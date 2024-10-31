import LightLine from "../Lines/Light";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      
      <div data-aos="fade-right" className="about__text">
      <DarkLine />
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
           Hello My name is Dallas Giles and I am a Fullstack Web Developer
          <br /> <br /> Currently, I am very interested in, and learning about{" "}
          <span className="about__specialText">artificial intelligence</span>,{" "}
          <span className="about__specialText">technical application</span>, and{" "}
          the
          <span className="about__specialText"> internet</span> in general.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/dallas-headshot.jpg"
        alt="Creater Headshot"
        width="300"
        height="300"
      />
      <LightLine />
    </section>
  );
}

export default About;