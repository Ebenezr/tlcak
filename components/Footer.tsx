import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../assets/logo.png";
import Map from "./Map";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-primary-300 flex flex-col gap-2 justify-center items-center text-center text-white px-4 relative py-12 lg:h-1/2 lg:flex-col lg:justify-between lg:px-12"
    >
      {/* logo */}
      <div className="lg:flex-row flex-col lg:mx-auto lg:max-w-7xl md:max-w-2xl flex gap-3 lg:gap-4 lg:justify-between border-b-[0.5px] border-primary-50/50 py-6">
        {/* map */}
        <div className="text-left lg:w-3/5">
          <h4 className="text-2xl mb-4 font-semibold text-primary-50">
            Our Location
          </h4>
          <div className="w-full grid place-item-center">
            <Map />
          </div>
        </div>
        {/* contact info */}
        <div className=" lg:w-1/4 md:mx-auto text-left flex flex-col gap-2 mt-6">
          <h4 className="text-2xl font-semibold text-primary-50">
            Contact Information
          </h4>
          <p className="font-normal tracking-wide text-sm font-sans">
            Welcome to our church! A place of peace, hope, and joy for all
            people to grow in their faith and build meaningful relationships. We
            are glad you have joined us. Please reach out if you have any
            questions or need support.
          </p>
          <p className="font-normal tracking-wide text-sm">
            Contact: +254 721 205358
          </p>
          <p className="font-normal tracking-wide text-sm">
            Email: truelightchristianassemblykeny@gmail.com
          </p>
        </div>
        <div className="flex flex-col lg:w-1/4 md:mx-auto order-1 grow-1 mt-6">
          {/* logo */}
          <div className="px-8 my-2">
            <Image
              src={logo}
              alt="TLCAK"
              className="object-cover md:w-4/5 md:mx-auto lg:w-4/5"
              sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          {/* icons */}
          <div className="px-8 py-3 flex items-center justify-center gap-4 w-full mb-6 lg:mt-4">
            <SocialIcon
              network="twitter"
              bgColor="#fff"
              style={{ height: 40, width: 40 }}
              onClick={() =>
                window.open(
                  `https://web.facebook.com/truelightchristianassemblykenya?_rdc=1&_rdr`,
                  "_blank"
                )
              }
            />

            <SocialIcon
              network="youtube"
              bgColor="#fff"
              style={{ height: 40, width: 40 }}
              onClick={() =>
                window.open(
                  `https://www.youtube.com/@TrueLighterskenya`,
                  "_blank"
                )
              }
            />
            <SocialIcon
              network="instagram"
              bgColor="#fff"
              style={{ height: 40, width: 40 }}
              onClick={() =>
                window.open(
                  `https://web.facebook.com/truelightchristianassemblykenya?_rdc=1&_rdr`,
                  "_blank"
                )
              }
            />
            <SocialIcon
              network="facebook"
              bgColor="#fff"
              style={{ height: 40, width: 40 }}
              onClick={() =>
                window.open(
                  `https://web.facebook.com/truelightchristianassemblykenya?_rdc=1&_rdr`,
                  "_blank"
                )
              }
            />
          </div>
        </div>
        {/* quick links */}
        <div className="lg:w-1/4 lg:order-1 mt-6">
          <h4 className="text-2xl lg:text-left font-semibold text-primary-50">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2 py-2 ">
            <Link
              className="hover:cursor-pointer text-neutral-300 flex no-underline hover:no-underline hover:text-white group"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 group-hover:rotate-90 group-hover:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              Home
            </Link>

            <Link
              className="hover:cursor-pointer font-normal  text-neutral-300 flex no-underline hover:no-underline hover:text-white group"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 group-hover:rotate-90 group-hover:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              About
            </Link>
            <Link
              className="hover:cursor-pointer text-neutral-300 flex no-underline hover:no-underline hover:text-white group"
              to="mission"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 group-hover:rotate-90 group-hover:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              Mission
            </Link>

            <Link
              className="hover:cursor-pointer text-neutral-300 flex no-underline hover:no-underline hover:text-white group"
              to="ken"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 group-hover:rotate-90 group-hover:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              About Ken
            </Link>

            <Link
              className="hover:cursor-pointer text-neutral-300 flex no-underline hover:no-underline hover:text-white group"
              to="service"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 group-hover:rotate-90 group-hover:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              Service
            </Link>

            <Link
              className="hover:cursor-point text-neutral-300 flex no-underline hover:no-underline hover:text-white group"
              to="community"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 duration-150 group-hover:rotate-90 group-hover:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              Community
            </Link>
          </div>
        </div>

        {/* news letter */}
        {/* <div className="mt-3 max-w-lg lg:w-1/3 mx-auto">
          <h4 className="text-2xl font-semibold">Newsletter</h4>
          <p>
            Subscribe to get your weekly word of ecouragement, and word of the
            day
          </p>
          <div className="flex flex-col gap-2 items-center lg:items-start ">
            <input
              type="email"
              placeholder="email"
              className="mt-3 px-3 py-1 rounded-md w-full"
            />
            <button
              type="submit"
              className="bg-white text-primary-300 px-6 py-1 rounded-md text-2xl"
            >
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
      {/* cp */}
      <div className="mt-6 ">
        <p className="font-light">2023 TLCAK | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
