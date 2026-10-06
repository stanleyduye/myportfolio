"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** One observer for the site. Content stays visible until enhancement is ready. */
export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    // Read first, then write: no repeated layout while preparing a page.
    const bounds = targets.map(element => element.getBoundingClientRect());
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.dataset.revealState = "visible";
        observer.unobserve(element);
      }
    }, { rootMargin: "0px 0px 48px 0px", threshold: 0 });

    targets.forEach((element, index) => {
      // Never conceal content already on screen, including restored history positions.
      if (element.dataset.revealState || bounds[index].top < window.innerHeight + 48) return;
      element.dataset.revealState = "pending";
      observer.observe(element);
    });

    const revealFocusedContent = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>("[data-reveal]");
      if (!element || element.dataset.revealState !== "pending") return;
      element.dataset.revealState = "complete";
      observer.unobserve(element);
    };
    const finishReveal = (event: TransitionEvent) => {
      if (!(event.target instanceof HTMLElement) || event.propertyName !== "opacity") return;
      if (event.target.dataset.revealState === "visible") event.target.dataset.revealState = "complete";
    };
    const stopMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      targets.forEach(element => { element.dataset.revealState = "complete"; });
    };

    document.addEventListener("focusin", revealFocusedContent);
    document.addEventListener("transitionend", finishReveal);
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", revealFocusedContent);
      document.removeEventListener("transitionend", finishReveal);
      preference.removeEventListener("change", stopMotion);
      targets.forEach(element => { delete element.dataset.revealState; });
    };
  }, [pathname]);

  return null;
}
