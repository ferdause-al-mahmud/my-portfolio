"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaBriefcase,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "@/data/experience";

const WorkExperience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="experience"
          title="Where I've worked"
          subtitle="Real products, real users: the teams I build and maintain software for."
        />

        <ol className="space-y-8">
          {experience.map((job, index) => (
            <motion.li
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="beam-border beam-on-hover rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-xl shadow-black/20 sm:p-8"
              style={{ "--beam-width": "2px" }}
            >
              <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-10">
                {/* Company & dates */}
                <div className="flex items-start gap-4 md:flex-col">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <FaBriefcase size={18} />
                  </span>
                  <div>
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-display text-xl font-semibold text-white transition-colors hover:text-cyan-300"
                    >
                      {job.company}
                      <FaExternalLinkAlt
                        size={11}
                        className="text-slate-500 transition-colors group-hover:text-cyan-300"
                      />
                    </a>
                    <p className="mt-1 flex items-center gap-2 font-mono text-sm text-slate-400">
                      {job.start} — {job.end}
                      {job.end === "Present" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                      )}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <FaMapMarkerAlt size={12} />
                      {job.location}
                    </p>
                  </div>
                </div>

                {/* Role & contributions */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {job.role}
                    </h3>
                    <span
                      className={`rounded-full border px-3 py-0.5 text-xs font-medium ${
                        job.type === "Full-time"
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-blue-400/30 bg-blue-500/10 text-blue-300"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-300">{job.summary}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-slate-400">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px] shadow-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-2">
                      {job.tech.map((name) => (
                        <li
                          key={name}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 font-mono text-xs text-cyan-200"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/project/${job.projectId}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                    >
                      View {job.project}
                      <FaArrowRight
                        size={12}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkExperience;
