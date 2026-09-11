import { useEffect } from "react";

/**
 * Adds `is-visible` to every [data-reveal] element as it enters the viewport.
 * Elements stay revealed once shown.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
