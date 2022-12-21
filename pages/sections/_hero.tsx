import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
const Hero = () => {
  return (
    <section
      className="h-auto pb-10 pt-20 relative lg:h-[100vh] bg-gray-900"
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
        <div className="flex gap-3 justify-center lg:absolute lg:-mt-8 lg:left-1/2 lg:top-2/3 lg:-translate-x-1/3 mt-8">
          <button className="bg-accent px-6 rounded-md py-1 font-semibold">
            Im new
          </button>
          <button className="border-[1px] text-accent border-accent px-6 rounded-md py-1 font-semibold">
            Sermons
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
