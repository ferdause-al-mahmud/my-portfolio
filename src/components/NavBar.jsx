"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { sections } from "@/data/profile";
import { useActiveSection, useSectionNav } from "@/hooks/useSectionNav";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeLink = useActiveSection(sections);
  const goTo = useSectionNav();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!nav) return;
    const onKeyDown = (e) => e.key === "Escape" && setNav(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [nav]);

  const handleNavigate = (e, link) => {
    e.preventDefault();
    setNav(false);
    goTo(link);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 animate-slide-down transition-colors duration-300 ${
        scrolled || nav
          ? "bg-ink/80 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress */}
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600"
        style={{ scaleX: progress }}
      />

      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#home"
          onClick={(e) => handleNavigate(e, "home")}
          className="group font-mono text-xl font-semibold text-white"
          aria-label="Go to home section"
        >
          <span className="text-cyan-400 transition-colors group-hover:text-blue-400">
            &lt;
          </span>
          mahmud
          <span className="text-cyan-400">.dev</span>
          <span className="text-cyan-400 transition-colors group-hover:text-blue-400">
            /&gt;
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((link) => (
            <li key={link}>
              <Link
                href={`/#${link}`}
                onClick={(e) => handleNavigate(e, link)}
                aria-current={activeLink === link ? "true" : undefined}
                className={`relative isolate block rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors duration-300 ${
                  activeLink === link
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeLink === link && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 -z-10 rounded-full border border-cyan-400/30 bg-cyan-400/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle Button */}
        <button
          type="button"
          onClick={() => setNav(!nav)}
          aria-label={nav ? "Close menu" : "Open menu"}
          aria-expanded={nav}
          className="relative z-10 grid h-11 w-11 place-items-center rounded-xl text-slate-300 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={nav ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {nav ? (
                <FaTimes size={24} className="text-cyan-400" />
              ) : (
                <FaBars size={24} />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Light running along the bottom edge once scrolled */}
      <div
        className={`light-line h-px bg-linear-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-18 h-[calc(100svh-4.5rem)] bg-ink lg:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-4">
              {sections.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.05 + index * 0.06 }}
                >
                  <Link
                    href={`/#${link}`}
                    onClick={(e) => handleNavigate(e, link)}
                    className={`flex items-center gap-3 px-6 py-3 font-display text-3xl font-semibold capitalize transition-colors ${
                      activeLink === link
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-sm text-slate-600">
                      0{index + 1}
                    </span>
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
