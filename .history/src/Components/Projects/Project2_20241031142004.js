import { FaGithub } from "react-icons/fa";
import DarkWave from "../Lines/Dark";
import "./ProjectDark.css";

function Project2() {
    return (
      <article className="project dark">
        <div className="project__main">
          <div data-aos="fade-left" className="project__right">
            <h3 className="project__titleDark">NoteTaker</h3>
            <p className="project__description project__body">
              A <span className="project__specialText">full-stack note-taking app</span> designed to provide users with a reliable and secure platform for managing their notes. <span className="project__specialText">NoteTaker</span> offers a seamless experience, with a backend architecture that ensures data consistency, security, and accessibility.
              Built using <span className="project__specialText">Node.js</span> and <span className="project__specialText">Express</span>, the app’s backend handles all CRUD operations for notes, while MongoDB manages user data and note storage, offering scalability and efficient retrieval. Additionally, AWS S3 is integrated for storing attachments, and JWT authentication ensures user data remains private and secure.
            </p>
            <p className="project__tech project__body">
              &gt; Node.js ·  Express · MongoDB · JWT Authentication
            </p>
            <a
              className="project__sourceCode"
              href="https://github.com/DallasGiles/NoteMaster"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NoteMaster GitHub Repository"
            >
              <FaGithub className="project__githubLogo" size={25} />
              <h3 className="project__sourceCodeText">Source Code</h3>
            </a>
          </div>
          <img
            className="project__image project__imageDark"
            src="/images/note-taker.png"
            sizes="50vw"
            alt="NoteMaster home page"
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