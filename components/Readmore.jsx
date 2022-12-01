import React, { useState } from "react";
export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="hidden lg:block text-justify">{text}</p>
      <p className="text-sm text-justify lg:hidden">
        {isReadMore ? text.slice(0, 220) : text}
        <span
          onClick={toggleReadMore}
          className="text-neutral-700 cursor-pointer font-bold lg:hidden"
        >
          {isReadMore ? "  ...read more" : "  show less"}
        </span>
      </p>
    </>
  );
};
