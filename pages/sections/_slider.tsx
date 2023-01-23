import React from "react";
import ImageSlider from "../../components/ImageSlider";

const Slider = () => {
  const slides = [
    { url: "http://localhost:3000/church.jpg", title: "church" },
    { url: "http://localhost:3000/hospitality.png", title: "hospitality" },
    { url: "http://localhost:3000/men.png", title: "church" },
    { url: "http://localhost:3000/praise.png", title: "church" },
    { url: "http://localhost:3000/school.png", title: "church" },
    { url: "http://localhost:3000/pastoral.png", title: "church" },
  ];
  return (
    <section className=" bg-bg" id="gallery">
      <div className="mx-auto w-full lg:h-[45rem] h-72  px-4  md:max-w-2xl lg:max-w-6xl ">
        <h3 className="font-sans font-regular tracking-widest text-center text-lg text-neutral-400 mb-4">
          CHURCH GALLERY
        </h3>
        <div className="h-44 lg:h-[30rem] w-full">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default Slider;
