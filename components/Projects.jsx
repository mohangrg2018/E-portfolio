"use client";

import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  const projectsData = [
    {
      link: "https://nightrainqa.com/",
      image: "portfolio/nightrain.png",
      projectName: "Night Rain Trading & Contracting",
      tool: "WordPress",
      category: "WordPress",
    },
    {
      link: "https://scc-qa.com/",
      image: "portfolio/ssc.png",
      projectName: "Superior Contracting & Cleaning",
      tool: "WordPress",
      category: "WordPress",
    },
    {
      link: "https://southerngrubhouse.com/",
      image: "portfolio/south.png",
      projectName: "Southern Grub House (Restaurant)",
      tool: "WordPress",
      category: "WordPress",
    },
    {
      link: "https://parhaminternational.com/",
      image: "portfolio/parhaminternational.png",
      projectName: "Parhaminternational",
      tool: "WordPress",
      category: "WordPress",
    },
    {
      link: "https://social-nine-gamma.vercel.app/",
      image: "portfolio/social.png",
      projectName: "Social App",
      tool: "HTML/CSS/JAVASCRIPT",
      category: "HTML/CSS/JAVASCRIPT",
    },
    {
      link: "https://tesla-clone-e986b.web.app/",
      image: "portfolio/tesla.png",
      projectName: "Tesla Website Clone",
      tool: "ReactJs",
      category: "ReactJs",
    },
    {
      link: "https://google-clone-nine-gray.vercel.app/",
      image: "portfolio/google.png",
      projectName: "Google Search Clone",
      tool: "ReactJs/NextJS",
      category: "ReactJs",
    },
    {
      link: "https://instagram-clone-alpha-wheat.vercel.app/",
      image: "portfolio/instagram.png",
      projectName: "Instagram Clone",
      tool: "ReactJs/NextJs",
      category: "ReactJs",
    },
    {
      link: "https://movie-database-sand-eta.vercel.app/",
      image: "portfolio/movie.png",
      projectName: "Movie Database IMDB Clone",
      tool: "ReactJs/NextJs",
      category: "ReactJs",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="lg:max-w-6xl sm:max-w-2xl max-w-xs mx-auto mt-36" id="work">
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
      <div className="sm:flex sm:items-center sm:justify-around font-rubik mt-12">
        <h2
          onClick={() => handleSelectedCategory("All")}
          className={`cursor-pointer hover:text-primary ${
            activeCategory === "All" ? "active-category" : ""
          }`}
        >
          All
        </h2>
        <h2
          onClick={() => handleSelectedCategory("WordPress")}
          className={`cursor-pointer hover:text-primary ${
            activeCategory === "WordPress" ? "active-category" : ""
          }`}
        >
          WordPress
        </h2>
        <h2
          onClick={() => handleSelectedCategory("ReactJs")}
          className={`cursor-pointer hover:text-primary ${
            activeCategory === "ReactJs" ? "active-category" : ""
          }`}
        >
          React/NextJs Projects
        </h2>
        <h2
          onClick={() => handleSelectedCategory("HTML/CSS/JAVASCRIPT")}
          className={`cursor-pointer hover:text-primary ${
            activeCategory === "HTML/CSS/JAVASCRIPT" ? "active-category" : ""
          }`}
        >
          Html/Css/Javascript
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mt-10">
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            link={project.link}
            image={project.image}
            projectName={project.projectName}
            tool={project.tool}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
