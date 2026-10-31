"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/profile";

const SocialLinks = ({ limit = socialLinks.length, className = "" }) => {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.slice(0, limit).map(({ name, icon: Icon, url, color }) => (
        <li key={name}>
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            // Links with a brand color (e.g. WhatsApp) keep it at all times
            style={
              color && {
                color,
                borderColor: `${color}66`,
                backgroundColor: `${color}1a`,
              }
            }
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <Icon size={18} />
          </motion.a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
