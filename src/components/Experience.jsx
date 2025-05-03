import { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  // Define all technologies with priority levels (1 highest, 3 lowest)
  const techs = [
    {
      id: 1,
      src: "/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
      priority: 1,
    },
    {
      id: 2,
      src: "/ts.png",
      title: "TypeScript",
      style: "shadow-blue-400",
      priority: 1,
    },
    {
      id: 3,
      src: "/react.png",
      title: "React",
      style: "shadow-blue-600",
      priority: 1,
    },
    {
      id: 4,
      src: "/redux.png",
      title: "Redux",
      style: "shadow-purple-500",
      priority: 1,
    },
    {
      id: 5,
      src: "/nextjs.png",
      title: "Next.js",
      style: "shadow-white",
      priority: 1,
    },
    {
      id: 6,
      src: "/tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
      priority: 2,
    },
    {
      id: 7,
      src: "/html.png",
      title: "HTML",
      style: "shadow-orange-500",
      priority: 2,
    },
    {
      id: 8,
      src: "/css.png",
      title: "CSS",
      style: "shadow-blue-500",
      priority: 2,
    },
    {
      id: 9,
      src: "/graphql.png",
      title: "GraphQL",
      style: "shadow-pink-400",
      priority: 2,
    },
    {
      id: 10,
      src: "/mongoose.png",
      title: "Mongoose",
      style: "shadow-green-500",
      priority: 3,
    },
    {
      id: 11,
      src: "/github.png",
      title: "GitHub",
      style: "shadow-gray-400",
      priority: 3,
    },
  ];

  // State for displaying technologies by priority
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ["All", "Primary", "Secondary", "Supporting"];

  // Filter techs based on active category
  const filteredTechs =
    activeCategory === 0
      ? techs
      : techs.filter((tech) => tech.priority === activeCategory);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen pt-16 pb-24"
    >
      <div className="max-w-screen-lg mx-auto py-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="px-2"
        >
          <p className="text-4xl font-bold border-b-4 border-indigo-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6 text-gray-300">
            Technologies I&apos;ve mastered throughout my development journey
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex gap-2 mb-8 flex-wrap px-2">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {filteredTechs.map(({ id, src, title, style }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg ${style} p-6 flex flex-col items-center justify-center`}
            >
              <motion.img
                src={src}
                alt={title}
                className="w-16 h-16 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
              />
              <p className="mt-4 font-semibold">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
