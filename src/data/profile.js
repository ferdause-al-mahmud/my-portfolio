import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const profile = {
  name: "Ferdause AL Mahmud",
  title: "Next.js & TypeScript Developer",
  siteUrl: "https://mahmud-dev.netlify.app",
  description:
    "Portfolio of Ferdause AL Mahmud, a Next.js & TypeScript developer building fast, type-safe web applications and e-commerce stores with React, Node.js and MongoDB.",
  shortName: "Mahmud",
  email: "ferdausemahmud@gmail.com",
  location: "Dhaka, Bangladesh",
  whatsapp: "https://wa.me/+8801944843541",
  whatsappNumber: "+880 1944-843541",
  resume: "/mahmud_mern_resume.pdf",
  photo: "/myImage.jpg",
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/ferdause-al-mahmud",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ferdause-al-mahmud",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/gamer.poka",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/+8801944843541",
    // Brand color so WhatsApp always stands out
    color: "#25D366",
  },
];

export const sections = [
  "home",
  "about",
  "experience",
  "skills",
  "portfolio",
  "education",
  "contact",
];
