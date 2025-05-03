import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";

const About = () => {
  const skillsRef = useRef(null);
  const skillsControls = useAnimation();

  // Professional skills with proficiency levels
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Express.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Redux", level: 70 },
    { name: "TypeScript", level: 65 },
    { name: "Next.js", level: 70 },
    { name: "Git/GitHub", level: 85 },
  ];

  // Personal traits that define you
  const traits = [
    "Problem Solver",
    "Team Player",
    "Fast Learner",
    "Detail-Oriented",
    "Creative Thinker",
  ];

  // Use Intersection Observer to detect when the skills section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsControls.start("visible");
        }
      },
      { threshold: 0.1 } // Lower threshold for mobile devices
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsControls]);

  return (
    <div
      id="about"
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-16"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About Me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 h-full">
              <div className="h-16 mb-4">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Frontend Specialist",
                      "JavaScript Enthusiast",
                      "UI/UX Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-2xl font-bold text-cyan-400",
                    cursorClassName: "text-2xl text-cyan-400",
                  }}
                />
              </div>

              <p className="text-lg leading-relaxed text-gray-300">
                Hello there! I&apos;m{" "}
                <span className="text-cyan-500 font-semibold">
                  Ferdause AL Mahmud
                </span>
                , a passionate and ambitious MERN Stack Developer eager to
                embark on a journey in the dynamic world of web development.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-gray-300">
                My love for coding and problem-solving led me to specialize in
                the MERN (MongoDB, Express.js, React.js, Node.js) stack, where
                I&apos;ve honed my skills in crafting robust and scalable web
                applications. I thrive in collaborative environments and am
                always excited to contribute innovative solutions to complex
                challenges.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-gray-300">
                In addition to my technical skills, I possess excellent
                communication and teamwork abilities. I am adept at translating
                complex technical concepts into user-friendly language,
                fostering effective collaboration between developers, designers,
                and stakeholders.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  I am...
                </h3>
                <div className="flex flex-wrap gap-2">
                  {traits.map((trait, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-300 border border-cyan-500/30 text-sm"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Technical Proficiency
            </h3>

            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-cyan-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={skillsControls}
                      variants={{
                        visible: {
                          width: `${skill.level}%`,
                          transition: {
                            duration: 1,
                            delay: 0.1 * index,
                            ease: "easeOut",
                          },
                        },
                        hidden: { width: 0 },
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-gray-700"
              initial={{ opacity: 0 }}
              animate={skillsControls}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { delay: 1 },
                },
                hidden: { opacity: 0 },
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Always Learning
              </h3>
              <p className="text-gray-300">
                I&apos;m a quick learner, always staying abreast of the latest
                industry trends and technologies to stay ahead of the curve.
                Currently exploring:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["GraphQL", "AWS", "Docker", "Three.js", "Testing"].map(
                  (tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={skillsControls}
                      variants={{
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: 1.2 + index * 0.1 },
                        },
                        hidden: { opacity: 0, y: 10 },
                      }}
                      className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-300 text-sm border border-blue-500/30"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
