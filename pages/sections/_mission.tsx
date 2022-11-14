import React from "react";

const Mission = () => {
  return (
    <section className="h-auto py-6 border-1 border-green-200" id="mission">
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
      {/* card */}
      <div className="flex flex-col mt-4">
        <p className="font-semibold tracking-wide text-lg">Vision</p>
        {/* image wrapper */}
        <div className="bg-neutral-700 w-full h-28 rounded-md my-4"></div>
        {/* context */}
        <p className="text-neutral-600 text-sm">
          To reach out and Inspire Believers, Influence the Community, and
          Impact the World with the Word of God by Building Christ-centred,
          Bible-based Believers
        </p>
      </div>
      {/* card */}
      <div className="flex flex-col mt-4">
        <p className="font-semibold tracking-wide text-lg">Mission</p>
        {/* image wrapper */}
        <div className="bg-neutral-700 w-full h-28 rounded-md my-4"></div>
        {/* context */}
        <p className="text-neutral-600 text-sm">
          To Seek, Love and Worship God in the Beauty of His Holiness, Preach
          and Teach the Gospel of Truth making Disciples for Christ Jesus,
          Preparing them for His Kingdom.
        </p>
      </div>
      {/* card */}
      <div className="flex flex-col mt-4">
        <p className="font-semibold tracking-wide text-lg">Core Values</p>
        {/* image wrapper */}
        <div className="bg-neutral-700 w-full h-28 rounded-md my-4"></div>
        {/* context */}
        <p className="font-semibold text-md text-neutral-700">FAMILY</p>
        <p className="text-neutral-600 text-sm">
          We invest in the lives of others, share each other’s burdens and
          rejoice in each other’s victories considering others more important
          than ourselves.
        </p>
        <p className="font-semibold text-md text-neutral-700">ORDER</p>
        <p className="text-neutral-600 text-sm">
          All things here MUST be done in orderly manner
        </p>
        <p className="font-semibold text-md text-neutral-700">
          SPIRITUAL NOURISHMENT
        </p>
        <p className="text-neutral-600 text-sm">
          We endeavor to teach, preach and apply biblical truth wholly as
          written.
        </p>
      </div>
    </section>
  );
};

export default Mission;
