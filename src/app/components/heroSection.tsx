"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageButton, ResumeButton } from "../shared/Button";
import { Paragraph } from "../shared/Typography";

// Typewriter component (unchanged, but we'll keep it)
interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter = ({ text, speed = 100, className = "" }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className={`text-xl md:text-2xl font-medium ${className}`}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </h1>
  );
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -5 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.4 },
  },
};

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white px-6 mb-16 py-12 md:px-12 lg:px-24">
      {/* Abstract background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column – text content */}
          <motion.div variants={itemVariants} className="flex-1">
            <Typewriter
              text="Hello 👋, I'm Stanley Duye"
              className="text-gray-700 mb-4"
            />

            <div className="mb-6">
              <div className="flex flex-wrap items-baseline">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none">
                  Front
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none ml-2">
                  end
                </h1>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mt-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Engineer
              </h1>
            </div>

            <motion.div variants={itemVariants}>
              <Paragraph className="max-w-xl text-gray-600 leading-relaxed mb-8">
                Whether you’re launching your first big idea or revamping a
                legacy giant,{" "}
                <span className="font-semibold text-gray-900">
                  launching your first big idea
                </span>{" "}
                or{" "}
                <span className="font-semibold text-gray-900">
                  revamping a legacy giant
                </span>
                , I’ll help you craft experiences that users love—clean code,
                smooth interactions, and a whole lot of 💚
              </Paragraph>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <MessageButton
                title="Get in touch"
                action={() => router.push("/contact")}
              />
              <ResumeButton />
            </motion.div>
          </motion.div>

          {/* Right column – profile image with floating effect */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <Image
                  src="/Images/hero-image.jpg"
                  alt="Stanley Duye"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative floating dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-4 w-8 h-8 bg-blue-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
