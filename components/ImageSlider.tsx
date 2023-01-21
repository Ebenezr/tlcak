import React, { useState } from "react";

interface ImageSliderProps {
  slides: Object[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundImage: "url(${slides[currentIndex].url})",
  };
  return (
    <div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
