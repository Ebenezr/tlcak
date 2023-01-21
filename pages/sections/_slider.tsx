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
    <div className="mx-auto w-full lg:h-[45rem] h-auto py-10 px-4  md:max-w-2xl lg:max-w-6xl ">
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Slider;
