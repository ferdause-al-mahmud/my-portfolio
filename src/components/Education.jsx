"use client";

import { motion } from "framer-motion";
import { FaBook, FaFlask, FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";

const educationData = [
  {
    id: 1,
    degree: "BSc in Computer Science and Engineering",
    institution: "Shanto-Mariam University of Creative Technology (SMUCT)",
    duration: "2022 - Ongoing",
    description:
      "Focused on software development, algorithms, and systems design",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    degree: "HSC in Science",
    institution: "Mollartek Udayan School and College",
    duration: "2019 - 2021",
    description: "Concentrated on Physics, Chemistry, Mathematics, and Biology",
    icon: FaFlask,
  },
  {
    id: 3,
    degree: "SSC in Science",
    institution: "Mollartek Udayan School and College",
    duration: "2017 - 2019",
    icon: FaBook,
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="education"
          title="Academic journey"
          subtitle="My qualifications and the foundations behind my work."
        />

        <div className="relative">
          {/* Timeline line with a light running down it */}
          <div
            className="beam-v absolute top-0 bottom-0 left-5 w-px bg-linear-to-b from-cyan-400/60 via-blue-500/40 to-transparent md:left-1/2"
            style={{ "--duration": "4s" }}
            aria-hidden="true"
          />

          <ol>
            {educationData.map((entry, index) => {
              const Icon = entry.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={entry.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative mb-10 pl-16 last:mb-0 md:flex md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <span className="absolute top-6 left-5 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-cyan-400/40 bg-ink text-cyan-300 shadow-[0_0_20px_-2px] shadow-cyan-400/50 md:left-1/2">
                    <Icon size={16} />
                  </span>

                  <div
                    className={`md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:text-right" : ""
                    }`}
                  >
                    <div className="group rounded-2xl border border-white/10 bg-surface/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
                      <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                        {entry.duration}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
                        {entry.degree}
                      </h3>
                      <p className="mt-1 font-medium text-slate-300">
                        {entry.institution}
                      </p>
                      {entry.description && (
                        <p className="mt-3 text-slate-400">
                          {entry.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Education;
