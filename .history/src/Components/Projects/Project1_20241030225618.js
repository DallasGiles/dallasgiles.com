// src/Components/Projects/Project.js

import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Project({ title, description, techStack, images, githubLink }) {
  return (
    <article className="project">
      <h3 className="project__title">{title}</h3>
      <div className="project__main">
        {images.map((image, index) => (
          <img
            key={index}
            className="project__image"
            src={image}
            alt={`${title} screenshot ${index + 1}`}
            width="15%"
            height="auto"
            loading="lazy"
          />
        ))}

        <div className="project__details">
          <p className="project__description">{description}</p>
          <p className="project__tech">Tech Stack: {techStack}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project__sourceCode"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;