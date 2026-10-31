"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scrollToSection = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
};

// Scrolls to a home-page section, navigating back home first when needed
// (Next.js scrolls to the `#id` itself once the home page has rendered)
export const useSectionNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return useCallback(
    (id) => {
      if (pathname === "/") {
        scrollToSection(id);
      } else {
        router.push(`/#${id}`);
      }
    },
    [pathname, router],
  );
};

// Tracks which section is currently crossing the middle of the viewport
export const useActiveSection = (ids) => {
  const pathname = usePathname();
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, pathname]);

  return pathname === "/" ? active : null;
};
