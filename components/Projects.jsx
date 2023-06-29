import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="lg:max-w-6xl mx-auto mt-36">
      <div>
        <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-5">
          activities
        </h1>
        <p className="uppercase -mt-12 font-bold text-primary">
          my recent work
        </p>
        <h2 className="capitalize font-bold text-[42px] font-play mt-2">
          see some of my <span className="text-primary ml-2">projects</span>
        </h2>
      </div>
      <div className="flex items-center justify-around mt-12">
        <h2>All</h2>
        <h2>WordPress</h2>
        <h2>NextJs Projects</h2>
      </div>
      <div className="flex items-center justify-evenly mt-10">
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
      </div>

      <div className="flex items-center justify-evenly mt-10">
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
      </div>

      <div className="flex items-center justify-evenly mt-10">
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
        <Project
          image="portfolio/nightrain.png"
          projectName="Night Rain Trading & Contracting"
          tool="WordPress"
        />
      </div>
    </div>
  );
};

export default Projects;
