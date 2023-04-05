import React from "react";
import NewsletterSignupComp from "../NewsletterSignup/NewsletterSignupComp";
import { Link } from "react-router-dom";
import {RiLinkedinBoxLine, RiFacebookBoxLine, RiInstagramLine} from "react-icons/ri";

// footer component
const FooterComp = () => {
  return (
    <div>
      <NewsletterSignupComp />
      <footer>
        <div className="footer-links">
          <div className="footer-links-socials">
            <a href="/" target="_blank" rel="noreferrer" title={"LinkedIn"}>
              <RiLinkedinBoxLine />
            </a>
            <a href="/" target="_blank" rel="noreferrer" title={"Instagram"}>
              <RiInstagramLine />
            </a>
            <a href="/" target="_blank" rel="noreferrer" title={"Facebook"}>
              <RiFacebookBoxLine />
            </a>
          </div>
          <div className="footer-contact">
            <p>© 2023 Knowit Experience Norrland</p>
            <a href="mailto:info@knowit.se">info@knowit.se</a>
            <p>Västra Norrlandsgatan 29, Umeå </p>
          </div>
          <Link to="/">
            <img
              src="../images/logo-white.svg"
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
