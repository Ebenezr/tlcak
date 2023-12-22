"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'swiper';
import Autoplay from 'swiper';
import Thumbs from 'swiper';
import FreeMode from 'swiper';
import EffectCreative from 'swiper';
import Keyboard from 'swiper';
import Pagination from 'swiper';
import Navigation from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';
import 'swiper/css/zoom';

import Image from 'next/image';

import styles from '../styles/Home.module.css';

interface ImageObject {
  src: string;
  alt: string;
}

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const images: ImageObject[] = [
    { src: '/church.jpg', alt: 'church' },
    { src: '/hospitality.png', alt: 'hospitality' },
    { src: '/men.png', alt: 'men' },
    { src: '/praise.png', alt: 'praise' },
    { src: '/school.png', alt: 'school' },
    { src: '/pastoral.png', alt: 'pastoral' },
    { src: '/1.png', alt: 'ken/melab' },
    { src: '/2.png', alt: 'ken' },
    { src: '/3.png', alt: 'church3' },
    { src: '/4.png', alt: 'church4' },
    { src: '/5.png', alt: 'church5' },
    { src: '/6.png', alt: 'church6' },
    { src: '/7.png', alt: 'church7' },
    { src: '/8.png', alt: 'church8' },
    { src: '/9.png', alt: 'church9' },
    { src: '/10.png', alt: 'church0' },
    { src: '/19.jpg', alt: 'church19' },
    { src: '/21.JPG', alt: 'church21' },
    { src: '/22.JPG', alt: 'CHURCH22' },
    { src: '/23.JPG', alt: 'church23' },
    { src: '/24.JPG', alt: 'church24' },
    { src: '/25.JPG', alt: 'church25' },
    { src: '/26.JPG', alt: 'church26' },
    { src: '/27.JPG', alt: 'church27' },
    { src: '/28.JPG', alt: 'church28' },
  ];

  return (
    <section className=" bg-white" id="gallery">
      <div className="mx-auto w-full lg:h-[100vh]  md:h-auto h-[28rem] md:mb-12 px-4  md:max-w-2xl lg:max-w-6xl mb-6 py-10">
        <h3 className="font-sans font-regular tracking-widest text-center text-lg text-neutral-500 mb-12">
          CHURCH GALLERY
        </h3>
        <Swiper
          grabCursor={true}
          effect={'creative'}
          keyboard={{
            enabled: true,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          zoom={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          modules={[
            Pagination,
            Navigation,
            Autoplay,
            Thumbs,
            EffectCreative,
            Keyboard,
            Zoom,
          ]}
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
                      placeholder="blur"
                      className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
                      layout="fill"
                      objectFit="cover"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBcYFxcYFxgXFRcXFxUYFxgXFxYYHSggGBolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy8rKy8rKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABIEAACAQMCAwUFBwIFBQEAAAABAhEDEiExBEFRBRMiYXGBkRRCobHBIzNCUrHR4fAkM1JygpLTF2NzsvEWJCUmNFNU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO7/AO7/AO7/AO7/AO7/AO7/AO7/AO7/AO7/AP//Z"
                    />
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Keyboard, Thumbs]}
          className="mySwiper mt-3"
        >
          {images.length > 0
            ? images.map((slide) => (
                <SwiperSlide key={slide.src}>
                  <div className="h-8 lg:h-12 w-24">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      placeholder="blur"
                      className="object-top object-contain imgShadow shadow-inner h-full  w-full h-full "
                      layout="fill"
                      objectFit="cover"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBcYFxcYFxgXFRcXFxUYFxgXFxYYHSggGBolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy8rKy8rKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABIEAACAQMCAwUFBwIFBQEAAAABAhEDEiExBEFRBRMiYXGBkRRCobHBIzNCUrHR4fAkM1JygpLTF2NzsvEWJCUmNFNU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO7/AO7/AO7/AO7/AO7/AO7/AO7/AO7/AO7/AP//Z"
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
export default Gallery;

const cardStyle = 'h-56 lg:h-[35rem] md:h-[20rem] w-full  bg-white';
