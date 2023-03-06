import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChurch } from "react-icons/fa";
import Link from "next/link";

const Service = () => {
  const transitionTimingFunction = "ease-in-out";
  return (
    <section className="bg-white" id="service">
      <div className="mx-auto  md:max-w-2xl lg:max-w-6xl h-auto py-10 border-1 px-4 mx-auto lg:py-12 lg:h-[100vh]">
        {/* section title */}
        <h3 className="font-regular font-sans text-center text-lg tracking-widest text-neutral-500">
          ORDER OF SERVICE
        </h3>
        {/* header */}
        <div className="text-center mb-12">
          <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700 font-spectral text-xl">
            Join and worship with us.
          </p>
        </div>
        {/* cards wrapper */}
        <div className="carousel-wrapper w-full lg:h-4/5 md:h-3/4 ">
          <Carousel
            swipeScrollTolerance={50}
            preventMovementUntilSwipeScrollTolerance={true}
            autoPlay={true}
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
            className=" flex flex-col w-full mx-auto h-[24rem] lg:h-[35rem] "
          >
            <div className={cardContainer}>
              <div className={cardWrapper}>
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
                <Link
                  href="#footer"
                  className="border-[1px] rounded border-none  text-primary-300 bg-white py-1 px-5 font-sans font-semibold hover:bg-primary-50 hover:text-primary-300 focus:bg-primary-50 focus:text-primary-300"
                >
                  VIEW LOCATION
                </Link>
              </div>
            </div>
            <div className={cardContainer}>
              <div className={cardWrapper}>
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
                <button
                  className="border-[1px] rounded border-none   text-primary-300 bg-white py-1 px-5 font-sans font-semibold hover:bg-primary-50 hover:text-primary-300 focus:bg-primary-50 focus:text-primary-300"
                  onClick={() =>
                    window.open(
                      `https://web.facebook.com/truelightchristianassemblykenya?_rdc=1&_rdr`,
                      "_blank"
                    )
                  }
                >
                  FOLLOW US
                </button>
              </div>
            </div>
            <div className={cardContainer}>
              <div className={cardWrapper}>
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
                <Link
                  href="#footer"
                  className="border-[1px] rounded border-none   text-primary-300 bg-white py-1 px-5 font-sans font-semibold hover:bg-primary-50 hover:text-primary-300 focus:bg-primary-50 focus:text-primary-300"
                >
                  VIEW LOCATION
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Service;

const cardContainer =
  "h-10/12  inline-block mb-8 align-baseline mx-auto shadow-lg overflow-hidden lg:w-2/3 w-5/6  rounded-md";
const cardWrapper =
  "bg-primary-300 mx-auto h-[17rem] lg:h-[27rem]  flex flex-col justify-center items-center gap-3 px-3 py-6  text-white";
