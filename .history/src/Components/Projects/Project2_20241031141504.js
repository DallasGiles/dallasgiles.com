import { FaGithub } from "react-icons/fa";
import DarkWave from "../Lines/Dark";
import "./ProjectDark.css";

function Project2() {
    return (
      <article className="project dark">
        <div className="project__main">
          <div data-aos="fade-left" className="project__right">
            <h3 className="project__titleDark">Note Taking App</h3>
            <p className="project__description project__body">
              A <span className="project__specialText">backend-driven web platform</span> built to facilitate the 3D printing and distribution of toys for children in need. <span className="project__specialText">Print-A-Smile</span> leverages a robust backend infrastructure, allowing users to <span className="project__specialText">upload, manage, and download</span> 3D toy designs efficiently.
              The platform’s backend architecture includes <span className="project__specialText">secure AWS S3 storage</span> for managing and storing files, a <span className="project__specialText">real-time database</span> with MongoDB for tracking user interactions, and a <span className="project__specialText">live donation tracker</span> powered by the Stripe API, which allows seamless handling of contributions and automated distribution metrics.
            </p>
            <p className="project__tech project__body">
              &gt; Node.js · Express · MongoDB · AWS S3 · Stripe API
            </p>
            <a
              className="project__sourceCode"
              href="https://github.com/DallasGiles/Print-A-Smile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Print-A-Smile GitHub Repository"
            >
              <FaGithub className="project__githubLogo" size={25} />
              <h3 className="project__sourceCodeText">Source Code</h3>
            </a>
          </div>
          <img
            className="project__image project__imageDark"
            src="/images/print-a-smile-home.png"
            sizes="50vw"
            alt="Print-A-Smile home page"
            width="50%"
            height="auto"
            loading="lazy"
          />
        </div>
        <DarkWave />
      </article>
    );
  }

export default Project2;