import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex  w-[90%] md:w-[50%] mx-auto justify-between text-2xl font-semibold py-2  flex-wrap  px-4 z-40  relative font-mono ">
      <div className="hidden md:flex justify-around w-full">
        <Link to="/">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div
        className={`md:hidden ${
          !isOpen ? "hidden" : ""
        }  flex flex-col text-center justify-center space-y-8 z-10 w-[100vw] bg-[#EAE509] h-[95vh] absolute right-0`}
      >
        <Link onClick={() => setIsOpen(!isOpen)} to="/">
          Home
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/project">
          Project
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/about">
          About
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/contact">
          Contact
        </Link>
      </div>
      <div onClick={toggleBar} className="absolute right-0  md:hidden z-30 ">
        {isOpen ? <ImCross /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Sidebar;
