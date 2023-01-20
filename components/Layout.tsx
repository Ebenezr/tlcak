import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface LayoutProps {
  children?: React.ReactElement;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-screen mx-auto z-0">
      <Navigation />
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
