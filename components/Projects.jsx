import React from "react";

const Projects = () => {
  return (
    <div className="lg:max-w-6xl mx-auto mt-36">
      <div>
        <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-10">
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
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
      </div>

      <div className="flex items-center justify-evenly mt-10">
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
      </div>

      <div className="flex items-center justify-evenly mt-10">
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
        <div className="portfolio">
          <img
            src="portfolio/nightrain.png"
            alt="Night rain project"
            className="portfolio__img"
          />
          <p className="mt-3">Night Rain Trading & Contracting</p>
          <p className="text-gray-500">WordPress</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
