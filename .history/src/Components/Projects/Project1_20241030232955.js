import { FaGithub } from "react-icons/fa";
import DarkWave from "../Lines/Dark";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

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
          src="/images/contructioncomms.png"
          alt="Construction Comms Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/contructioncomms.png"
              alt="C Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/hcontructioncomms.png"
              alt="Health Fusion Project Add Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        )}

<div data-aos="fade-left" className="project__right">
  <h3 className="project__title">ConstructionComms</h3>
  <p className="project__description project__body">
    A <span className="project__specialText">web app</span> built to streamline document management and enhance communication for construction teams. <span className="project__specialText">ConstructionComms</span> allows foremen and crew members to <span className="project__specialText">upload and manage project files</span> with ease, ensuring everyone has access to the most up-to-date plans and reports. 
    Featuring an intuitive <span className="project__specialText">dashboard view</span>, users can organize and track all project documents efficiently and stay on top of updates. Additionally, the app includes a <span className="project__specialText">file history view</span>, allowing users to view past versions or changes for better project management.
    For added convenience, ConstructionComms offers a <span className="project__specialText">real-time update feed</span> and <span className="project__specialText">notifications</span>, helping teams remain informed about new uploads or modifications to crucial documents.
  </p>
  <p className="project__tech project__body">
    &gt; React · AWS S3 · Node.js · Express · MongoDB
  </p>
  <a
    className="project__sourceCode"
    href="https://github.com/DallasGiles/ConstructionComms"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="ConstructionComms GitHub Repository"
  >
    <FaGithub className="project__githubLogo" size={25} />
    <h3 className="project__sourceCodeText">Source Code</h3>
  </a>
</div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;