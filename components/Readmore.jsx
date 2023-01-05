import React, { useEffect, useState } from "react";
export const ReadMore = ({ children }) => {
  const text = children;
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
    <>
      <p
        className={`leading-6 text-justify ${
          isMobile ? "hidden" : isDesktop ? "block" : "hidden"
        }`}
      >
        {text}
      </p>
      <p
        className={`text-sm tracking-wide leading-6 text-justify ${
          isDesktop ? "hidden" : ""
        }`}
      >
        {isReadMore ? text.slice(0, 220) : text}
        <span
          onClick={toggleReadMore}
          className="text-neutral-700 cursor-pointer font-bold tracking-wide "
        >
          {isReadMore ? "  ...read more" : "  show less"}
        </span>
      </p>
    </>
  );
};
