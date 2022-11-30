import React, { useState } from "react";
export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text-sm text-justify ">
      {isReadMore ? text.slice(0, 220) : text}
      <span
        onClick={toggleReadMore}
        className="text-neutral-700 cursor-pointer font-bold "
      >
        {isReadMore ? "  ...read more" : "  show less"}
      </span>
    </p>
  );
};
