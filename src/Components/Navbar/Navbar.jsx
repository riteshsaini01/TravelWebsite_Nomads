import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";


import logo from "../../Assets/logo.svg"; 

import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");

  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <li className="navList">
          <div className="logoDiv">
            <img src={logo} alt="Nomads Logo" className="logoImage" /> 
          </div>
        </li>
      </Link>

      <div className={navBar}>
        <ul>
          <Link to="destination" spy={true} smooth={true} offset={-70} duration={500}>
            <li className="navList">Destination</li>
          </Link>
          <Link to="footer" spy={true} smooth={true} offset={-70} duration={500}>
            <li className="navList">About Us</li>
          </Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
            <li className="navList">Testimonial</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <li className="navList">Contact</li>
          </Link>
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      <button 
        className="signInBin btn" 
        onClick={() => window.location.href = "https://ai-trip-planner-ochre.vercel.app/"}
      >
        AI Trip Planner
      </button>

      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
