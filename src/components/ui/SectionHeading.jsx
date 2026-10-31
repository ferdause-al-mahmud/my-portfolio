"use client";

import { motion } from "framer-motion";

const SectionHeading = ({ index, eyebrow, title, subtitle }) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="font-mono text-sm text-cyan-400">
        <span className="text-slate-500">{index}.</span> {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>
      <div className="light-line mt-4 h-px w-40 bg-linear-to-r from-cyan-400/70 to-transparent" />
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
