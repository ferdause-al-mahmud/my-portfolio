"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

// All technologies with priority levels (1 highest, 3 lowest) and a brand glow color.
// `core` marks the main stack, shown as larger highlighted tiles.
const techs = [
  {
    id: 5,
    src: "/nextjs.png",
    title: "Next.js",
    color: "#e2e8f0",
    priority: 1,
    core: "App Router, SSR/SSG and SEO-friendly full-stack apps",
  },
  {
    id: 2,
    src: "/ts.png",
    title: "TypeScript",
    color: "#3b82f6",
    priority: 1,
    core: "Type-safe code end to end, from API models to UI",
  },
  { id: 3, src: "/react.png", title: "React", color: "#38bdf8", priority: 1 },
  {
    id: 1,
    src: "/javascript.png",
    title: "JavaScript",
    color: "#facc15",
    priority: 1,
  },
  { id: 4, src: "/redux.png", title: "Redux", color: "#a855f7", priority: 1 },
  {
    id: 6,
    src: "/tailwind.png",
    title: "Tailwind",
    color: "#22d3ee",
    priority: 2,
  },
  { id: 7, src: "/html.png", title: "HTML", color: "#f97316", priority: 2 },
  { id: 8, src: "/css.png", title: "CSS", color: "#2563eb", priority: 2 },
  {
    id: 9,
    src: "/graphql.png",
    title: "GraphQL",
    color: "#ec4899",
    priority: 2,
  },
  {
    id: 10,
    src: "/mongoose.png",
    title: "Mongoose",
    color: "#22c55e",
    priority: 3,
  },
  {
    id: 11,
    src: "/github.png",
    title: "GitHub",
    color: "#94a3b8",
    priority: 3,
  },
];

const categories = ["All", "Primary", "Secondary", "Supporting"];

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredTechs =
    activeCategory === 0
      ? techs
      : techs.filter((tech) => tech.priority === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="skills"
          title="Technologies I work with"
          subtitle="Next.js and TypeScript are my core stack, backed by the tools I've mastered throughout my development journey."
        />

        {/* Category filter */}
        <div
          className="mb-10 inline-flex flex-wrap gap-1 rounded-2xl border border-white/10 bg-surface/80 p-1.5"
          role="tablist"
          aria-label="Filter technologies"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === index}
              onClick={() => setActiveCategory(index)}
              className={`relative isolate rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeCategory === index
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === index && (
                <motion.span
                  layoutId="skillsTab"
                  className="absolute inset-0 -z-10 rounded-xl bg-linear-to-r from-cyan-500/80 to-blue-600/80"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        <motion.ul
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map(({ id, src, title, color, core }) =>
              core ? (
                // Core stack: wide tile with a light running around its border
                <motion.li
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  style={{ "--glow": color, "--beam-width": "2px" }}
                  className="beam-border group col-span-2 flex items-center gap-5 rounded-2xl border border-white/10 bg-linear-to-br from-surface-2 to-surface p-6 transition-shadow duration-300 hover:shadow-[0_10px_40px_-12px_var(--glow)] sm:col-span-3 sm:gap-6 lg:col-span-2"
                >
                  <Image
                    src={src}
                    alt=""
                    width={80}
                    height={80}
                    className="h-16 w-16 shrink-0 object-contain transition-transform duration-700 group-hover:rotate-360 sm:h-20 sm:w-20"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-display text-xl font-bold text-white sm:text-2xl">
                        {title}
                      </p>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300">
                        core stack
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-slate-400 sm:text-base">
                      {core}
                    </p>
                  </div>
                </motion.li>
              ) : (
                <motion.li
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  style={{ "--glow": color }}
                  className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-6 transition-[border-color,box-shadow] duration-300 hover:border-(--glow)/50 hover:shadow-[0_10px_40px_-12px_var(--glow)]"
                >
                  <span className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-(--glow) opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <Image
                    src={src}
                    alt=""
                    width={64}
                    height={64}
                    className="relative h-14 w-14 object-contain transition-transform duration-700 group-hover:rotate-360 sm:h-16 sm:w-16"
                  />
                  <p className="relative mt-4 font-medium text-slate-200">
                    {title}
                  </p>
                </motion.li>
              ),
            )}
          </AnimatePresence>
        </motion.ul>
      </div>

      {/* Infinite marquee of all technologies */}
      <div
        className="group relative mt-20 overflow-hidden border-y border-white/5 bg-surface/40 py-6 mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...techs, ...techs].map(({ id, src, title }, index) => (
            <div
              key={`${id}-${index}`}
              className="flex items-center gap-3 pr-12 text-slate-400"
            >
              <Image
                src={src}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-medium whitespace-nowrap">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
