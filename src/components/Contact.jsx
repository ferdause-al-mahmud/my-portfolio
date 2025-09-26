import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

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
        "b7eF2lnrl6DL8oi8b" // only public key
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingIconVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-16"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <motion.div
          className="pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="text-5xl font-bold inline border-b-4 border-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Me
          </h2>
          <p className="py-6 text-gray-300 text-lg max-w-md">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            className="md:col-span-3 order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-xl shadow-lg shadow-cyan-500/10 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                Send a Message
              </h3>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
              >
                <motion.div className="relative" variants={itemVariants}>
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 pl-10 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none transition-all duration-300 focus:shadow-md focus:shadow-cyan-500/20"
                  />
                </motion.div>

                <motion.div className="relative" variants={itemVariants}>
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 pl-10 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none transition-all duration-300 focus:shadow-md focus:shadow-cyan-500/20"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full p-3 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none transition-all duration-300 focus:shadow-md focus:shadow-cyan-500/20"
                  ></textarea>
                </motion.div>

                <motion.div
                  className="flex justify-end mt-2"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-cyan-500/20 ${
                      sending
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:shadow-xl hover:shadow-cyan-500/30"
                    }`}
                  >
                    <motion.span
                      animate={{
                        opacity: sending ? [1, 0, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: sending ? Infinity : 0,
                      }}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </motion.span>
                    <FaPaperPlane
                      className={`${sending ? "animate-bounce" : ""}`}
                    />

                    {/* Background animation effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="md:col-span-2 order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg shadow-cyan-500/10 mb-6 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-6">
                I&apos;m available for freelance work, interesting projects, and
                new opportunities.
              </p>

              <motion.div
                variants={floatingIconVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-4"
              >
                <a
                  href="https://wa.me/+8801944843541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-5 py-3 rounded-xl hover:scale-105 duration-300 transform shadow-md"
                >
                  <div className="bg-white/20 p-2 rounded-lg">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg shadow-cyan-500/10 border border-gray-700"
            >
              <h3 className="text-xl font-medium mb-3 text-gray-200">
                Why Contact Me?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Full-stack web development with MERN (MongoDB, Express, React,
                  Node.js)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  TypeScript-first development with Next.js and Mongoose
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Scalable and maintainable code architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Modern, responsive UI using React and Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Optimized performance, SEO, and best practices
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
