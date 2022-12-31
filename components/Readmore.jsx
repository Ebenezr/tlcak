import React, { useState } from "react";
export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="hidden   leading-6 text-justify ">{text}</p>
      <p className="text-sm tracking-wide leading-6 text-justify ">
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
