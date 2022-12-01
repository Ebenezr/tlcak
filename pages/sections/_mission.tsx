import React from "react";
import Image from "next/image";
import family from "../../assets/images/family.jpg";
import mission from "../../assets/images/mission.jpg";
import vision from "../../assets/images/vision.jpg";

const Mission = () => {
  return (
    <section
      className="h-auto py-6 border-1 border-green-200 px-4 bg-bg flex flex-col"
      id="mission"
    >
      {/* vision wrapper */}

      {/* section title */}
      <h3 className="font-regular text-center text-lg text-gray-400">
        OUR MISSION
      </h3>
      {/* header */}
      <div className="text-center">
        <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700">
          Vision and mission about our church
        </p>
      </div>
      {/* wrapper */}
      <div className="w-full flex flex-col lg:gap-6 ">
        {/* card */}
        <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2  lg:gap-6 lg:w-full ">
          <p className="font-semibold tracking-wide text-lg lg:hidden">
            Vision
          </p>
          {/* image wrapper */}
          <div className={` ${imageWrapper} `}>
            <Image
              src={vision}
              alt="Vision"
              placeholder="blur"
              className="object-center object-cover "
            />
          </div>
          {/* context */}
          <div className="">
            <p className="font-semibold tracking-wide text-lg lg:text-2xl hidden lg:block">
              Vision
            </p>

            <p className="text-neutral-600 text-sm lg:text-lg">
              To reach out and Inspire Believers, Influence the Community, and
              Impact the World with the Word of God by Building Christ-centred,
              Bible-based Believers
            </p>
          </div>
        </div>
        {/* card */}
        <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2 lg:gap-6">
          <p className="font-semibold tracking-wide text-lg lg:hidden">
            Mission
          </p>
          {/* image wrapper */}
          <div className={`lg:order-last ${imageWrapper}`}>
            <Image
              src={mission}
              alt="Vision"
              placeholder="blur"
              className="object-center object-cover"
            />
          </div>
          {/* context */}
          <div className=" ">
            <p className="font-semibold tracking-wide text-lg lg:text-2xl hidden lg:block">
              Mission
            </p>

            <p className="text-neutral-600 text-sm lg:text-lg">
              To Seek, Love and Worship God in the Beauty of His Holiness,
              Preach and Teach the Gospel of Truth making Disciples for Christ
              Jesus, Preparing them for His Kingdom.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="flex flex-col mt-4 lg:grid lg:grid-cols-2 lg:gap-6">
          <p className="font-semibold tracking-wide text-lg lg:hidden">
            Core Values
          </p>
          {/* image wrapper */}
          <div className={imageWrapper}>
            <Image
              src={family}
              alt="Vision"
              placeholder="blur"
              className="object-center object-cover"
            />
          </div>
          {/* context */}
          <div>
            <p className="font-semibold tracking-wide text-lg lg:text-2xl lg:block hidden">
              Core Values
            </p>
            <p className="font-semibold text-md text-neutral-700 mt-3 lg:mt-1">
              FAMILY
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              We invest in the lives of others, share each other’s burdens and
              rejoice in each other’s victories considering others more
              important than ourselves.
            </p>
            <p className="font-semibold text-md text-neutral-700 mt-3 lg:mt-1">
              ORDER
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              All things here MUST be done in orderly manner
            </p>
            <p className="font-semibold text-md text-neutral-700 mt-3 lg:mt-1">
              SPIRITUAL NOURISHMENT
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              We endeavor to teach, preach and apply biblical truth wholly as
              written.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

const imageWrapper =
  "bg-neutral-700 w-full h-48 lg:h-52 rounded-md mt-3 mb-2 lg:mt-0 lg:mb-0 overflow-hidden";
