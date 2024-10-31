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
          src="/images/health_fusion_home.png"
          alt="Health Fusion Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop && (
          <>
            <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/health_fusion_map.png"
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
    A <span className="project__specialText">web app</span> built to simplify document management and communication for construction teams. <span className="project__specialText">ConstructionComms</span> empowers foremen and crew members to easily upload, update, and share critical project files, ensuring everyone on-site has access to the latest plans and reports.
    Featuring an organized <span className="project__specialText">dashboard</span>, the app enables quick access to documents, real-time updates, and permission control, streamlining communication and helping projects stay on schedule.
    Files are securely stored using <span className="project__specialText">AWS cloud storage</span>, allowing reliable access across devices and locations.
  </p>
  <p className="project__tech project__body">
    &gt; React · AWS S3 · Node.js · Express · MongoDB
  </p>
</div>
          <a
            className="project__sourceCode"
            href="https://github.com/jackparsonss/health-fusion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
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