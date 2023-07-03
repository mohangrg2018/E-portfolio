import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="lg:max-w-6xl sm:max-w-2xl max-w-md mx-auto my-20 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Link href="https://github.com/mohangrg2018">
          <AiFillGithub className="footer__icon" />
        </Link>
        <Link href="https://www.instagram.com/itsmohangurung/">
          <AiOutlineInstagram className="footer__icon" />
        </Link>
        <Link href="https://www.facebook.com/Devel0per4u/">
          <AiOutlineFacebook className="footer__icon" />
        </Link>
        <Link href="https://www.linkedin.com/feed/">
          <AiOutlineLinkedin className="footer__icon" />
        </Link>
      </div>
      <div>
        <Link href="/">
          <img src="mohan_logo.png" alt="Logo" />
        </Link>
        <p className="-ml-8 -mt-5 italic text-lg">
          Thanks for visiting my portfolio
        </p>
      </div>
      {/* <div>
        <h2>All</h2>
      </div> */}
    </div>
  );
};

export default Footer;
