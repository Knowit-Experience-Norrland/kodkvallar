import React from "react";
import NewsletterSignupComp from "../NewsletterSignup/NewsletterSignupComp";
import { Link } from "react-router-dom";
import {RiLinkedinBoxLine, RiFacebookBoxLine, RiInstagramLine} from "react-icons/ri";
import LogoWhite from "../../media/logo-white.svg";

// footer component
const FooterComp = () => {
  return (
    <div>
      <NewsletterSignupComp />
      <footer>
        <div className="footer-links">
          <div className="footer-links-socials">
            <a href="https://www.linkedin.com/in/katarinabjuhr/" target="_blank" rel="noopener noreferrer" title={"LinkedIn"}>
              <RiLinkedinBoxLine />
            </a>
            <a href="https://www.instagram.com/weareknowit/" target="_blank" rel="noopener noreferrer"  title={"Instagram"}>
            
              <RiInstagramLine />
            </a>
            <a href="https://www.facebook.com/weareknowit" target="_blank" rel="noopener noreferrer" title={"Facebook"}>
              <RiFacebookBoxLine />
            </a>
          </div>
          <div className="footer-contact">
            <p>© 2023 Knowit Experience Norrland</p>
            <a href="mailto:katarina.bjuhr@knowit.se">katarina.bjuhr@knowit.se</a>
            <p>Västra Norrlandsgatan 29, Umeå </p>
          </div>
          <Link to="/">
            <img
              src={LogoWhite}
              alt="Knowit Experience"
              className="footer-logo"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
