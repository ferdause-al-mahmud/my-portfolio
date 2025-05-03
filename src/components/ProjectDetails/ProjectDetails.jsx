"use client";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PetzAdopt from "/portfolio/project-1.png";
import StudyBuddy from "/portfolio/project-2.png";
import CraftXtore from "/portfolio/project-3.png";
import ClassyTouch from "../../assets/image.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Project data (in a real app, this might come from an API or context)
  const portfolioData = [
    {
      id: "4",
      src: ClassyTouch,
      projectName: "Classy Touch",
      demo: "https://www.classytouchbd.com",
      description: "E-commerce platform for premium fashion products",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
      longDescription:
        "Classy Touch is a comprehensive e-commerce platform designed for premium fashion products. The application provides a seamless shopping experience with advanced filtering, user authentication, and secure payment processing. The responsive design ensures a consistent experience across all devices.",
      features: [
        "User authentication and profile management",
        "Product categorization and advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
      challenges:
        "Implementing a responsive design that maintains visual appeal across all devices while ensuring fast load times was a significant challenge. Additionally, integrating multiple payment gateways required careful attention to security protocols.",
      screenshots: [ClassyTouch],
    },
    {
      id: "1",
      src: PetzAdopt,
      projectName: "PetzAdopt",
      demo: "https://petzadopt-7acf4.web.app",
      code: "https://github.com/ferdause-al-mahmud/PetzAdopt",
      description: "Pet adoption platform connecting animals with loving homes",
      tech: ["React", "Node.js", "MongoDB", "Firebase Auth"],
      longDescription:
        "PetzAdopt is a comprehensive platform designed to connect animals in need with loving homes. The application streamlines the pet adoption process by providing detailed profiles of available pets, facilitating communication between shelters and potential adopters, and managing the adoption workflow.",
      features: [
        "User authentication and profile management",
        "Pet listing with detailed profiles and filtering options",
        "Adoption application submission and tracking",
        "Messaging system between adopters and shelters",
        "Donation system for supporting animal shelters",
        "Admin dashboard for shelter management",
      ],
      challenges:
        "Developing a real-time messaging system that works efficiently across different devices was challenging. Additionally, creating an intuitive user interface that appeals to both pet shelters and potential adopters required careful design considerations.",
      screenshots: [PetzAdopt],
    },
    {
      id: "2",
      src: StudyBuddy,
      projectName: "Study Buddy",
      demo: "https://assignment-hub-e4e39.web.app",
      code: "https://github.com/ferdause-al-mahmud/Assignment-Hub-client",
      description: "Collaborative learning platform for students",
      tech: ["React", "Express", "Node.js", "MongoDB", "Firebase Auth"],
      longDescription:
        "Study Buddy is a collaborative learning platform designed to help students connect, share resources, and work together on assignments. The application provides tools for creating study groups, sharing notes, and tracking academic progress.",
      features: [
        "User authentication and academic profile creation",
        "Study group formation and management",
        "Resource sharing and collaborative document editing",
        "Assignment tracking and deadline notifications",
        "Discussion forums for academic topics",
        "Progress tracking and analytics",
      ],
      challenges:
        "Implementing real-time collaborative features while maintaining performance was a significant technical challenge. Ensuring data security and privacy for academic information also required careful consideration of access controls and encryption.",
      screenshots: [StudyBuddy],
    },
    {
      id: "3",
      src: CraftXtore,
      projectName: "CraftXtore",
      demo: "https://craftxtore.web.app",
      code: "https://github.com/ferdause-al-mahmud/CraftXtore-client",
      description: "Marketplace for handcrafted and artisanal products",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Firebase Auth"],
      longDescription:
        "CraftXtore is a specialized marketplace connecting artisans and craftspeople with customers seeking unique, handcrafted products. The platform supports various craft categories, custom orders, and direct communication between buyers and sellers.",
      features: [
        "User authentication with separate artisan and customer profiles",
        "Product listing with detailed descriptions and customization options",
        "Advanced search and filtering by craft type, materials, and price",
        "Secure payment processing and order management",
        "Messaging system for custom order requests",
        "Artisan dashboard for inventory and order management",
      ],
      challenges:
        "Building a scalable system that could handle diverse product types and customization options was complex. Implementing a fair review system and ensuring quality control for handcrafted items also presented unique challenges.",
      screenshots: [CraftXtore],
    },
  ];

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = portfolioData.find((project) => project.id === id);

    if (foundProject) {
      setProject(foundProject);
    }

    setLoading(false);
  }, [id]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-300 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-medium transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Portfolio
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {project.projectName}
            </h1>
            <p className="text-xl text-gray-300">{project.description}</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20"
          >
            <img
              src={project.src || "/placeholder.svg"}
              alt={project.projectName}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Project Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-lg text-white font-medium flex items-center gap-2 transition-all"
            >
              <span>View Live Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </a>

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium flex items-center gap-2 transition-colors"
              >
                <span>View Source Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </a>
            )}
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400">
              About This Project
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400">Key Features</h2>
            <ul className="space-y-2 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400">
              Challenges & Solutions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
