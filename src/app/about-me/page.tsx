"use client";

import { motion, Variants } from "framer-motion";

import EnhancedSectionTitle from "../shared/EnhancedSectionTitle";
import { PageTitle } from "../shared/PageTitle";
import { Paragraph } from "../shared/Typography";
import Banner from "./components/banner";
import MyStory from "./components/myStory";

const skills = [
  {
    title: "Technical Skills",
    list: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React.js",
      "Next.js",
      "Angular",
      "React Native",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "React Query",
      "Shadcn",
      "Styled-Components",
      "Sass/SCSS",
      "Bootstrap",
      "REST APIs",
      "JSON & Data Manipulation",
      "Code Optimization",
      "Caching Strategies",
      "Git/GitHub",
      "Responsiveness",
      "Basic Knowledge of Backend",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Golang",
      "PostgreSQL",
      "Ruby on Rails",
    ],
  },
  {
    title: "Low Code",
    list: ["Basic Knowledge of Bubble"],
  },
  {
    title: "Soft Skills",
    list: [
      "Problem-Solving & Debugging",
      "Effective Communication",
      "Leadership",
      "Commitment",
      "Collaboration",
      "Attention to Detail",
    ],
  },
];

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const AboutModule = () => {
  return (
    <div className="py-10 mt-0 xl:mt-10">
      <PageTitle
        title={
          <>
            <span className="text-[#6e06f2]">About</span> Me
          </>
        }
        paragraph="Crafting seamless and visually engaging user experiences is my passion. As a software engineer specialized in frontend development, I put my creativity and attention to detail into every project, turning ideas into responsive and functional websites and applications."
      />

      <Banner />

      <div className="flex flex-col my-20 gap-14 md:gap-24 lg:gap-28">
        <EnhancedSectionTitle title="My Story">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-2"
          >
            <MyStory />
          </motion.div>
        </EnhancedSectionTitle>

        <EnhancedSectionTitle title="Skills">
          <div className="flex flex-col gap-10 mt-5">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h3 className="text-[#222] leading-none text-[1.25rem] md:text-2xl">
                  {skillGroup.title}
                </motion.h3>

                <motion.div
                  variants={container}
                  className="flex flex-wrap items-center justify-start gap-2 mt-2"
                >
                  {skillGroup.list.map((item, idx) => (
                    <motion.div key={idx} variants={skillItemVariant}>
                      <Paragraph className="px-4 py-1 border-[1.5px] md:border-2 border-[#9498a0] rounded-3xl">
                        {item}
                      </Paragraph>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </EnhancedSectionTitle>
      </div>
    </div>
  );
};

export default AboutModule;
