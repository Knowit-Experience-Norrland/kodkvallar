import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" to scroll to the top of the page when a link is clicked
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}