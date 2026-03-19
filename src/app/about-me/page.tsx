"use client";

import { motion, Variants } from "framer-motion";
import EnhancedSectionTitle from "../shared/EnhancedSectionTitle";
import { PageTitle } from "../shared/PageTitle";
import { Paragraph } from "../shared/Typography";
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

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const AboutModule = () => {
  return (
    <section className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorations (same as hero) */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle
            title={
              <>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  About
                </span>{" "}
                Me
              </>
            }
            paragraph="I craft digital experiences that are not only visually stunning but also intuitively functional. With a passion for frontend development, I transform complex ideas into responsive, performant, and engaging web applications – one pixel at a time."
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
          <EnhancedSectionTitle title="My Story">
            <div className="mt-6 prose prose-lg max-w-none text-gray-700">
              <MyStory />
            </div>
          </EnhancedSectionTitle>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
          <EnhancedSectionTitle title="Skills">
            <div className="mt-10 space-y-12">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent inline-block">
                    {skillGroup.title}
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    className="flex flex-wrap gap-3"
                  >
                    {skillGroup.list.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={skillItemVariant}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <Paragraph className="relative px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                          {item}
                        </Paragraph>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </EnhancedSectionTitle>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutModule;
