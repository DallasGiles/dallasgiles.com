import PurpleArrows from "../Landing/PurpleArrows";
import DarkLine from "../Lines/Dark";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1 className="landing__mainText">Dallas Giles.</h1>
        <h1 className="landing__mainText"></h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText">Full Stack</h1>
        <h1 className="landing__mainText">Web Developer</h1>
      </div>
      <DarkLine />
      <PurpleArrows />

      <LeftSocialMediaIcons />

      
    </section>
  );
}

export default Landing;