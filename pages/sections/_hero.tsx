import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|Android|iPad/i.test(navigator.userAgent));
    setIsDesktop(/Windows|Mac|Linux/i.test(navigator.userAgent));
  }, []);
  return (
    <section
      className=" relative h-auto pb-10 pt-20 relative lg:h-[100vh] bg-gray-900"
      id="hero"
    >
      <div className="px-8 my-2 mt-10 ">
        <div className="md:w-1/2  lg:w-1/3 mx-auto lg:absolute lg:left-1/2 lg:top-1/3 lg:-translate-x-1/2">
          <Image
            src={logo}
            alt="TLCAK"
            className="object-cover "
            sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="flex gap-3 justify-center lg:absolute lg:-mt-6 lg:left-1/2 lg:top-2/3 lg:-translate-x-1/3 mt-6">
          <button className="bg-accent px-6 rounded-sm py-2 sans font-semibold hover:bg-white focus:bg-white">
            WATCH MESSAGES
          </button>
        </div>
        {!isMobile ? (
          <div
            className={`absolute animate-bounce left-1/2 -translate-x-1/2 bottom-0 mb-16 ${
              isMobile ? "hidden" : "block"
            }`}
          >
            <button className="hover:bg-accent focus:bg-accent bg-white h-12 w-12 grid place-items-center rounded-full">
              <Link
                className=""
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-45}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
