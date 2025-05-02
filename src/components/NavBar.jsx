import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll event for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "portfolio",
        "education",
        "contact",
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
      icon: "🏠",
    },
    {
      id: 2,
      link: "about",
      icon: "👤",
    },
    {
      id: 3,
      link: "skills",
      icon: "⚙️",
    },
    {
      id: 4,
      link: "portfolio",
      icon: "💼",
    },
    {
      id: 5,
      link: "education",
      icon: "🎓",
    },
    {
      id: 6,
      link: "contact",
      icon: "📬",
    },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex justify-between items-center w-full h-20 px-6 text-white fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold font-signature ml-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            mahmud.dev
          </span>
        </h1>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <motion.ul
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {links.map(({ id, link, icon }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                activeClass="active"
                onSetActive={() => setActiveLink(link)}
                className={`relative px-4 py-2 cursor-pointer capitalize font-medium rounded-full flex items-center gap-1 transition-all duration-300 ${
                  activeLink === link
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="hidden lg:inline">{icon}</span>
                <span>{link}</span>
                {activeLink === link && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Mobile Navigation Toggle Button */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        <AnimatePresence mode="wait">
          {nav ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={30} className="text-cyan-500" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaBars size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden"
          >
            <motion.ul
              className="flex flex-col justify-center items-center h-screen gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {links.map(({ id, link, icon }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 + index * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { delay: 0.05 * index },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                    className="px-4 cursor-pointer capitalize py-4 text-2xl flex items-center justify-center gap-3"
                  >
                    <span className="text-cyan-500">{icon}</span>
                    <span className="text-white hover:text-cyan-500 transition-colors duration-300">
                      {link}
                    </span>
                  </Link>
                  <motion.div
                    className="h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
