import React from "react";
import ImageSlider from "../../components/ImageSlider";

const Slider = () => {
  const slides = [
    { url: "/church.jpg", title: "church" },
    { url: "/hospitality.png", title: "hospitality" },
    { url: "/men.png", title: "church" },
    { url: "/praise.png", title: "church" },
    { url: "/school.png", title: "church" },
    { url: "/pastoral.png", title: "church" },
    { url: "/1.png", title: "church" },
    { url: "/2.png", title: "church" },
    { url: "/3.png", title: "church" },
    { url: "/4.png", title: "church" },
    { url: "/5.png", title: "church" },
    { url: "/6.png", title: "church" },
    { url: "/7.png", title: "church" },
    { url: "/8.png", title: "church" },
    { url: "/9.png", title: "church" },
    { url: "/10.png", title: "church" },
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
