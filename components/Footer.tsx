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
      className="relative bg-primary-300 flex flex-col gap-2 justify-center items-center text-center text-white px-4 relative py-12 lg:h-1/2 lg:flex-col lg:justify-between lg:px-6 px-6"
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
        <div className=" lg:w-2/5 md:mx-auto text-left flex flex-col gap-2 mt-6">
          <h4 className="text-2xl font-semibold text-primary-50">
            Contact Information
          </h4>
          <p className="font-normal tracking-wide text-sm font-sans">
            Welcome to our church! A place of peace, hope, and joy for all
            people to grow in their faith and build meaningful relationships. We
            are glad you have joined us. Please reach out if you have any
            questions or need support.
          </p>
          {/*  */}
          <div className="flex gap-3 w-full mt-4 ">
            <span className=" h-12 w-12 bg-primary-50 rounded-full grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-primary-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <div className="flex flex-col ">
              <p className="font-semibold tracking-wide text-sm">Location:</p>
              <p className="font-normal tracking-wider text-sm">
                +254 721 205358
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center w-full mt-2 ">
            <span className=" col-span-1 h-12 w-12 bg-primary-50 rounded-full grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-primary-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <div className="flex flex-col ">
              <p className="font-semibold tracking-wide text-sm"> Email:</p>
              <p className="tracking-wider text-sm">
                truelightchristianassemblykeny@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full mt-2">
            <span className=" h-12 w-12 bg-primary-50 rounded-full grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-primary-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </span>
            <div className="flex flex-col">
              <p className="font-semibold tracking-wide text-sm">Call:</p>
              <p className="font-normal tracking-wider text-sm">
                +254 721 205358
              </p>
            </div>
          </div>
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
      </div>
      {/* cp */}
      <div className="mt-6 ">
        <p className="font-light">2023 TLCAK | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
