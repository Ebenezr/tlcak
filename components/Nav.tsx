import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed h-20  w-screen text-white  flex gap-4 lg:px-10 z-40">
      {/* mobile nav wrapper */}
      <div className="flex items-center justify-between px-4 w-screen bg-neutral-600/50 ">
        <p className="text-2xl font-bold">TLCAK</p>
        <button>
          <MdOutlineMenu className="text-3xl" />
        </button>
      </div>
      {/* desktop nav */}
      <div className="hidden">
        <button>
          <Link
            className="hover:cursor-pointer"
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
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
      </div>
      {/* <Link href="#contact">Contact</Link> */}
    </nav>
  );
};

export default Nav;
