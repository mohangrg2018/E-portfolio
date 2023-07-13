"use client";

import Lottie from "lottie-react";
import Programmer from "../public/about.json";
import Services from "./Services";
import Link from "next/link";

const About = () => {
  return (
    <div className="lg:max-w-6xl sm:max-w-2xl max-w-xs mx-auto" id="about">
      <div className="sm:flex items-center mt-10">
        <div className="sm:w-[50%]">
          <Lottie animationData={Programmer} loop={true} />
        </div>
        <div className="sm:w-[50%]">
          <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-5">
            Introduction
          </h1>
          <p className="uppercase -mt-12 font-bold text-primary">About me</p>
          <h2 className="capitalize font-bold text-[42px] font-play mt-2">
            Failure is the condiment that gives
            <span className="text-primary ml-2">Success</span>
          </h2>
          <p className="font-rubik mt-6 border-l-4 border-primary pl-5">
            I have proficiency in HTML, CSS, JAVASCRIPT and frameworks and
            libraries like REACTJS, NEXTJS, TAILWINDCSS, BOOTSTRAP and so on. I
            keep myself updated with the latest trends and best practices in web
            development.
          </p>
          <Link
            href="https://drive.google.com/file/d/1dmtUy_e4jwgNe2etvkU7Olhh7uL8hVOi/view?usp=sharing"
            type="button"
            className="px-8 py-3 border-2 border-primary text-primary uppercase mt-10 hover:text-white hover:bg-primary"
          >
            Download C.V
          </Link>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default About;
