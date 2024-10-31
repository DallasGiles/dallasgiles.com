// src/Components/Projects/Projects.js

import React from "react";
import { FaGithub } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import DarkLine from "../Lines/Dark";
import "./ProjectLight.css";

function Project({ id, title, description, techStack, images, githubLink }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <div className="project__main">
        {/* Mobile Image */}
        <img
          className="project__image project__specialMobileImage"
          src={images[0]}
          alt={`${title} Home Page`}
          width="15%"
          height="auto"
          loading="lazy"
        />

        {/* Additional Images for Desktop */}
        {isDesktopOrLaptop && (
          <div className="project__desktopImages">
            {images.slice(1).map((image, index) => (
              <img
                key={index}
                className="project__image"
                src={image}
                alt={`${title} Image ${index + 1}`}
                width="15%"
                height="auto"
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">{title}</h3>
          <p className="project__description project__body">{description}</p>
          <p className="project__tech project__body">&gt; {techStack}</p>
          <a
            className="project__sourceCode"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub Repository`}
          >
            <FaGithub className="project__githubLogo" size={25} />
            <span className="project__sourceCodeText">Source Code</span>
          </a>
        </div>
      </div>
      <DarkLine />
    </article>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__header">Projects</h2>

      <Project
        id="project-1"
        title="Peak Connect"
        description="A web app built to connect people who have niche hobbies and help them connect through the things that they love."
        techStack="React Native"
        images={[
          "/images/peak-connect-home.png",
          "/images/peak-connect.png",
          "/images/peak-connect-map.png",
        ]}
        githubLink="https://github.com/DallasGiles/Peak-Connect"
      />

      <Project
        id="project-2"
        title="Project 2"
        description="Description for project 2, explaining its purpose and features."
        techStack="Tech Stack 2"
        images={[
          "/images/project2-image1.png",
          "/images/project2-image2.png",
          "/images/project2-image3.png",
        ]}
        githubLink="https://github.com/DallasGiles/Project-2"
      />

      <Project
        id="project-3"
        title="Project 3"
        description="Description for project 3, explaining its purpose and features."
        techStack="Tech Stack 3"
        images={[
          "/images/project3-image1.png",
          "/images/project3-image2.png",
          "/images/project3-image3.png",
        ]}
        githubLink="https://github.com/DallasGiles/Project-3"
      />
      <DarkLine />
    </section>
  );
}

export default Projects;