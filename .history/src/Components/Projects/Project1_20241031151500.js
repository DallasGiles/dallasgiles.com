import { FaGithub } from "react-icons/fa";
import DarkWave from "../Lines/Dark";
import "./ProjectLight.css";


function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/Print-Home.png"
          alt="Print-A-Smile Foundation Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Print-A-Smile Foundation</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">web platform</span> created to bring joy to children by connecting 3D printing enthusiasts with families in need. <span className="project__specialText">Print-A-Smile</span> enables users to <span className="project__specialText">browse and download toy designs</span> ready for 3D printing, empowering them to contribute directly to our mission. 
            With a centralized <span className="project__specialText">design library</span> and individual <span className="project__specialText">user dashboards</span>, the platform provides seamless access to printable files, project updates, and donation tracking. Additionally, <span className="project__specialText">live impact metrics</span> show real-time stats of toys printed and distributed, fostering a connected community of supporters.
          </p>
          <p className="project__tech project__body">
            &gt; React · AWS S3 · Node.js · Express · MongoDB · Stripe API
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
      </div>
      <DarkWave />
    </article>
  );
        }
export default Project1;