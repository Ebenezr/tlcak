import React from "react";
import Image from "next/image";
import { ReadMore } from "../../components/Readmore";
import church from "../../assets/images/church.jpg";

const About = () => {
  return (
    <section
      className="h-auto py-10 border-1 border-green-200 px-4 bg-bg lg:h-[100vh] mx-auto lg:py-12"
      id="about"
    >
      {/* section title */}
      <h3 className="font-regular font-sans text-center text-lg tracking-widest text-neutral-400">
        ABOUT CHURCH
      </h3>
      {/* header */}
      <div className="text-center">
        <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700">
          “That was the True Light, Which lighteth every man That cometh into
          the world.”
        </p>
        <span className="text-center text-neutral-500 text-sm">John 1:9</span>
      </div>
      {/* image wrapper */}
      <div className="bg-neutral-700 w-full h-42 lg:h-1/2 rounded-md my-4 overflow-hidden">
        <Image
          src={church}
          alt="Vision"
          placeholder="blur"
          className="object-center object-cover"
        />
      </div>
      {/* text content */}
      <ReadMore>{aboutChurch}</ReadMore>
    </section>
  );
};

export default About;
const aboutChurch =
  "True Light Christian Assembly Kenya was founded on January 3rd, 2016. The church started in a two-roomed house which happened to be a residential place of one of the founding members. By March 20th same year the church moved out of the house to a rental classroom where the 1st formal service was conducted. God gave Rev. Lukiri Kennedy the vision of Restoring Lives with the true Word of God, giving hope to many hurting souls who are inwardly dying even though they are in a church group. Along with the assignment to reach out to the uttermost parts of the world with the gospel of truth in missions and church planting.";
