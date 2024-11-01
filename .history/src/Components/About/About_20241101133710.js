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
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
           Hello My name is Dallas Giles and I am a Fullstack Web Developer
          <br /> <br /> Currently, I am very interested in, and currently learning about{" "}
          <span className="about__specialText">artificial intelligence</span>,{" "}
          <span className="about__specialText">technical application</span>, and{" "}
          
          <span className="about__specialText"> web development</span> in general.
        </p>
        <br /> <br />
        <p className="about__body">
           In the future, I would like to develop web and mobile applications that 
           involve artificial intelligence to solve  <span className="about__specialText">real-world problems</span>,{" "} 
           <span className="about__specialText">automate tasks</span>, and create <span className="about__specialText">personalized experiences</span>.
        </p>
        <br /> <br />
        <p className="about__body">
           I would also like to work on <span className="about__specialText">open-source projects</span> to give back 
           to the developer community. 
           In particular I would like to develop <span className="about__specialText">solutions</span> that are more {" "} 
           <span className="about__specialText">sustainable</span>, require less  <span className="about__specialText">consumption</span>, and encourage continuous learning.
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
        src="/images/headshot.jpeg"
        alt="Creator"
        width="250"
        height="300"
      />
      <LightLine />
    </section>
  );
}

export default About;