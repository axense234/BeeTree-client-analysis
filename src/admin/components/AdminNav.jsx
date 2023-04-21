import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from '../../imgs/thebee logo.png';
import "../../css/AdminNav.css";

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
              <RouterLink to="https://beetree.netlify.app/">

                <img src={Logo} className="logo" alt="HoneyPot" />
              </RouterLink>

            </div>

            <div className="flip-box-back">
              <RouterLink to="/" style={{ textDecoration: "none" }}>

                <p>Delivering the best quality hives.</p>
                <br />
              </RouterLink>

            </div>
          </div>
        </div>

        <div className="header">
          <nav ref={navRef}>
            <Link
              to="details-upload"
              spy
              smooth
              offset={-100}
              duration={500}
            >
              <p className="p-details">Upload details of a Beehive.</p>
            </Link>

            {/* <Link to='about' spy={true} smooth={true} offset={-130} duration={500}>Work Experience</Link>
                  <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link> */}

            {/* //smaller screens will close the navbar with this */}
            <button type="button" className="nav-btn nav-close-btn" onClick={shownavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>

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
