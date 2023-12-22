"use client"
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
      {!isMobile && <p className={`leading-6 text-justify`}>{text}</p>}
      {!isDesktop && (
        <p className={`text-sm tracking-wide leading-6 text-justify`}>
          {isReadMore ? text.slice(0, 220) : text}
          <span
            onClick={toggleReadMore}
            className="text-neutral-700 cursor-pointer font-bold tracking-wide "
          >
            {isReadMore ? "  ...read more" : "  show less"}
          </span>
        </p>
      )}
    </>
  );
};
