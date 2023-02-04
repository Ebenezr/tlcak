import Image from "next/image";
import ken from "../../assets/images/ken.jpg";
import { useEffect, useState } from "react";
const Ken = () => {
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
    <section className=" bg-bg lg:h-[100vh] " id="ken">
      <div className="mx-auto  md:max-w-2xl lg:max-w-6xl h-auto py-10 border-1 px-4 mx-auto lg:py-12 lg:h-[100vh]">
        {/* section title */}
        <h3 className="font-regular text-center text-lg text-gray-400 font-sans tracking-widest ">
          ABOUT KEN
        </h3>
        {/* header */}
        <div className="text-center">
          <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-800 font-spectral tracking-wide text-xl">
            Rev. Lukiri Kennedy
          </p>
        </div>
        {/* content wrapper */}
        <div className="grid  lg:grid-cols-2 lg:mt-4  lg:h-4/5">
          {/* image wrapper */}

          <div className="grid md:place-items-center lg:place-items-center">
            <div className="bg-primary-300 mx-auto w-[8.5rem] lg:w-72 h-[8.5rem] lg:h-72 grid place-items-center rounded-full">
              <div className="bg-white mx-auto w-32 h-32 lg:w-64 lg:h-64 shadow-inner rounded-full  overflow-hidden">
                <Image
                  src={ken}
                  alt="Rev"
                  placeholder="blur"
                  className="object-fill h-full shadow-inner shadow-md w-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:grid lg:place-items-center  md:my-auto h-full ">
            {/* text content */}

            {!isMobile && (
              <p
                className={` text-neutral-600 leading-6 text-justify lg:block ${
                  isMobile ? "hidden" : "block"
                }`}
              >
                {aboutKen}
              </p>
            )}

            <p
              className={` text-neutral-600 text-sm tracking-wide leading-6 text-justify lg:hidden`}
            >
              {isReadMore ? aboutKen.slice(0, 220) : aboutKen}
              <span
                onClick={toggleReadMore}
                className="text-neutral-800 cursor-pointer  text-[16px] font-bold tracking-wide "
              >
                {isReadMore ? "  ...read more" : "  show less"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ken;
const aboutKen =
  "Amid youthful age, a young man called to serve God and His people found himself on a crusade ground ready to play football unknown to him, it was the day the lord had made for him to give his life to Jesus Christ in 1992. On January 3rd, 2016, he founded True Light Christian Assembly Kenya. The church started in one of the houses of the then-member. By March 20th same year they moved out of the house to a rental classroom where the 1st legal service was conducted. God gave Rev. Lukiri Kennedy the vision of Restoring Lives through the Word of God along with the assignment to reach out to the uttermost parts of the world through missions and church planting. Rev Lukiri Kennedy is very didactic with a unique anointing to simplify the principles of the Word of God. His incisive command of the scripture allows him to interpret the Word of   God within its context and bring it to life so that it applies to everyday living and is relevant to his audience. Rev Lukiri is supported in ministry by his wife, Melab Lukiri, and their three daughters, Eden, Karlyn, and Favour.";
