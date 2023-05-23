import React from "react";
import NewsletterSignupComp from "../NewsletterSignup/NewsletterSignupComp";
import { Link } from "react-router-dom";
import LogoWhite from "../../media/logo-white.svg";
import SocialmedaiaLinksComp from "../SocialmediaLinks/SocialmedaiaLinksComp";

// footer component
const FooterComp = () => {
  return (
    <div>
      <NewsletterSignupComp />
      <footer>
        <div className="footer-links">
          <div className="footer-links-socials">
           <SocialmedaiaLinksComp />
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
