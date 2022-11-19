import React from "react";

const Community = () => {
  return (
    <section
      className="h-auto py-6 border-1 border-green-200 px-4"
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
      <div className="bg-neutral-700 w-full h-56 rounded-md my-4"></div>
    </section>
  );
};

export default Community;
