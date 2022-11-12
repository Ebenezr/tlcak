import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // this is function that will scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button onClick={scrollToTop}>Top</button>
      footer
    </div>
  );
};

export default Footer;
