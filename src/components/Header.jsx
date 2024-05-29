import React, { useState } from "react";
import { ImBehance2 } from "react-icons/im";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import "./Home.jsx";
const Header = () => {
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "Service", link: "/Service" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
  ];

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shaddow-md w-full fixed top-0 left-0">
      <div
        className="md:px-10 py-2 md:py-4 px-7  md:flex justify-between 
      bg-slate-600 "
      >
        {/* nav logo here */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <ImBehance2 className="w-7 h-7 opacity-65 text-red-800" />
          <span className="items-center font-bold text-white">NavBar</span>
        </div>
        {/* menu icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 cursor-pointer absolute right-8 top-6 md:hidden"
        >
          {isOpen ? <FaXmark /> : <HiBars3BottomRight />}
        </div>
        {/* nav link here */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:pl-0 pl-9 md:z-auto z-[-1]
        left-0 w-full md:w-auto  transition-all  duration-500 ease-in ${
          isOpen ? "top-12" : "top-[-490px] "
        }`}
        >
          {Links.map((li) => (
            <li className="font-semibold my-1 md:my-0 md:ml-8">
              <a href={li.link}>{li.name}</a>
            </li>
          ))}
          <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
