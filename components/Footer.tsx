import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-300 flex flex-col justify-center items-center text-center text-white px-4 relative py-10 lg:h-1/2 lg:flex-col">
      {/* logo */}
      <div className="lg:flex">
        <div className="flex flex-col lg:w-1/3">
          <div className="px-8 my-2">
            <Image
              src={logo}
              alt="TLCAK"
              className="object-cover"
              sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          {/* icons */}
          <div className="px-8 flex items-center justify-between gap-2 w-full mb-6">
            <SocialIcon network="twitter" bgColor="#fff" />
            <SocialIcon network="youtube" bgColor="#fff" />
            <SocialIcon network="instagram" bgColor="#fff" />
            <SocialIcon network="facebook" bgColor="#fff" />
          </div>
        </div>
        {/* quick links */}
        <div className="lg:w-1/3">
          <h4 className="text-2xl font-semibold">Quick Links</h4>
          <div className="flex flex-col ">
            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Home
            </Link>

            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              About
            </Link>
            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="mission"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              //   onSetActive={''}
            >
              Mission
            </Link>

            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="ken"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Ken
            </Link>

            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="service"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Service
            </Link>

            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="community"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Community
            </Link>

            <Link
              className="hover:cursor-pointer hover:underline text-neutral-300"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* news letter */}
        <div className="mt-3 max-w-lg lg:w-1/3 mx-auto">
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
              className="bg-white text-primary px-6 py-1 rounded-md text-2xl"
            >
              Subscribe
            </button>
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
