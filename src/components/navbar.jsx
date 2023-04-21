import React, { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../imgs/thebee logo.png";
import "../css/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const shownavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // we will toggle the responsive_nav once class is invoked.

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
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <RouterLink to="/">
                {" "}
                <img src={Logo} className="logo" alt="HoneyPot" />
              </RouterLink>
            </div>

            <div className="flip-box-back">
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
              spy
              smooth
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </RouterLink>
          <Link
            to="about"
            spy
            smooth
            offset={-130}
            duration={500}
          >
            Work Experience
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={50}
            duration={500}
          >
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
        <button type="button" className="nav-btn" onClick={shownavbar}>

          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
