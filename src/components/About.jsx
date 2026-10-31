"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Counter from "./ui/Counter";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

// Professional skills with proficiency levels
const skills = [
  { name: "Next.js", level: 70 },
  { name: "TypeScript", level: 65 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Redux", level: 70 },
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

const exploring = ["GraphQL", "AWS", "Docker", "Three.js", "Testing"];

const stats = [
  { value: 2, suffix: "+", label: "Years of experience" },
  {
    value: projects.filter((project) => project.solo).length,
    suffix: "",
    label: "E-commerce stores built solo",
  },
  { value: 11, suffix: "+", label: "Technologies" },
];

const card =
  "rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-xl shadow-black/20 backdrop-blur sm:p-8";

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="about me"
          title="Turning ideas into reliable products"
          subtitle="A quick look at who I am, how I work and the tools I use every day."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`${card} flex flex-col`}
          >
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                Hello there! I&apos;m{" "}
                <span className="font-semibold text-cyan-400">
                  {profile.name}
                </span>
                , a passionate full-stack developer who builds modern web
                applications with{" "}
                <span className="font-semibold text-white">Next.js</span> and{" "}
                <span className="font-semibold text-white">TypeScript</span>.
              </p>
              <p>
                I take a TypeScript-first approach: Next.js on the front end for
                fast, SEO-friendly pages, backed by Node.js, Express and MongoDB
                from the MERN stack. Type safety from the database to the UI
                lets me ship robust, scalable applications with confidence. I
                thrive in collaborative environments and am always excited to
                contribute innovative solutions to complex challenges.
              </p>
              <p>
                Beyond the code, I communicate clearly and translate complex
                technical concepts into user-friendly language, fostering
                effective collaboration between developers, designers, and
                stakeholders.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 font-mono text-sm text-cyan-400">I am...</h3>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>

            <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map(({ value, suffix, label }) => (
                <div key={label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {label}
                  </dt>
                  <dd className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                    <Counter value={value} suffix={suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className={card}
          >
            <h3 className="mb-6 font-display text-2xl font-semibold text-white">
              Technical Proficiency
            </h3>

            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={skill.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-white/5"
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.div
                      className="light-line h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.08 * index,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Always Learning
              </h3>
              <p className="mt-2 text-slate-400">
                I keep up with industry trends and technologies to stay ahead of
                the curve. Currently exploring:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exploring.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-sm text-blue-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
