"use client";

import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { profile, sections } from "@/data/profile";
import { useSectionNav } from "@/hooks/useSectionNav";

// Key skills to highlight
const keySkills = ["Next.js", "TypeScript", "React.js", "Node.js", "MongoDB"];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const goTo = useSectionNav();

  return (
    <footer className="relative border-t border-white/5 bg-surface/40">
      <div className="light-line absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand and About */}
        <div className="space-y-4">
          <p className="font-mono text-xl font-semibold text-white">
            <span className="text-cyan-400">&lt;</span>
            mahmud
            <span className="text-cyan-400">.dev /&gt;</span>
          </p>
          <p className="max-w-sm leading-relaxed text-slate-400">
            Next.js & TypeScript developer crafting innovative web solutions
            with a focus on performance and user experience.
          </p>
          <div className="flex flex-wrap gap-2">
            {keySkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <h3 className="font-display font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {sections.map((link) => (
              <li key={link}>
                <Link
                  href={`/#${link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link);
                  }}
                  className="capitalize text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display font-semibold text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-slate-400">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition-colors hover:text-cyan-300"
              >
                <FaEnvelope className="text-cyan-400" />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              {profile.location}
            </li>
          </ul>
          <SocialLinks className="mt-5" />
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
