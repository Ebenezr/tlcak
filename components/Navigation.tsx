import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-scroll";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative fixed w-full bg-white h-12 border-b-[0.5pt] border-primary-200 flex items-center  px-8 justify-between md:justify-around lg:justify-around  z-50 shadow-md">
      {/* logo */}
      <div>
        <h2 className="font-sans text-primary-300 text-lg font-extrabold tracking-wide ">
          TLCAK
        </h2>
      </div>
      {/* link list */}
      <div className="flex items-center lg:gap-4  md:gap-4 hidden md:block lg:block">
        <span>
          <Link
            className={linkStyle}
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            activeClass={activeLink}
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
            offset={-45}
            activeClass={activeLink}
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
            offset={-45}
            activeClass={activeLink}
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
            offset={-45}
            activeClass={activeLink}
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
            offset={-45}
            activeClass={activeLink}
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
            offset={-45}
            activeClass={activeLink}
          >
            Community
          </Link>
        </span>
      </div>
      {/* join us */}
      <div className="hidden md:block lg:block">
        <button className="  bg-white text-primary-300 border-2 border-primary-300  px-4 py-[2px]  rounded-md font-sans hover:text-white hover:bg-primary-300 focus:bg-primary-300 focus:text-white hover:shadow-md hover:shadow-neutral-300">
          Join Us
        </button>
      </div>
      <div className="md:hidden lg:hidden">
        <button
          onClick={toggleMenu}
          className="transition duration-150 ease-in-out z-50"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 transition duration-150 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 transition duration-150 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {/* mobile overlay */}
      <aside className="absolute h-[100vh] w-2/3 bg-primary-100/80 z-30 right-0"></aside>
    </nav>
  );
};

export default Navigation;

const linkStyle =
  "hover:cursor-pointer text-neutral-400 hover:text-primary-200 px-3 focus:text-primary-200 tracking-wide ";

const activeLink =
  "relative text-primary-200 font-bold after:content=[''] after:absolute after:w-full after:bg-primary-200 after:h-[3px] after:mx-auto after:top-8 after:left-1/2 after:-translate-x-1/2 after:transition after:duration-150 after:ease-in-out";
