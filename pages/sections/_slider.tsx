import React from "react";
import ImageSlider from "../../components/ImageSlider";

const Slider = () => {
  const slides = [
    { url: "../../assets/images/church.jpg", title: "church" },
    { url: "../../public/hospitality.png", title: "hospitality" },
    { url: "../../public/men.png", title: "church" },
    { url: "../../public/praise.png", title: "church" },
    { url: "../../public/school.png", title: "church" },
    { url: "../../public/pastoral.png", title: "church" },
    { url: "../../public/1.png", title: "church" },
    { url: "../../public/2.png", title: "church" },
    { url: "../../public/3.png", title: "church" },
    { url: "../../public/4.png", title: "church" },
    { url: "../../public/5.png", title: "church" },
    { url: "../../public/6.png", title: "church" },
    { url: "../../public/7.png", title: "church" },
    { url: "../../public/8.png", title: "church" },
    { url: "../../public/9.png", title: "church" },
    { url: "../../public/10.png", title: "church" },
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
