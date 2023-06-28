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

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-2 lg:max-w-6xl mx-auto px-2">
        <div className="sm:flex items-center gap-4 hidden">
          <div className="flex items-center gap-1">
            <AiOutlinePhone className="contact__icon" />
            <p className="contact__details">+9779806722179</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineMail className="contact__icon" />
            <p className="contact__details">mohangrg2030@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <CiLocationOn className="contact__icon" />
            <p className="contact__details">Pokhara-10, Kaski, Nepal</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xl ml-2">
          <Link href="">
            <AiOutlineInstagram className="social__icon" />
          </Link>
          <Link href="">
            <AiOutlineGithub className="social__icon" />
          </Link>
          <Link href="">
            <AiOutlineLinkedin className="social__icon" />
          </Link>
          <Link href="">
            <AiFillTwitterCircle className="social__icon" />
          </Link>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="flex items-center justify-between lg:max-w-6xl mx-auto sm:px-2">
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
          <Link href="/" className="nav__link">
            About Me
          </Link>
          <Link href="/" className="nav__link">
            Services
          </Link>
          <Link href="/" className="nav__link">
            Works
          </Link>
          <Link href="/" className="nav__link">
            Contact
          </Link>
          <Link href="/" className="nav__link">
            Blogs
          </Link>
          <button
            type="button"
            className="hidden sm:inline-block px-4 py-2 border border-primary text-primary ml-5 hover:bg-primary hover:text-white"
          >
            HIRE ME
          </button>
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
