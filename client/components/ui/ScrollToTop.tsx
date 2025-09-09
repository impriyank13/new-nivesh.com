import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // small timeout to allow route content to render
    setTimeout(() => {
      if (hash) {
        // try to scroll to anchor if exists
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0 });
    }, 0);
  }, [pathname, hash]);

  return null;
}
