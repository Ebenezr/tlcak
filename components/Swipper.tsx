import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface ImageObject {
  src: string;
  alt: string;
}
const Swipper = () => {
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
    { src: "/10.png", alt: "church" },
  ];

  return (
    <section className=" bg-white" id="gallery">
      <div className="mx-auto w-full lg:h-[45rem] h-[22rem] md:mb-12 px-4  md:max-w-2xl lg:max-w-6xl mb-6 py-10">
        <h3 className="font-sans font-regular tracking-widest text-center text-lg text-neutral-400 mb-12">
          CHURCH GALLERY
        </h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/church.jpg"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/hospitality.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/pastoral.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/praise.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/school.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/men.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/1.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/2.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/3.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/4.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/5.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/6.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/7.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/8.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/9.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md overflow-hidden">
            <div className={cardStyle}>
              <Image
                src="/10.png"
                alt="church"
                // placeholder="blur"
                className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Swipper;

//   {
//     images.map((slide) => (
//       <div key={slide.src}>
//         yoo
//         <SwiperSlide>
//           <Image
//             src={slide.src}
//             alt={slide.alt}
//             // placeholder="blur"
//             className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
//             layout="fill"
//             objectFit="cover"
//           />
//         </SwiperSlide>
//       </div>
//     ));
//   }

const cardStyle = "h-56 lg:h-[30rem] md:h-[20rem] w-full  bg-white";
