import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PetzAdopt from "/portfolio/project-1.png";
import StudyBuddy from "/portfolio/project-2.png";
import CraftXtore from "/portfolio/project-3.png";
import ClassyTouch from "../assets/image.png";

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedId, setSelectedId] = useState(null);

  const portfolios = [
    {
      id: 4,
      src: ClassyTouch,
      projectName: "Classy Touch",
      demo: "https://www.classytouchbd.com",
      description: "E-commerce platform for premium fashion products",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
    },
    {
      id: 1,
      src: PetzAdopt,
      projectName: "PetzAdopt",
      demo: "https://petzadopt-7acf4.web.app",
      code: "https://github.com/ferdause-al-mahmud/PetzAdopt",
      description: "Pet adoption platform connecting animals with loving homes",
      tech: ["React", "Node.js", "MongoDB", "Firebase Auth"],
    },
    {
      id: 2,
      src: StudyBuddy,
      projectName: "Study Buddy",
      demo: "https://assignment-hub-e4e39.web.app",
      code: "https://github.com/ferdause-al-mahmud/Assignment-Hub-client",
      description: "Collaborative learning platform for students",
      tech: ["React", "Express", "Node.js", "MongoDB", "Firebase Auth"],
    },
    {
      id: 3,
      src: CraftXtore,
      projectName: "CraftXtore",
      demo: "https://craftxtore.web.app",
      code: "https://github.com/ferdause-al-mahmud/CraftXtore-client",
      description: "Marketplace for handcrafted and artisanal products",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Firebase Auth"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: "#374151",
      color: "#f3f4f6",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-16"
    >
      <div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full">
        <motion.div
          className="pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <p className="text-5xl font-bold inline border-b-4 border-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Projects
          </p>
          <p className="py-6 text-gray-300 text-lg">
            Check out some of my recent work
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolios.map(
            ({ id, src, demo, code, projectName, description, tech }) => (
              <motion.div
                key={id}
                variants={item}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={projectName}
                    className="w-full object-cover h-64 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-gray-200 text-sm">{description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {projectName}
                  </h1>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 justify-between mt-6">
                    <motion.a
                      rel="noreferrer"
                      target="_blank"
                      href={demo}
                      variants={buttonVariants}
                      initial="idle"
                      whileHover="hover"
                      className="px-5 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>

                    {code && (
                      <motion.a
                        rel="noreferrer"
                        target="_blank"
                        href={code}
                        variants={buttonVariants}
                        initial="idle"
                        whileHover="hover"
                        className="px-5 py-2 rounded-lg border border-gray-500/30 bg-gray-700/20 text-gray-300 font-medium flex items-center gap-2"
                      >
                        <span>View Code</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
