"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Typewriter = ({
  text,
  speed = 100, // ms per character
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className={`inline-block font-bold text-2xl md:text-4xl ${className}`}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block"
      >
        |
      </motion.span>
    </h1>
  );
};

export default function Hero() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Typewriter text="Hello, I'm Stanley Duye" className="font-poppins" />
    </div>
  );
}
