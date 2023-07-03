import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="lg:max-w-6xl sm:max-w-2xl max-w-md mx-auto mt-36 p-8 bg-gray-700 rounded-lg"
      id="contact"
    >
      <div className="sm:flex items-center">
        <div className="sm:w-[50%] text-white">
          <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-5">
            Contact
          </h1>
          <p className="uppercase -mt-12 font-bold text-primary">
            Get in touch
          </p>
          <h2 className="capitalize font-bold text-[42px] font-play mt-2">
            Feel Free to reach &
            <span className="text-primary ml-2">Contact!</span>
          </h2>
          <p className="font-rubik mt-6 border-l-4 border-primary pl-5">
            If you have any queries then please feel free to reach me using the
            contact form
          </p>
          <Link
            href="mailto:mohangrg2030@gmail.com"
            className="font-rubik flex items-center gap-4 mt-10"
          >
            <AiOutlineMail className="text-2xl" />
            <p>mohangrg2030@gmail.com</p>
          </Link>
          <Link
            href="tel:+9779806722179"
            className="font-rubik flex items-center gap-4 mt-5"
          >
            <AiOutlinePhone className="text-2xl" />
            <p>+977 9806722179</p>
          </Link>
        </div>
        <div className="sm:w-[50%] mt-7">
          <input
            type="text"
            placeholder="Enter Name*"
            className="w-full px-4 py-4 bg-transparent outline-none border-2 border-gray-300 mb-7"
          />
          <div className="w-full sm:flex items-center gap-2 mb-7">
            <input
              type="email"
              placeholder="Enter Email*"
              className="px-3 py-4 w-full bg-transparent outline-none border-2 border-gray-300"
            />
            <input
              type="tel"
              placeholder="Enter Number*"
              className="px-4 py-4 mt-7 sm:mt-0 w-full bg-transparent outline-none border-2 border-gray-300"
            />
          </div>
          <textarea
            className="w-full px-4 py-4 mb-7 bg-transparent outline-none border-2 border-gray-300"
            placeholder="Enter Message*"
            cols="30"
            rows="4"
          ></textarea>
          <button
            type="button"
            className="px-8 py-3 border-2 border-primary text-primary uppercase hover:text-white hover:bg-primary"
          >
            Submit message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
