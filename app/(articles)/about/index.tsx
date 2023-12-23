'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import church from '../../../assets/images/church.jpg';

const About = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|Android|iPad/i.test(navigator.userAgent));
    setIsDesktop(/Windows|Mac|Linux/i.test(navigator.userAgent));
  }, []);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <section className=" bg-bg " id="about">
      <div className="mx-auto  md:max-w-2xl lg:max-w-6xl h-auto py-10 border-1 px-4 mx-auto lg:py-12 lg:h-[100vh]">
        {/* section title */}
        <h3 className="font-regular font-sans text-center text-lg tracking-widest text-neutral-500">
          ABOUT CHURCH
        </h3>
        {/* header */}
        <div className="text-center mb-12">
          <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700">
            “That was the True Light, Which lighteth every man That cometh into
            the world.”
          </p>
          <span className="text-center text-neutral-500 text-sm">John 1:9</span>
        </div>
        {/* image wrapper */}
        <div className="bg-neutral-700 w-full h-42 mb-4 lg:h-1/2 rounded-md  overflow-hidden">
          <Image
            src={church}
            alt="Vision"
            placeholder="blur"
            className="object-center object-cover"
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
            loading="lazy"
          />
        </div>
        {/* text content */}
        {/* text content */}

        {!isMobile && (
          <p
            className={`text-neutral-600  leading-6 text-justify lg:block ${
              isMobile ? 'hidden' : 'block'
            }`}
          >
            {aboutChurch}
          </p>
        )}

        <p
          className={`text-neutral-600 text-sm tracking-wide leading-6 text-justify lg:hidden`}
        >
          {isReadMore ? aboutChurch.slice(0, 220) : aboutChurch}
          <span
            onClick={toggleReadMore}
            className="text-neutral-800 cursor-pointer text-[16px] font-bold tracking-wide "
          >
            {isReadMore ? '  ...read more' : '  show less'}
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
const aboutChurch = `True Light Christian Assembly Kenya was founded on January 3rd, 2016. The church started in a two-roomed house which happened to be a residential place of one of the founding members. By March 20th same year the church moved out of the house to a rental classroom where the 1st formal service was conducted. God gave Rev. Lukiri Kennedy the vision of Restoring Lives with the true Word of God, giving hope to many hurting souls who are inwardly dying even though they are in a church group. Along with the assignment to reach out to the uttermost parts of the world with the gospel of truth in missions and church planting.`;
