import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Community = () => {
  return (
    <section
      className="h-auto py-6 border-1 border-green-200 px-4 bg-bg"
      id="community"
    >
      {/* section title */}
      <h3 className="font-regular text-center text-lg text-gray-400">
        OUR COMMUNITY
      </h3>
      {/* header */}
      <div className="text-center">
        <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700">
          Come join our church family from the old to the young
        </p>
      </div>
      {/* image wrapper */}
      {/* cards wrapper */}
      <div className="carousel-wrapper w-full mt-6">
        <Carousel
          autoPlay={true}
          centerMode={true}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={true}
          centerSlidePercentage={100}
          interval={5000}
          transitionTime={1000}
          showStatus={false}
          showArrows={false}
          useKeyboardArrows={true}
          className=" flex flex-col w-full mx-auto h-[30rem] "
        >
          {/* card */}
          <div className="flex flex-col h-5/6 gap-4 py-4 bg-white px-2 rounded-md">
            {/* image wrapper */}
            <div className="w-full h-56 bg-gray-600 rounded-md"></div>
            <h2 className="text-left font-bold tracking-wide">
              Children&apos;s Worship
            </h2>
            <p className="text-left">
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className="flex flex-start">
              <button className="border-2 border-primary px-6 py-[1px] rounded-md text-primary">
                Join
              </button>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col h-5/6 gap-4 py-4 bg-white px-2 rounded-md">
            {/* image wrapper */}
            <div className="w-full h-56 bg-gray-600 rounded-md"></div>
            <h2 className="text-left font-bold tracking-wide">
              Youth&apos;s Worship
            </h2>
            <p className="text-left">
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className="flex flex-start">
              <button className="border-2 border-primary px-6 py-[1px] rounded-md text-primary">
                Join
              </button>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col h-5/6 gap-4 py-4 bg-white px-2 rounded-md">
            {/* image wrapper */}
            <div className="w-full h-56 bg-gray-600 rounded-md"></div>
            <h2 className="text-left font-bold tracking-wide">
              Women&apos;s Worship
            </h2>
            <p className="text-left">
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className="flex flex-start">
              <button className="border-2 border-primary px-6 py-[1px] rounded-md text-primary">
                Join
              </button>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col h-5/6 gap-4 py-4 bg-white px-2 rounded-md">
            {/* image wrapper */}
            <div className="w-full h-56 bg-gray-600 rounded-md"></div>
            <h2 className="text-left font-bold tracking-wide">
              Men&apos;s Worship
            </h2>
            <p className="text-left">
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className="flex flex-start">
              <button className="border-2 border-primary px-6 py-[1px] rounded-md text-primary">
                Join
              </button>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col h-5/6 gap-4 py-4 bg-white px-2 rounded-md">
            {/* image wrapper */}
            <div className="w-full h-56 bg-gray-600 rounded-md"></div>
            <h2 className="text-left font-bold tracking-wide">
              Praise and Worship
            </h2>
            <p className="text-left">
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className="flex flex-start">
              <button className="border-2 border-primary px-6 py-[1px] rounded-md text-primary">
                Join
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Community;
