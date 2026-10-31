"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./ui/SectionHeading";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: profile.location,
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-400/60 focus:shadow-[0_0_0_4px] focus:shadow-cyan-400/10 focus:outline-none";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        "service_8905rnv",
        "template_7x08lqo",
        form.current,
        { publicKey: "b7eF2lnrl6DL8oi8b" }, // only public key
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          eyebrow="contact"
          title="Let's build something together"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-4 lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* WhatsApp: the primary way to get in touch */}
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="beam-border group relative rounded-2xl border border-[#25D366]/30 bg-linear-to-br from-[#25D366]/15 via-surface/90 to-surface/90 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:shadow-[0_10px_40px_-12px_#25D366]"
              style={{
                "--beam-speed": "5s",
                "--beam-width": "2px",
                "--beam-from": "#25D366",
                "--beam-to": "#a7f3d0",
              }}
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#25D366]/20 blur-3xl" />
              </span>
              <div className="relative flex items-center gap-4">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute -inset-1 animate-pulse-ring rounded-[1.25rem] border-2 border-[#25D366]" />
                  <FaWhatsapp size={30} className="relative" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-sm font-medium text-[#25D366]">
                    WhatsApp
                    <span className="rounded-full bg-[#25D366]/15 px-2 py-0.5 text-[11px]">
                      Quickest reply
                    </span>
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-semibold text-white">
                    {profile.whatsappNumber}
                  </span>
                </span>
              </div>
              <span className="btn-shine relative mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-[#05230f] shadow-lg shadow-[#25D366]/25 transition-colors group-hover:bg-[#2ee877]">
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </span>
            </a>

            {contactMethods.map(
              ({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-slate-500">
                        {label}
                      </span>
                      <span className="block truncate font-medium text-slate-200 transition-colors group-hover:text-cyan-300">
                        {value}
                      </span>
                    </span>
                  </>
                );
                const cardClass =
                  "group flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/80 p-5 transition-all duration-300";

                return href ? (
                  <a
                    key={label}
                    href={href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={`${cardClass} beam-border beam-on-hover hover:-translate-y-0.5`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className={cardClass}>
                    {content}
                  </div>
                );
              },
            )}

            <div className="rounded-2xl border border-white/10 bg-surface/80 p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Why work with me?
              </h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {[
                  "TypeScript-first development with Next.js",
                  "Full-stack apps with Node.js, Express and MongoDB",
                  "Modern, responsive UI with React and Tailwind CSS",
                  "Optimized performance, SEO, and best practices",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-0.5 text-cyan-400">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <SocialLinks className="mt-6" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="beam-border flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-2xl shadow-black/30 sm:p-8"
              style={{ "--beam-speed": "8s" }}
            >
              <h3 className="font-display text-2xl font-semibold text-white">
                Send a message
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </span>
                  <input
                    type="text"
                    name="from_name"
                    required
                    autoComplete="name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </span>
                  <input
                    type="email"
                    name="from_email"
                    required
                    autoComplete="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="flex flex-1 flex-col">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project..."
                  className={`${inputClass} flex-1 resize-none`}
                />
              </label>

              <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#25D366]"
                >
                  Prefer chatting?
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#25D366]">
                    <FaWhatsapp size={16} /> WhatsApp me
                  </span>
                </a>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={sending ? undefined : { scale: 1.02 }}
                  whileTap={sending ? undefined : { scale: 0.98 }}
                  className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl sm:w-auto bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-cyan-500/25 transition-shadow hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
