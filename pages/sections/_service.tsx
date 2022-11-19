import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChurch } from "react-icons/fa";

const Service = () => {
  const transitionTimingFunction = "ease-in-out";
  return (
    <section
      className="h-auto py-6 border-1 border-green-200 px-4 bg-bg"
      id="service"
    >
      {/* section title */}
      <h3 className="font-regular text-center text-lg text-gray-400">
        ORDER OF SERVICE
      </h3>
      {/* header */}
      <div className="text-center">
        <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700">
          Join and worship with us.
        </p>
      </div>
      {/* cards wrapper */}
      <div className="w-screen relative ">
        <Carousel
          autoPlay
          centerMode={true}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={true}
          centerSlidePercentage={90}
          interval={5000}
          showStatus={false}
          className="py-3 flex gap-4 flex-col"
        >
          <div className="bg-white w-4/5 h-64 flex-start mx-auto rounded-md my-4 flex flex-col justify-center items-center gap-3 p-3 shadow-lg">
            <FaChurch className="text-4xl text-primary" />
            <p className="font-bold text-[15px]">MID-WEEK SERVICES</p>
            <p className="text-[11px] font-base text-neutral-500">
              Wednesday @ 5:30pm to 7:00pm
            </p>
            <p className="text-[11px] font-base text-neutral-500 flex-1">
              Kesha first Friday of every month
            </p>
            <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-semibold">
              VIEW LOCATION
            </button>
          </div>

          <div className="bg-white w-4/5  h-64  mx-auto rounded-md my-4 flex flex-col justify-center items-center gap-3 p-3 shadow-lg">
            <SocialIcon network="facebook" bgColor="#680217" />
            <p className="font-bold text-[15px]">SUNDAY ONLINE SERVICES</p>
            <p className="text-[11px] font-base text-neutral-500 flex-1">
              Main Service @ 11:00am to 12:50pm
            </p>
            <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-semibold">
              FOLLOW US
            </button>
          </div>
          <div className="bg-white w-4/5 h-64  mx-auto rounded-md my-4 flex flex-col justify-center items-center gap-3 p-3 shadow-lg">
            <FaChurch className="text-4xl text-primary" />
            <p className="font-bold text-[15px]">SUNDAY ONLINE SERVICES</p>
            <p className="text-[11px] font-base text-neutral-500">
              Intercessory Prayer @ 9:00am to 10:00am
            </p>
            <p className="text-[11px] font-base text-neutral-500">
              Bible Study @ 10:00am to 10:55am
            </p>
            <p className="text-[11px] font-base text-neutral-500 flex-1">
              Main Service @ 11:00am to 12:50pm
            </p>
            <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-semibold">
              VIEW LOCATION
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Service;
