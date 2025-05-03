import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Check if the path matches the project details route
    if (location.pathname.startsWith("/project/")) {
      window.scrollTo(0, 0);
    }
  }, [location]); // Re-run when the location changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
