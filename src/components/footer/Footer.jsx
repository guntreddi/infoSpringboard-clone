import React from "react";
import "./Fotter.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="footer-main">
      <div className="foote-left">
        <h5>Contact Us</h5>
        <p>Springboard-Support@Infosys.com</p>
      </div>
      <div className="footer-right">
        <div className="social-media-links">
          <div className="social-media-icons">
            <FaFacebook size={25} />
            <RiInstagramFill size={25} />
            <FaTwitter size={25} />
          </div>
          <p>
            * All logos and trademarks are the properties of their respective
            owners
          </p>
        </div>
        <p className="links ">
          Parental/Legal Guardian Privacy Notice Mobile Apps Terms of use Help &
          Contact
        </p>
      </div>
    </div>
    <div className="copywrit-con">
      <p>Copyright
©
2021 Digital Literacy</p>
    </div>
    </div>
  );
}

export default Footer;
