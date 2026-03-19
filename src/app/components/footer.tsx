"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const socials = [
  {
    id: "Mail",
    icon: IoMdMail,
    link: "mailto:stanleyduye@gmail.com",
  },
  {
    id: "LinkedIn",
    icon: TbBrandLinkedinFilled,
    link: "https://linkedin.com/in/stanley-duye-892510118",
  },
  {
    id: "Github",
    icon: FaGithub,
    link: "https://github.com/stanleyduye",
  },
];

const FooterModule = () => {
  return (
    <footer className="relative mt-20 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      {/* Decorative background elements (matching other sections) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side: name with gradient and animated dot */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Stanley Duye
            </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="block w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
            />
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()}
            </span>
          </motion.div>

          {/* Social icons with hover animations */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socials.map((social) => {
              const isMail = social.id === "Mail";
              return (
                <motion.a
                  key={social.id}
                  href={social.link}
                  {...(!isMail && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  aria-label={`Stanley's ${social.id}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  {/* Gradient glow behind icon on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  <social.icon className="relative w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Optional small footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xs text-gray-400 mt-4"
        >
          Built with 💚 by Stanley Duye
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterModule;
