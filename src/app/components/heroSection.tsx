"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { MessageButton, ResumeButton } from "../shared/Button";
import { Paragraph } from "../shared/Typography";
import { useEffect, useState } from "react";

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
    <h1 className={`text-[1rem] md:text-[1.5rem] font-medium ${className}`}>
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

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between justify-start items-start mt-0 xl:mt-10 py-10 gap-15 md:gap-0 ">
      <div className="flex flex-col lg:basis-1/2 w-full justify-center text-[#37373C]  mb-20 lg:mb-0">
        <Typewriter text="Hi, I'm Olamilekan Akanni" className="text-[#222]" />

        <div className="flex flex-col text-[#222] my-3">
          <div className="flex items-center">
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold text-[#6e06f2] leading-none">
              Front
            </h1>
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold leading-none">
              end
            </h1>
          </div>
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] xl:text-[6.25rem] font-bold leading-none">
            Engineer
          </h1>
        </div>

        <Paragraph>
          I’m a software engineer with a strong specialization in{" "}
          <b>frontend software development,</b> creating responsive and
          user-friendly websites and applications
        </Paragraph>

        <div className="flex gap-4 items-center mt-5 md:mt-8">
          <MessageButton
            title="Get In Touch"
            action={() => router.push("/contact")}
          />
          <ResumeButton />
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end lg:basis-1/2 w-full md:w-1/2 my-10 md:my-0 self-center ">
        <div className="rounded-full bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 p-[2px] shadow-md">
          <div className="relative flex justify-center items-center p-5 md:p-8 xl:p-10 rounded-full bg-white shadow-md ">
            <Image
              src="/Images/hero-image.jpg"
              alt="hero-image"
              width={300}
              height={300}
              className="rounded-full object-cover w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
