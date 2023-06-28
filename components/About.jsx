"use client";

import Lottie from "lottie-react";
import Programmer from "../public/about.json";
import Services from "./Services";

const About = () => {
  return (
    <div className="lg:max-w-6xl mx-auto">
      <div className="flex items-center mt-10">
        <div className="w-[50%]">
          <Lottie animationData={Programmer} loop={true} />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-10">
            Introduction
          </h1>
          <p className="uppercase -mt-12 font-bold text-primary">About me</p>
          <h2 className="capitalize font-bold text-[42px] font-play">
            Failure is the condiment that gives
            <span className="text-primary">Success</span>
          </h2>
          <p className="font-rubik mt-6 border-l-4 border-primary pl-5">
            I have proficiency in HTML, CSS, JAVASCRIPT and frameworks and
            libraries like REACTJS, NEXTJS, TAILWINDCSS, BOOTSTRAP and so on. I
            keep myself updated with the latest trends and best practices in web
            development.
          </p>
          <button
            type="button"
            className="px-8 py-3 border-2 border-primary text-primary uppercase mt-10 hover:text-white hover:bg-primary"
          >
            Download C.V
          </button>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default About;
