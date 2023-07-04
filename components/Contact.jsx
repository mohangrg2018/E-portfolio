"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zll1ijc",
        "template_a34wz5s",
        form.current,
        "b6jmytI3uYLIoxinJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="lg:max-w-6xl sm:max-w-2xl max-w-md mx-auto mt-36 p-8 bg-[#0B0D0C] rounded-lg"
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
        <form ref={form} onSubmit={sendEmail} className="sm:w-[50%] mt-7">
          <input
            type="text"
            name="name"
            placeholder="Enter Name*"
            className="w-full px-4 py-4 bg-transparent outline-none border-2 border-gray-300 mb-7"
          />
          <div className="w-full sm:flex items-center gap-2 mb-7">
            <input
              type="email"
              name="email"
              placeholder="Enter Email*"
              className="px-3 py-4 w-full bg-transparent outline-none border-2 border-gray-300"
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Enter Number*"
              className="px-4 py-4 mt-7 sm:mt-0 w-full bg-transparent outline-none border-2 border-gray-300"
            />
          </div>
          <textarea
            name="message"
            className="w-full px-4 py-4 mb-7 bg-transparent outline-none border-2 border-gray-300"
            placeholder="Enter Message*"
            cols="30"
            rows="4"
          ></textarea>
          <button
            onClick={sendEmail}
            type="submit"
            className="px-8 py-3 border-2 border-primary text-primary uppercase hover:text-white hover:bg-primary"
          >
            Submit message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
