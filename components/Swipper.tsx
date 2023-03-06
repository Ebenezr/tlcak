import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Thumbs, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import Image from "next/image";

import styles from "../styles/Home.module.css";

interface ImageObject {
  src: string;
  alt: string;
}
interface SwiperProps {}
const Swipper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const images: ImageObject[] = [
    { src: "/church.jpg", alt: "church" },
    { src: "/hospitality.png", alt: "hospitality" },
    { src: "/men.png", alt: "men" },
    { src: "/praise.png", alt: "praise" },
    { src: "/school.png", alt: "school" },
    { src: "/pastoral.png", alt: "pastoral" },
    { src: "/1.png", alt: "church" },
    { src: "/2.png", alt: "church" },
    { src: "/3.png", alt: "church" },
    { src: "/4.png", alt: "church" },
    { src: "/5.png", alt: "church" },
    { src: "/6.png", alt: "church" },
    { src: "/7.png", alt: "church" },
    { src: "/8.png", alt: "church" },
    { src: "/9.png", alt: "church" },
    { src: "/10.jpg", alt: "church" },
    { src: "/11.jpg", alt: "church" },
    { src: "/12.jpg", alt: "church" },
    { src: "/13.jpg", alt: "church" },
    { src: "/14.jpg", alt: "church" },
    { src: "/15.jpg", alt: "church" },
    { src: "/16.jpg", alt: "church" },
    { src: "/17.jpg", alt: "church" },
    { src: "/18.jpg", alt: "church" },
    { src: "/19.jpg", alt: "church" },
    { src: "/20.jpg", alt: "church" },
    { src: "/21.jpg", alt: "church" },
    { src: "/22.jpg", alt: "church" },
    { src: "/23.jpg", alt: "church" },
    { src: "/24.jpg", alt: "church" },
    { src: "/25.jpg", alt: "church" },
    { src: "/26.jpg", alt: "church" },
  ];

  return (
    <section className=" bg-white" id="gallery">
      <div className="mx-auto w-full lg:h-[100vh]  md:h-auto h-[28rem] md:mb-12 px-4  md:max-w-2xl lg:max-w-6xl mb-6 py-10">
        <h3 className="font-sans font-regular tracking-widest text-center text-lg text-neutral-400 mb-12">
          CHURCH GALLERY
        </h3>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          modules={[Pagination, Navigation, Autoplay, Thumbs]}
          className={`mySwiper2 ${styles.swiper}`}
        >
          {images.length > 0
            ? images.map((slide) => (
                <SwiperSlide
                  key={slide.src}
                  className="rounded-md overflow-hidden"
                >
                  <div className={cardStyle}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      // placeholder="blur"
                      className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-3"
        >
          {images.length > 0
            ? images.map((slide) => (
                <SwiperSlide key={slide.src}>
                  <div className="h-8 lg:h-12 w-24">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      // placeholder="blur"
                      className="object-top object-contain imgShadow shadow-inner h-full  w-full h-full "
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  );
};
export default Swipper;

const cardStyle = "h-56 lg:h-[35rem] md:h-[20rem] w-full  bg-white";
