"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBriefcase,
  FaExternalLinkAlt,
  FaGithub,
  FaUser,
} from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "@/data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="portfolio"
          title="Selected projects"
          subtitle="Live e-commerce stores I designed and built solo, plus product work for clients and teams."
        />

        <motion.ul
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(
            ({
              id,
              src,
              demo,
              code,
              projectName,
              description,
              tech,
              featured,
              company,
              role,
              solo,
            }) => (
              <motion.li
                key={id}
                variants={item}
                whileHover={{ y: -6 }}
                className="beam-border beam-on-hover group flex flex-col rounded-2xl border border-white/10 bg-surface shadow-xl shadow-black/30"
                style={{ "--beam-width": "2px" }}
              >
                <Link
                  href={`/project/${id}`}
                  className="relative block overflow-hidden rounded-t-2xl"
                  aria-label={`${projectName} details`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={src}
                      alt={`${projectName} screenshot`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1152px) 540px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/10 to-transparent" />
                  {featured && (
                    <span className="absolute top-4 left-4 rounded-full border border-cyan-300/30 bg-ink/70 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur">
                      ★ Featured
                    </span>
                  )}
                  {solo && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-ink/70 px-3 py-1 font-mono text-xs text-emerald-300 backdrop-blur">
                      <FaUser size={10} /> Solo build
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  {role && (
                    <p className="mb-2 flex items-center gap-2 font-mono text-xs text-slate-400">
                      <FaBriefcase className="text-cyan-400" />
                      {role}
                      {company && ` · ${company}`}
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    <Link href={`/project/${id}`}>{projectName}</Link>
                  </h3>
                  <p className="mt-2 text-slate-400">{description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tech.map((name) => (
                      <li
                        key={name}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 font-mono text-xs text-cyan-200"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-shine inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                    {code && (
                      <a
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${projectName} source code`}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                    <Link
                      href={`/project/${id}`}
                      className="group/link ml-auto inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                    >
                      Details
                      <FaArrowRight
                        size={12}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.li>
            ),
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default Portfolio;
