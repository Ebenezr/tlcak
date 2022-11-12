import React from "react";
//import Link from "next/link";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed h-20 bg-black w-screen text-white flex gap-4 px-10">
      <button>
        <Link
          className="hover:cursor-pointer"
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Home
        </Link>
      </button>

      <button>
        <Link
          className="hover:cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          About
        </Link>
      </button>
      <button>
        <Link
          className="hover:cursor-pointer"
          to="mission"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          //   onSetActive={''}
        >
          Mission
        </Link>
      </button>
      <button>
        <Link
          className="test6"
          to="ken"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Ken
        </Link>
      </button>
      <button>
        <Link
          className="hover:cursor-pointer"
          to="service"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Service
        </Link>
      </button>
      <button>
        <Link
          className="hover:cursor-pointer"
          to="community"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Community
        </Link>
      </button>

      <button>
        <Link
          className="hover:cursor-pointer"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Contact
        </Link>
      </button>
      {/* <Link href="#contact">Contact</Link> */}
    </nav>
  );
};

export default Nav;
