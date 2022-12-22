import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChurch } from "react-icons/fa";
import Image from "next/image";

const Service = () => {
  const transitionTimingFunction = "ease-in-out";
  return (
    <section className="h-auto py-10 px-4 bg-white lg:h-[100vh]" id="service">
      <div className="mx-auto  md:max-w-2xl lg:max-w-6xl h-auto py-10 border-1 px-4 mx-auto lg:py-12 lg:h-[100vh]">
        {/* section title */}
        <h3 className="font-regular font-sans text-center text-lg tracking-widest text-gray-400">
          ORDER OF SERVICE
        </h3>
        {/* header */}
        <div className="text-center">
          <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-800 font-spectral text-xl">
            Join and worship with us.
          </p>
        </div>
        {/* cards wrapper */}
        <div className="carousel-wrapper w-full lg:h-3/4 md:h-3/4">
          <Carousel
            // autoPlay={true}
            centerMode={false}
            emulateTouch={true}
            infiniteLoop={true}
            stopOnHover={true}
            centerSlidePercentage={100}
            interval={5000}
            transitionTime={1000}
            showStatus={false}
            showArrows={false}
            useKeyboardArrows={true}
            className=" flex flex-col w-full mx-auto h-[24rem]"
          >
            <div className="bg-primary-300 lg:w-2/3 w-5/6 h-5/6 mx-auto flex-start rounded-md my-4 flex flex-col justify-center items-center gap-3 px-3 py-4 shadow-lg text-white">
              <div className="bg-primary-50 p-3 rounded-full">
                <FaChurch className="text-4xl text-primary-300" />
              </div>
              <p className="font-extrabold text-[15px] lg:text-2xl">
                MID-WEEK SERVICES
              </p>
              <p className="text-[12px] font-semibold text-primary-50 lg:text-xl ">
                Wednesday @ 5:30pm to 7:00pm
              </p>
              <p className="text-[12px] lg:text-xl font-semibold text-primary-50 flex-1">
                Kesha first Friday of every month
              </p>
              <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-sans font-semibold hover:bg-white hover:text-primary-300 focus:bg-white focus:text-primary-300">
                VIEW LOCATION
              </button>
            </div>

            <div className="bg-primary-300 text-white lg:w-2/3 w-5/6 h-5/6 mx-auto rounded-md my-4 flex flex-col justify-center items-center gap-3 px-3 py-4 shadow-lg">
              <div className="bg-primary-50 p-1  rounded-full">
                <SocialIcon
                  network="facebook"
                  bgColor="#FFC9D5"
                  fgColor="#680218"
                />
              </div>
              <p className="font-extrabold font-sans text-lg lg:text-2xl">
                SUNDAY ONLINE SERVICES
              </p>
              <p className="text-[12px] font-semibold text-primary-50 flex-1 lg:text-xl">
                Main Service @ 11:00am to 12:50pm
              </p>
              <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-semibold lg:text-xl hover:bg-white hover:text-primary-300 focus:bg-white focus:text-primary-300">
                FOLLOW US
              </button>
            </div>
            <div className="bg-primary-300 lg:w-2/3 w-5/6 h-5/6 mx-auto rounded-md my-4 flex flex-col justify-center items-center gap-3 px-3 py-6 shadow-lg text-white">
              <div className="bg-primary-50 p-3 rounded-full">
                <FaChurch className="text-4xl text-primary-300   shrink-0" />
              </div>
              <p className="font-extrabold text-lg lg:text-2xl tracking-widest font-sans">
                SUNDAY ONLINE SERVICES
              </p>
              <p className="text-[12px] font-semibold lg:text-xl font-sans tracking-wide text-primary-50">
                Intercessory Prayer @ 9:00am to 10:00am
              </p>
              <p className="text-[12px] font-semibold lg:text-xl tracking-wide font-sans text-primary-50">
                Bible Study @ 10:00am to 10:55am
              </p>
              <p className="text-[12px] font-bold flex-1 lg:text-xl tracking-wide font-sans text-primary-50">
                Main Service @ 11:00am to 12:50pm
              </p>
              <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-semibold hover:bg-white hover:text-primary-300 focus:bg-white focus:text-primary-300">
                VIEW LOCATION
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Service;
