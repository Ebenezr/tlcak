import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface Layoutprops {
  children: React.ReactElement;
}
const Layout: React.FC<Layoutprops> = ({ children }) => {
  return (
    <div className="w-[100vw]">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
