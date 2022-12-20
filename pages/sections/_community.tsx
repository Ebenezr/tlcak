import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import youth from "../../assets/images/youth.jpg";
import men from "../../assets/images/men1.jpg";
import praise from "../../assets/images/praise.jpg";
import school from "../../assets/images/school.jpg";
import women from "../../assets/images/women.jpg";
import pastoral from "../../assets/images/pastoral.jpg";

const Community = () => {
  return (
    <section
      className="h-auto py-10  border-1 border-green-200 px-4 bg-bg lg:h-[100vh]"
      id="community"
    >
      {/* section title */}
      <h3 className="font-regular tracking-widest  text-center text-lg text-neutral-400">
        OUR COMMUNITY
      </h3>
      {/* header */}
      <div className="text-center">
        <p className="text-center mt-4 whitespace-pre-line font-spectral text-xl font-semibold text-neutral-700">
          Come join our church family from the old to the young
        </p>
      </div>
      {/* image wrapper */}
      {/* cards wrapper */}
      <div className="carousel-wrapper w-full mt-6">
        <Carousel
          autoPlay={true}
          centerMode={true}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={true}
          centerSlidePercentage={100}
          interval={5000}
          transitionTime={1000}
          showStatus={false}
          showArrows={false}
          useKeyboardArrows={true}
          className=" flex flex-col w-full mx-auto h-[32rem] lg:h-[40rem]"
        >
          {/* card */}
          <div className={cardWrapper}>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={school}
                alt="school"
                placeholder="blur"
                className="object-center object-cover"
              />
            </div>
            <h2 className={cardTitle}>Children&apos;s Worship</h2>
            <p className={cardParagraph}>
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character
            </p>
            {/* button wrapper */}
            <div className={buttonWrapper}>
              <button className={button}>See More</button>
            </div>
          </div>
          {/* card */}
          <div className={cardWrapper}>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={youth}
                alt="school"
                placeholder="blur"
                className="object-center object-cover"
              />
            </div>
            <h2 className={cardTitle}>Youth&apos;s Worship</h2>
            <p className={cardParagraph}>
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className={buttonWrapper}>
              <button className={button}>See More</button>
            </div>
          </div>
          {/* card */}
          <div className={cardWrapper}>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={women}
                alt="school"
                placeholder="blur"
                className="object-center object-cover"
              />
            </div>
            <h2 className={cardTitle}>Women&apos;s Worship</h2>
            <p className={cardParagraph}>
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className={buttonWrapper}>
              <button className={button}>See More</button>
            </div>
          </div>
          {/* card */}
          <div className={cardWrapper}>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={men}
                alt="school"
                placeholder="blur"
                className="object-center object-cover"
              />
            </div>
            <h2 className={cardTitle}>Men&apos;s Worship</h2>
            <p className={cardParagraph}>
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className={buttonWrapper}>
              <button className={button}>See More</button>
            </div>
          </div>
          {/* card */}
          <div className={cardWrapper}>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={praise}
                alt="school"
                placeholder="blur"
                className="object-center object-cover"
              />
            </div>
            <h2 className={cardTitle}>Praise and Worship</h2>
            <p className={cardParagraph}>
              Children’s worship, or previously called Sunday school, is a
              religious education service every sunday for children’s Worship,
              children are implanted with knowledge and strong character{" "}
            </p>
            <div className={buttonWrapper}>
              <button className={button}>See More</button>
            </div>
          </div>
          {/* card */}
          <div className={cardWrapper}>
            {/* image wrapper */}
            <div className={imageWrapper}>
              <Image
                src={pastoral}
                alt="school"
                placeholder="blur"
                className="object-center object-cover"
              />
            </div>
            <h2 className={cardTitle}>Pastoral</h2>
            <p className={cardParagraph}>Pastoral Community</p>
            <div className={buttonWrapper}>
              <button className={button}>See More</button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Community;

// card
const cardWrapper =
  "flex flex-col lg:w-2/3 h-5/6 mx-auto py-4 bg-white px-4 rounded-md";
const imageWrapper =
  "w-full  lg:h-80 h-56 bg-neutral-600 rounded-md overflow-hidden";
const cardTitle = "mt-[32px] text-left text-xl font-bold tracking-wide";
const cardParagraph =
  "mt-[12px] text-left tracking-wide font-sans leading-6 text-neutral-600";
const buttonWrapper = "mt-[32px] flex flex-start";
const button =
  "border-2 border-primary px-8 py-[1px] text-base font-semibold rounded-md text-primary flex items-center hover:bg-primary focus:bg-primary focus:text-white hover:text-white";
