import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-scroll";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white h-12 flex items-center justify-around z-50">
      {/* logo */}
      <div>
        <h2 className="font-sans text-primary-300 text-lg font-extrabold tracking-wide ">
          TLCAK
        </h2>
      </div>
      {/* link list */}
      <div className="flex items-center gap-3">
        <span>
          <Link
            className={linkStyle}
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            className={linkStyle}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            About
          </Link>
        </span>
        <span>
          <Link
            className={linkStyle}
            to="mission"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            // onSetActive='ddd'
          >
            Mission
          </Link>
        </span>
        <span>
          <Link
            className={linkStyle}
            to="ken"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            About Ken
          </Link>
        </span>
        <span>
          <Link
            className={linkStyle}
            to="service"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Service
          </Link>
        </span>
        <span>
          <Link
            className={linkStyle}
            to="community"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Community
          </Link>
        </span>
        <span>
          <Link
            className={linkStyle}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-10}
          >
            Contact
          </Link>
        </span>
      </div>
      {/* join us */}
      <div>
        <button className="  bg-white text-primary-300 border-2 border-primary-300  px-4 py-[2px]  rounded-md font-sans hover:text-white hover:bg-primary-300 focus:bg-primary-300 focus:text-white hover:shadow-md hover:shadow-neutral-300">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

const linkStyle =
  "hover:cursor-pointer text-neutral-400 hover:text-primary-200  focus:text-primary-200 ";
