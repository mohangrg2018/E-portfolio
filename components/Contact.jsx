import React from "react";

const Contact = () => {
  return (
    <div className="lg:max-w-6xl mx-auto mt-36">
      <div>
        <h1 className="text-[45px] uppercase font-extrabold font-rubik opacity-10">
          Contact
        </h1>
        <p className="uppercase -mt-12 font-bold text-primary">Get in touch</p>
        <h2 className="capitalize font-bold text-[42px] font-play mt-2">
          Feel Free to reach &{" "}
          <span className="text-primary ml-2">Contact!</span>
        </h2>
        <p className="font-rubik mt-6 border-l-4 border-primary pl-5">
          If you have any queries then please feel free to reach me using the
          contact form
        </p>
        <div>
          <p>mohangrg2030@gmail.com</p>
        </div>
        <div>
          <p>+977 9806722179</p>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Enter Name*" />
        <div>
          <input type="email" placeholder="Enter Email*" />
          <input type="tel" placeholder="Enter Number*" />
        </div>
        <input type="text" name="" id="" />
      </div>
    </div>
  );
};

export default Contact;
