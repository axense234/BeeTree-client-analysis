import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="row-main" id="contact">
        <div className="header">
          <p>
            Feel free to Reach me in any of the following links or contacts.
          </p>
        </div>

        <div className="contact">
          <div className="reach">
            <p>Reach me on:</p>
            <p>
              <FaPhone /> Contact:<a href="tel:+254721781532">+254721781532</a>
            </p>

            <p>
              <FaEnvelope /> Email:Info@honeypot.com
            </p>

            <ReactWhatsapp
              number="+254721781532"
              className="whatsapp"
              message="Hello, Inquiry of Bee-hive!"
            >
              <p>
                <FaWhatsapp /> Whatsapp
              </p>
            </ReactWhatsapp>
          </div>

          <div className="location">
            <p>We are located at:</p>
            <p>Maragua,Muranga Kenya</p>
          </div>
        </div>

        <div className="copy">
          <p className="col-p">
            &copy;Copyright,All rights reserved.{new Date().getFullYear()}
          </p>

          <p className="col-p">
            Developed by <a href="tel:+254791618714">+254791618714.</a> ||{" "}
            <a href="tel:+254796881039">+254796881039.</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
