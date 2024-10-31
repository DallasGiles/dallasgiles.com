import { FaGithub } from "react-icons/fa";
import LightWave from "../Lines/Light";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
  <h3 className="project__titleDark">Print-A-Smile Foundation</h3>
  <p className="project__description project__body">
    A <span className="project__specialText">web platform</span> built to make a difference by connecting 3D printing enthusiasts with children in need of joy. The <span className="project__specialText">Print-A-Smile</span> website provides an easy-to-navigate interface where users can <span className="project__specialText">download toy designs</span>, print them, and track their impact. 
    Featuring an organized <span className="project__specialText">design library</span> and personalized <span className="project__specialText">user dashboards</span>, the platform allows members to access printable toy files, view project updates, and share completed prints with the community. For an interactive experience, the website also includes a <span className="project__specialText">live donation tracker</span>, showing real-time contributions and printed toys distributed.
  </p>
  <p className="project__tech project__body">
    &gt; React · Node.js · MongoDB · AWS S3 · Stripe API
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
          src="/images/Print-A_Smile.jpg"
          srcset="/images/covid_bot_project_image_small.jpg 750w, /images/covid_bot_project_image_large.jpg 1468w"
          sizes="50vw"
          alt="Print a smile home page"
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