import React from "react";
import { SocialIcon } from "react-social-icons";

const Service = () => {
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

      <div className="bg-white w-2/3 h-56 mx-auto rounded-md my-4 flex flex-col justify-center items-center gap-3 p-3 shadow-lg">
        <SocialIcon network="facebook" bgColor="#680217" />
        <p className="font-bold text-[15px]">SUNDAY ONLINE SERVICES</p>
        <p className="text-[11px] font-base text-neutral-500">
          Main Service @ 11:00am to 12:50pm
        </p>
        <button className="border-[2px] rounded-md border-primary text-primary py-1 px-5 font-semibold">
          FOLLOW US
        </button>
      </div>
    </section>
  );
};

export default Service;
