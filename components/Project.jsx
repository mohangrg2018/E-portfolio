import React from "react";

const Project = ({ image, projectName, tool }) => {
  return (
    <div className="portfolio">
      <img src={image} alt="Night rain project" className="portfolio__img" />
      <p className="mt-3">{projectName}</p>
      <p className="text-gray-500">{tool}</p>
    </div>
  );
};

export default Project;
