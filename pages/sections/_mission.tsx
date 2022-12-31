import React from "react";
import Image from "next/image";
import mission from "../../assets/images/mission.jpg";
import vision from "../../assets/images/vision.jpg";
import family from "../../assets/images/pastoral.jpg";

const Mission = () => {
  return (
    <section className=" bg-white" id="mission">
      <div className="mx-auto  md:max-w-2xl lg:max-w-6xl flex  flex-col  h-auto py-10 px-4">
        {/* vision wrapper */}
        {/* section title */}
        <h3 className="font-sans font-regular tracking-widest text-center text-lg text-neutral-400">
          OUR MISSION
        </h3>
        {/* header */}
        <div className="text-center">
          <p className="text-center font-spectral text-xl tracking-wide mt-4 whitespace-pre-line font-medium text-neutral-800">
            Vision and mission about our church
          </p>
        </div>
        {/* wrapper */}
        <div className="w-full mt-4 flex flex-col lg:gap-12 md:gap-6  ">
          {/* card */}
          <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2  lg:gap-6 lg:w-full ">
            <p className="font-semibold font-sans text-neutral-700 tracking-wide text-lg lg:hidden">
              Vision
            </p>
            {/* image wrapper */}
            <div className={` ${imageWrapper} `}>
              <Image
                src={vision}
                alt="Vision"
                placeholder="blur"
                className="object-top object-cover imgShadow shadow-inner h-full  "
              />
            </div>
            {/* context */}
            <div className="">
              <p className="font-sans font-bold text-neutral-700 tracking-wide text-lg lg:text-2xl sm:hidden lg:block">
                Vision
              </p>

              <p className="text-neutral-500 text-sm tracking-wide lg:text-lg font-sans leading-6">
                To reach out and Inspire Believers, Influence the Community, and
                Impact the World with the Word of God by Building
                Christ-centred, Bible-based Believers
              </p>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col mt-6 lg:grid lg:grid-cols-2 lg:gap-6">
            <p className="font-bold text-neutral-700 tracking-wide text-lg font-sans lg:hidden">
              Mission
            </p>
            {/* image wrapper */}
            <div className={`lg:order-last ${imageWrapper}`}>
              <Image
                src={mission}
                alt="Vision"
                placeholder="blur"
                className="object-top object-cover h-full imgShadow shadow-inner"
              />
            </div>
            {/* context */}
            <div className=" ">
              <p className="font-semibold tracking-wide text-lg lg:text-2xl sm:hidden lg:block">
                Mission
              </p>

              <p className="text-neutral-600 tracking-wide font-normal font-sans text-sm lg:text-lg leading-6">
                To Seek, Love and Worship God in the Beauty of His Holiness,
                Preach and Teach the Gospel of Truth making Disciples for Christ
                Jesus, Preparing them for His Kingdom.
              </p>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2 lg:gap-6">
            <p className="font-semibold tracking-wide text-neutral-700 text-lg lg:hidden">
              Core Values
            </p>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={family}
                alt="Vision"
                placeholder="blur"
                className="object-top object-cover imgShadow shadow-inner h-full"
              />
            </div>
            {/* context */}
            <div>
              <p className="font-semibold tracking-wide font-sans text-lg lg:text-2xl lg:block sm:hidden">
                Core Values
              </p>
              <p className="font-semibold text-md font-sans tracking-wide text-neutral-600 mt-3 lg:mt-1">
                FAMILY
              </p>
              <p className="text-neutral-600 font-sans tracking-wide leading-6 text-sm mt-1 leading-6">
                We invest in the lives of others, share each other’s burdens and
                rejoice in each other’s victories considering others more
                important than ourselves.
              </p>
              <p className="font-semibold text-md font-sans tracking-wide text-neutral-700 mt-3 lg:mt-1">
                ORDER
              </p>
              <p className="text-neutral-600 font-sans tracking-wide text-sm mt-1 leading-6">
                All things here MUST be done in orderly manner
              </p>
              <p className="font-semibold font-sans tracking-wide text-md text-neutral-700 mt-3 lg:mt-1">
                SPIRITUAL NOURISHMENT
              </p>
              <p className="text-neutral-600 font-sans text-sm mt-1 leading-6">
                We endeavor to teach, preach and apply biblical truth wholly as
                written.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

const imageWrapper =
  "bg-neutral-700 w-full h-48 md:h-60 lg:h-52 rounded-md mt-3 mb-2 lg:mt-0 lg:mb-0 overflow-hidden";
