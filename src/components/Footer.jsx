import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Contact information
  const contactInfo = {
    email: "ferdausemahmud@gmail.com",
    location: "Dhaka, Bangladesh",
  };

  // Social media links
  const socialLinks = [
    {
      name: "YouTube",
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/ferdause-al-mahmud/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/ferdause-al-mahmud",
    },
    {
      name: "Twitter",
      icon: <FaFacebook className="w-6 h-6" />,
      url: "https://www.facebook.com/gamer.poka",
    },
  ];

  // Key skills to highlight
  const keySkills = ["JavaScript", "React.js", "Node.js", "MongoDB", "Next.js"];

  return (
    <footer className="bg-gradient-to-br from-black via-black to-cyan-900 text-white py-12 px-4">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-cyan-400"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ferdause AL Mahmud
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Passionate MERN Stack Developer crafting innovative web solutions
            with a focus on performance and user experience.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills and Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-cyan-400">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {keySkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-300 text-sm border border-cyan-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-cyan-400">
              Get in Touch
            </h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <FaEnvelope className="w-5 h-5 text-cyan-400" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </div>
            <p className="text-gray-300">{contactInfo.location}</p>
          </div>
        </motion.div>

        {/* Navigation and Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-cyan-400">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            {["Home", "About", "Projects", "Contact"].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
          <p className="text-gray-400 text-sm">
            Copyright © {currentYear} Ferdause AL Mahmud. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
