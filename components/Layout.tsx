import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface Layoutprops {
  children?: React.ReactElement;
}
const Layout: React.FC<Layoutprops> = ({ children }) => {
  // this is function that will scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-screen mx-auto">
      <Nav />
      <main className="flex flex-col">{children}</main>
      <Footer />
      <button
        onClick={scrollToTop}
        className="fixed bg-transparent bottom-3 right-2"
      >
        <FaArrowAltCircleUp className="text-4xl text-neutral-400 mr-2" />
      </button>
    </div>
  );
};

export default Layout;
