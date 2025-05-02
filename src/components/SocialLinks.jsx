import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={24} />
        </>
      ),
      href: "https://www.linkedin.com/in/ferdause-al-mahmud",
      style: "from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300",
      delay: 0.3,
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={24} />
        </>
      ),
      href: "https://github.com/ferdause-al-mahmud",
      style: "from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400",
      delay: 0.5,
    },
    {
      id: 3,
      child: (
        <>
          <FaDownload size={24} /> Resume
        </>
      ),
      href: "/resume.pdf",
      style: "from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300",
      download: true,
      delay: 0.7,
    },
  ];

  return (
    <div className="py-8 px-4 w-full">
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-center text-xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Connect With Me
        </motion.h3>

        <div className="hidden sm:flex justify-center items-center gap-4">
          {links.map(({ id, child, href, style, download, delay }) => (
            <motion.div
              key={id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${
                  style.split(" ")[0]
                } ${
                  style.split(" ")[1]
                } opacity-75 blur-sm group-hover:opacity-100 transition duration-300`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <a
                href={href}
                className={`relative flex items-center justify-between gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r ${style} text-white font-medium shadow-md transition-all duration-300`}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - stacked buttons for small screens */}
        <div className="sm:hidden mt-4 space-y-3">
          {links.map(({ id, href, style, download, delay }) => (
            <motion.div
              key={`mobile-${id}`}
              className="relative group w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2, duration: 0.5 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${
                  style.split(" ")[0]
                } ${
                  style.split(" ")[1]
                } opacity-50 blur-sm group-hover:opacity-90 transition duration-300`}
              />

              <a
                href={href}
                className={`relative flex items-center justify-between gap-2 w-full px-5 py-3 rounded-lg bg-gradient-to-r ${style} text-white font-medium shadow-md`}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex-1 text-center">
                  {href.includes("resume")
                    ? "Download Resume"
                    : href.includes("github")
                    ? "View GitHub Profile"
                    : "Connect on LinkedIn"}
                </span>
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10">
                  {href.includes("resume") ? (
                    <FaDownload size={18} />
                  ) : href.includes("github") ? (
                    <FaGithub size={18} />
                  ) : (
                    <FaLinkedin size={18} />
                  )}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinks;
