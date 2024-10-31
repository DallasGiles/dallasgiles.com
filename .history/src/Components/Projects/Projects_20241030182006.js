import { FaGithub } from "react-icons/fa";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
import DarkLine from "../Lines/Dark";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/peak-connect-home.png"
          alt="Peak connect Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/peak-connect"
              alt="Peak Connect Picute"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/peak-connect-map.png"
              alt="Peak connect home page"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Peak Connect</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">web app</span>built to connect people who have niche hobbies{" "}
            <span className="project__specialText">
              and help  them connect through the things that they love.
            </span>
            
          </p>
          <p className="project__tech project__body">
            &gt; React Native
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/DallasGiles/Peak-Connect"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkLine />
    </article>
  );
}

export default Project1;