import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Technologies to display in rotating text
  const technologies = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="home"
      name="home"
      className="relative w-full min-h-screen pt-20 pb-16 bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-cyan-500/10"
            initial={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 15 + 15,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10">
        <motion.div
          className="flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">
            <span className="inline-block">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                I&apos;m{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Mahmud
              </motion.span>
            </span>
          </h2>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 md:mt-4 flex flex-wrap items-center gap-x-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span className="text-cyan-500">MERN</span> Stack Developer
            </motion.span>
            <motion.span
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              specializing in
            </motion.span>
          </h2>

          <motion.div
            className="h-10 sm:h-16 text-xl sm:text-3xl font-semibold text-blue-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Typewriter
              options={{
                strings: technologies,
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          <motion.p
            className="text-gray-300 py-4 max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using cutting-edge
            technologies to deliver robust and scalable solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group relative overflow-hidden px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-center sm:justify-start rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                <span className="text-sm md:text-base">View My Work</span>
                <span className="group-hover:translate-x-2 duration-300 ml-1">
                  <MdOutlineKeyboardArrowRight
                    size={20}
                    className="md:text-2xl"
                  />
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-x-1 -bottom-1 h-1 bg-cyan-300/40 rounded-lg blur-sm group-hover:h-1.5 transition-all duration-300"></span>
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              className="group px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-center sm:justify-start rounded-lg border-2 border-cyan-500/30 text-cyan-400 font-medium cursor-pointer backdrop-blur-sm transform transition-all duration-300 hover:border-cyan-500 hover:text-cyan-300 hover:bg-cyan-500/10 hover:scale-105 w-full sm:w-auto"
            >
              <span className="text-sm md:text-base">Contact Me</span>
              <span className="group-hover:translate-x-2 duration-300 transition-transform ml-1">
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className="md:text-2xl"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-70 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm">
              <img
                src="/heroImage.png"
                alt="Mahmud profile"
                className="rounded-xl mx-auto w-full max-w-[300px] md:max-w-[400px] object-cover"
              />
            </div>

            {/* Animated dots */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-cyan-500"
                animate={{
                  x: [0, Math.random() * 40 - 20, 0],
                  y: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${30 + i * 30}%`,
                  right: `${10 + i * 5}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <SocialLinks />
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{
          opacity: { repeat: Infinity, duration: 2 },
          y: { repeat: Infinity, duration: 2 },
        }}
      >
        <span className="text-cyan-500 text-sm mb-2">Scroll Down</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div> */}
    </div>
  );
};

export default Home;
