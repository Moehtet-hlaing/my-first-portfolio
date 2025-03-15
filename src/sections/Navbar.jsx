import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 useEffect(() => {
  const handleResize = () => {
    if(window.innerWidth >= 768){
      setIsOpen(true);
  }else{
    setIsOpen(false);
  }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
      
  return () => {
    window.removeEventListener("resize", handleResize)
  }
 }, [])

  return (
    <nav className="container mx-auto max-w-[1200px] sticky top-5 z-10">
      <div className=" flex items-center justify-between bg-white/25 rounded-full border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* logo */}
        <img src={logo} alt="logo" className="h-9 ml-6 -mb-1" />

        {/* hamburger icon */}
        <button
          className=" block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            {
              isOpen ? (
                <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d= "M6 18L18 6M6 6l12 12"
            /> 
              ) :
              (<path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d= "M4 6h16M4 12h16m-7 6h7"
            />)
            }
          </svg>
         

        </button>

        {/* nav links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={item.offset}
                className="menu-item "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* hire me btn */}
        <button className=" hidden md:block h-12 px-9 bg-gradient-primary font-medium text-[15px] text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
