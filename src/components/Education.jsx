import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc in Computer Science and Engineering",
      institution: "Shanto-Mariam University of Creative Technology (SMUCT)",
      duration: "2022 - Ongoing",
      description:
        "Focused on software development, algorithms, and systems design",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "HSC in Science",
      institution: "Mollartek Udayan School and College",
      duration: "2019 - 2021",
      description:
        "Concentrated on Physics, Chemistry, Mathematics, and Biology",
      icon: "🔬",
    },
    {
      id: 3,
      degree: "SSC in Science",
      institution: "Mollartek Udayan School and College",
      duration: "2017 - 2019",
      //   description:
      //     "Built strong foundations in scientific thinking and problem-solving",
      icon: "📚",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      name="education"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-12"
        >
          <p className="text-5xl font-bold inline bordcer-b-4 pb-1 border-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Education
          </p>
          <p className="pt-6 text-gray-300 text-lg">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          className="mt-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full hidden sm:block"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } mb-12 relative`}
            >
              {/* Timeline dot */}
              <div className="hidden sm:block absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 z-10 flex items-center justify-center text-xl">
                {item.icon}
              </div>

              {/* Timeline content */}
              <div
                className={`sm:w-5/12 ${
                  index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group border border-gray-700 hover:border-cyan-500/30">
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-cyan-400">{item.icon}</span>
                    <h4 className="text-lg font-medium text-gray-300">
                      {item.institution}
                    </h4>
                  </div>
                  <div className="bg-cyan-500/10 text-cyan-300 text-sm py-1 px-3 rounded-full inline-block mb-3">
                    {item.duration}
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
