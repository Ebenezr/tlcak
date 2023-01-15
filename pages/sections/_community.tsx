import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import youth from "../../assets/images/youth.png";
import men from "../../assets/images/men.png";
import praise from "../../assets/images/praise.png";
import school from "../../assets/images/school.png";
import women from "../../assets/images/women.png";
import pastoral from "../../assets/images/pastorial.png";
import hospitality from "../../assets/images/hospitality.png";

const Community = () => {
  return (
    <section className="h-auto " id="community">
      <div className="mx-auto  md:max-w-2xl lg:max-w-6xl h-auto py-10 border-1 px-4 mx-auto lg:py-12 lg:h-[100vh]">
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
            className=" flex flex-col w-full gap-3 mx-auto  h-[35rem] lg:h-[62rem] md:h-[38rem]"
          >
            {/* card */}
            <div className={cardWrapper}>
              {/* image wrapper */}
              <div className={imageWrapper}>
                <Image
                  src={school}
                  alt="school"
                  placeholder="blur"
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Cornerstone Kids</h2>
              <p className={cardParagraph}>
                A fun and safe first step for kids to grow in their faith.
              </p>
              {/*  button wrapper */}
              <div className={buttonWrapper}>
                <button className={button}>Learn More</button>
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
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Youth&apos;s Worship</h2>
              <p className={cardParagraph}>
                Impacting students in their relationship with Jesus.
              </p>
              <div className={buttonWrapper}>
                <button className={button}>Learn More</button>
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
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Women&apos;s Worship</h2>
              <p className={cardParagraph}>
                A nurturing and uplifting environment for women to deepen their
                faith and connect with other believers
              </p>
              <div className={buttonWrapper}>
                <button className={button}>Learn More</button>
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
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Men&apos;s Worship</h2>
              <p className={cardParagraph}>
                Men connecting and growing together.
              </p>
              <div className={buttonWrapper}>
                <button className={button}>Learn More</button>
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
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Praise and Worship</h2>
              <p className={cardParagraph}>
                A dynamic and gifted group of individuals who use their talents
                to lead congregants in powerful and uplifting worship
                experiences.
              </p>
              <div className={buttonWrapper}>
                <button className={button}>Learn More</button>
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
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Pastoral Community</h2>
              <p className={cardParagraph}>
                A dedicated and compassionate team of spiritual leaders who
                guide, support, and encourage the congregation on their faith
                journey.
              </p>
              <div className={buttonWrapper}>
                <button className={button}>Learn More</button>
              </div>
            </div>
            {/* card */}
            <div className={cardWrapper}>
              {/* image wrapper */}
              <div className={imageWrapper}>
                <Image
                  src={hospitality}
                  alt="school"
                  placeholder="blur"
                  className={image}
                />
              </div>
              <h2 className={cardTitle}>Hospitality Community</h2>
              <p className={cardParagraph}>
                A friendly and welcoming community of individuals who create a
                warm and hospitable atmosphere for all members and guests of the
                church.
              </p>
              <div className={buttonWrapper}>
                <button className={button}>See More</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Community;

// card
const cardWrapper =
  "flex flex-col lg:w-2/3 h-full w-[97%] mx-auto py-4 bg-white px-4 rounded-md ";
const imageWrapper =
  "w-full  lg:h-[35rem] h-[12rem] md:h-[25rem] bg-neutral-600 rounded-md overflow-hidden shrink-0";
const cardTitle = "mt-[10px] text-left text-lg font-bold tracking-wide";
const cardParagraph =
  "mt-[12px] text-left tracking-wide font-sans leading-6 text-neutral-600 flex-1";
const buttonWrapper = "mt-[32px] flex flex-start";
const button =
  "border-[1px] border-primary-50 px-8 py-2 text-base font-semibold rounded-md text-primary flex items-center hover:bg-primary-50 focus:bg-primary-50 focus:text-primary-300 hover:text-primary-300";
const image = "object-center object-cover h-full";
