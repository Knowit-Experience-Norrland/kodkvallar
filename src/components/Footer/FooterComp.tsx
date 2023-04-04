import React from "react";
import NewsletterSignupComp from "../NewsletterSignup/NewsletterSignupComp";
import { Link } from "react-router-dom";

// footer component
const FooterComp = () => {
  return (
    <footer>
      <NewsletterSignupComp />
      <div className="footer-links">
        <Link to="/">
          <img
            src="../images/logo-white.svg"
            alt="Knowit Experience"
            className="footer-logo"
          />
        </Link>
      </div>
    </footer>
  );
};

export default FooterComp;
