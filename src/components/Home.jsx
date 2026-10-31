"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si";
import SocialLinks from "./SocialLinks";
import Typewriter from "./ui/Typewriter";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/hooks/useSectionNav";

const roles = [
  "Next.js & TypeScript Developer",
  "Full-Stack MERN Developer",
  "Type-safe API Builder",
  "React & UI/UX Enthusiast",
];

const floatingBadges = [
  {
    icon: SiNextdotjs,
    label: "Next.js",
    color: "text-white",
    position: "-left-6 top-10 sm:-left-12",
    delay: "0s",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    color: "text-blue-500",
    position: "-right-4 top-1/3 sm:-right-10",
    delay: "1.5s",
  },
  {
    icon: SiNodedotjs,
    label: "Node.js",
    color: "text-green-500",
    position: "-left-4 bottom-20 sm:-left-10",
    delay: "3s",
  },
];

// Staggered entrance in plain CSS, so the server-rendered hero is visible
// and animating before any JavaScript has loaded
const enter = (step) => ({ animationDelay: `${0.2 + step * 0.12}s` });

const Home = () => {
  const sectionRef = useRef(null);

  // Drives the spotlight that follows the cursor, without re-rendering
  const handlePointerMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-20"
    >
      {/* Background: aurora glows and cursor spotlight (the running-light grid is page-wide, see RunningLights) */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,70%)_var(--y,40%),rgb(34_211_238/0.08),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div
            style={enter(0)}
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-sm text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </div>

          <p
            style={enter(1)}
            className="mt-6 animate-fade-up font-mono text-cyan-400"
          >
            Hi there, I&apos;m
          </p>

          <h1
            style={enter(2)}
            className="mt-2 animate-fade-up font-display text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Ferdause AL{" "}
            <span className="text-gradient animate-gradient-x">Mahmud</span>
          </h1>

          <div
            style={enter(3)}
            className="mt-5 flex min-h-[2.5rem] animate-fade-up items-center font-mono text-xl text-slate-300 sm:text-2xl"
          >
            <span className="mr-3 text-cyan-400">&gt;</span>
            <Typewriter words={roles} className="text-white" />
          </div>

          <p
            style={enter(4)}
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-400"
          >
            I have 2 years of experience building and designing software. I
            specialize in{" "}
            <span className="font-medium text-white">Next.js</span> and{" "}
            <span className="font-medium text-white">TypeScript</span>, crafting
            type-safe, SEO-friendly web applications that are robust, scalable
            and delightful to use.
          </p>

          <div
            style={enter(5)}
            className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/40"
            >
              View My Work
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <FaDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>

          <div
            style={enter(6)}
            className="mt-10 flex animate-fade-up items-center gap-5"
          >
            <span className="text-sm text-slate-500">Find me on</span>
            <span className="h-px w-10 bg-slate-700" />
            <SocialLinks limit={3} />
          </div>
        </div>

        {/* Portrait with a light running around its frame */}
        <div
          className="relative mx-auto w-full max-w-[19rem] animate-fade-scale sm:max-w-[22rem]"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="absolute -inset-8 animate-glow rounded-[3rem] bg-linear-to-tr from-cyan-500/30 via-sky-500/10 to-blue-600/30 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="beam-border relative rounded-[2rem] bg-white/10 p-[3px]"
            style={{ "--beam-width": "3px", "--beam-speed": "5s" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-3px)] bg-surface">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 640px) 22rem, 19rem"
                loading="eager"
                fetchPriority="high"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink via-ink/60 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-display font-semibold text-white">
                    {profile.shortName}
                  </p>
                  <p className="text-xs text-slate-400">Next.js · TypeScript</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-cyan-300">
                  <FaMapMarkerAlt />
                  Dhaka, BD
                </span>
              </div>
            </div>
          </div>

          {floatingBadges.map(
            ({ icon: Icon, label, color, position, delay }) => (
              <div
                key={label}
                className={`absolute ${position} flex animate-float items-center gap-2 rounded-xl border border-white/10 bg-surface/80 px-3 py-2 text-sm font-medium text-slate-200 shadow-xl shadow-black/40 backdrop-blur-md`}
                style={{ animationDelay: delay }}
                aria-hidden="true"
              >
                <Icon className={color} size={18} />
                {label}
              </div>
            ),
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600 pt-2 transition-colors hover:border-cyan-400">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-cyan-400" />
        </span>
      </button>
    </section>
  );
};

export default Home;
