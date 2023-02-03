import React, { CSSProperties, useState } from "react";
import Image from "next/image";
interface ImageSliderProps {
  slides: { url: string }[];
}

const slideStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

const rightArrowStyles: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles: CSSProperties = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle: CSSProperties = {
  margin: "15px 3px",

  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div
          onClick={goToPrevious}
          style={leftArrowStyles}
          className="text-primary-50"
        >
          ❰
        </div>
        <div
          onClick={goToNext}
          style={rightArrowStyles}
          className="text-primary-50"
        >
          ❱
        </div>
      </div>
      <div
        // style={slideStylesWidthBackground}
        className="bg-neutral-400 rounded-md overflow-hidden"
        onTouchStart={goToNext}
      >
        <Image
          src={slides[currentIndex].url}
          alt="Gallery"
          // placeholder="blur"
          className="object-center object-cover imgShadow shadow-inner h-full  w-full h-full "
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        style={dotsContainerStyles}
        className="absolute -bottom-4 z-40 left-1/2 -translate-x-1/2"
      >
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={` text-white z-50  `}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
