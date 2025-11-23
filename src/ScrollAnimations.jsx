import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      el.classList.remove("animate-visible"); // reset when route changes
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]); // Re-run when page route changes

  return null;
}
