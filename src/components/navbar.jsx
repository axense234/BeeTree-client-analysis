import React, { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "./thebee logo.png";
import { Link as RouterLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const shownavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  //we will toggle the responsive_nav once class is invoked.

  const [navbarcolor, setNavbarcolor] = useState("#ffc72b");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      setNavbarcolor("#f1b409");
    } else {
      setNavbarcolor("#ffc72b");
    }
  };

  return (
    <>
      <header style={{ backgroundColor: navbarcolor }}>
        <div className="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <RouterLink to="/">
                {" "}
                <img src={Logo} className="logo" alt="HoneyPot" />
              </RouterLink>
            </div>

            <div class="flip-box-back">
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <p>Delivering the best quality hives.</p>
              </RouterLink>
            </div>
          </div>
        </div>

        <nav ref={navRef} className="navref">
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Home
            </Link>
          </RouterLink>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}>
            Work Experience
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            Contact
          </Link>
          <RouterLink to="/login" style={{ textDecoration: "none" }}>
            login
          </RouterLink>

          {/* //smaller screens will close the navbar with this */}
          {/* <button className="nav-btn nav-close-btn" onClick={shownavbar}>
            <FaTimes />
          </button> */}
        </nav>
 
        {/* //smaller screens will open the navigation bar with this */}

        {/* will be the default one on smaller screens */}
        <button className="nav-btn" onClick={shownavbar}>
        
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
