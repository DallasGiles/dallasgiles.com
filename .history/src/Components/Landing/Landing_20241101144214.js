import DarkLine from "../Lines/Dark";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";


function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1 className="landing__mainText" loading="lazy">Dallas Giles.</h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText"loading='lazy'>Full Stack</h1>
        <h1 className="landing__mainText"loading>Web Developer</h1>
      </div>
      
      <LeftSocialMediaIcons />

      <DarkLine />
    </section>
  );
}

export default Landing;