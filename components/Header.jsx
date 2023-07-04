"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkMode from "./DarkMode";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-2 lg:max-w-6xl sm:max-w-2xl max-w-xs mx-auto px-2">
        <div className="sm:flex items-center gap-4 hidden">
          <div className="flex items-center gap-1">
            <AiOutlinePhone className="contact__icon" />
            <Link href="tel:9779806722179" className="contact__details">
              +9779806722179
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineMail className="contact__icon" />
            <Link
              href="mailto:mohangrg2030@gmail.com"
              className="contact__details"
            >
              mohangrg2030@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <CiLocationOn className="contact__icon" />
            <p className="contact__details">Pokhara-10, Kaski, Nepal</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xl ml-2">
          <DarkMode />
          <Link href="https://www.instagram.com/itsmohangurung/">
            <AiOutlineInstagram className="social__icon" />
          </Link>
          <Link href="https://github.com/mohangrg2018">
            <AiOutlineGithub className="social__icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/mohan-gurung-742611207/">
            <AiOutlineLinkedin className="social__icon" />
          </Link>
          <Link href="https://twitter.com/mohangu46803039">
            <AiFillTwitterCircle className="social__icon" />
          </Link>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="flex items-center justify-between lg:max-w-6xl sm:max-w-2xl max-w-md mx-auto sm:px-2">
        <Link href="/">
          <img src="mohan_logo.png" alt="Logo" />
        </Link>
        <div
          className={`${
            open
              ? "flex flex-col absolute top-[80%] z-10 bg-gray-100"
              : "hidden"
          } sm:inline-block sm:bg-transparent`}
        >
          <Link href="/" className="nav__link">
            Home
          </Link>
          <Link href="#about" className="nav__link">
            About Me
          </Link>
          <Link href="#work" className="nav__link">
            Works
          </Link>
          <Link href="#contact" className="nav__link">
            Contact
          </Link>
          <Link
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 border border-primary text-primary ml-5 hover:bg-primary hover:text-white"
          >
            HIRE ME
          </Link>
        </div>
        {open ? (
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-2xl sm:hidden cursor-pointer mr-2"
          />
        ) : (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-2xl sm:hidden cursor-pointer mr-2"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
