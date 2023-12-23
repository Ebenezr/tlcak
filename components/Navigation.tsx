import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|Android|iPad/i.test(navigator.userAgent));
    setIsDesktop(/Windows|Mac|Linux/i.test(navigator.userAgent));
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const closeMenu = () => {
    setIsOpen(true);
  };
  return (
    <>
      <nav className="relative sticky top-0 w-full bg-white h-12 border-b-[0.5pt] border-primary-200 flex items-center  px-8 justify-between md:justify-between lg:justify-around  z-20 shadow-md">
        {/* logo */}
        <div>
          <h2 className="font-sans text-primary-300 text-lg font-extrabold tracking-wide ">
            TLCAK
          </h2>
        </div>
        {/* nav items */}
        <div
          className={`flex items-center lg:gap-4  md:gap-4 ${
            isMobile ? "hidden" : "block"
          }`}
        >
          <span>
            <Link
              className={linkStyle}
              to="home"
              href="#home"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
              activeClass={activeLink}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              className={linkStyle}
              to="about"
              href="#about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              isDynamic={true}
              activeClass={activeLink}
            >
              About
            </Link>
          </span>
          <span>
            <Link
              className={linkStyle}
              to="mission"
              href="#mission"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              isDynamic={true}
              activeClass={activeLink}
            >
              Mission
            </Link>
          </span>
          <span>
            <Link
              className={linkStyle}
              to="ken"
              href="#ken"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              isDynamic={true}
              activeClass={activeLink}
            >
              About Ken
            </Link>
          </span>
          <span>
            <Link
              className={linkStyle}
              to="service"
              href="#service"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              isDynamic={true}
              activeClass={activeLink}
            >
              Service
            </Link>
          </span>
          <span>
            <Link
              className={linkStyle}
              to="community"
              href="#community"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              isDynamic={true}
              activeClass={activeLink}
            >
              Community
            </Link>
          </span>
          <span>
            <Link
              className={linkStyle}
              to="gallery"
              href="#gallery"
              spy={true}
              smooth={true}
              duration={500}
              offset={-45}
              isDynamic={true}
              activeClass={activeLink}
            >
              Gallery
            </Link>
          </span>
        </div>
        {/* join us */}
        <div className={`${isMobile ? "hidden" : "block"}`}>
          <button
            onClick={() => router.push("#footer")}
            className="  bg-white text-primary-300 border-2 border-primary-300  px-4 py-[2px]  rounded-md font-sans hover:text-white hover:bg-primary-300 focus:bg-primary-300 focus:text-white hover:shadow-md hover:shadow-neutral-300"
          >
            Contact Us
          </button>
        </div>
        {isMobile ? (
          <div className="z-50">
            <button onClick={toggleMenu} className="" aria-label="menu">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 transition duration-150 ease-in-out text-primary-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        ) : null}
        {/* mobile overlay */}
        {!isOpen ? (
          <AnimatePresence>
            <motion.aside
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`absolute w-full h-[100vh] left-1/2 top-0 -translate-x-1/2 blur-4 bg-primary-300 transparent-50 z-40 transition duration-500 ease-in-out`}
            >
              <div className="flex flex-col  pl-6 py-4 gap-2 border-t-[0.5pt] border-primary-50 mt-12">
                <span onClick={closeMenu}>
                  <Link
                    className={linkStyleMobile}
                    onClick={closeMenu}
                    to="home"
                    href="#home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                    onSetInactive={() => closeMenu}
                  >
                    Home
                  </Link>
                </span>
                <span onClick={closeMenu}>
                  <Link
                    onClick={closeMenu}
                    className={linkStyleMobile}
                    to="about"
                    href="#about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-45}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                  >
                    About
                  </Link>
                </span>
                <span onClick={closeMenu}>
                  <Link
                    className={linkStyleMobile}
                    onClick={closeMenu}
                    to="mission"
                    href="#mission"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-45}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                  >
                    Mission
                  </Link>
                </span>
                <span onClick={closeMenu}>
                  <Link
                    className={linkStyleMobile}
                    onClick={closeMenu}
                    href="#ken"
                    to="ken"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-45}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                  >
                    About Ken
                  </Link>
                </span>
                <span onClick={closeMenu}>
                  <Link
                    className={linkStyleMobile}
                    onClick={closeMenu}
                    to="service"
                    href="#service"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-45}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                  >
                    Service
                  </Link>
                </span>
                <span onClick={closeMenu}>
                  <Link
                    className={linkStyleMobile}
                    onClick={closeMenu}
                    to="community"
                    href="#community"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-45}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                    onSetActive={closeMenu}
                  >
                    Community
                  </Link>
                </span>
                <span onClick={closeMenu}>
                  <Link
                    className={linkStyleMobile}
                    onClick={closeMenu}
                    to="gallery"
                    href="#gallery"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-45}
                    isDynamic={true}
                    activeClass={activeLinkMobile}
                    onSetActive={closeMenu}
                  >
                    Gallery
                  </Link>
                </span>
                <span className="mt-4">
                  <button
                    className="text-accent hover:text-primary-50"
                    onClick={closeMenu}
                  >
                    Close
                  </button>
                </span>
              </div>
            </motion.aside>
          </AnimatePresence>
        ) : null}
      </nav>
    </>
  );
};

export default Navigation;

const linkStyle =
  "hover:cursor-pointer text-neutral-600 hover:text-primary-200 px-3 focus:text-primary-200 tracking-wide no-underline hover:no-underline hover:text-primary-50";

const linkStyleMobile =
  "text-white no-underline hover:no-underline hover:text-primary-50 hover:cursor-pointer";

const activeLink =
  "relative text-primary-200 font-bold after:content=[''] after:absolute after:w-full after:bg-primary-200 after:h-[3px] after:mx-auto after:top-8 after:left-1/2 after:-translate-x-1/2 after:transition after:duration-150 after:ease-in-out";

const activeLinkMobile =
  "no-underline hover:no-underline hover:text-primary-300";
