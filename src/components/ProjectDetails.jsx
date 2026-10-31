import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { projects } from "@/data/projects";

// Staggered CSS entrance (works before hydration, so the page is never blank)
const fadeUp = (step) => ({
  className: "animate-fade-up",
  style: { animationDelay: `${step * 0.1}s` },
});

// Server-rendered: this page ships no JavaScript of its own
const ProjectDetails = ({ project, index }) => {
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const counter = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/#portfolio"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <header {...fadeUp(0)}>
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-cyan-400">
              project {counter(index + 1)} / {counter(projects.length)}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold text-white md:text-6xl">
              {project.projectName}
            </h1>
            <p className="mt-4 text-xl text-slate-400">{project.description}</p>
          </div>
        </header>

        {/* Project Image */}
        <div
          className="beam-border mt-10 animate-fade-up rounded-2xl border border-white/10 bg-surface p-2 shadow-2xl shadow-cyan-500/10"
          style={{
            animationDelay: "0.1s",
            "--beam-width": "2px",
            "--beam-speed": "6s",
          }}
        >
          <Image
            src={project.src}
            alt={`${project.projectName} screenshot`}
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1152px) 1104px, calc(100vw - 3rem)"
            className="h-auto w-full rounded-xl"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div className="space-y-10">
            <div {...fadeUp(2)}>
              <h2 className="font-display text-2xl font-bold text-white">
                About This Project
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                {project.longDescription}
              </p>
            </div>

            <div {...fadeUp(3)}>
              <h2 className="font-display text-2xl font-bold text-white">
                Key Features
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-surface/60 p-4 text-slate-300"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div {...fadeUp(4)}>
              <h2 className="font-display text-2xl font-bold text-white">
                Challenges & Solutions
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside
            className="animate-fade-up lg:sticky lg:top-28 lg:self-start"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6">
              {project.role && (
                <div className="mb-6 border-b border-white/10 pb-6">
                  <h2 className="font-mono text-sm text-cyan-400">My Role</h2>
                  <p className="mt-3 flex items-center gap-2 font-medium text-white">
                    <FaBriefcase className="text-cyan-400" />
                    {project.role}
                  </p>
                  {project.company && (
                    <p className="mt-1 text-sm text-slate-400">
                      at{" "}
                      {project.companyUrl ? (
                        <a
                          href={project.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-200 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300"
                        >
                          {project.company}
                        </a>
                      ) : (
                        project.company
                      )}
                    </p>
                  )}
                  {project.solo && (
                    <p className="mt-3 text-sm text-emerald-300">
                      Designed and built solo, end to end.
                    </p>
                  )}
                </div>
              )}
              <h2 className="font-mono text-sm text-cyan-400">
                Technologies Used
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-sm text-cyan-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20"
                >
                  View Live Demo <FaExternalLinkAlt size={13} />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <FaGithub /> View Source Code
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / next project */}
        <nav
          aria-label="More projects"
          className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2"
        >
          <Link
            href={`/project/${previous.id}`}
            className="group rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-cyan-400/40"
          >
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Previous
            </span>
            <span className="mt-1 block font-display text-lg font-semibold text-white group-hover:text-cyan-300">
              {previous.projectName}
            </span>
          </Link>
          <Link
            href={`/project/${next.id}`}
            className="group rounded-2xl border border-white/10 bg-surface/60 p-5 text-right transition-colors hover:border-cyan-400/40"
          >
            <span className="flex items-center justify-end gap-2 text-sm text-slate-500">
              Next
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1 block font-display text-lg font-semibold text-white group-hover:text-cyan-300">
              {next.projectName}
            </span>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default ProjectDetails;
